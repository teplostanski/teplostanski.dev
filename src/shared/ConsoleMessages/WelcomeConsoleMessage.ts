'use client'

import { title } from 'process'
// import { useTranslations } from 'use-intl'
import { useEffect } from 'react'

export const WelcomeConsoleMessage = () => {
  // const t = useTranslations('Messages.console.welcome')

  const TITLE_STYLE = 'font-size: 20px; font-weight: bold;'
  const SUBTITLE_STYLE = 'font-size: 16px; font-weight: bold;'
  const TEXT_STYLE = 'font-size: 13px;'

  const title = 'Привет, мир!'
  const description = 'Ценю твоё любопытство! 🌟'
  const contribute =
    'Если тобой были найдены баги, пожалуйста, создай issue или напиши мне на почту.'
  const donate =
    'Если есть возможность поддержать финансово, то это будет здорово! Ссылочка внизу 👇'
  const issueTitle = 'Issue'
  const issueLink = 'https://github.com/teplostanski/teplostanski.dev/issues'
  const emailTitle = 'Почта'
  const emailLink = 'igor@teplostanski.dev'
  const donateTitle = 'Donate'
  const donateLink = 'https://donate.teplostanski.dev'
  const happyHacking = 'Happy hacking! 🚀'

  useEffect(() => {
    console.log(
      `%c${title}\n\n%c${description}\n\n%c${contribute}\n%c${donate}\n\n%c${issueTitle}\n%c${issueLink}\n\n%c${emailTitle}\n%c${emailLink}\n\n%c${donateTitle}\n%c${donateLink}\n\n%c${happyHacking}`,
      TITLE_STYLE,
      TEXT_STYLE,
      TEXT_STYLE,
      TEXT_STYLE,
      SUBTITLE_STYLE,
      TEXT_STYLE,
      SUBTITLE_STYLE,
      TEXT_STYLE,
      SUBTITLE_STYLE,
      TEXT_STYLE,
      SUBTITLE_STYLE,
    )
  }, [])

  return null
}
