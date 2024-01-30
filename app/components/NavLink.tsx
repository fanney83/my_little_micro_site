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
    path === href ? 'underline underline-offset-4' : '',
    'text-white'
  )

  return (
    <Link href={href} className={navLinkClass}>
      {name}
    </Link>
  )
}
