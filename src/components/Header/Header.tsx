'use client'

import BackButton from '../BackButton/BackButton'
import { useTranslations } from 'use-intl'
import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'
import { isPrefixPath } from '@/shared/utils/isPrefixPath'
import { usePathname } from 'next/navigation'
import Navigation from '../Navigation/Navigation'
import { getNavItems } from '@/shared/utils/getNavItems'

const Header = () => {
  const t = useTranslations('Header')
  const { prefixPath } = useCurrentLocale()
  const pathname = usePathname()
  const isRoot = isPrefixPath(prefixPath, pathname)

  const navItems = getNavItems(
    ['home', 'projects', 'portfolio'],
    prefixPath,
    t.raw,
  )

  return (
    <header className='flex flex-col'>
      <nav className='flex flex-wrap gap-4'>
        {isRoot ? (
          <h1>{t('title')}</h1>
        ) : (
          <>
            <BackButton />
            <Navigation
              items={navItems}
              className='m-0 p-0 flex flex-wrap gap-4'
              itemClassName='list-none'
            />
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
