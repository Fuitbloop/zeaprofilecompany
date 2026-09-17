'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Beranda', href: '/#beranda' },
  { label: 'Tentang Kami', href: '/#tentang' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Destinasi', href: '/#destinasi' },
  { label: 'Armada', href: '/#armada' },
  { label: 'Galeri', href: '/#galeri' },
  { label: 'Kontak', href: '/#kontak' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Zea Wisata - Beranda">
            <AppLogo size={50} />
            <div className="flex flex-col leading-none">
              <span
                className={`font-extrabold text-base tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                ZEA WISATA
              </span>
              <span
                className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
                  scrolled ? 'text-accent' : 'text-accent'
                }`}
              >
                TOUR & TRAVEL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'text-foreground hover:text-primary hover:bg-muted'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/#kontak"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 bg-accent text-primary hover:bg-accent/90 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Konsultasi
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all duration-200 ${
                scrolled ? 'hover:bg-muted' : 'hover:bg-white/10'
              }`}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                } ${scrolled ? 'bg-foreground' : 'bg-white'}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                } ${scrolled ? 'bg-foreground' : 'bg-white'}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                } ${scrolled ? 'bg-foreground' : 'bg-white'}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay fixed inset-0 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden bg-white shadow-2xl transition-transform duration-400 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-2">
              <AppLogo size={32} />
              <span className="font-extrabold text-sm text-primary">ZEA WISATA</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted text-foreground"
              aria-label="Tutup menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4 py-6 flex-1" aria-label="Navigasi mobile">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-xl transition-all duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-8">
            <Link
              href="/#kontak"
              onClick={handleNavClick}
              className="flex items-center justify-center w-full py-3.5 rounded-xl text-base font-semibold bg-accent text-primary hover:bg-accent/90 transition-all duration-200"
            >
              Konsultasi Sekarang
            </Link>
            <p className="text-center text-xs text-muted-foreground mt-4">YOUR JOURNEY, OUR PRIORITY</p>
          </div>
        </div>
      </div>
    </>
  );
}