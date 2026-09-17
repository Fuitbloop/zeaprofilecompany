'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const stats = [
  { value: 10, suffix: '+', label: 'Destinasi Wisata', description: 'Destinasi pilihan di seluruh Indonesia' },
  { value: 4, suffix: '+', label: 'Kategori Layanan', description: 'Paket wisata, transport, ticketing & lebih' },
  { value: 15, suffix: '+', label: 'Pilihan Armada', description: 'Bus, Elf, HiAce, MiniVan & lebih' },
  { value: 100, suffix: '%', label: 'Komitmen Pelayanan', description: 'Kepuasan pelanggan prioritas utama' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, suffix, label, description, index }: { value: number; suffix: string; label: string; description: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1500, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-up stagger-${index + 1} text-center group`}
    >
      <div className="inline-flex flex-col items-center">
        <div className="relative mb-3">
          <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/10 transition-colors duration-300">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded bg-accent" />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-5xl sm:text-6xl font-extrabold text-primary tracking-tighter">{count}</span>
          <span className="text-3xl font-extrabold text-accent mb-1">{suffix}</span>
        </div>
        <h3 className="text-base font-bold text-foreground mb-1">{label}</h3>
        <p className="text-sm text-muted-foreground max-w-[160px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="tentang" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-up">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Mengapa Zea Wisata?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
            Perjalanan Lebih Mudah Bersama Zea Wisata
          </h2>
          <div className="accent-line w-16 mx-auto mb-4" />
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Kami hadir untuk memastikan setiap perjalanan Anda menjadi pengalaman yang tak terlupakan, dengan layanan lengkap dan tim yang berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Value props */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '✓', text: 'Perjalanan Lebih Praktis' },
            { icon: '✓', text: 'Pilihan Layanan Lengkap' },
            { icon: '✓', text: 'Transportasi Beragam' },
            { icon: '✓', text: 'Melayani Personal & Rombongan' },
          ].map((vp, i) => (
            <div
              key={vp.text}
              className={`reveal-up stagger-${i + 1} flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300`}
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold text-sm" aria-hidden="true">{vp.icon}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{vp.text}</span>
            </div>
          ))}
        </div>
                <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
          >
            Kenali Zea Wisata Lebih Dekat
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}