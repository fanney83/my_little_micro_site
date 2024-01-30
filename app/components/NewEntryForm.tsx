import { newEntry } from '@/utils/actions'

const NewEntryForms = () => {
  return (
    <div className="p-4 border-2 border-black-200">
      <h1>New entry from. Það formar ný entryyyyy.</h1>
      <div className="flex px-16 gap-4 flex-col ">
        <p>Er líka með svona fínt input. Jájá</p>

        <form action={newEntry}>
          <input
            placeholder="Add entry"
            name="content"
            className="border-2 text-black bold mr-4 p-2 rounded-xl "
            type="text"
          />
          <button type="submit">Add entry</button>
        </form>
      </div>
    </div>
  )
}

export default NewEntryForms
