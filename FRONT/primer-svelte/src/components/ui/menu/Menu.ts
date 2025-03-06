export interface MenuItem {
    name: string;
    href: string;
  }
  
  export const DEFAULT_MENU: MenuItem[] = [
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Library', href: '/library' },
    { name: 'Newsletter', href: '/news' },
    { name: 'Support Center', href: '/support' },
    { name: 'Resources', href: '/resource' },
    { name: 'Playground', href: '/play' },
    { name: 'Terms', href: '/terms' },
    { name: 'Pro Version', href: '/pro' },
    { name: 'License', href: '/license' }
  ];