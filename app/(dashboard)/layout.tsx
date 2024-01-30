import NewTodoFroms from '../components/NewTodoForm'

const DashboardLayout = ({ children }) => {
  return (
    <div className="border-2 border-amber-500 my-6  px-16 py-8 ">
      <h1 className="underline underline-offset-4  ">
        Hér er dashboard. Og. Já. Bara gott.
      </h1>
      {children}
    </div>
  )
}

export default DashboardLayout
