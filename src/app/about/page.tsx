import Link from 'next/link';
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

      {/* pt-32 ditambahkan agar konten tidak tertutup Header yang posisinya fixed */}
      <main className="min-h-screen bg-background pt-32 pb-16">
        
        {/* SECTION 1: ABOUT US */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Tentang Kami
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-6">
              Zea Wisata Tour and Travel
            </h1>

            <div className="accent-line w-16 mb-8" />

            <div className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-4xl space-y-4">
              <p>
                Adalah Perusahaan jasa pelayanan perjalanan wisata yang dimulai dari tahun 2017. Berawal dari hobi liburan dan bisa menghasilkan income, juga seiring berjalannya waktu dengan meningkatnya permintaan dari wisatawan Dalam dan Luar Negeri, berdirilah Zea Wisata Tour and Travel.
              </p>
              <p>
                Dengan Legalitas yang resmi kami selalu memberikan pelayanan yang terbaik dalam memberikan fasilitas perjalanan wisatawan dalam dan luar negeri, baik group dan private dengan team yang sudah berpengalaman dan Profesional.
              </p>
            </div>

            {/* 3 Pilar About Us */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Respon Cepat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kami pastikan setiap perjalanan anda dan mengesankan dengan informasi yang cepat yang bisa kami berikan.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Pelayanan Nyaman</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kami memberikan fasilitas yang nyaman selama anda berwisata bersama kami, mulai dari penginapan, makan dan transportasi yang digunakan.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Destinasi Favorite</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

        {/* SECTION 3: OUR PRODUCT & SERVICE */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Produk & Layanan Kami
            </h2>
            <div className="accent-line w-16 mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:border-accent/50 transition-colors">
                  <h3 className="text-lg font-bold text-accent mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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