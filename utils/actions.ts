'use server'
import { revalidatePath } from 'next/cache'

export const newEntry = async (data: FormData) => {
  const newEntry = data.get('entry') as string

  if (newEntry) {
    await data.append({
      data: {
        content: data,
      },
    })
    revalidatePath('/entities')
  }
}
