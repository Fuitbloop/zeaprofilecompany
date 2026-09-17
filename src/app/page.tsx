import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import ServicesSection from '@/app/components/ServicesSection';
import DestinationsSection from '@/app/components/DestinationsSection';
import FleetSection from '@/app/components/FleetSection';
import TripExperienceSection from '@/app/components/TripExperienceSection';
import WhyUsSection from '@/app/components/WhyUsSection';
import CTASection from '@/app/components/CTASection';
import ContactSection from '@/app/components/ContactSection';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollProgress from '@/app/components/ScrollProgress';

export default function Homepage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <DestinationsSection />
        <FleetSection />
        <TripExperienceSection />
        <WhyUsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}