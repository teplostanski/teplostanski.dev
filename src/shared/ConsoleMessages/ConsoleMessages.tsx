'use client'

import { CONSTANTS } from '@/shared/config/constants/constants'
import { WelcomeConsoleMessage } from './WelcomeConsoleMessage'
import { ProgrammersDayConsoleMessage } from './ProgrammersDayMessage'
import { PiDayConsoleMessage } from './PiDayMessage'

const PROGRAMMERS_DAY = 256
const PI_DAY_MONTH = 2 // март (0-based)
const PI_DAY_DATE = 14

export const ConsoleMessages = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const startOfYear = new Date(year, 0, 1)
  const dayOfYear = Math.floor(
    (Number(currentDate) - Number(startOfYear)) / (24 * 60 * 60 * 1000) + 1,
  )

  // if (!CONSTANTS.isProduction) {
  //   return null
  // }

  if (dayOfYear === PROGRAMMERS_DAY) {
    return <ProgrammersDayConsoleMessage />
  }

  if (
    currentDate.getMonth() === PI_DAY_MONTH &&
    currentDate.getDate() === PI_DAY_DATE
  ) {
    return <PiDayConsoleMessage />
  }

  return <WelcomeConsoleMessage />
}
