'use client'

import { IntlProvider } from 'use-intl'
import { useLocaleMessages } from '@/shared/hooks/useLocaleMessages'
import { useRouter } from 'next/navigation'

import { useCurrentLocale } from '@/shared/hooks/useCurrentLocale'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { ConsoleMessages } from '@/shared/ConsoleMessages'

export default function Providers({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  const { locale } = useCurrentLocale()
  const messages = useLocaleMessages()
  const router = useRouter()
  const useHref = (href: string) => href
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <html lang={locale} className={className}>
      <body>
        <IntlProvider timeZone={timeZone} locale={locale} messages={messages}>
          <div>
            <ConsoleMessages />
            <Header />
            {children}
            <Footer />
          </div>
        </IntlProvider>
      </body>
    </html>
  )
}
