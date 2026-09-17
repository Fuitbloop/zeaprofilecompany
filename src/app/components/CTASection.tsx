'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function CTASection() {
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
      { threshold: 0.3 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1570616786002-af855c4abe10"
          alt="Pemandangan udara perjalanan wisata dengan hamparan alam yang luas dan langit biru cerah"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/70" />
      </div>

      {/* Animated airplane route */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute top-1/2 -translate-y-1/2 w-full" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 150 C200 50 500 150 800 80 C1100 10 1300 120 1600 60" stroke="#D9A441" strokeWidth="1" fill="none" className="route-line" opacity="0.4" />
          <path d="M-100 100 C300 180 600 60 900 120 C1200 180 1400 80 1600 130" stroke="white" strokeWidth="0.5" fill="none" className="route-line" opacity="0.2" />
        </svg>

        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent float-slow opacity-60" />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full bg-white float-medium opacity-40" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-accent float-fast opacity-50" />

        {/* Cloud shapes */}
        <div className="absolute top-8 right-8 opacity-10 cloud-drift">
          <svg viewBox="0 0 200 80" width="200" fill="white">
            <ellipse cx="80" cy="50" rx="70" ry="30" />
            <ellipse cx="100" cy="40" rx="50" ry="25" />
            <ellipse cx="140" cy="50" rx="40" ry="20" />
          </svg>
        </div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="reveal-up text-xs font-semibold text-accent tracking-widest uppercase mb-4">
          Mulai Perjalanan Anda
        </p>
        <h2 className="reveal-up stagger-1 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Siap Merencanakan<br />
          <span style={{
            background: 'linear-gradient(135deg, #D9A441 0%, #F0C060 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Perjalanan Berikutnya?</span>
        </h2>
        <p className="reveal-up stagger-2 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Ceritakan tujuan dan kebutuhan perjalanan Anda. Zea Wisata siap membantu mempersiapkannya — dari paket wisata, transportasi, hingga ticketing.
        </p>
        <div className="reveal-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontak"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-primary bg-accent hover:bg-accent/90 transition-all duration-300 shadow-xl hover:shadow-accent/30 hover:-translate-y-1 text-base">
            
            Konsultasi Sekarang
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#layanan"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 text-base">
            
            Lihat Layanan
          </a>
        </div>
      </div>
    </section>);

}