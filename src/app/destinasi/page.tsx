import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Data Destinasi Domestik (8 destinasi)
const domesticDestinations = [
  {
    title: "Wisata Bali",
    description: "Menjelajahi keindahan Pulau Dewata dengan berbagai destinasi ikonik dan budaya yang memukau.",
    highlights: ["Sangeh", "Bedugul", "Pantai Kute", "Pantai Sanur", "Pura Besakih", "Bali Teater"],
    icon: "🏝️"
  },
  {
    title: "Wisata Yogyakarta",
    description: "Menyelami kekayaan budaya, sejarah, dan kuliner khas Kota Gudeg.",
    highlights: ["Keraton Yogyakarta", "Malioboro", "Candi Borobudur", "Candi Prambanan"],
    icon: "🏛️"
  },
  {
    title: "Wisata Lombok",
    description: "Pesona pantai eksotis dan budaya Sasak yang memikat di Nusa Tenggara Barat.",
    highlights: ["Gili Trawangan", "Pantai Kuta Mandalika", "Air Terjun Sendang Gile", "Sasak Village"],
    icon: "🌊"
  },
  {
    title: "Wisata Raja Ampat",
    description: "Surga bawah laut terbaik dunia dengan keanekaragaman hayati yang luar biasa.",
    highlights: ["Pianemo", "Wayag", "Arborek", "Telaga Bintang"],
    icon: "🐠"
  },
  {
    title: "Wisata Labuan Bajo",
    description: "Gerbang menuju Taman Nasional Komodo dengan panorama pulau yang dramatis.",
    highlights: ["Pulau Padar", "Pink Beach", "Komodo Island", "Gua Rangko"],
    icon: "🦎"
  },
  {
    title: "Wisata Bromo",
    description: "Menyaksikan sunrise magis di lautan pasir Gunung Bromo yang ikonik.",
    highlights: ["Penanjakan", "Lautan Pasir", "Kawah Bromo", "Bukit Teletubbies"],
    icon: "🌋"
  },
  {
    title: "Wisata Danau Toba",
    description: "Danau vulkanik terbesar di dunia dengan budaya Batak yang kental.",
    highlights: ["Samosir", "Bukit Holbung", "Air Terjun Sipiso-piso", "Desa Tomok"],
    icon: "🛶"
  },
  {
    title: "Wisata Belitung",
    description: "Pantai dengan batu granit raksasa dan laut biru jernih yang memukau.",
    highlights: ["Tanjung Tinggi", "Pulau Lengkuas", "Danau Kaolin", "Pantai Tanjung Kelayang"],
    icon: "⛱️"
  }
];

// Data Wisata Alam & Rekreasi Jawa Barat (8 destinasi)
const natureDestinations = [
  {
    title: "Situ Gunung",
    description: "Danau tenang di tengah hutan Sukabumi dengan jembatan gantung ikonik dan udara pegunungan yang segar.",
    highlights: ["Danau Situ Gunung", "Jembatan Gantung", "Curug Sawer", "Camping Ground"],
    icon: "🏞️",
    badge: "Tersedia"
  },
  {
    title: "Pelabuhan Ratu",
    description: "Pantai eksotis dengan pasir hitam dan ombak besar, cocok untuk healing dan kuliner seafood.",
    highlights: ["Pantai Citepus", "Cimaja Surfing", "Geopark Ciletuh", "Seafood Market"],
    icon: "🌊",
    badge: "Tersedia"
  },
  {
    title: "Geopark Ciletuh",
    description: "Situs warisan dunia UNESCO dengan tebing dramatis, air terjun, dan keanekaragaman geologi.",
    highlights: ["Pantai Palangpang", "Curug Awang", "Tebing Karang", "Amphitheater Alam"],
    icon: "⛰️",
    badge: "Tersedia"
  },
  {
    title: "Taman Safari",
    description: "Safari park keluarga dengan ribuan satwa dari seluruh dunia dalam suasana alam terbuka.",
    highlights: ["Safari Journey", "Baby Zoo", "Istana Panda", "Cowboy Show"],
    icon: "🦁",
    badge: "Tersedia"
  },
  {
    title: "Kawah Putih",
    description: "Danau vulkanik eksotis dengan air kehijauan dan suasana berkabut yang memesona.",
    highlights: ["Kawah Putih", "Ranca Upas", "Glamping Lakeside", "Situ Patenggang"],
    icon: "🏔️",
    badge: "Tersedia"
  },
  {
    title: "Tangkuban Perahu",
    description: "Gunung berapi aktif dengan kawah dramatis dan legenda Sangkuriang yang melegenda.",
    highlights: ["Kawah Ratu", "Kawah Domas", "Pemandian Air Panas", "View Point"],
    icon: "🌋",
    badge: "Tersedia"
  },
  {
    title: "Trans Studio Bandung",
    description: "Taman hiburan indoor terbesar di Indonesia dengan puluhan wahana seru untuk semua usia.",
    highlights: ["Broadway Studio", "Science Center", "Studio Adventure", "Family Fun"],
    icon: "🎢",
    badge: "Tersedia"
  },
  {
    title: "Sari Ater",
    description: "Pemandian air panas alami dari Gunung Tangkuban Perahu yang menyegarkan tubuh dan pikiran.",
    highlights: ["Kolam Air Panas", "Pemandian Alami", "Kuliner Lokal", "Camping Area"],
    icon: "♨️",
    badge: "Tersedia"
  }
];

// Data Destinasi Mancanegara (8 negara) — badge per destinasi
const internationalDestinations = [
  {
    title: "Malaysia",
    description: "Menikmati pesona modern dan sejarah di Negeri Jiran.",
    highlights: ["Petronas Tower KL", "Kota Tua Melaka", "Langkawi Island"],
    icon: "🏙️",
    badge: "Tersedia"
  },
  {
    title: "Thailand",
    description: "Merasakan keunikan budaya, kuliner, dan pantai tropis Thailand.",
    highlights: ["Bangkok", "Phuket Pathong Beach", "Chiang Mai", "Pattaya"],
    icon: "🛕",
    badge: "Tersedia"
  },
  {
    title: "Singapore",
    description: "Kota modern dengan taman futuristik dan pusat belanja kelas dunia.",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Orchard Road"],
    icon: "🦁",
    badge: "Tersedia"
  },
  {
    title: "Vietnam",
    description: "Keindahan teluk karst, kuliner khas, dan budaya yang kaya.",
    highlights: ["Ha Long Bay", "Hanoi Old Quarter", "Da Nang", "Hoi An"],
    icon: "🍜",
    badge: "Tersedia"
  },
  {
    title: "Japan",
    description: "Negeri Sakura dengan perpaduan tradisi dan teknologi modern.",
    highlights: ["Mount Fuji", "Shibuya", "Kyoto Temple", "Osaka Dotonbori"],
    icon: "🌸",
    badge: "Segera Hadir"
  },
  {
    title: "Korea Selatan",
    description: "Destinasi pop culture, kuliner, dan pemandangan empat musim.",
    highlights: ["Nami Island", "Myeongdong", "Gyeongbokgung", "Jeju Island"],
    icon: "🏯",
    badge: "Segera Hadir"
  },
  {
    title: "Turki",
    description: "Perpaduan budaya Timur dan Barat dengan sejarah yang megah.",
    highlights: ["Cappadocia", "Hagia Sophia", "Blue Mosque", "Bosphorus"],
    icon: "🕌",
    badge: "Segera Hadir"
  },
  {
    title: "Dubai",
    description: "Kota futuristik di tengah gurun dengan gedung-gedung ikonik.",
    highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"],
    icon: "🏗️",
    badge: "Segera Hadir"
  }
];

export default function DestinasiPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background pb-16">

        {/* ============================================================ */}
        {/* SECTION 1: HERO / CTA — background vacation.jpg + fade bawah  */}
        {/* ============================================================ */}
        <section className="relative pt-24 sm:pt-32 pb-32 sm:pb-40 overflow-hidden">
          <Image
            src="/assets/images/vacation.jpg"
            alt="Destinasi Wisata Zea Wisata Tour and Travel"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/95" aria-hidden="true" />

          <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
                Jelajahi Dunia
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
                Destinasi Wisata Impian
              </h1>
              <div className="accent-line w-16 mx-auto mb-6" />
              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Dari sabang sampai mancanegara — temukan destinasi terbaik pilihan Zea Wisata Tour and Travel
                untuk pengalaman perjalanan yang tak terlupakan.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: WISATA DOMESTIK                                   */}
        {/* ============================================================ */}
        <section className="relative py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-accent rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Wisata Domestik
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {domesticDestinations.map((dest, index) => (
                <div
                  key={index}
                  className="group relative bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Tersedia
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl mb-5 border border-accent/20 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-300">
                    {dest.icon}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-2">{dest.title}</h3>
                  <div className="w-10 h-0.5 bg-accent rounded-full mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                      Highlight Destinasi:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/5 text-foreground border border-accent/15 hover:bg-accent/15 hover:border-accent/40 hover:text-accent transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: WISATA ALAM & REKREASI JAWA BARAT (BARU)          */}
        {/* ============================================================ */}
        <section className="py-16 bg-muted/30 border-y border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-8 bg-accent rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Wisata Alam & Rekreasi
              </h2>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-8 ml-5">
              Jelajahi keindahan alam dan tempat rekreasi terbaik di Jawa Barat — dari pegunungan sejuk hingga pantai eksotis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {natureDestinations.map((dest, index) => (
                <div
                  key={index}
                  className="group relative bg-card p-6 rounded-3xl border border-border/50 shadow-sm hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Nomor besar dekoratif */}
                  <div className="absolute -top-3 -right-1 text-[100px] font-black text-primary/5 leading-none select-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Badge */}
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                      <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                      {dest.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl mb-4 border border-accent/20 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-300">
                    {dest.icon}
                  </div>

                  <h3 className="relative text-lg font-bold text-primary mb-2">{dest.title}</h3>
                  <div className="w-8 h-0.5 bg-accent rounded-full mb-3" />
                  <p className="relative text-sm text-muted-foreground leading-relaxed mb-5">
                    {dest.description}
                  </p>

                  <div className="relative">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2.5">
                      Highlight:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/5 text-foreground border border-accent/15 hover:bg-accent/15 hover:border-accent/40 hover:text-accent transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: WISATA MANCANEGARA                */}
        {/* ============================================ */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-accent rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Wisata Mancanegara
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internationalDestinations.map((dest, index) => (
                <div
                  key={index}
                  className="group relative bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -top-4 -right-2 text-[120px] font-black text-primary/5 leading-none select-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="absolute top-6 right-6">
                    <span
                      className={
                        dest.badge === "Segera Hadir"
                          ? "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground border border-border/60"
                          : "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20"
                      }
                    >
                      <span
                        className={
                          dest.badge === "Segera Hadir"
                            ? "w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse"
                            : "w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                        }
                      />
                      {dest.badge}
                    </span>
                  </div>

                  <div className="relative w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl mb-5 border border-accent/20 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-300">
                    {dest.icon}
                  </div>

                  <h3 className="relative text-xl font-bold text-primary mb-2">{dest.title}</h3>
                  <div className="w-10 h-0.5 bg-accent rounded-full mb-4" />
                  <p className="relative text-sm text-muted-foreground leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  <div className="relative">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                      Highlight Destinasi:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/5 text-foreground border border-accent/15 hover:bg-accent/15 hover:border-accent/40 hover:text-accent transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 5: UMRAH                             */}
        {/* ============================================ */}
        <section className="py-16 bg-muted/30 border-y border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-accent rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Paket Umrah
              </h2>
            </div>

            <div className="relative bg-card p-8 sm:p-12 rounded-3xl border border-primary/10 text-center overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden="true" />

              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-accent text-primary shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Tersedia
                </span>
              </div>

              <div className="relative">
                <div className="text-5xl mb-6">🕋</div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Perjalanan Spiritual ke Tanah Suci
                </h3>
                <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed mb-8">
                  Kami menyediakan paket perjalanan Umrah yang nyaman, aman, dan penuh makna.
                  Dapatkan informasi eksklusif mengenai jadwal keberangkatan dan harga spesial dengan menghubungi tim kami.
                </p>

                <Link
                  href="/#kontak"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
                >
                  Hubungi Kami untuk Info Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 6: KEMBALI KE BERANDA                */}
        {/* ============================================ */}
        <section className="py-12 text-center border-t border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-semibold hover:bg-muted/80 transition-colors"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}