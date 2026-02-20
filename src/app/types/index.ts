// Common types used across the application

export interface NavItem {
  name: string
  href: string
  current?: boolean
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType
}

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export interface MetaData {
  title: string
  description: string
  keywords: string[]
  author: string
}

export interface FormData {
  name: string
  email: string
  message: string
}

export interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export interface Theme {
  isDark: boolean
  toggleTheme: () => void
}

export interface AnimationProps {
  initial?: object
  animate?: object
  exit?: object
  transition?: object
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}