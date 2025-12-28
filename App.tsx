import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CheckoutSection from './components/CheckoutSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-200">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <HowItWorks />
        <Features />
        <TargetAudience />
        <Testimonials />
        <Faq />
        <CheckoutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;