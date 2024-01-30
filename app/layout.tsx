import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import cn from 'classnames'

import { NavProps } from './components/NavLink'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demo page',
  description: 'Þetta er lítil síða þar sem ég möndla með next 13',
}
const navLinks: NavProps[] = [
  {
    href: '/',
    name: 'Home',
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
  return (
    <html lang="en">
      <body
        className={cn(
          'flex flex-col justify-between min-h-screen bg-white ',
          inter.className
        )}
      >
        <NavBar navLinks={navLinks} />
        <main className="min-h-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
