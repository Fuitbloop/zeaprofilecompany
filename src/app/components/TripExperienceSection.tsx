'use client';
import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Rencanakan',
    description: 'Ceritakan kebutuhan perjalanan Anda — tujuan, tanggal, jumlah peserta, dan preferensi layanan.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    color: 'from-accent to-amber-400',
  },
  {
    number: '02',
    title: 'Kami Persiapkan',
    description: 'Tim Zea Wisata membantu menyiapkan semua kebutuhan perjalanan — akomodasi, transportasi, dan itinerary.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: 'from-secondary to-sky-400',
  },
  {
    number: '03',
    title: 'Berangkat & Nikmati',
    description: 'Nikmati setiap momen perjalanan Anda dengan lebih tenang dan menyenangkan bersama Zea Wisata.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22,4 12,14.01 9,11.01"/>
      </svg>
    ),
    color: 'from-emerald-500 to-teal-400',
  },
];

export default function TripExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.reveal-up').forEach((child) => child.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="galeri" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Cara Kerja Kami</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Perjalanan Bukan Sekadar Tujuan.
          </h2>
          <div className="accent-line w-16 mx-auto mb-4" />
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Kami percaya setiap perjalanan adalah cerita. Biarkan kami membantu Anda menciptakan cerita terbaik.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:flex items-start gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 z-0" style={{ background: 'linear-gradient(90deg, #D9A441, #1677B8, #10b981)' }} aria-hidden="true" />

          {steps?.map((step, i) => (
            <div key={step?.title} className={`flex-1 flex flex-col items-center text-center px-6 relative z-10 reveal-up stagger-${i + 2}`}>
              {/* Number + icon circle */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step?.color} flex items-center justify-center mb-6 shadow-lg ring-4 ring-white`}>
                <div className="text-white">{step?.icon}</div>
              </div>
              <div className="mb-3">
                <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{step?.number}</span>
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-3">{step?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{step?.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden flex flex-col gap-0 relative">
          <div className="absolute left-10 top-12 bottom-12 w-0.5 z-0" style={{ background: 'linear-gradient(180deg, #D9A441, #1677B8, #10b981)' }} aria-hidden="true" />
          {steps?.map((step, i) => (
            <div key={step?.title} className={`flex items-start gap-5 relative z-10 pb-10 reveal-up stagger-${i + 1}`}>
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step?.color} flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-white`}>
                <div className="text-white">{step?.icon}</div>
              </div>
              <div className="pt-3">
                <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase block mb-1">{step?.number}</span>
                <h3 className="text-lg font-extrabold text-primary mb-2">{step?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}