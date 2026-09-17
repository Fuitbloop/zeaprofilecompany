'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const features = [
{
  title: 'Journey Planning',
  description: 'Perencanaan perjalanan yang detail dan terstruktur, disesuaikan dengan kebutuhan dan anggaran Anda.',
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>,

  color: 'bg-accent/10 text-accent'
},
{
  title: 'Transportasi',
  description: 'Armada kendaraan lengkap dan terawat untuk perjalanan nyaman dari titik awal hingga tujuan.',
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16,8 20,8 23,11 23,16 16,16 16,8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>,

  color: 'bg-secondary/10 text-secondary'
},
{
  title: 'Ticketing',
  description: 'Layanan pemesanan tiket pesawat, kapal, kereta, dan obyek wisata yang cepat dan terpercaya.',
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" /><path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" />
      </svg>,

  color: 'bg-emerald-500/10 text-emerald-600'
},
{
  title: 'Group Travel',
  description: 'Pengalaman luas mengelola perjalanan rombongan dari puluhan hingga ratusan peserta.',
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>,

  color: 'bg-primary/10 text-primary'
}];


export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
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
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden h-80 sm:h-[480px] img-zoom shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1cdfec334-1772098732744.png"
                alt="Wisatawan bahagia menikmati perjalanan bersama keluarga dengan pemandangan alam yang indah"
                fill
                className="object-cover transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy" />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Perjalanan Terpercaya</p>
                    <p className="text-white/70 text-xs">YOUR JOURNEY, OUR PRIORITY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating card */}
            <div className="absolute -top-6 -right-6 float-slow hidden lg:block" aria-hidden="true">
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-lg" role="img" aria-label="Bintang rating">⭐</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-sm">Kepuasan Pelanggan</p>
                    <p className="text-accent text-xs font-semibold">100% Komitmen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Keunggulan Kami</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4 leading-tight">
              Perjalanan Lebih Tenang Bersama Zea Wisata
            </h2>
            <div className="accent-line w-16 mb-6" />
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Kami bukan sekadar agen perjalanan. Zea Wisata adalah mitra perjalanan Anda yang hadir untuk memastikan setiap detail terpenuhi — dari awal perencanaan hingga Anda kembali ke rumah.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features?.map((feat, i) =>
              <div
                key={feat?.title}
                className={`reveal-up stagger-${i + 1} group flex flex-col gap-3 p-5 rounded-2xl bg-white border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 card-lift`}
                role="article"
                aria-label={feat?.title}>
                
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feat?.color} transition-transform duration-300 group-hover:scale-110`}>
                    {feat?.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feat?.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feat?.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}