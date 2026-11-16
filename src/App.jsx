import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Team from './components/Team';
import Growth from './components/Growth';
import Ideas from './components/Ideas';
import Packages from './components/Packages';
import CTA from './components/CTA';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Team />
      <Growth />
      <Ideas />
      <Packages />
      <CTA />
      <Blog />
      <Testimonials />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
