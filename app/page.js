import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Offers from '../components/Offers';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Offers />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}