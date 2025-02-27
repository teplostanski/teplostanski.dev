'use client'

import BackButton from '../BackButton/BackButton'
import { useTranslations } from 'use-intl'
import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'
import { isPrefixPath } from '@/shared/utils/isPrefixPath'
import { usePathname } from 'next/navigation'
import Navigation from '../Navigation/Navigation'
import { getNavItems } from '@/shared/utils/getNavItems'
import { EggMessageButton } from '@/shared/ConsoleMessages/EggMessages'

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
          <EggMessageButton>
            <h1>{t('title')}</h1>
          </EggMessageButton>
        ) : (
          <>
            <BackButton />
            <Navigation
              items={navItems}
              className='m-0 p-0 flex flex-wrap gap-4'
              itemClassName='list-none m-0'
            />
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
