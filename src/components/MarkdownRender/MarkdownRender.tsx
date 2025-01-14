import Markdown from 'markdown-to-jsx'

import { ReactNode } from 'react'
import { PrefixedImage } from '../PrefixedImage/PrefixedImage'

interface ChildrenProps {
  children: ReactNode
}

interface MdLinkProps extends ChildrenProps {
  href?: string
}

const MdTitle = ({ children }: ChildrenProps) => {
  return <h1>{children}</h1>
}

const MdSubtitle = ({ children }: ChildrenProps) => {
  return <h2>{children}</h2>
}

const Mdproject = ({ children }: ChildrenProps) => (
  <article className='leading-6'>{children}</article>
)

const MdLink = ({ children, href }: MdLinkProps) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)

const MdList = ({ children }: ChildrenProps) => <li>{children}</li>

const mdOptions = {
  wrapper: Mdproject,
  overrides: {
    h1: {
      component: MdTitle,
    },
    h2: {
      component: MdSubtitle,
    },
    img: {
      component: PrefixedImage,
    },
    li: {
      component: MdList,
    },
    a: {
      component: MdLink,
    },
    code: {
      props: {
        className: 'bg-zinc-500/50',
      },
    },
  },
}

interface MarkdownRenderProps {
  content: string
}

export default function MarkdownRender({ content }: MarkdownRenderProps) {
  return <Markdown options={mdOptions}>{content}</Markdown>
}
