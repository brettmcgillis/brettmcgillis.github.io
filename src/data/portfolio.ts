import eyeCandy from '../assets/portfolio/eye-candy.webp'
import ghostInTheMachine from '../assets/portfolio/ghost-in-the-machine.webp'
import eyeCandyIcon from '../assets/portfolio/icons/eye-candy.png'
import ghostInTheMachineIcon from '../assets/portfolio/icons/ghost-in-the-machine.svg'
import { EYE_CANDY_URL } from './site'

export interface PortfolioItem {
  id: string
  title: string
  badge: string
  description: string
  /** The project site's favicon, shown before the title. */
  icon?: string
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
    icon: eyeCandyIcon,
    thumbnail: eyeCandy,
    href: EYE_CANDY_URL,
  },
  {
    id: 'ghost-in-the-machine',
    title: 'Gh0st In The Machine',
    badge: 'Coming soon',
    description:'An autonomous AI spectre left to his own devices. Visit him where he lives and see what he chooses to do.',
    icon: ghostInTheMachineIcon,
    thumbnail: ghostInTheMachine,
  },
]
