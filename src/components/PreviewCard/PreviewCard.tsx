'use client'

import Link from 'next/link'
import Image from 'next/image'
import { type PreviewData } from '@/shared/types/preview'
import { useTranslations } from 'use-intl'
import { usePreviewPath } from '@/shared/hooks/usePreviewPath'

interface PreviewCardProps {
  data: PreviewData
}

export default function PreviewCard({ data }: PreviewCardProps) {
  const t = useTranslations('Common')
  const { getPreviewHref, normalizeImagePath } = usePreviewPath()

  const href = getPreviewHref(data.slug)
  const imageSrcPath = normalizeImagePath(data.metadata.image)

  return (
    <article className='space-y-4'>
      <hr className='my-4' />
      <h3 className='text-xl font-bold'>{data.metadata.name}</h3>
      <p>{data.metadata.description}</p>
      {imageSrcPath && (
        <Image
          src={imageSrcPath}
          alt={`${data.metadata.name} ${data.metadata.description}`}
          width={400}
          height={300}
          className='w-full h-auto object-cover'
          priority
        />
      )}
      <Link href={href} className='inline-block text-blue-600 hover:underline'>
        {t('more')}
      </Link>
    </article>
  )
}
