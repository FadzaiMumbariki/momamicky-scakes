import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=80',
    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=1600&q=80',
    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1600&q=80'
  ];

  const words = ['Spooky', 'Delicious', 'Creative', 'Magical'];

  useEffect(() => {
    const interval = setInterval(() => {
      import { useState, useEffect } from 'react';
      import './Hero.css';

      const slides = [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=80',
        'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=1600&q=80',
        'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1600&q=80',
      ];
      const words = ['Spooky', 'Delicious', 'Creative', 'Magical'];

      export default function Hero() {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [currentWord, setCurrentWord] = useState(0);

        useEffect(() => {
          slides.forEach((src) => { new Image().src = src; });
          const slideTimer = setInterval(
            () => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
          const wordTimer = setInterval(
            () => setCurrentWord((p) => (p + 1) % words.length), 2000);
          return () => { clearInterval(slideTimer); clearInterval(wordTimer); };
        }, []);

        return (
          <section className="hero" id="home">
            <div className="hero-slideshow" aria-hidden="true">
              {slides.map((slide, i) => (
                <div
                  key={slide}
                  className={`slide ${i === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide})` }}
                />
              ))}
            </div>
            <div className="hero-overlay" />

            <div className="hero-content">
              <h1 className="hero-headline">
                <span key={currentWord} className="rotating-word" aria-live="off">
                  {words[currentWord]}
                </span>
                <br />
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
