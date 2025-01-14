import { type NavItem } from '@/components/Navigation/Navigation'
import { NAV_ITEMS } from '../constants/navigation'

export function getNavItems(
  items: string[],
  prefixPath: string,
  t: (key: string) => string,
): NavItem[] {
  const path = prefixPath === '/' ? '' : prefixPath

  return items.map((key) => {
    const item = NAV_ITEMS[key]
    const isHome = key === 'home'

    return {
      id: item.id,
      name: item.name,
      label: t(item.label),
      path: isHome ? prefixPath : `${path}${item.pathTemplate}`,
    }
  })
}
