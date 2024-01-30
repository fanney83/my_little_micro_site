import { Button } from '@/app/components/Button'

import { useState } from 'react'

type ListProps = {
  title: string
  subtitle: string
}

const entries: ListProps[] = [
  {
    title: 'Titill',
    subtitle: 'Undir titill',
  },
  {
    title: 'Titill 2',
    subtitle: 'Undir titill 2',
  },
  {
    title: 'Titill 3',
    subtitle: 'Undir titill 3',
  },
]

const Entities = () => {
  return (
    <div>
      <h1>Entities</h1>
      <Button />
      {entries.map(({ title, subtitle }: ListProps) => {
        return <div>{title}</div>
      })}
    </div>
  )
}

export default Entities
