import { Globe, Mail } from 'lucide-react'

import {
  BlueskyIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from '@/components/brand-icons'
import type { SocialPlatform } from '@/data/types'

type IconComponent = (props: { className?: string }) => React.ReactElement

const iconMap: Record<SocialPlatform, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  bluesky: BlueskyIcon,
  email: (props) => <Mail {...props} aria-hidden="true" />,
  website: (props) => <Globe {...props} aria-hidden="true" />,
}

export function SocialIcon({
  platform,
  className,
}: {
  platform: SocialPlatform
  className?: string
}) {
  const Icon = iconMap[platform] ?? iconMap.website
  return <Icon className={className} />
}
