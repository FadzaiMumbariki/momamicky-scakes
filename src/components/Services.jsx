import { useState, useEffect } from 'react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  
  const slides = [
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/service-01.jpg',
      title: 'Wedding Cakes',
      description: 'Custom designed cakes for your special day'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/service-02.jpg',
      title: 'Birthday Cakes',
      description: 'Colorful and fun designs for all ages'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/service-03.jpg',
      title: 'Corporate Events',
      description: 'Professional catering for business functions'
    }
  ];

  const services = [
    {
      title: 'Custom Design',
      description: 'Every cake is designed specifically for your event with attention to every detail.'
    },
    {
      title: 'Premium Ingredients',
      description: 'We use only the finest, freshest ingredients in all our creations.'
    },
    {
      title: 'Timely Delivery',
      description: 'Professional delivery service ensures your cake arrives fresh and on time.'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="services-split" id="services">
      <div className="services-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`services-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h5>{slide.title}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        
        <div className="slider-nav">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="services-content">
        <span className="tag">OUR SERVICES</span>
        <h2>What We Offer</h2>
        <p>
          From intimate celebrations to grand events, we create stunning cakes that taste 
          as amazing as they look. Each creation is a work of art, crafted with passion and precision.
        </p>
        
        <div className="accordion">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`accordion-item ${openAccordion === index ? 'open' : ''}`}
            >
              <div 
                className="accordion-title"
                onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
              >
                <svg className="accordion-icon" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
                {service.title}
              </div>
              <div className="accordion-body">
                {service.description}
              </div>
            </div>
          ))}
        </div>
        
        <a href="#contact" className="btn" style={{ marginTop: '24px' }}>
          Get A Quote
        </a>
      </div>
    </section>
  );
}
