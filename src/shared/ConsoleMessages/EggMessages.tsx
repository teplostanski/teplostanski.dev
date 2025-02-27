'use client'

import React, { useCallback, useState } from 'react'
import { useTranslations } from 'use-intl'

interface EggMessageButtonProps {
  children: React.ReactNode
}

const showClickMessage = (clickCount: number, messages: string[]) => {
  const messageIndex = Math.min(clickCount, messages.length - 1)
  console.clear()
  console.log('%c' + messages[messageIndex], 'font-size: 16px')
}

export const EggMessageButton = ({ children }: EggMessageButtonProps) => {
  const [clickCount, setClickCount] = useState(0)
  const t = useTranslations('Console.egg')

  const getClickMessages = (t: (key: string) => string) => [
    t('tryAgain'),
    t('avabraKedabra'),
    t('oneMore'),
    t('dontGiveUp'),
    t('keepGoing'),
    t('rightTrack'),
    t('almostThere'),
    t('gettingCloser'),
    t('nearGoal'),
    t('finalPrize'),
  ]

  const messages = getClickMessages(t)
  const handleClick = useCallback(() => {
    showClickMessage(clickCount, messages)
    setClickCount((prev) => prev + 1)
  }, [clickCount, messages])

  return (
    <button
      onClick={handleClick}
      className='bg-transparent border-none p-0 cursor-pointer'
    >
      {children}
    </button>
  )
}
