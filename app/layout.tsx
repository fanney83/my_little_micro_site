import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import cn from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mood journal',
  description: 'Ég fíla að dilla dilla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    {
      href: '/',
      name: 'Heim 🏡',
    },
    {
      href: '/todos',
      name: 'Todos 📝',
    },
    {
      href: '/journal',
      name: 'Journal',
    },
  ]

  const menuClasses = cn('py-4 px-3 border-4 m-4 rounded-2xl')
  return (
    <html lang="en" className="min-h-screen">
      <body className={cn('flex flex-col justify-between  ', inter.className)}>
        <header>
          <nav className={cn(menuClasses, ' border-violet-700 bg-violet-200 ')}>
            <ul className="flex items-center justify-between ">
              {navLinks.map((navItem, key) => {
                return (
                  <Link href={navItem.href} key={key}>
                    {navItem.name}
                  </Link>
                )
              })}
            </ul>
          </nav>
        </header>

        {children}
        <footer className={cn(menuClasses, 'bg-lime-200 border-lime-500')}>
          <ul className="flex items-center justify-between ">
            {navLinks.map((navItem, key) => {
              return (
                <Link href={navItem.href} key={key}>
                  {navItem.name}
                </Link>
              )
            })}
          </ul>
        </footer>
      </body>
    </html>
  )
}
