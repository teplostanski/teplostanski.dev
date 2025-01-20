'use client'

import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'
import messagesRu from '../../../messages/ru.json'
import messagesEn from '../../../messages/en.json'

const MESSAGE_MAP = {
  en: messagesEn,
  ru: messagesRu,
} as const

export const useLocaleMessages = () => {
  const { locale } = useCurrentLocale()
  return MESSAGE_MAP[locale]
}
