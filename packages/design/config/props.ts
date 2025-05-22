// packages/ui/config/props.ts
// props.ts

export interface VariantProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  tone?: 'subtle' | 'neutral' | 'strong'
  intent?: 'info' | 'danger' | 'success' | 'warning'
  shape?: 'square' | 'pill' | 'round'
  elevation?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

export interface BaseUIProps extends VariantProps {
  children?: React.ReactNode
}
