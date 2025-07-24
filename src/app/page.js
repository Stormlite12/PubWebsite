'use client';

import Hero from './components/Hero';
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Offers from './components/Offers';
import BarSections from './components/BarSections';
import ContactForm from './components/ContactForm';
import BackgroundWrapper from './components/BackgroundWrapper';
import BackgroundWrapper2 from './components/BackgroundWrapper2';
import Footer from './components/Footer';

// ✨ FIX: Removed the scroll-wrapper div.
// The page will now have natural, smooth scrolling.
export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Each section is a direct child of the main element */}
      <section>
        <BackgroundWrapper>
          <Hero />
        </BackgroundWrapper>
      </section>

      <section>
        <Aboutus />
      </section>

      <section>
        <Offers />
      </section>

      <section>
        <BackgroundWrapper2>
          <BarSections />
        </BackgroundWrapper2>
      </section>

      <section>
        <ContactForm />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
