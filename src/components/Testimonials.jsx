import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Mommamicky's cakes are absolutely incredible! Our wedding cake was not only beautiful but tasted amazing. Every guest asked for the baker's contact information!",
      author: 'Jennifer Smith',
      location: 'New York, NY',
      avatar: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/avatar-01.jpg'
    },
    {
      text: "I've ordered birthday cakes for my family for years, and they never disappoint. The attention to detail and quality ingredients really shine through in every bite.",
      author: 'David Johnson',
      location: 'Los Angeles, CA',
      avatar: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/avatar-02.jpg'
    },
    {
      text: "As a corporate event planner, I trust Mommamicky's for all our company celebrations. Professional, reliable, and absolutely delicious!",
      author: 'Sarah Williams',
      location: 'Chicago, IL',
      avatar: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/avatar-03.jpg'
    }
  ];
  
  const next = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="testimonials-section">
      <div className="testimonials-bg"></div>
      <div className="testimonials-overlay"></div>
      
      <div className="testimonials-inner">
        <div className="testimonials-title">WHAT PEOPLE SAY</div>
        
        <div className="testimonial-carousel">
          <p className="testimonial-text">
            "{testimonials[currentTestimonial].text}"
          </p>
          
          <div className="testimonial-author">
            <img loading="lazy" src={testimonials[currentTestimonial].avatar} 
              alt={testimonials[currentTestimonial].author}
              className="testimonial-avatar"
            />
            <div>
              <div className="testimonial-name">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="testimonial-city">
                {testimonials[currentTestimonial].location}
              </div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-nav">
          <div className="testimonial-btn" onClick={prev}>
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`t-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
          
          <div className="testimonial-btn" onClick={next}>
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

