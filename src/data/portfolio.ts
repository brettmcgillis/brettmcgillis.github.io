import allMyFriendsAreGhosts from '../assets/portfolio/AllMyFriendsAreGhosts.webp'
import beheaded from '../assets/portfolio/BeautysInTheEyeOfTheBeheaded.webp'
import burningAtBothEnds from '../assets/portfolio/BurningAtBothEnds.webp'
import loGlow from '../assets/portfolio/LoGlow.webp'
import rorschach from '../assets/portfolio/Rorschach.webp'
import theSpeedOfLightning from '../assets/portfolio/TheSpeedOfLightning.webp'
import trucheterie from '../assets/portfolio/Trucheterie.webp'
import weightless from '../assets/portfolio/Weightless.webp'
import youreLookingRadiant from '../assets/portfolio/YoureLookingRadiant.webp'
import { EYE_CANDY_URL } from './site'

export type Category = 'scene' | 'print' | 'print3d'

export const CATEGORY_LABELS: Record<Category, string> = {
  scene: 'Live scene',
  print: 'Print',
  print3d: '3D print',
}

export interface PortfolioImage {
  /** Omit for a labelled placeholder slot (a photo not taken yet). */
  src?: string
  alt: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: Category
  thumbnail: string
  /** Card + modal label; defaults to the category name. */
  badge?: string
  meta?: string
  byline: string
  /** Modal gallery; the first is shown large. Defaults to the thumbnail. */
  images: PortfolioImage[]
  links: { label: string; href: string }[]
}

type ItemInput = Omit<PortfolioItem, 'images' | 'links'> & {
  /** eye-candy scene id, e.g. 'loGlow'. */
  scene: string
  images?: PortfolioImage[]
}

const item = ({ scene, images, ...rest }: ItemInput): PortfolioItem => ({
  ...rest,
  images: images ?? [{ src: rest.thumbnail, alt: rest.title }],
  links: [{ label: 'Open the live scene', href: EYE_CANDY_URL + scene }],
})

// Bylines marked DRAFT were written from the thumbnail alone — the scene's
// todo.md has no intent notes yet.
export const PORTFOLIO: PortfolioItem[] = [
  item({
    id: 'burning-at-both-ends',
    title: 'Burning At Both Ends',
    category: 'print',
    thumbnail: burningAtBothEnds,
    scene: 'burningAtBothEnds',
    badge: 'Lenticular print',
    meta: 'Lenticular print · [Size] · [Year] · [Edition]',
    byline:
      'A candle floating in the void, lit at both ends and mirrored like the king on a playing card — the wax at the bottom flows up in symmetry with the wax running down. Printed as a lenticular that flips as you walk past. [Who printed it; what each angle shows.]',
    images: [
      { src: burningAtBothEnds, alt: 'Burning At Both Ends, the live scene' },
      { alt: 'Photo: the print, angle A' },
      { alt: 'Photo: the print, angle B' },
    ],
  }),
  item({
    id: 'all-my-friends-are-ghosts',
    title: 'All My Friends Are Ghosts',
    category: 'print3d',
    thumbnail: allMyFriendsAreGhosts,
    scene: 'allMyFriendsAreGhosts',
    badge: '3D print · in progress',
    meta: '3D print · [Material] · coming [Month Year]',
    byline:
      'A single ghost dropped into places you would never expect to find one — watching a black hole, riding an ocean swell, standing on a 737’s wing in a storm. A dev tool in progress turns each scene into a printable model.',
    images: [
      { src: allMyFriendsAreGhosts, alt: 'All My Friends Are Ghosts, the live scene' },
      { alt: 'Photo: print in progress' },
      { alt: 'Screenshot: the print dev tool' },
    ],
  }),
  item({
    id: 'lo-glow',
    title: 'LoGlow',
    category: 'scene',
    thumbnail: loGlow,
    scene: 'loGlow',
    // DRAFT
    byline: 'The bret tag and the reversal knot as neon signs, humming in the dark. Click them.',
  }),
  item({
    id: 'beheaded',
    title: 'Beauty Is In The Eye Of The Beheaded',
    category: 'scene',
    thumbnail: beheaded,
    scene: 'beautyIsInTheEyeOfTheBeheaded',
    // DRAFT
    byline: 'A skull and crossbones dressed in a projected bloom of flowers.',
  }),
  item({
    id: 'rorschach',
    title: 'Rorschach',
    category: 'scene',
    thumbnail: rorschach,
    scene: 'rorschach',
    byline:
      'Generative ink-blot tests: a seeded system of differential equations, mirrored for bilateral symmetry and rendered as strokes, point clouds or a physically based watercolor simulation.',
  }),
  item({
    id: 'weightless',
    title: 'Weightless',
    category: 'scene',
    thumbnail: weightless,
    scene: 'weightless',
    byline:
      'A hummingbird made of particles. Its animated rig drives a GPU simulation — particles swirl through the bird’s body, and the fast wingtips shed them into the air before they drift back home.',
  }),
  item({
    id: 'youre-looking-radiant',
    title: 'You’re Looking Radiant',
    category: 'scene',
    thumbnail: youreLookingRadiant,
    scene: 'youreLookingRadiant',
    // DRAFT
    byline: 'Spotlights sweeping a dark stage, pooling into soft halos of color.',
  }),
  item({
    id: 'trucheterie',
    title: 'Trucheterie',
    category: 'scene',
    thumbnail: trucheterie,
    scene: 'trucheterie',
    byline:
      'Generative Truchet tiles drawn as engraved contour line art — many parallel strokes per arc — that flip and rescale to reveal new arrangements.',
  }),
  item({
    id: 'the-speed-of-lightning',
    title: 'The Speed Of Lightning',
    category: 'scene',
    thumbnail: theSpeedOfLightning,
    scene: 'theSpeedOfLightning',
    // DRAFT
    byline: 'A bolt of lightning striking a pool of dark water, over and over.',
  }),
]
