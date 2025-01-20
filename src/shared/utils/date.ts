import { TIME, DATES } from '../config/constants/constants'

export const getDayOfYear = (date: Date): number => {
  const year = date.getFullYear()
  const startOfYear = new Date(year, 0, 1)
  return Math.floor((Number(date) - Number(startOfYear)) / TIME.msInDay + 1)
}

export const isPiDay = (date: Date): boolean => {
  const { month, date: dayOfMonth } = DATES.piDay
  return date.getMonth() === month && date.getDate() === dayOfMonth
}
