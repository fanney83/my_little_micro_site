'use client'
import type { IconProps as PhosphorProps } from '@phosphor-icons/react'
import {
  Trash,
  InstagramLogo,
  LinkedinLogo,
  SpinnerGap,
} from '@phosphor-icons/react'

const iconMapper = {
  InstagramLogo,
  LinkedinLogo,
  SpinnerGap,
  Trash,
}

export type IconName = keyof typeof iconMapper
interface IconProps extends PhosphorProps {
  icon: IconName
  props?: IconProps
}

export default function Icon({ icon, ...props }: IconProps) {
  if (!iconMapper[icon]) {
    return null
  }

  const IconCmp = iconMapper[icon]

  return <IconCmp {...props} />
}
