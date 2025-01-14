import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className='w-full max-w-[820px] px-4'>{children}</div>
}
