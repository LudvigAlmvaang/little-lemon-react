import { useState } from 'react';

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reservation from './components/Reservation';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleReservationClose = () => {
    setShowPopup(false);
  };

  const handleReservationOpen = () => {
    setShowPopup(true);
  };

  return (
    <main className="max-w-[1440px] bg-white m-auto">
      <Header />
      <HeroSection onReservationOpen={handleReservationOpen} />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
      <Reservation showPopup={showPopup} onClose={handleReservationClose} />
    </main>
  );
}

export default App;