'use client'

import { ENV, DATES } from '@/shared/config/constants/constants'
import { getDayOfYear, isPiDay } from '@/shared/utils/date'
import { WelcomeConsoleMessage } from './WelcomeConsoleMessage'
import { ProgrammersDayConsoleMessage } from './ProgrammersDayMessage'
import { PiDayConsoleMessage } from './PiDayMessage'

export const ConsoleMessages = () => {
  const currentDate = new Date()
  const dayOfYear = getDayOfYear(currentDate)

  if (!ENV.isProduction) {
    return null
  }

  if (dayOfYear === DATES.programmersDayNumber) {
    return <ProgrammersDayConsoleMessage />
  }

  if (isPiDay(currentDate)) {
    return <PiDayConsoleMessage />
  }

  return <WelcomeConsoleMessage />
}
