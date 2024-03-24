import Header from "./components/Header";
import HeroSection from "./components/HeroSection"
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
      <main className="max-w-[1440px] bg-white m-auto">
        <div className="grid">
          <Header />
          <HeroSection />
          <Highlights />
          <Testimonials />
          <About />
          <Footer />
        </div>
      </main>
  );
}

export default App
