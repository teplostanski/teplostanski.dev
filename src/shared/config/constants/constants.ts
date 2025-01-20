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
    month: 2, // март (0-based)
    date: 14,
  },
} as const
