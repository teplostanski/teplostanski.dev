import { type NavItem } from '@/components/Navigation/Navigation'

export const NAV_ITEMS: Record<
  string,
  Omit<NavItem, 'label' | 'path'> & {
    label: string
    pathTemplate: string
  }
> = {
  home: {
    id: 'nav_block_home',
    name: 'home',
    label: 'links.home',
    pathTemplate: '/',
  },
  projects: {
    id: 'nav_block_projects',
    name: 'projects',
    label: 'links.projects',
    pathTemplate: '/projects',
  },
}
