import { Key } from 'react'
import cn from 'classnames'
import NavLink, { NavProps } from './NavLink'

export default function NavBar({ navLinks }: { navLinks: NavProps[] }) {
  const menuClasses = cn(
    'py-4 px-3 m-4 bg-black text-white shadow-[8px_8px_7px_0px_rgba(245,255,120)]'
  )
  return (
    <nav className={menuClasses}>
      <ul className="flex items-center justify-start gap-4 ">
        {navLinks.map((navItem: NavProps, key: Key) => {
          return <NavLink key={key} href={navItem.href} name={navItem.name} />
        })}
      </ul>
    </nav>
  )
}
