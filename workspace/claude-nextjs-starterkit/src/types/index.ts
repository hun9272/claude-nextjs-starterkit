export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  links: {
    github: string
    twitter: string
  }
}
