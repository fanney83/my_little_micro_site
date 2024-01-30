'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import cn from 'classnames'

export type NavProps = {
  href: string
  name: string
}

export default function NavLink({ href, name }: NavProps) {
  const path = usePathname()

  const navLinkClass = cn(
    'text-white',
    path === href ? 'underline underline-offset-4' : '',
    'hover:underline hover:text-[#00B2FF] underline-offset-4 transition-all ease-in-out'
  )

  return (
    <Link href={href} className={cn(navLinkClass)}>
      {name}
    </Link>
  )
}
