'use client'
import { useForm } from 'react-hook-form'

const NewEntryForms = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm()

  return (
    <form
      className="flex flex-col lg:flex-row items-start h-100 pb-5"
      onSubmit={handleSubmit((data) => {
        setList([...list, { title: data.title, subtitle: data.subtitle }]),
          setFocus('title')
        reset()
      })}
    >
      <label className="min-h-24 flex flex-col">
        Titill
        <input
          className="border-2 text-black bold mr-4 p-2 rounded-xl "
          {...register('title', { required: true })}
        />
        {errors.title?.type === 'required' && (
          <p className="text-red-400" role="alert">
            Obb hér þarf titil
          </p>
        )}
      </label>

      <label className="min-h-24 flex flex-col">
        Texti
        <input
          className="border-2 text-black bold mr-4 p-2 rounded-xl "
          {...register('subtitle', { required: true })}
        />
        {errors.subtitle?.type === 'required' && (
          <p className="text-red-400" role="alert">
            Obb hér þarf texta
          </p>
        )}
      </label>
      <button className="w-100 text-sm " type="submit"></button>
    </form>
  )
}

export default NewEntryForms
