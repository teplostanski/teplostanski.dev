'use client'

import { nanoid } from 'nanoid'
import React from 'react'
import PreviewCard from '../PreviewCard/PreviewCard'
import { type PreviewData } from '@/shared/types/preview'
import PreviewHeader from '../PreviewHeader/PreviewHeader'

interface PreviewListProps {
  data: PreviewData[]
}

export default function PreviewList({ data }: PreviewListProps) {
  return (
    <>
      {data.map((item) => (
        <div key={nanoid()}>
          <PreviewCard data={item} />
        </div>
      ))}
      <br />
    </>
  )
}
