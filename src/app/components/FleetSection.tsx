'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const fleetCategories = [
{
  category: 'Bus Pariwisata',
  description: 'Armada bus terbaik untuk perjalanan wisata rombongan dengan kapasitas besar.',
  seats: '30 – 59 Seat',
  icon: '🚌',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b0c4684c-1772094892511.png",
  alt: 'Bus pariwisata modern berwarna putih biru untuk perjalanan wisata rombongan kapasitas besar',
  options: ['59 Seat', '50 Seat', '47 Seat', '45 Seat', '40 Seat', '35 Seat', '33 Seat', '31 Seat', '30 Seat'],
  badge: 'Populer'
},
{
  category: 'Elf Long',
  description: 'Kendaraan medium yang nyaman untuk perjalanan kelompok kecil hingga menengah.',
  seats: '17 – 19 Seat',
  icon: '🚐',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1387a8689-1766473627566.png",
  alt: 'Elf Long minibus putih untuk perjalanan kelompok kecil dengan kapasitas 17 hingga 19 penumpang',
  options: ['19 Seat', '17 Seat'],
  badge: 'Fleksibel'
},
{
  category: 'Hi Ace',
  description: 'Solusi transportasi premium untuk grup kecil dengan kenyamanan maksimal.',
  seats: '8 – 13 Seat',
  icon: '🚙',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1755c215c-1778855124137.png",
  alt: 'Toyota HiAce putih premium untuk perjalanan grup kecil dengan kapasitas 8 hingga 13 penumpang',
  options: ['13 Seat', '10 Seat', '8 Seat'],
  badge: 'Premium'
},
{
  category: 'Mini Bus',
  description: 'Kendaraan mewah dan elegan untuk perjalanan pribadi atau keluarga.',
  seats: 'Berbagai Pilihan',
  icon: '🚗',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_141be13e1-1776690759154.png",
  alt: 'Mobil Alphard mewah hitam untuk perjalanan VIP keluarga atau bisnis yang nyaman dan elegan',
  options: ['Alphard', 'Innova', 'Expander', 'Avanza'],
  badge: 'Mewah'
}];


export default function FleetSection() {
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
      { threshold: 0.1 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="armada" className="py-16 sm:py-24 bg-primary relative overflow-hidden noise-overlay">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Pilihan Kendaraan</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Armada Untuk Setiap Perjalanan
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, #D9A441, transparent)' }} />
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
            Dari bus kapasitas besar hingga kendaraan mewah — semua tersedia untuk memastikan perjalanan Anda nyaman.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleetCategories?.map((fleet, i) =>
          <div
            key={fleet?.category}
            className={`reveal-up stagger-${i + 1} group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden card-lift hover:bg-white/10 transition-all duration-400`}
            role="article"
            aria-label={`Armada ${fleet?.category}`}>
            
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="fleet-badge px-3 py-1 rounded-full text-xs font-bold">{fleet?.badge}</span>
              </div>

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={fleet?.image}
                alt={fleet?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                loading="lazy" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl" role="img" aria-label={fleet?.category}>{fleet?.icon}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-extrabold text-white mb-1">{fleet?.category}</h3>
                <p className="text-accent text-xs font-semibold mb-3 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  {fleet?.seats}
                </p>
                <p className="text-white/60 text-xs leading-relaxed mb-4">{fleet?.description}</p>

                {/* Options */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {fleet?.options?.map((opt) =>
                <span key={opt} className="px-2 py-0.5 rounded-lg bg-white/10 text-white/70 text-xs font-medium border border-white/10">
                      {opt}
                    </span>
                )}
                </div>

                <a
                href="https://wa.me/6285846986524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-primary bg-accent hover:bg-accent/90 transition-all duration-300"
                aria-label={`Tanya armada ${fleet?.category}`}>
                
                  Tanya Armada
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden scroll-x-container flex gap-4 pb-4" role="list" aria-label="Pilihan armada kendaraan">
          {fleetCategories?.map((fleet, i) =>
          <div
            key={fleet?.category}
            className="flex-shrink-0 w-72 bg-white/5 border border-white/10 rounded-3xl overflow-hidden snap-start"
            role="listitem">
            
              <div className="relative h-40">
                <AppImage
                src={fleet?.image}
                alt={fleet?.alt}
                fill
                className="object-cover"
                sizes="288px"
                loading={i < 2 ? 'eager' : 'lazy'} />
              
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="fleet-badge px-2.5 py-1 rounded-full text-xs font-bold">{fleet?.badge}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-extrabold text-white mb-1">{fleet?.category}</h3>
                <p className="text-accent text-xs font-semibold mb-2">{fleet?.seats}</p>
                <p className="text-white/60 text-xs leading-relaxed mb-3">{fleet?.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {fleet?.options?.map((opt) =>
                <span key={opt} className="px-2 py-0.5 rounded-lg bg-white/10 text-white/70 text-xs border border-white/10">{opt}</span>
                )}
                </div>
                <a
                href="https://wa.me/6285846986524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-primary bg-accent"
                aria-label={`Tanya armada ${fleet?.category}`}>
                
                  Tanya Armada
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}