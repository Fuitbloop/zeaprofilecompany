'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const floatingCards = [
  { icon: '✈', label: 'Domestic Trip', sub: 'Seluruh Indonesia', delay: 0 },
  { icon: '🌏', label: 'International', sub: 'Mancanegara', delay: 0.8 },
  { icon: '🚌', label: 'Private Transport', sub: '15+ Armada', delay: 1.6 },
  { icon: '👨‍👩‍👧‍👦', label: 'Family Gathering', sub: 'Paket Spesial', delay: 2.4 },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const titleLeftRef = useRef<HTMLHeadingElement>(null);
  const titleRightRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    setHeroReady(true);
    const container = containerRef.current;
    const media = mediaRef.current;
    const titleLeft = titleLeftRef.current;
    const titleRight = titleRightRef.current;
    const bg = bgRef.current;
    const expanded = expandedRef.current;

    if (!container || !media || !titleLeft || !titleRight || !bg || !expanded) return;

    // === Cache ukuran — dihitung HANYA saat resize, bukan tiap scroll ===
    const m = {
      containerTop: 0,
      totalScroll: 1,
      viewportWidth: 0,
      viewportHeight: 0,
      startW: 300,
      endW: 0,
      startH: 0,
      endH: 0,
    };

    let rafId: number | null = null;
    let measureRafId: number | null = null;
    let lastProgress = -1;
    let expandedVisible = false;

    const measure = () => {
      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      m.containerTop = rect.top + scrollY;
      m.viewportWidth = window.innerWidth;
      m.viewportHeight = window.innerHeight;
      m.totalScroll = Math.max(1, container.offsetHeight - m.viewportHeight);
      m.endW = m.viewportWidth;
      m.startH = m.viewportWidth < 768 ? 280 : 400;
      m.endH = m.viewportHeight;
    };

    const applyProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrolled = scrollY - m.containerTop;
      const progress = Math.max(0, Math.min(1, scrolled / m.totalScroll));

      // Skip kalau progress sama — hemat CPU banget
      if (progress === lastProgress) return;
      lastProgress = progress;

      // Expand media (width/height — tetap di-center oleh flex parent)
      const currentW = m.startW + (m.endW - m.startW) * progress;
      const currentH = m.startH + (m.endH - m.startH) * progress;
      const currentR = Math.max(0, 24 * (1 - progress * 1.5));
      media.style.width = `${currentW.toFixed(1)}px`;
      media.style.height = `${currentH.toFixed(1)}px`;
      media.style.borderRadius = `${currentR.toFixed(1)}px`;

      // Fade background
      bg.style.opacity = Math.max(0, 1 - progress * 2).toFixed(3);

      // Titles — pakai translate3d dalam px (bukan vw) biar GPU-friendly
      const titleOffset = progress * m.viewportWidth * 1.2;
      const titleOpacity = Math.max(0, 1 - progress * 2);
      titleLeft.style.transform = `translate3d(${-titleOffset.toFixed(1)}px, 0, 0)`;
      titleRight.style.transform = `translate3d(${titleOffset.toFixed(1)}px, 0, 0)`;
      titleLeft.style.opacity = titleOpacity.toFixed(3);
      titleRight.style.opacity = titleOpacity.toFixed(3);

      // Toggle expanded content — hanya saat status berubah
      if (progress > 0.75 && !expandedVisible) {
        expanded.classList.add('visible');
        expandedVisible = true;
      } else if (progress <= 0.75 && expandedVisible) {
        expanded.classList.remove('visible');
        expandedVisible = false;
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        applyProgress();
      });
    };

    const onResize = () => {
      if (measureRafId !== null) cancelAnimationFrame(measureRafId);
      measureRafId = window.requestAnimationFrame(() => {
        measureRafId = null;
        measure();
        lastProgress = -1;
        applyProgress();
      });
    };

    // Measure setelah paint pertama biar layout stabil
    measureRafId = window.requestAnimationFrame(() => {
      measureRafId = null;
      measure();
      applyProgress();
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (measureRafId !== null) cancelAnimationFrame(measureRafId);
    };
  }, []);

  return (
    <section id="beranda" ref={containerRef} style={{ height: '280vh' }} className="relative">
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background landscape image — view1.jpg */}
        <div ref={bgRef} className="absolute inset-0 z-0" style={{ willChange: 'opacity' }}>
          <AppImage
            src="/assets/images/view1.jpg"
            alt="Pemandangan alam Indonesia yang indah dengan pegunungan dan langit biru cerah"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/60" />
        </div>

        {/* Animated clouds */}
        <div className="absolute top-20 left-0 w-full pointer-events-none z-10 opacity-20 cloud-drift">
          <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <ellipse cx="200" cy="80" rx="180" ry="60" fill="white" opacity="0.5" />
            <ellipse cx="320" cy="70" rx="120" ry="50" fill="white" opacity="0.4" />
            <ellipse cx="900" cy="100" rx="200" ry="65" fill="white" opacity="0.3" />
            <ellipse cx="1100" cy="85" rx="150" ry="55" fill="white" opacity="0.4" />
          </svg>
        </div>

        {/* Airplane route SVG */}
        <div className="absolute top-1/3 left-0 w-full pointer-events-none z-10 opacity-30">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80 Q360 20 720 50 Q1080 80 1440 30" stroke="#D9A441" strokeWidth="1.5" fill="none" className="route-line" />
            <circle cx="720" cy="50" r="4" fill="#D9A441" />
          </svg>
        </div>

        {/* Expanding Media — view2.jpg. Style hanya width & height biar flex-center tetap jalan */}
        <div
          ref={mediaRef}
          className="hero-media-container"
          style={{ width: '300px', height: '400px' }}
          aria-hidden="true"
        >
          <AppImage
            src="/assets/images/view2.jpg"
            alt="Destinasi wisata Indonesia yang eksotis dengan pantai biru dan langit cerah"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>

        {/* Titles — fly away on scroll */}
        <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
          <div className="text-center px-4">
            <h1
              ref={titleLeftRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none mb-2"
              style={{ willChange: 'transform, opacity' }}
            >
              YOUR JOURNEY,
            </h1>
            <h2
              ref={titleRightRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none"
              style={{
                background: 'linear-gradient(135deg, #D9A441 0%, #F0C060 50%, #D9A441 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                willChange: 'transform, opacity',
              }}
            >
              OUR PRIORITY.
            </h2>
          </div>
        </div>

        {/* Expanded content */}
        <div
          ref={expandedRef}
          id="hero-expanded-content"
          className="absolute bottom-0 left-0 w-full z-50 px-4 sm:px-8 pb-12 sm:pb-16"
          aria-live="polite"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              PT. ZEA NUSANTARA GROUP
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Jelajahi Dunia,<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #D9A441 0%, #F0C060 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Kami Urus Perjalanannya.
              </span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
              Temukan perjalanan terbaik bersama Zea Wisata — mulai dari paket wisata, transportasi, hingga kebutuhan ticketing untuk perjalanan Anda.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary bg-accent hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Jelajahi Layanan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/40 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Floating service cards */}
        {heroReady && (
          <div className="absolute inset-0 pointer-events-none z-30" aria-hidden="true">
            {floatingCards.map((card, i) => {
              const positions = [
                'top-1/4 left-4 sm:left-12',
                'top-1/3 right-4 sm:right-12',
                'bottom-1/3 left-4 sm:left-16',
                'bottom-1/4 right-4 sm:right-16',
              ];
              const floatClasses = ['float-slow', 'float-medium', 'float-fast', 'float-slow'];
              return (
                <div
                  key={card.label}
                  className={`absolute ${positions[i]} ${floatClasses[i]} hidden sm:flex`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="glass-panel rounded-2xl px-4 py-3 flex items-center gap-3 min-w-max shadow-lg">
                    <span className="text-2xl" role="img" aria-label={card.label}>{card.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">{card.label}</p>
                      <p className="text-white/70 text-xs">{card.sub}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none" aria-hidden="true">
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}