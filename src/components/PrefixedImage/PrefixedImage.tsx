import Image from 'next/image'
import { normalizePath } from '@/shared/utils/normalizePath'
import { getAppBasePath } from '@/shared/utils/getAppBasePath'

interface PrefixedImageProps {
  src: string
  alt: string
}

export const PrefixedImage = ({ src, alt }: PrefixedImageProps) => {
  const basePath = getAppBasePath()

  const imagePath = `${basePath}${normalizePath(src, true, false)}`

  return (
    <Image
      src={imagePath}
      alt={alt}
      width={400}
      height={300}
      priority
      className='w-auto h-auto'
    />
  )
}
