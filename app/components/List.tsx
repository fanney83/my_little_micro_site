'use client'

import { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Icon from './Icon'

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
    <div className="w-100 px-8 md:px-11 grid grid-cols-12 grid-flow-row lg:grid-flow-col gap-6">
      {action.state === 'find-item' && (
        <input
          className="border-2 text-black bold mr-4 p-2 rounded-xl col-span-9"
          type="text"
          onChange={(e) => {
            list.some((str) => str.title.startsWith(e.target.value))
            setList([...list])
          }}
        />
      )}
      {action.state === 'add-item' && (
        <form
          className="col-span-12 md:col-span-6 flex flex-col md:flex-row items-start h-100 pb-5"
          onSubmit={handleSubmit((data) => {
            setList([...list, { title: data.title, subtitle: data.subtitle }]),
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
          <button className="w-100 text-sm " type="submit"></button>
        </form>
      )}
      <div className="flex flex-col gap-4 col-span-12 lg:col-span-6">
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
                    <div className="border-2 border-pink-500 h-44 bg-pink-100 rounded-lg">
                      <p>{item.title}</p>
                      <p>{item.subtitle}</p>
                      <button
                        className="flex items-center"
                        onClick={() => removeItem(item)}
                      >
                        Eyða úr lista
                        <Icon icon="Trash" />
                      </button>
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
