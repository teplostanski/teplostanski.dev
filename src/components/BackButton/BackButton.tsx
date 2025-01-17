'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'use-intl'

export default function BackButton() {
  const router = useRouter()
  const t = useTranslations('Header')

  return (
    <button
      type='button'
      onClick={() => router.back()}
      className='bg-transparent border-none text-[#0000EE] underline cursor-pointer p-0'
      aria-label={t('links.back')}
    >
      &lt; {t('links.back')}
    </button>
  )
}
