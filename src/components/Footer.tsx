import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const exploreLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/#tentang' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Destinasi', href: '/#destinasi' },
  { label: 'Armada', href: '/#armada' },
];

const serviceLinks = [
  { label: 'Paket Wisata', href: '/#layanan' },
  { label: 'Rental Transportasi', href: '/#armada' },
  { label: 'Ticketing', href: '/#layanan' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={100} />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-base text-white tracking-tight">ZEA WISATA</span>
                <span className="text-xs font-medium tracking-widest text-accent">TOUR & TRAVEL</span>
              </div>
            </div>
            <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-3">
              YOUR JOURNEY, OUR PRIORITY
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              PT. ZEA NUSANTARA GROUP — mitra perjalanan terpercaya Anda untuk wisata, transportasi, dan ticketing.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://wa.me/6285846986524"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center text-white/70 transition-all duration-300"
                aria-label="WhatsApp Zea Wisata"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zeawisatatourandtravel.smi@gmail.com&su=Konsultasi%20Perjalanan%20-%20Zea%20Wisata"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center text-white/70 transition-all duration-300"
                aria-label="Email Zea Wisata"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/zeawisatatourandtravel.smi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center text-white/70 transition-all duration-300"
                aria-label="Instagram Zea Wisata"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@zeawisatatourandtravel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center text-white/70 transition-all duration-300"
                aria-label="TikTok Zea Wisata"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-white/60 leading-relaxed">
                Taman Asri Blok A7 No. 8,<br />
                Kota Sukabumi 43116,<br />
                Jawa Barat
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zeawisatatourandtravel.smi@gmail.com&su=Konsultasi%20Perjalanan%20-%20Zea%20Wisata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-white transition-colors break-all"
                >
                  zeawisatatourandtravel.smi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285846986524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  0858 4698 6524
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285860551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  0858 6055 1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-medium">
            © 2026 PT. ZEA NUSANTARA GROUP. All rights reserved. | made with ❤️ by <a href="https://www.edrahost.my.id/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white/70 transition-colors font-medium">Edrahost</a>
          </p>
          <div className="flex items-center gap-5">
            <Link href="/#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}