import TodoList from '@/app/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({})

  return todos
}

const TodosPage = async () => {
  const todos = await getData()

  return <TodoList todos={todos} />
}

export default TodosPage