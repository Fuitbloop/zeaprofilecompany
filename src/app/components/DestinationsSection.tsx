'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link'; // <-- Tambahan import Link
import AppImage from '@/components/ui/AppImage';

const destinations = [
{
  name: 'Situ Gunung',
  category: 'Natural Escape',
  location: 'Sukabumi, Jawa Barat',
  image: "https://images.unsplash.com/photo-1596760217362-70066efec25a",
  alt: 'Pemandangan danau Situ Gunung yang tenang dikelilingi hutan hijau lebat di Sukabumi',
  span: 'lg:col-span-2 lg:row-span-2',
  imgHeight: 'h-80 sm:h-96 lg:h-full'
},
{
  name: 'Pelabuhan Ratu',
  category: 'Coastal Adventure',
  location: 'Sukabumi, Jawa Barat',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_106344dcf-1788323625777.png",
  alt: 'Pantai Pelabuhan Ratu dengan ombak besar dan pasir hitam yang eksotis',
  span: 'lg:col-span-1',
  imgHeight: 'h-52'
},
{
  name: 'Geopark Ciletuh',
  category: 'Explore Nature',
  location: 'Sukabumi, Jawa Barat',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_117bd112e-1788323626340.png",
  alt: 'Tebing hijau megah Geopark Ciletuh dengan air terjun dan lembah yang dramatis',
  span: 'lg:col-span-1',
  imgHeight: 'h-52'
},
{
  name: 'Taman Safari',
  category: 'Family Experience',
  location: 'Bogor, Jawa Barat',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10698b70a-1788323626419.png",
  alt: 'Hewan-hewan liar di Taman Safari Indonesia dengan pengunjung keluarga yang menikmati safari',
  span: 'lg:col-span-1',
  imgHeight: 'h-52'
},
{
  name: 'Kawah Putih',
  category: 'Mountain Escape',
  location: 'Bandung, Jawa Barat',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b21121b-1765643555011.png",
  alt: 'Kawah Putih Bandung dengan air berwarna putih kehijauan dan pemandangan gunung yang memukau',
  span: 'lg:col-span-1',
  imgHeight: 'h-52'
},
{
  name: 'Tangkuban Perahu',
  category: 'Explore West Java',
  location: 'Bandung, Jawa Barat',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16df5eb99-1782394530040.png",
  alt: 'Kawah Tangkuban Perahu yang aktif dengan asap belerang dan pemandangan gunung berapi',
  span: 'lg:col-span-2',
  imgHeight: 'h-52'
},
{
  name: 'Trans Studio Bandung',
  category: 'Family Entertainment',
  location: 'Bandung, Jawa Barat',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15bdc0a95-1788323626609.png",
  alt: 'Trans Studio Bandung taman hiburan indoor terbesar dengan wahana dan atraksi seru',
  span: 'lg:col-span-1',
  imgHeight: 'h-52'
},
{
  name: 'Sari Ater',
  category: 'Relax & Refresh',
  location: 'Subang, Jawa Barat',
  image: "https://images.unsplash.com/photo-1669694841884-95d35a6bc287",
  alt: 'Pemandian air panas alami Sari Ater yang dikelilingi pepohonan hijau dan udara segar pegunungan',
  span: 'lg:col-span-1',
  imgHeight: 'h-52'
}];


export default function DestinationsSection() {
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
      { threshold: 0.05 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="destinasi" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="reveal-up">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Tempat Tujuan</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              Destinasi Pilihan
            </h2>
            <div className="accent-line w-16 mt-4" />
          </div>
          <div className="reveal-up stagger-2">
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
              Dari pegunungan sejuk hingga pantai eksotis — kami siap mengantarkan Anda ke destinasi impian.
            </p>
          </div>
        </div>

        {/* Desktop bento grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 auto-rows-[260px]">
          {/* col-1-2 row-1-2: Situ Gunung */}
          <div className="lg:col-span-2 lg:row-span-2 reveal-up stagger-1 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage
              src={destinations?.[0]?.image}
              alt={destinations?.[0]?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1280px) 50vw, 640px" />
            
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-primary mb-2">
                {destinations?.[0]?.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">{destinations?.[0]?.name}</h3>
              <p className="text-white/70 text-sm mt-1 flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {destinations?.[0]?.location}
              </p>
            </div>
          </div>

          {/* col-3 row-1: Pelabuhan Ratu */}
          <div className="lg:col-span-1 reveal-up stagger-2 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage src={destinations?.[1]?.image} alt={destinations?.[1]?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-accent text-primary mb-1">{destinations?.[1]?.category}</span>
              <h3 className="text-base font-bold text-white">{destinations?.[1]?.name}</h3>
            </div>
          </div>

          {/* col-4 row-1: Geopark Ciletuh */}
          <div className="lg:col-span-1 reveal-up stagger-3 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage src={destinations?.[2]?.image} alt={destinations?.[2]?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-accent text-primary mb-1">{destinations?.[2]?.category}</span>
              <h3 className="text-base font-bold text-white">{destinations?.[2]?.name}</h3>
            </div>
          </div>

          {/* col-3 row-2: Taman Safari */}
          <div className="lg:col-span-1 reveal-up stagger-4 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage src={destinations?.[3]?.image} alt={destinations?.[3]?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-accent text-primary mb-1">{destinations?.[3]?.category}</span>
              <h3 className="text-base font-bold text-white">{destinations?.[3]?.name}</h3>
            </div>
          </div>

          {/* col-4 row-2: Kawah Putih */}
          <div className="lg:col-span-1 reveal-up stagger-5 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage src={destinations?.[4]?.image} alt={destinations?.[4]?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-accent text-primary mb-1">{destinations?.[4]?.category}</span>
              <h3 className="text-base font-bold text-white">{destinations?.[4]?.name}</h3>
            </div>
          </div>

          {/* col-1-2 row-3: Tangkuban Perahu */}
          <div className="lg:col-span-2 reveal-up stagger-6 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage src={destinations?.[5]?.image} alt={destinations?.[5]?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-primary mb-2">{destinations?.[5]?.category}</span>
              <h3 className="text-xl font-bold text-white">{destinations?.[5]?.name}</h3>
              <p className="text-white/70 text-sm mt-1">{destinations?.[5]?.location}</p>
            </div>
          </div>

          {/* col-3 row-3: Trans Studio */}
          <div className="lg:col-span-1 reveal-up stagger-7 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage src={destinations?.[6]?.image} alt={destinations?.[6]?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-accent text-primary mb-1">{destinations?.[6]?.category}</span>
              <h3 className="text-base font-bold text-white">{destinations?.[6]?.name}</h3>
            </div>
          </div>

          {/* col-4 row-3: Sari Ater */}
          <div className="lg:col-span-1 reveal-up stagger-8 group relative rounded-3xl overflow-hidden img-zoom cursor-pointer">
            <AppImage src={destinations?.[7]?.image} alt={destinations?.[7]?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="dest-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-accent text-primary mb-1">{destinations?.[7]?.category}</span>
              <h3 className="text-base font-bold text-white">{destinations?.[7]?.name}</h3>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet horizontal scroll */}
        <div className="lg:hidden scroll-x-container flex gap-4 pb-4" role="list" aria-label="Destinasi wisata">
          {destinations?.map((dest, i) =>
          <div
            key={dest?.name}
            className="flex-shrink-0 w-64 h-72 rounded-3xl overflow-hidden relative img-zoom group cursor-pointer snap-start"
            role="listitem">
            
              <AppImage
              src={dest?.image}
              alt={dest?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="256px"
              loading={i < 3 ? 'eager' : 'lazy'} />
            
              <div className="dest-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-accent text-primary mb-1">{dest?.category}</span>
                <h3 className="text-base font-bold text-white">{dest?.name}</h3>
                <p className="text-white/70 text-xs mt-0.5">{dest?.location}</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-10 reveal-up">
          {/* Mengubah <a href="#kontak"> menjadi <Link href="/destinasi"> */}
          <Link
            href="/destinasi"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-primary-foreground bg-primary hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5">
            
            Jelajahi Semua Destinasi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}