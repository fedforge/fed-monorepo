// packages/ui/config/variants.ts
// variants.ts

export const buttonVariants = {
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  sizes: {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  },
  variants: {
    primary: 'bg-fed-pink text-white hover:bg-fed-glow',
    secondary: 'bg-fed-blue text-white hover:bg-fed-purple',
    ghost:
      'bg-transparent text-fed-pink hover:bg-fed-glow/10 border border-fed-pink',
    outline: 'border border-fed-pink text-fed-pink hover:bg-fed-glow/10',
  },
  tones: {
    subtle: 'opacity-60',
    neutral: 'opacity-80',
    strong: 'opacity-100',
  },
  intents: {
    info: 'text-blue-500',
    danger: 'text-red-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
  },
  shapes: {
    round: 'rounded-full',
    square: 'rounded-none',
    pill: 'rounded-xl',
  },
  elevations: {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  },
}

export const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  ghost: 'bg-transparent hover:bg-blue-100 text-blue-700',
  outline: 'border border-gray-500 text-gray-700 hover:bg-gray-100',
}

export const tones = {
  subtle: 'opacity-70',
  neutral: '',
  strong: 'font-bold',
}

export const intents = {
  info: 'text-blue-700',
  danger: 'text-red-700',
  success: 'text-green-700',
  warning: 'text-yellow-700',
}

export const shapes = {
  square: 'rounded-none',
  pill: 'rounded-full',
  round: 'rounded-md',
}

export const elevations = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
}
