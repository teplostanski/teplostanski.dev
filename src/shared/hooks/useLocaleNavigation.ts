import { useRouter } from 'next/navigation'
import { normalizeLocalePath } from '../utils/normalizeLocalePath'

export const useLocaleNavigation = () => {
  const router = useRouter()

  const navigateToLocale = (newLocale: string) => {
    const newPath = normalizeLocalePath(window.location.pathname, newLocale)
    router.push(newPath)
  }

  return { navigateToLocale }
}
