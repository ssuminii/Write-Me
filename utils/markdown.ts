import type { CardItem } from '@/components/dnd/card-list'

export const getMarkdownFromCards = (cards: CardItem[]) =>
  cards.map((c) => c.markdown?.trim()).filter(Boolean).join('\n\n')