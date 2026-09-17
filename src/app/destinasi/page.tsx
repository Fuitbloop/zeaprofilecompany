import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Data Destinasi Domestik
const domesticDestinations = [
  {
    title: "Wisata Bali",
    description: "Menjelajahi keindahan Pulau Dewata dengan berbagai destinasi ikonik dan budaya yang memukau.",
    highlights: [
      "Sangeh", 
      "Bedugul", 
      "Pantai Kute", 
      "Pantai Sanur", 
      "Pura Besakih", 
      "Bali Teater"
    ],
    icon: "🏝️"
  },
  {
    title: "Wisata Yogyakarta",
    description: "Menyelami kekayaan budaya, sejarah, dan kuliner khas Kota Gudeg.",
    highlights: [
      "Keraton Yogyakarta", 
      "Malioboro"
    ],
    icon: "🏛️"
  }
];

// Data Destinasi Mancanegara
const internationalDestinations = [
  {
    title: "Malaysia",
    description: "Menikmati pesona modern dan sejarah di Negeri Jiran.",
    highlights: [
      "Petronas Tower KL", 
      "Kota Tua Melaka", 
      "Langkawi Island"
    ],
    icon: "🏙️"
  },
  {
    title: "Thailand",
    description: "Merasakan keunikan budaya, kuliner, dan pantai tropis Thailand.",
    highlights: [
      "Bangkok", 
      "Phuket Pathong Beach"
    ],
    icon: "🛕"
  }
];

export default function DestinasiPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background pt-32 pb-16">
        {/* SECTION 1: HERO / HEADER HALAMAN */}
        <section className="py-12 border-b border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Jelajahi Dunia
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-6">
              Destinasi Wisata Impian
            </h1>
            <div className="accent-line w-16 mx-auto mb-6" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Kami sedang mempersiapkan paket-paket perjalanan terbaik untuk Anda. 
              Berikut adalah beberapa destinasi yang akan segera hadir di Zea Wisata Tour and Travel.
            </p>
          </div>
        </section>

        {/* SECTION 2: WISATA DOMESTIK */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-accent rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Wisata Domestik
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {domesticDestinations.map((dest, index) => (
                <div key={index} className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group hover:border-accent/50 transition-colors">
                  {/* Badge Coming Soon */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">
                      Coming Soon
                    </span>
                  </div>

                  <div className="text-4xl mb-4">{dest.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{dest.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Highlight Destinasi:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dest.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WISATA MANCANEGARA */}
        <section className="py-16 bg-muted/30 border-y border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-accent rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Wisata Mancanegara
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internationalDestinations.map((dest, index) => (
                <div key={index} className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group hover:border-accent/50 transition-colors">
                  {/* Badge Coming Soon */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">
                      Coming Soon
                    </span>
                  </div>

                  <div className="text-4xl mb-4">{dest.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{dest.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Highlight Destinasi:</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {dest.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: UMRAH */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-accent rounded-sm"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Paket Umrah
              </h2>
            </div>

            <div className="bg-primary/5 p-8 sm:p-12 rounded-3xl border border-primary/10 text-center relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-accent text-primary shadow-sm">
                  Segera Hadir
                </span>
              </div>
              
              <div className="text-5xl mb-6">🕋</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Perjalanan Spiritual ke Tanah Suci</h3>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed mb-8">
                Kami sedang menyusun paket perjalanan Umrah yang nyaman, aman, dan penuh makna. 
                Dapatkan informasi eksklusif mengenai jadwal keberangkatan dan harga spesial segera setelah resmi diluncurkan.
              </p>
              
              <Link
                href="/#kontak"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                Hubungi Kami untuk Info Lebih Lanjut
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: KEMBALI KE BERANDA */}
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