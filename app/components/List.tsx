'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export type ListProps = {
  title: string
  subtitle: string
}

export type IList = ListProps[]

export default function List() {
  const [list, setList] = useState<IList>([])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  return (
    <div className="w-100 px-11">
      <form
        className="flex items-center h-100 pb-5"
        onSubmit={handleSubmit((data) => {
          setList([...list, { title: data.title, subtitle: data.subtitle }]),
            reset()
        })}
      >
        <label className="min-h-24">
          Titill
          <input
            className="border-2 text-black bold mr-4 p-2 rounded-xl "
            {...register('title', { required: true })}
          />
          {errors.title?.type === 'required' && (
            <p className="text-red-400" role="alert">
              Obb hér þarf titil
            </p>
          )}
        </label>

        <label className="min-h-24">
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

        <button className="w-100 text-sm " type="submit">
          Bæta við listann
        </button>
      </form>
      <div className="flex flex-col gap-4 ">
        {list.map(({ title, subtitle }: ListProps, key) => {
          return (
            <div key={key} className="flex gap-2 ">
              <span className="text-lg bg-[#86D800] px-2 rounded-md uppercase ">
                {title[0]}
              </span>
              <div className="flex items-end gap-4">
                <p className="text-md">{title}</p>
                <p className="text-sm">{subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
