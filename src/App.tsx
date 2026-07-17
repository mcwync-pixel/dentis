import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Fees from './components/Fees';
import WhyUs from './components/WhyUs';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);

  const openBooking = (service?: string) => {
    setPresetService(service);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <Services onBook={(service?: string) => openBooking(service)} />
        <About onBook={() => openBooking()} />
        <Fees onBook={() => openBooking()} />
        <WhyUs />
        <Faq />
        <Cta onBook={() => openBooking()} />
      </main>
      <Footer onBook={() => openBooking()} />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        presetService={presetService}
      />
    </div>
  );
}
