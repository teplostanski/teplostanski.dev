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
    <div className='space-y-4'>
      <hr className='my-4' />
      <h3 className='text-xl font-bold'>{data.metadata.name}</h3>
      <p>{data.metadata.description}</p>
      {imageSrcPath && (
        <div className='relative max-w-full overflow-hidden'>
          <Image
            src={imageSrcPath}
            alt={`${data.metadata.name} ${data.metadata.description}`}
            width={0}
            height={0}
            className='max-w-[480px] w-full h-auto object-cover'
            priority
          />
        </div>
      )}
      <br />
      <Link href={href} className='inline-block text-[#0000EE] hover:underline'>
        {t('more')}
      </Link>
    </div>
  )
}
