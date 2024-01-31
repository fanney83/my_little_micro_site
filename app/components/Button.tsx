'use client'

import cn from 'classnames'
import { ReactNode } from 'react'

type ButtonProps = {
  onClick?: () => void
  children: ReactNode
  className?: string
}

export const Button = ({
  onClick = () => console.log('Function missing'),
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        className,
        'p-4 rounded-md border-3 border-purple-400 bg-slate-200'
      )}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
