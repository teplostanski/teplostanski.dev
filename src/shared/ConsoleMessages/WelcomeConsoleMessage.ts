'use client'

import { useEffect } from 'react'
import { useTranslations } from 'use-intl'
import { links } from '../constants/links'
import { CONSOLE_STYLES } from '../config/constants/constants'

export const WelcomeConsoleMessage = () => {
  const t = useTranslations('Console.welcome')
  const { issue, email, donate } = links

  useEffect(() => {
    console.log(
      `%c${t('title')}\n\n%c${t('description')}\n\n%c${t('contribute')}\n%c${t('donate')}\n\n%c${t('issueTitle')}\n%c${issue.link}\n\n%c${t('emailTitle')}\n%c${email.link.replace('mailto:', '')}\n\n%c${t('donateTitle')}\n%c${donate.link}\n\n%c${t('happyHacking')}`,
      CONSOLE_STYLES.title,
      CONSOLE_STYLES.text,
      CONSOLE_STYLES.text,
      CONSOLE_STYLES.text,
      CONSOLE_STYLES.subtitle,
      CONSOLE_STYLES.text,
      CONSOLE_STYLES.subtitle,
      CONSOLE_STYLES.text,
      CONSOLE_STYLES.subtitle,
      CONSOLE_STYLES.text,
      CONSOLE_STYLES.subtitle,
    )
  }, [t])

  return null
}
