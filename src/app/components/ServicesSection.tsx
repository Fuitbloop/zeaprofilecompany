'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    number: '01',
    title: 'Paket Wisata',
    description: 'Rencanakan perjalanan domestik maupun internasional dengan pilihan paket yang dapat disesuaikan.',
    items: ['Wisata Domestik', 'Wisata International', 'Honeymoon', 'Family Gathering', 'Wisata Heritage', 'Wisata Religi', 'Outbound'],
    cta: 'Lihat Paket',
    icon: 'GlobeAltIcon',
    bgClass: 'service-card-primary',
    accentColor: '#D9A441',
  },
  {
    number: '02',
    title: 'Rental Transportasi',
    description: 'Beragam pilihan kendaraan untuk perjalanan pribadi, keluarga, rombongan, hingga kebutuhan wisata.',
    items: ['Bus Pariwisata (30–59 seat)', 'Elf Long (17–19 seat)', 'Hi Ace (8–13 seat)', 'Mini Bus (Alphard, Innova, Expander, Avanza)'],
    cta: 'Lihat Armada',
    icon: 'TruckIcon',
    bgClass: 'service-card-secondary',
    accentColor: '#55BFEA',
  },
  {
    number: '03',
    title: 'Ticketing',
    description: 'Permudah kebutuhan perjalanan Anda melalui layanan ticketing untuk berbagai moda transportasi.',
    items: ['Tiket Pesawat Dalam & Luar Negeri', 'Tiket Kapal Laut', 'Tiket Kereta Api', 'Tiket Obyek Wisata'],
    cta: 'Hubungi Kami',
    icon: 'TicketIcon',
    bgClass: 'service-card-accent',
    accentColor: '#F0C060',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((child) => child.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="layanan" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Apa yang Kami Tawarkan</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Layanan Perjalanan Anda
          </h2>
          <div className="accent-line w-16 mx-auto mb-4" />
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Dari paket wisata hingga ticketing, kami menyediakan solusi perjalanan lengkap untuk Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal-up stagger-${i + 2} group relative rounded-3xl overflow-hidden ${svc.bgClass} card-lift cursor-pointer`}
              role="article"
              aria-label={`Layanan ${svc.title}`}
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 text-8xl font-extrabold text-white/10 leading-none select-none pointer-events-none" aria-hidden="true">
                {svc.number}
              </div>

              <div className="p-8 flex flex-col h-full min-h-[420px]">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background: `${svc.accentColor}20` }}
                >
                  <Icon name={svc.icon as 'GlobeAltIcon'} size={28} className="" style={{ color: svc.accentColor }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">{svc.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{svc.description}</p>

                {/* Items */}
                <ul className="space-y-2 mb-8 flex-1" aria-label={`Layanan dalam ${svc.title}`}>
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.accentColor }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:gap-3"
                  style={{ background: svc.accentColor, color: '#102A5C' }}
                  aria-label={`${svc.cta} - ${svc.title}`}
                >
                  {svc.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}