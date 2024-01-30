import { newTodo } from '@/utils/actions'
import { Button } from './Button'

const NewTodoForms = () => {
  return (
    <div className="p-4 border-2 border-black-200">
      <h1>New todo from. Það formar ný todooo.</h1>
      <div className="flex px-16 gap-4 flex-col ">
        <p>Er líka með svona fínt input. Jájá</p>

        <form action={newTodo}>
          <input
            placeholder="Add todo"
            name="content"
            className="border-2 text-black bold mr-4 p-2 rounded-xl "
            type="text"
          />
          <Button />
        </form>
      </div>
    </div>
  )
}

export default NewTodoForms
