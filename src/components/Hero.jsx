import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  const slides = [
    '/homepage-hero-momma.jpg',
    '/cakes/cake-02.jpg',
    '/cakes/cake-09.jpg',
    '/cakes/cake-06.jpg',
    '/cakes/cake-08.jpg'
  ];

  const words = ['Spooky', 'Delicious', 'Creative', 'Magical'];

  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(slideTimer);
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slideshow" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="rotating-word">{words[currentWord]}</span><br />
          Cakes for Every Occasion
        </h1>
        <p className="hero-subtitle">
          Handcrafted with love, baked to perfection. Making your celebrations sweeter since 2010.
        </p>
        <a href="#menu" className="btn">Explore Our Menu</a>
      </div>
    </section>
  );
}

