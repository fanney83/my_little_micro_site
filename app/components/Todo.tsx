'use client'

import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div className="flex">
      <button
        className={`borde border-black ${
          todo.completed ? 'text-green-500' : 'text-red-600'
        } `}
        onClick={() => startTransition(() => completeTodo(todo.id))}
      >
        {todo.completed ? 'done' : 'complete todo'}
      </button>
      <div
        className={`text-lg font-semibold mx-3 ${
          todo.completed ? 'line-through' : ''
        } `}
      >
        {todo.content}
      </div>
    </div>
  )
}

export default Todo
