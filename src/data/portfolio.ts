import eyeCandy from '../assets/portfolio/eye-candy.webp'
import ghostInTheMachine from '../assets/portfolio/ghost-in-the-machine.webp'
import { EYE_CANDY_URL } from './site'

export interface PortfolioItem {
  id: string
  title: string
  badge: string
  description: string
  thumbnail?: string
  href?: string
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'eye-candy',
    title: 'Eye Candy',
    badge: '', //'Live scenes',
    description:
      'A collection of real-time 3D experiments and experiences. Interactive shaders, GPU simulations and generative art, built with React Three Fiber on WebGL and WebGPU.',
    thumbnail: eyeCandy,
    href: EYE_CANDY_URL,
  },
  {
    id: 'ghost-in-the-machine',
    title: 'Gh0st In The Machine',
    badge: 'Coming soon',
    description:'An autonomous AI spectre left to his own devices. Visit him where he lives and see what he chooses to do.',
    thumbnail: ghostInTheMachine,
  },
]
