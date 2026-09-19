import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  // Data untuk Produk & Layanan
  const services = [
    {
      title: "Open Trip & Privat",
      desc: "Kami juga melayani untuk open trip outbond dan privat trip, beserta family gathering dan juga paket honeymoon."
    },
    {
      title: "Paket Wisata",
      desc: "Kami memberikan paket wisata mulai dari domestik, international, inbound, dan wisata religi / ziarah, serta melayani untuk keberangkatan Umroh dan Haji."
    },
    {
      title: "Land Tour",
      desc: "Kami melayani wisata untuk pergi ke pabrik atau tempat – tempat belanja yang ada diberbagai negara, yang pasti akan terjamin kualitas dan harga terbaik."
    },
    {
      title: "Kunjungan & Study",
      desc: "Kami mensupport kegiatan seperti kunjungan dalam dan luar negeri, serta kunjungan industri dalam negeri dan luar negeri. Studi banding & study tour."
    },
    {
      title: "System Agency",
      desc: "Kami membuka peluang bisnis untuk para pecinta travel untuk bisa mendapatkan passive income dari perjalanan wisata ini."
    },
    {
      title: "Sewa Armada",
      desc: "Armada Bus Standart Pariwisata dengan menggunakan mesin terbaru dengan didampingi Driver dan Co Driver yang professional (Bus, ELF, Haice, Inova)."
    }
  ];

  // Data untuk Support System
  const supports = [
    {
      title: "Akses Website/Media Sosial",
      desc: "Mudah diakses melalui website official dan media Sosial."
    },
    {
      title: "Landing Page",
      desc: "Untuk bisa mudah menjangkau setiap aktifitas promosi, kami berikan landing page referral link yang bisa dishare."
    },
    {
      title: "Sosial Media",
      desc: "Kami sediakan fayer & video untuk bisa share diberbagai social media untuk promosi."
    },
    {
      title: "Waktu Flexible",
      desc: "Bisa mudah diakses dimana saja dan kapan saja."
    },
    {
      title: "System Plan",
      desc: "Kami siapkan support system yg mudah untuk mendapatkan informasi terkait passive income & komisi yang didapatkan."
    }
  ];

  return (
    <>
      {/* Header dipanggil di sini */}
      <Header />

      {/* Tidak ada pt-32, jadi foto langsung nempel ke header */}
      <main className="min-h-screen bg-background pb-16">
        
        {/* SECTION 1: ABOUT US — Hero dengan background panorama3.jpg */}
        {/* pt-44 memberi ruang agar teks turun ke bawah & tidak ketutupan header */}
        <section className="relative pt-24 sm:pt-25 pb-20 border-b border-border/50 overflow-hidden">
          {/* Background Image */}
          <Image
            src="/assets/images/panorama3.jpg"
            alt="Panorama Zea Wisata Tour and Travel"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay warna primary agar tema warna brand tetap terasa & teks terbaca */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/95" aria-hidden="true" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Tentang Kami
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
              Zea Wisata Tour and Travel
            </h1>

            <div className="accent-line w-16 mb-8" />

            <div className="text-white/90 text-base sm:text-lg leading-relaxed max-w-4xl space-y-4">
              <p>
                Adalah Perusahaan jasa pelayanan perjalanan wisata yang dimulai dari tahun 2018. Berawal dari hobi jalan-jalan dan berwisata, yang akhirnya bisa menciptakan peluang dan benefit. Seiring dengan perjalan waktu dengan meningkatnya permintaan dari wisatawan Dalam dan Luar Negeri, terbentuklah Zea Wisata Tour and Travel dibawah naungan PT. Zea Nusantara Group yang tercatat dalam akta pendirian
              </p>

              {/* Kartu Legalitas — versi glass biar menyatu dengan background */}
              <div className="flex justify-center px-4">
                <div className="w-full max-w-xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-5 text-center shadow-lg sm:px-8 sm:py-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Legalitas Perusahaan
                  </p>

                  <div className="space-y-3">
                    <div className="rounded-xl bg-white/10 px-4 py-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                        Nomor Induk Berusaha
                      </p>
                      <p className="mt-1 break-all text-sm font-semibold tracking-wide text-white sm:text-base">
                        2708260057839
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 px-4 py-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                        Nomor AHU
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold leading-relaxed text-white sm:text-base">
                        AHU-0068982.AH.01.01.TAHUN 2026
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        Tanggal 27 Agustus 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Dengan Legalitas yang resmi kami selalu memberikan pelayanan yang terbaik dalam memberikan fasilitas perjalanan wisatawan dalam dan luar negeri, baik group dan private dengan team yang sudah berpengalaman, Profesional dan terpercaya.
              </p>
            </div>

            {/* 3 Pilar About Us — glass cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-colors">
                <h3 className="text-lg font-bold text-accent mb-3">Respon Cepat</h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Kami pastikan setiap perjalanan anda dan mengesankan dengan informasi yang cepat yang bisa kami berikan.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-colors">
                <h3 className="text-lg font-bold text-accent mb-3">Pelayanan Nyaman</h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Kami memberikan fasilitas yang nyaman selama anda berwisata bersama kami, mulai dari penginapan, makan dan transportasi yang digunakan.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-colors">
                <h3 className="text-lg font-bold text-accent mb-3">Destinasi Favorite</h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Tempat – tempat wisata yang kami berikan adalah tempat yang paling iconic di negaranya jadi anda bisa mengabadikan sebagai kenang-kenangan yang tidak akan terlupakan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: VISI & MISI */}
        <section className="py-16 bg-muted/30 border-b border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Visi & Misi
            </h2>
            <div className="accent-line w-16 mb-10" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Visi */}
              <div className="lg:col-span-1">
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 h-full">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-6 bg-accent rounded-sm inline-block"></span>
                    VISI
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Menjadikan Perusahaan jasa perjalanan wisata yang terbaik, terdepan dan terpercaya dalam memberikan mutu serta pelayanan kepada wisatawan serta menjadi rekan kerja / partner kerja yang dapat diandalkan baik sekarang maupun dimasa yang akan datang.
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="lg:col-span-2">
                <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm h-full">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-accent rounded-sm inline-block"></span>
                    MISI
                  </h3>
                  <ul className="space-y-4 text-muted-foreground text-sm sm:text-base">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Membantu memudahkan perencanaan perjalanan wisata yang terbaik dan nyaman bagi para pengguna jasa wisata.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Menjadi Perusahaan penyedia layanan jasa wisata dengan kualitas layanan prima yang maksimal dan memuaskan kepada semua wisatawan.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Menjadi Perusahaan jasa wisata terbaik serta terpercaya yang mempunyai pelayanan lengkap khususnya bidang paket wisata dalam dan luar negeri, pembuatan dokumen perjalanan serta penyewaan bus dan lainnya.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Selalu berusaha meningkatkan pelayanan yang terbaik demi kepuasan pengguna jasa wisata.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Memberikan support system yang baik untuk para agen travel yang bekerja sama.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR PRODUCT & SERVICE — background plane.jpg */}
        <section className="relative py-16 border-b border-border/50 overflow-hidden">
          {/* Background Image */}
          <Image
            src="/assets/images/plane3.jpg"
            alt="Produk & Layanan Zea Wisata Tour and Travel"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay warna primary agar tema warna brand tetap terasa & teks terbaca */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/95" aria-hidden="true" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
              Produk & Layanan Kami
            </h2>
            <div className="accent-line w-16 mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-colors">
                  <h3 className="text-lg font-bold text-accent mb-3">{service.title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: SUPPORT SYSTEM */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
                Support System
              </h2>
              <div className="accent-line w-16 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supports.map((support, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  </div>
                  <h3 className="text-md font-bold text-primary mb-2">{support.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {support.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: BACK TO HOME */}
        <section className="py-16 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </section>

      </main>

      {/* Footer dipanggil di sini */}
      <Footer />
    </>
  );
}