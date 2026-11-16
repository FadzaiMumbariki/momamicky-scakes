import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  
  const slides = [
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/slide-01.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/slide-02.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/slide-03.jpg'
  ];

  const words = ['Spooky', 'Delicious', 'Creative', 'Magical'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="hero" id="home">
      <div className="hero-slideshow">
        {slides.map((slide, index) => (
          <div 
            key={index}
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
