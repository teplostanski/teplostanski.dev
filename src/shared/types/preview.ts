export interface PreviewMetadata {
  name: string
  description: string
  image?: string
}

export interface PreviewData {
  slug: string
  metadata: PreviewMetadata
}
