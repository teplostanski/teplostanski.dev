import Link from 'next/link'
import { nanoid } from 'nanoid'

export interface NavItem {
  id: string
  name: string
  label: string
  path: string
}

interface NavigationProps {
  items: NavItem[]
  className?: string
  itemClassName?: string
}

export default function Navigation({
  items,
  className = '',
  itemClassName = '',
}: NavigationProps) {
  return (
    <ul className={className} role='menubar'>
      {items.map(({ id, label, path }) => (
        <li key={nanoid()} id={id} className={itemClassName} role='menuitem'>
          <Link href={path}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}
