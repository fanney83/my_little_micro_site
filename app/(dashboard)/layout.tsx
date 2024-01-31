import Link from 'next/link'
import NewTodoFroms from '../components/NewEntryForm'
import List from '../components/List'

const DashboardLayout = ({ children }) => {
  return (
    <div className="my-6 px-16 py-8 grid grid-cols-2">
      <div>
        <Link href="/entities">Add to list</Link>
        <Link href="/journal"> search list </Link>
      </div>
      <List />
      {children}
    </div>
  )
}

export default DashboardLayout
