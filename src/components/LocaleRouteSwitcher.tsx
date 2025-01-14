'use client'

import { useLocaleNavigation } from '@/shared/hooks/useLocaleNavigation'
import { useCurrentLocale } from '../../src/shared/hooks/useCurrentLocale'
import { locales } from '@/shared/constants/locales'
import { useTranslations } from 'use-intl'

export const LocaleRouteSwitcher = () => {
  const { navigateToLocale } = useLocaleNavigation()
  const t = useTranslations('Common')
  const { locale } = useCurrentLocale()

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigateToLocale(e.target.value)
  }

  return (
    <select value={locale} onChange={changeLanguage} aria-label={t('language')}>
      {locales.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}
