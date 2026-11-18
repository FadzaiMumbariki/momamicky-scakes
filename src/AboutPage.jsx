import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <div className="about-page-view" style={{ paddingTop: '110px' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: "url('/about-hero-baker.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
          textAlign: 'center',
          color: '#fff',
          overflow: 'hidden',
          padding: '100px 20px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(23, 21, 28, 0.45) 0%, rgba(23, 21, 28, 0.65) 50%, rgba(23, 21, 28, 0.82) 100%)',
            zIndex: 1
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '850px', margin: '0 auto' }}>
          <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '1.05em', fontWeight: 600, letterSpacing: '1px' }}>What We Do</span>
          <h1 style={{ fontSize: 'clamp(2.5em, 5.5vw, 4em)', margin: '14px 0 18px', color: '#fff', lineHeight: 1.15, fontFamily: 'var(--font-heading)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
            Discover More About Our Work
          </h1>
          <p style={{ fontSize: '1.1em', color: 'rgba(255,255,255,0.95)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 28px', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
            At Momma Micky's Cakes, baking is an art form. We are dedicated to creating memorable culinary moments with handcrafted celebration cakes baked with passion, love, and the finest natural ingredients.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn" style={{ padding: '12px 30px', fontSize: '1em' }}>Contact Us</Link>
            <Link to="/packages" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff', padding: '12px 30px', fontSize: '1em' }}>Explore Cakes</Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION - Split with Image */}
      <section style={{ background: '#fff', padding: '0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', minHeight: '620px', alignItems: 'stretch' }}>
          
          {/* Left Content Column */}
          <div style={{ padding: '80px 60px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '1.25em', marginBottom: '14px', display: 'block', fontWeight: 600 }}>
              What we do
            </span>
            <h2 style={{ fontSize: 'clamp(2.6em, 5vw, 4.2em)', color: 'var(--color-primary)', lineHeight: 1.15, marginBottom: '28px', fontFamily: 'var(--font-heading)' }}>
              Discover more about<br />our work
            </h2>
            <p style={{ color: 'var(--color-text)', fontSize: '1.05em', lineHeight: 1.85, maxWidth: '540px', marginBottom: '34px' }}>
              Our team is committed to delivering high-quality services tailored to your needs. With years of experience and a passion for excellence, we focus on creating solutions that truly make a difference. We believe in building strong relationships based on trust and clear communication.
            </p>

            {/* Progress Bar Item */}
            <div style={{ maxWidth: '500px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.05em', color: 'var(--color-primary)', fontWeight: 600 }}>
                  High Quality Standards
                </span>
                <span style={{ color: 'var(--color-orange)', fontWeight: 700 }}>85%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--color-orange)', borderRadius: '4px', transition: 'width 1.2s ease' }}></div>
              </div>
            </div>

            <div>
              <Link to="/contact" className="btn" style={{ padding: '14px 38px', fontSize: '1.15em' }}>
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div style={{ position: 'relative', minHeight: '450px' }}>
            <img
              src="/cakes/cake-04.webp"
              alt="Momma Micky's Handcrafted Treats"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 2. DISCOVER MORE ABOUT OUR WORK (SPLIT + VIDEO) */}
      <section className="about-section" style={{ background: 'var(--color-beige)', padding: '0' }}>
        <div className="about-inner">
          <div className="about-left">
            <div className="about-left-bg" style={{ backgroundImage: "url('/cakes/cake-01.webp')" }}></div>
            <img
              className="about-circle-img"
              src="/cakes/cake-01.webp"
              alt="Momma Micky's Sliced Layer Cake"
            />
            <div className="about-text">
              <h2>Discover more about our work</h2>
              <h5>Attention To Detail</h5>
              <p style={{ color: 'var(--color-text)', marginTop: '14px', maxWidth: '420px', fontSize: '0.95em' }}>
                Every single tier is designed from sketch to oven with meticulous precision. We combine delicate sponge textures with artisan frostings to deliver perfection in every slice.
              </p>
            </div>
          </div>
          <div className="play-btn-wrap" style={{ backgroundImage: "url('/cakes/cake-04.webp')" }}>
            <div className="play-btn" onClick={() => setIsVideoOpen(true)}>
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          <img loading="lazy" decoding="async" src="/cakes/cake-02.webp" alt="Pablo Luxury Cake" />
          <img loading="lazy" decoding="async" src="/cakes/cake-03.webp" alt="Mzukulu Pink Glamour" />
          <img loading="lazy" decoding="async" src="/cakes/cake-06.webp" alt="Stitch & Angel Cake" />
          <img loading="lazy" decoding="async" src="/cakes/cake-07.webp" alt="Dino Birthday Cake" />
        </div>
      </section>

      {/* 3. EXPLORE OUR WORLD - THREE CARD PACKAGES */}
      <section style={{ padding: '90px 20px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '1.1em', marginBottom: '12px', display: 'block' }}>
              Explore our world
            </span>
            <h2 style={{ fontSize: 'clamp(2.2em, 5vw, 3.5em)', marginTop: '10px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
              Solutions made for your needs
            </h2>
            <p style={{ maxWidth: '700px', margin: '20px auto 0', color: 'var(--color-text)', fontSize: '1.05em', lineHeight: 1.8 }}>
              At the core of our mission is a deep commitment to excellence and client satisfaction. Our team works tirelessly to provide thoughtful solutions, ensuring that every detail reflects care.
            </p>
          </div>
          
          {/* Three Package Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            
            {/* Card 1: Comfort Plus */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease' }}>
              <img loading="lazy" decoding="async" 
                src="/cakes/cake-04.webp" 
                alt="Decorated cupcakes" 
                style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ background: '#fff', padding: '25px', textAlign: 'center' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5em', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Comfort Plus
                </h4>
                <p style={{ color: 'var(--color-orange)', fontWeight: 700, fontSize: '1.15em' }}>$120.00</p>
              </div>
            </div>

            {/* Card 2: Daily Favorite */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease' }}>
              <img loading="lazy" decoding="async" 
                src="/cakes/cake-07.webp" 
                alt="Dino Birthday Cake Daily Favorite" 
                style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ background: '#fff', padding: '25px', textAlign: 'center' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5em', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Daily Favorite
                </h4>
                <p style={{ color: 'var(--color-orange)', fontWeight: 700, fontSize: '1.15em' }}>$90.00</p>
              </div>
            </div>

            {/* Card 3: Basic Box */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease' }}>
              <img loading="lazy" decoding="async" 
                src="/cakes/cake-06.webp" 
                alt="Stitch Character Cake Basic Box" 
                style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ background: '#fff', padding: '25px', textAlign: 'center' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5em', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Basic Box
                </h4>
                <p style={{ color: 'var(--color-orange)', fontWeight: 700, fontSize: '1.15em' }}>$35.00</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CREATIVE IDEAS & MISSION (SPLIT STORY) */}
      <section style={{ background: 'var(--color-light)', padding: '90px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <span className="tag">Smart & Simple</span>
            <h2 style={{ fontSize: '2.5em', margin: '12px 0 20px' }}>Creative ideas for smart people</h2>
            <p style={{ color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '20px' }}>
              We pride ourselves on offering personalized support that helps you celebrate life's milestones. Every project is approached with dedication and attention to detail, ensuring the best possible outcome.
            </p>
            <p style={{ color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '30px' }}>
              At the core of our mission is a deep commitment to excellence and client satisfaction. Our team works tirelessly to provide thoughtful confectionery solutions, ensuring that every design reflects heartfelt celebration.
            </p>
            <Link to="/contact" className="btn">Get Started</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <img loading="lazy" decoding="async" src="/cakes/cake-08.webp" alt="Cake Detail" style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }} />
            <img loading="lazy" decoding="async" src="/cakes/cake-09.webp" alt="Cake Detail" style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', marginTop: '30px' }} />
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, var(--color-pink) 0%, var(--color-beige) 100%)', padding: '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text)' }}>
          <h2 style={{ fontSize: '2.4em', marginBottom: '14px', color: 'var(--color-primary)' }}>Taste the Passion in Every Slice</h2>
          <p style={{ fontSize: '1.15em', marginBottom: '28px', color: 'var(--color-text)' }}>
            Book a tasting or consult with our master baker for your upcoming celebration.
          </p>
          <Link to="/contact" className="cta-btn">Book Your Consultation</Link>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <div className={`video-modal ${isVideoOpen ? 'open' : ''}`} onClick={() => setIsVideoOpen(false)}>
        <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
          <div className="video-close" onClick={() => setIsVideoOpen(false)}>✕</div>
          {isVideoOpen && (
            <video
              src="/cakes/1000569213.mp4"
              controls
              autoPlay
              style={{ width: '100%', maxHeight: '80vh', borderRadius: '8px', display: 'block' }}
            >
              Your browser does not support HTML5 video.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
