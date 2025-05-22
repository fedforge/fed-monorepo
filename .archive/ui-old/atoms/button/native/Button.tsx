// packages/ui/button/native.tsx

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import type { ButtonProps } from '../../../../config/props'
import { buttonStyles } from '../../../../config/rn-variants'

export const Button = ({
  children,
  size = 'md',
  variant = 'primary',
  tone = 'neutral',
  shape = 'round',
  elevation = 'none',
  intent,
  ...rest
}: ButtonProps) => {
  const composedStyle = [
    buttonStyles.base,
    buttonStyles.sizes[size],
    buttonStyles.variants[variant],
    buttonStyles.tones[tone],
    buttonStyles.shapes[shape],
    buttonStyles.elevations[elevation],
    intent ? buttonStyles.intents[intent] : null,
  ]

  return (
    <TouchableOpacity style={composedStyle} {...rest}>
      <Text style={buttonStyles.text}>{children}</Text>
    </TouchableOpacity>
  )
}
