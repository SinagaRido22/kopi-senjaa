import { useState } from 'react'

export function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#3b2314" />
      <path d="M11 17h15v5a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7v-5z" fill="#f6ecdc" />
      <path d="M26 19h2a3 3 0 0 1 0 6h-2" fill="none" stroke="#f6ecdc" strokeWidth="2" />
      <path d="M16 12c0-2 2-2 2-4M21 12c0-2 2-2 2-4" fill="none" stroke="#e8833a" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <Logo />
          <span>Kopi Senja</span>
        </a>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="cart-btn" onClick={onCartClick} aria-label="Buka keranjang">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.5L22 7H6" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu navigasi">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
