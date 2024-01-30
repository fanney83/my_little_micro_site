const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0), 2000))
  return { data: [1, 2, 3, 4] }
}

export default async function Home() {
  const data = await getData()

  return (
    <div className="flex bg-orange-300  min-h-full px-16 ">Hæ og velkomin!</div>
  )
}
