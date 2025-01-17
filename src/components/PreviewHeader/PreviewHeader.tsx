'use client'

import { useTranslations } from 'use-intl'

interface PreviewHeaderProps {
  translationScope: string
}

export default function PreviewHeader({
  translationScope,
}: PreviewHeaderProps) {
  const t = useTranslations(translationScope)

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </>
  )
}
