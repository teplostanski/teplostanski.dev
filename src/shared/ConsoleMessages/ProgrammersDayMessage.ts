'use client'

import { useEffect } from 'react'
import { useTranslations } from 'use-intl'
import { CONSOLE_STYLES } from '../config/constants/constants'

export const ProgrammersDayConsoleMessage = () => {
  const t = useTranslations('Console.programmersDay')

  useEffect(() => {
    console.log(
      `%c${t('title')}\n\n%c${t('message')}`,
      CONSOLE_STYLES.title,
      CONSOLE_STYLES.text,
    )
  }, [t])

  return null
}
