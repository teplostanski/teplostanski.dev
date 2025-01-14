'use client'

import { nanoid } from 'nanoid'
import React from 'react'
import PreviewCard from '../PreviewCard/PreviewCard'
import { useTranslations } from 'use-intl'
import { type PreviewData } from '@/shared/types/preview'

interface PreviewListProps {
  data: PreviewData[]
}

export default function PreviewList({ data }: PreviewListProps) {
  const t = useTranslations('ProjectsPage')

  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      {data.map((item) => (
        <div key={nanoid()}>
          <PreviewCard data={item} />
        </div>
      ))}
      <br />
    </>
  )
}
