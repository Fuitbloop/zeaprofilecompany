'use client';
import React, { useEffect, useRef, useState } from 'react';

const serviceOptions = [
  'Paket Wisata',
  'Rental Transportasi',
  'Ticketing',
  'Family Gathering',
  'Honeymoon',
  'Wisata Religi',
  'Outbound',
  'Lainnya',
];

// Nomor WhatsApp tujuan (format internasional tanpa + dan spasi)
const WHATSAPP_NUMBER = '6285846986524';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const el = sectionRef.current;
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
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, whatsapp, service, message } = formData;

    // Validasi: cek field wajib (nama, email, whatsapp)
    // Jika kosong → tampilkan error, tidak lanjut ke WhatsApp
    if (!name.trim() || !email.trim() || !whatsapp.trim()) {
      setError('Pesan tidak boleh kosong');
      return;
    }

    setError('');

    // Susun pesan WhatsApp
    const waMessage =
`Halo, saya ingin konsultasi perjalanan.

*Nama:* ${name}
*Email:* ${email}
*No. WhatsApp:* ${whatsapp}
*Layanan:* ${service || '-'}
*Pesan:* ${message || '-'}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');

    // Tetap tampilkan state "submitted" seperti perilaku asli
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="kontak" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal-up">
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Kami Siap Membantu</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Hubungi Zea Wisata
          </h2>
          <div className="accent-line w-16 mx-auto mb-4" />
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Konsultasikan kebutuhan perjalanan Anda. Tim kami siap memberikan solusi terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 reveal-left flex flex-col gap-5">
            {/* Address */}
            <div className="contact-info-card rounded-3xl p-6 text-white">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-accent mb-1">Head Office</h3>
                  <address className="not-italic text-white/80 text-sm leading-relaxed">
                    Taman Asri Blok A7 No. 8<br />
                    Kel. Subangjaya, Kec. Cikole<br />
                    Kota Sukabumi 43116<br />
                    Jawa Barat
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-accent mb-1">Email</h3>
                  <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=zeawisatatourandtravel.smi@gmail.com&su=Konsultasi%20Perjalanan%20-%20Zea%20Wisata" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-white/80 text-sm hover:text-white transition-colors break-all"
>
  zeawisatatourandtravel.smi@gmail.com
</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-accent mb-1">WhatsApp</h3>
                  <div className="flex flex-col gap-1">
                    <a href="https://wa.me/6285846986524" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-white transition-colors">
                      0858 4698 6524
                    </a>
                    <a href="https://wa.me/6285860551234" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-white transition-colors">
                      0858 6055 1234
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline card */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-primary text-sm">PT. ZEA NUSANTARA GROUP</p>
                <p className="text-muted-foreground text-xs mt-0.5">YOUR JOURNEY, OUR PRIORITY</p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 reveal-right">
            <div className="bg-white rounded-3xl border border-border shadow-xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-primary mb-2">Pesan Terkirim!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Terima kasih telah menghubungi Zea Wisata. Tim kami akan segera merespons pesan Anda.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground bg-primary hover:bg-secondary transition-all duration-300"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Form konsultasi perjalanan">
                  <h3 className="text-xl font-extrabold text-primary mb-6">Konsultasi Perjalanan</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground mb-2">
                        Nama Lengkap <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all duration-200 text-sm"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-2">
                        Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@anda.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all duration-200 text-sm"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-whatsapp" className="block text-sm font-semibold text-foreground mb-2">
                        Nomor WhatsApp <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all duration-200 text-sm"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-semibold text-foreground mb-2">
                        Jenis Layanan
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all duration-200 text-sm"
                        aria-label="Pilih jenis layanan"
                      >
                        <option value="">Pilih Layanan</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan kebutuhan perjalanan Anda..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  {error && (
                    <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 text-base flex items-center justify-center gap-2"
                    aria-label="Kirim pesan konsultasi"
                  >
                    Kirim Pesan
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9 22,2"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}