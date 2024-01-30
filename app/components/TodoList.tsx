import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <div className="flex flex-col px-16 border-2 border-black ">
      <h1 className="text-lg mb-4 ">
        Hér kemur fínn listi. Sá fínasti sem þú hefur séð 💅🏾
      </h1>
      <div className="">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />
        })}
      </div>
    </div>
  )
}

export default TodoList
