import { usePathname } from 'next/navigation'
import { useCurrentLocale } from './useCurrentLocale'
import { normalizePath } from '../utils/normalizePath'

interface UsePreviewPathResult {
  getPreviewHref: (slug: string) => string
  normalizeImagePath: (imagePath: string | undefined) => string | undefined
}

export function usePreviewPath(): UsePreviewPathResult {
  const pathname = usePathname()
  const { prefixPath } = useCurrentLocale()

  const getPreviewHref = (slug: string) => `${pathname}/${slug}`

  const normalizeImagePath = (imagePath: string | undefined) =>
    imagePath ? normalizePath(imagePath, true, false) : undefined

  return {
    getPreviewHref,
    normalizeImagePath,
  }
}
