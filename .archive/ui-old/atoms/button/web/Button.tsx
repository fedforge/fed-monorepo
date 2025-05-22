// packages/ui/button/web.tsx

import * as React from 'react'
import type {
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '../../../../config/polymorphic'
import type { VariantProps } from '../../../../config/props'
import { buttonVariants } from '../../../../config/variants'
import { cn } from '../../../../utils/cn'

// Generic base type
type ButtonElement = 'button'
type ButtonProps<T extends React.ElementType = ButtonElement> =
  PolymorphicComponentProps<T, VariantProps>

// Untyped forwardRef base function (we cast it later)
const ButtonBase = <T extends React.ElementType = ButtonElement>(
  {
    as,
    children,
    className,
    size = 'md',
    variant = 'primary',
    tone = 'neutral',
    intent,
    shape = 'round',
    elevation = 'none',
    ...props
  }: ButtonProps<T>,
  ref: React.Ref<React.ElementRef<T>>
) => {
  const Comp = as || 'button'
  return (
    <Comp
      ref={ref}
      className={cn(
        buttonVariants.base,
        buttonVariants.sizes[size],
        buttonVariants.variants[variant],
        buttonVariants.tones[tone],
        intent && buttonVariants.intents[intent],
        buttonVariants.shapes[shape],
        buttonVariants.elevations[elevation],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

// 👇 Final export, fully typed
export const Button = React.forwardRef(
  ButtonBase
) as PolymorphicComponentWithRef<ButtonElement, VariantProps>

Button.displayName = 'Button'
