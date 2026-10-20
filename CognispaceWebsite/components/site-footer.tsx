const LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-4 pb-12 pt-4 text-center text-[0.75rem] text-muted-foreground">
      <nav aria-label="Footer">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p>
        <a href="mailto:info@cogni-space.com" className="hover:text-primary">
          info@cogni-space.com
        </a>
        {' · Copyright © Cognispace 2026'}
      </p>
    </footer>
  )
}
