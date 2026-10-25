import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="header"><div className="container nav"><a className="brand" href="#home" aria-label="Adwave ana səhifə"><span className="mark">✺</span><span>Ad<span className="brand-light">wave</span></span></a><nav className={`navlinks ${open ? 'open' : ''}`} aria-label="Əsas naviqasiya"><a onClick={close} href="#how">Necə işləyir?</a><a onClick={close} href="#features">Üstünlüklər</a><a onClick={close} href="#platform">Platforma</a><a onClick={close} href="#usecases">Tətbiq sahələri</a><a onClick={close} href="#faq">FAQ</a></nav><a href="#contact" className="btn btn-primary nav-cta">Demo tələb et <span>↗</span></a><button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menyunu aç" aria-expanded={open}>{open ? '✕' : '☰'}</button></div></header>
}
