'use client'

type ButtonProps = {
  onClick?: () => void
  label?: string
}

export const Button = ({
  label = 'This is a button',
  onClick = () => console.log('Function missing'),
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-xl border-3 border-purple-400 bg-slate-200 "
    >
      {label}
    </button>
  )
}
