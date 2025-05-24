// packages/ui/config/polymorphic.ts
// polymorphic.ts

import * as React from 'react'

/**
 * Infer the correct ref type for a given element type.
 */
type ElementRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref']

/**
 * Fully typed props for polymorphic components with `as` + ref.
 */
export type PolymorphicComponentProps<
  T extends React.ElementType,
  P = {}
> = P & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'>

/**
 * The final component type with smart ref + as.
 */
export type PolymorphicComponentWithRef<
  T extends React.ElementType,
  P = {}
> = React.ForwardRefExoticComponent<
  PolymorphicComponentProps<T, P> & { ref?: ElementRef<T> }
>
