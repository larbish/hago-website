import type { ParsedContent } from '@nuxt/content'
import type { Badge, Link } from '#ui/types'

export interface Movie extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  directors?: ({
    name: string
    description?: string
    avatar?: { src: string }
  } & Link)[]
}
