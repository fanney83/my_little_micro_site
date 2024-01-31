'use client'

import { useState } from 'react'

export type ListProps = {
  title: string
  subtitle: string
}

export type IList = ListProps[]

export default function List() {
  const [list, setList] = useState<IList>([])

  return (
    <div className="w-100 px-8 md:px-11 grid grid-cols grid-flow-row md:grid-flow-col gap-6">
      <div className="flex flex-col gap-4 ">
        {list.length > 0 ? (
          list
            .sort((a, b) => {
              return a.subtitle < b.subtitle ? -1 : 1
            })
            .map(({ title, subtitle }: ListProps, key) => {
              return <ListItem key={key} title={title} subtitle={subtitle} />
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

const ListItem = ({ title, subtitle }: ListProps) => {
  return (
    <div className="flex gap-2 border-4 border-[#E6BDF4] bg-[#f0e4f5] p-4 rounded-xl">
      <span className="text-lg bg-[#F5FF78] px-2 rounded-md uppercase mb-[auto]">
        {title[0]}
      </span>
      <div className="flex flex-col gap-4">
        <p className="text-md">{title}</p>
        <p className="text-sm text-zinc-500 ">{subtitle}</p>
      </div>
    </div>
  )
}
