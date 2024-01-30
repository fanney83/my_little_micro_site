import NewTodoFroms from '../components/NewEntryForm'

const DashboardLayout = ({ children }) => {
  return (
    <div className="border-2 border-amber-500 my-6  px-16 py-8 ">
      {children}
    </div>
  )
}

export default DashboardLayout
