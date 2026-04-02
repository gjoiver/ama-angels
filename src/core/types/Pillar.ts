import type { IconCard } from './IconCard';

export type Pillar = Pick<IconCard, 'title' | 'iconPath'> & {
  items: string[];
};
