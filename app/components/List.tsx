'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Icon from './Icon'
import { Button } from './Button'

export type ListProps = {
  title: string
  subtitle: string
  onClick?: () => void
}

export type IList = ListProps[]
type ActionsTypes = 'add-item' | 'find-item'

export default function List() {
  const [list, setList] = useState<IList>([])
  const [optionsVisible, setOptionsVisible] = useState(false)
  const [action, setAction] = useState({ state: 'add-item' })

  const removeItem = (item: ListProps) => {
    const temp: IList = list.filter((i) => {
      return i !== item
    })

    setList([...temp])
  }

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm()

  return (
    <div className="w-100 px-4 md:px-11 grid grid-cols-12 grid-flow-row lg:grid-flow-col gap-6">
      {action.state === 'find-item' && (
        <div className="col-start-6 col-end-10">
          <input
            className="border-2 text-black bold mr-4 p-2 rounded-xl "
            type="text"
            onChange={(e) => {
              list.some((str) => str.title.startsWith(e.target.value))
              setList([...list])
            }}
          />
        </div>
      )}
      {action.state === 'add-item' && (
        <div className="col-start-1  md:col-start-2 col-end-12 md:col-end-5">
          <form
            className="flex flex-col md:flex-row items-start h-100 pb-5"
            onSubmit={handleSubmit((data) => {
              setList([
                ...list,
                { title: data.title, subtitle: data.subtitle },
              ]),
                setFocus('title')
              reset()
            })}
          >
            <label className="min-h-24 flex flex-col w-100 ">
              Titill
              <input
                className="border-2 text-black bold mr-4 p-2 rounded-xl"
                {...register('title', { required: true })}
              />
              {errors.title?.type === 'required' && (
                <p className="text-red-400" role="alert">
                  Obb hér þarf titil
                </p>
              )}
            </label>

            <label className="min-h-24 flex flex-col">
              Texti
              <input
                className="border-2 text-black bold mr-4 p-2 rounded-xl "
                {...register('subtitle', { required: true })}
              />
              {errors.subtitle?.type === 'required' && (
                <p className="text-red-400" role="alert">
                  Obb hér þarf texta
                </p>
              )}
            </label>
            <Button className="w-100 text-sm" type="submit">
              Bæta við
            </Button>
          </form>
        </div>
      )}
      <div className="flex flex-col gap-4 col-start-1 md:col-start-2 xl:col-start-7 col-end-12">
        {list.length > 0 ? (
          list
            .sort((a, b) => {
              return a.subtitle < b.subtitle ? -1 : 1
            })
            .map((item: ListProps, key) => {
              return (
                <>
                  <ListItem
                    onClick={() => setOptionsVisible(!optionsVisible)}
                    key={key}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                  {optionsVisible && (
                    <div className="border-2 border-pink-500 h-44 bg-pink-100 rounded-lg flex flex-col md:flex-row items-center justify-evenly">
                      <div className="flex gap-4 w-100">
                        <span className="text-lg bg-[#F5FF78] px-2 rounded-md uppercase flex items-center">
                          {item.title[0]}
                        </span>
                        <div className="flex-5">
                          <p>Titill: {item.title}</p>
                          <p>Texti: {item.subtitle}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => removeItem(item)}
                        className="border border-pink-500 flex items-center"
                      >
                        Eyða úr lista
                        <Icon icon="Trash" />
                      </Button>
                    </div>
                  )}
                </>
              )
            })
        ) : (
          <div className="border-4 border-[#E6BDF4] bg-[#f0e4f5] p-4 rounded-xl">
            Hmmm ekki mikið hér
          </div>
        )}
      </div>
    </div>
  )
}

const ListItem = ({ title, subtitle, onClick }: ListProps) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 border-4 border-[#E6BDF4] bg-[#f0e4f5] p-4 rounded-xl"
    >
      <span className="text-lg bg-[#F5FF78] px-2 rounded-md uppercase mb-[auto]">
        {title[0]}
      </span>
      <div className="flex flex-col gap-4">
        <p className="text-md text-left">{title}</p>
        <p className="text-sm text-zinc-500 ">{subtitle}</p>
      </div>
    </button>
  )
}
