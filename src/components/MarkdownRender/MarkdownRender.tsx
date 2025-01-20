import Markdown from 'markdown-to-jsx'

import { ReactNode } from 'react'
import { PrefixedImage } from '../PrefixedImage/PrefixedImage'

interface ChildrenProps {
  children: ReactNode
}

interface MdLinkProps extends ChildrenProps {
  href?: string
}

const Mdproject = ({ children }: ChildrenProps) => (
  <article className='leading-6'>{children}</article>
)

const MdLink = ({ children, href }: MdLinkProps) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)

const mdOptions = {
  wrapper: Mdproject,
  overrides: {
    img: {
      component: PrefixedImage,
    },
    a: {
      component: MdLink,
    },
  },
}

interface MarkdownRenderProps {
  content: string
}

export default function MarkdownRender({ content }: MarkdownRenderProps) {
  return <Markdown options={mdOptions}>{content}</Markdown>
}
