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
    formState: { errors },
  } = useForm()

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) =>
          setList([...list, { title: data.title, subtitle: data.subtitle }])
        )}
      >
        <input
          className="border-2 text-black bold mr-4 p-2 rounded-xl "
          {...register('title', { required: true })}
        />

        <input
          className="border-2 text-black bold mr-4 p-2 rounded-xl "
          {...register('subtitle')}
        />
        <button type="submit">Add entry</button>
      </form>
      <div className="flex flex-col gap-4 ">
        {list.map(({ title, subtitle }: ListProps, key) => {
          return (
            <div key={key} className="flex gap-2 ">
              <span className="text-lg bg-lime-300 px-2 ">{title[0]}</span>
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
