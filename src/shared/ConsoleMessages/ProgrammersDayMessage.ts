'use client'

// import { useTranslations } from 'use-intl'
import { useEffect } from 'react'

export const ProgrammersDayConsoleMessage = () => {
  // const t = useTranslations('Messages.console.welcome')

  const TITLE_STYLE = 'font-size: 20px; font-weight: bold;'
  const TEXT_STYLE = 'font-size: 13px;'

  const title = 'С днём программиста! 🌟'
  const description =
    'Сегодня 256-й день года, и это значит, что сегодня — Международный день программиста!'
  const messageForProgrammers =
    'Который ты, как всегда, проводишь за компьютером! Выйди на улицу, подыши свежим воздухом! Твоя бледная кожа подсказывает, что тебе это очень нужно!'
  const messageForNonProgrammers =
    'А если ты не разработчик, а простой пользователь, то что ты тут делаешь? 🤨 В любом случае, теперь ты знаешь, какой сегодня день! Поздравь своего знакомого разработчика с его профессиональным праздником!'

  useEffect(() => {
    console.log(
      `%c${title}\n\n%c${description}\n\n%c${messageForProgrammers}\n\n%c${messageForNonProgrammers}`,
      TITLE_STYLE,
      TEXT_STYLE,
      TEXT_STYLE,
      TEXT_STYLE,
    )
  }, [])

  return null
}
