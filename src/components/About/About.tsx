'use client'

import { links } from '@/shared/constants/links'
import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'
import { useTranslations } from 'use-intl'
import Navigation from '../Navigation/Navigation'
import { getNavItems } from '@/shared/utils/getNavItems'

export default function About() {
  const t = useTranslations('Home.about.messages')
  const tNav = useTranslations('Header')
  const { prefixPath } = useCurrentLocale()

  const navItems = getNavItems(['projects'], prefixPath, tNav.raw)

  return (
    <section>
      <span>
        {t.rich('first', {
          doka_guide: (chunks) => (
            <a href={links.doka.link} target='_blank' rel='noopener noreferrer'>
              {chunks}
            </a>
          ),
          vite_plugin: (chunks) => (
            <a
              href={links.vite_plugin.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {chunks}
            </a>
          ),
          moonbloom_theme: (chunks) => (
            <a
              href={links.moonbloom_theme.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {chunks}
            </a>
          ),
        })}
      </span>
      <br />
      <span>{t('second')}</span>

      <p>{'<nav>'}</p>
      <Navigation items={navItems} />
      <p>{'<nav/>'}</p>
    </section>
  )
}
