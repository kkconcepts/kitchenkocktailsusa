export interface NavLink {
  name: string
  path: string
  label: string
  isExternal?: boolean
}

export interface FooterLink extends NavLink {
  category?: string
}

export interface SocialLink extends NavLink {
  icon: string
}

// Example usage of the interfaces
export const navigationLinks: NavLink[] = [
  {
    name: 'home',
    path: '/',
    label: 'Home'
  },
  {
    name: 'menu',
    path: '/menu',
    label: 'Menu'
  },
  {
    name: 'locations',
    path: '/locations',
    label: 'Locations'
  },
  {
    name: 'private-events',
    path: '/private-events',
    label: 'Private Events'
  },
  {
    name: 'reservations',
    path: '/reservations',
    label: 'Reservations'
  },
  {
    name: 'contact',
    path: '/contact',
    label: 'Contact'
  }
]
