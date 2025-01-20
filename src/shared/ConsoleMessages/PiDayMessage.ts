'use client'

// import { useTranslations } from 'use-intl'
import { useEffect } from 'react'

export const PiDayConsoleMessage = () => {
  // const t = useTranslations('Messages.console.welcome')

  const TITLE_STYLE = 'font-size: 20px; font-weight: bold;'
  const TEXT_STYLE = 'font-size: 13px;'

  const title = 'С днём π! 🌟'
  const description =
    'Сегодня 14 марта, и это значит, что сегодня — Международный день π!'

  useEffect(() => {
    console.log(`%c${title}\n\n%c${description}`, TITLE_STYLE, TEXT_STYLE)
  }, [])

  return null
}
