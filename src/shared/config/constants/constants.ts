export const ENV = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
} as const

export const TIME = {
  msInSecond: 1000,
  secondsInMinute: 60,
  minutesInHour: 60,
  hoursInDay: 24,
  get msInDay() {
    return (
      this.msInSecond *
      this.secondsInMinute *
      this.minutesInHour *
      this.hoursInDay
    )
  },
} as const

export const DATES = {
  programmersDayNumber: 256,
  piDay: {
    month: 2, // март
    date: 14,
  },
} as const

export const CONSOLE_STYLES = {
  title: 'font-size: 20px; font-weight: bold;',
  subtitle: 'font-size: 16px; font-weight: bold;',
  text: 'font-size: 13px;',
} as const

export const LOCALES = [
  { code: 'ru', name: 'Русский', prefix: '/' },
  { code: 'en', name: 'English', prefix: '/en' },
] as const
