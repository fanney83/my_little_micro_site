import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import cn from 'classnames'
import NavLink, { NavProps } from './components/NavLink'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demo page',
  description: 'Þetta er lítil síða þar sem ég möndla með next 13',
}
const navLinks: NavProps[] = [
  {
    href: '/',
    name: 'Heim',
  },
  {
    href: '/entities',
    name: 'Entities',
  },
]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menuClasses = cn(
    'py-4 px-3  m-4  bg-black text-white shadow-[8px_8px_7px_0px_rgba(245,255,120)]'
  )
  return (
    <html lang="en">
      <body
        className={cn(
          'flex flex-col justify-between min-h-screen bg-white ',
          inter.className
        )}
      >
        <nav className={menuClasses}>
          <ul className="flex items-center justify-start gap-4 ">
            {navLinks.map((navItem, key) => {
              return (
                <NavLink key={key} href={navItem.href} name={navItem.name} />
              )
            })}
          </ul>
        </nav>
        <main>{children}</main>
        <Footer links={navLinks} />
      </body>
    </html>
  )
}
