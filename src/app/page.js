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


  export default function Home() {
  return (
    <div
      id="scroll-wrapper"
      style={{
        height: '100vh',
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    ><Header />   
      <section style={{ scrollSnapAlign: 'start'}}>
        <BackgroundWrapper>
          <Hero />
          <Header />
        </BackgroundWrapper>
  
      </section>
      <section style={{ scrollSnapAlign: 'start'}}>
        <Aboutus />
      </section>
            

      <section style={{ scrollSnapAlign: 'start' }}>
          <Offers />
      </section>


      <section style={{ scrollSnapAlign: 'start'}}>
        <BackgroundWrapper2>
          <BarSections />
        </BackgroundWrapper2>
      </section>

      <section style={{ scrollSnapAlign: 'start' }}>
        <ContactForm />
      </section>

      <section style={{ scrollSnapAlign: 'start'}}>
        <Footer />
      </section>
    </div>
  );
}

