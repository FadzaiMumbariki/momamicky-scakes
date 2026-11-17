import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import StubPage from './StubPage.jsx';
import AboutPage from './AboutPage.jsx';
import PackagesPage from './PackagesPage.jsx';
import ServicesPage from './ServicesPage.jsx';
import ContactPage from './ContactPage.jsx';
import GalleryPage from './GalleryPage.jsx';
import { CartProvider, useCart } from './context/CartContext.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import CustomCakeBuilderModal from './components/CustomCakeBuilderModal.jsx';
import './App.css';
import './hero-fix.css'; // must come AFTER App.css so it overrides old .hero rules

// Hero content lives outside the component so it is created once
const HERO_SLIDES = [
  '/cakes/1000569250.webp',
  '/cakes/cake-02.webp',
  '/cakes/1000569113.webp',
  '/cakes/1000569248.webp',
  '/cakes/cake-09.webp',
  '/cakes/1000569276.webp',
  '/cakes/cake-06.webp',
  '/cakes/1000569263.webp'
];
const HERO_WORDS = ['Custom Cakes', 'Cupcakes', 'Artisan Treats', 'Celebration Cakes'];

// Navigation Bar Component
function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, cartTotal, setIsCartOpen, setCustomizerOpen } = useCart();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/packages', label: 'Packages' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="site-header">
      <div className="header-main" style={{ padding: '8px 40px' }}>
        <Link to="/" className="site-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Momma Micky's Cakes Official Logo"
            style={{ height: '90px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.35))' }}
          />
        </Link>
        <nav className={`site-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={location.pathname === item.to ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setCustomizerOpen(true)}
            className="btn btn-outline"
            style={{
              padding: '8px 16px',
              fontSize: '0.85em',
              borderColor: 'var(--color-orange)',
              color: 'var(--color-orange)',
              background: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            Build Custom Cake
          </button>
          <button
            type="button"
            className="cart-btn"
            onClick={() => setIsCartOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            title="Open Order Cart"
          >
            <svg className="cart-icon" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <path d="M188 167H938C943 167 949 169 953 174 957 178 959 184 958 190L926 450C919 502 875 542 823 542H263L271 583C281 631 324 667 373 667H854C866 667 875 676 875 687S866 708 854 708H373C304 708 244 659 230 591L129 83H21C9 83 0 74 0 62S9 42 21 42H146C156 42 164 49 166 58L188 167ZM771 750C828 750 875 797 875 854S828 958 771 958 667 912 667 854 713 750 771 750ZM354 750C412 750 458 797 458 854S412 958 354 958 250 912 250 854 297 750 354 750Z"/>
            </svg>
            <span>${cartTotal.toFixed(2)} ({cartCount})</span>
          </button>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div className="footer-about">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
            <img
              src="/logo.png"
              alt="Momma Micky's Cakes Logo"
              style={{ height: '62px', width: 'auto', objectFit: 'contain' }}
            />
            <div className="footer-logo-txt" style={{ margin: 0 }}>Momma Micky's Cakes</div>
          </div>
          <p>Premium handcrafted cakes and artisan confections. We bake each order with love, artistic mastery, and high-quality ingredients.</p>
        </div>
        <div className="footer-col">
          <h5>Navigation</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Our Specialties</h5>
          <ul>
            <li><Link to="/packages">Wedding Cakes</Link></li>
            <li><Link to="/packages">Birthday Cakes</Link></li>
            <li><Link to="/packages">Children's Themed Cakes</Link></li>
            <li><Link to="/packages">Artisan Fruit Cakes</Link></li>
            <li><Link to="/packages">Luxury Glamour Cakes</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact Us</h5>
          <div className="footer-contact-item">
            <span>Address:</span>
            <span>3697 Emganwini</span>
          </div>
          <div className="footer-contact-item">
            <span>Info:</span>
            <a href="mailto:mudiwas980@gmail.com">mudiwas980@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <span>Orders:</span>
            <a href="mailto:orders@mommamickyscakes.com">orders@mommamickyscakes.com</a>
          </div>
          <div className="footer-contact-item">
            <span>Phone:</span>
            <a href="tel:+263788340047">+263 78 834 0047</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Momma Micky's Cakes — All Rights Reserved.</p>
        <div className="footer-social">
          <a href="#" className="social-link" title="Facebook">fb</a>
          <a href="#" className="social-link" title="Instagram">ig</a>
          <a href="#" className="social-link" title="Twitter">tw</a>
          <a href="#" className="social-link" title="YouTube">yt</a>
        </div>
      </div>
    </footer>
  );
}

// HomePage Component
function HomePage() {
  const { addToCart, setCustomizerOpen } = useCart();

  const [serviceIdx, setServiceIdx] = useState(0);
  const serviceSlides = [
    {
      img: '/cakes/cake-09.webp',
      title: 'Bespoke Baking',
      desc: 'Our approach combines creativity and confectionery artistry to craft cakes that elevate every celebration.'
    },
    {
      img: '/cakes/cake-02.webp',
      title: 'Party & Event Catering',
      desc: 'From weddings to milestone birthdays, Momma Micky\'s Cakes designs dessert tables and signature centerpieces.'
    }
  ];

  const [openAccordion, setOpenAccordion] = useState(0);
  const testimonials = [
    {
      quote: "Momma Micky's Cakes made our celebration unforgettable! The custom tier cake was both breathtakingly beautiful and delicious.",
      name: "John Miller",
      city: "Seattle",
      avatar: '/cakes/cake-03.webp'
    },
    {
      quote: "The details on the custom birthday cake were a massive hit with all our guests. Highly recommend Momma Micky's Cakes!",
      name: "Emily Johnson",
      city: "Miami",
      avatar: '/cakes/cake-08.webp'
    },
    {
      quote: "Unmatched attention to detail and mouth-watering flavors. Momma Micky's Cakes is our family's go-to bakery for every special occasion.",
      name: "Sarah Williams",
      city: "New York",
      avatar: '/cakes/cake-06.webp'
    }
  ];
  const [tIdx, setTIdx] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setServiceIdx((prev) => (prev + 1) % serviceSlides.length);
    }, 5500);

    const tInterval = setInterval(() => {
      setTIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(tInterval);
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero-background" style={{ backgroundImage: "url('/cakes/cake-02.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-headline">Momma Micky's Cakes</h1>
          <p className="hero-subtitle">High Quality Standards</p>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-inner">
          <div className="about-left">
            <div className="about-left-bg" style={{ backgroundImage: "url('/cakes/cake-01.webp')" }}></div>
            <img
              className="about-circle-img"
              src="/cakes/cake-01.webp"
              alt="Momma Micky's Sliced Layer Cake"
            />
            <div className="about-text">
              <h2>Artisan Layer Cakes & Quality</h2>
              <h5>Momma Micky's Signature Sponge & Frosting</h5>
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
          <img src="/cakes/cake-02.webp" alt="Black & Gold Luxury Cake" />
          <img src="/cakes/cake-03.webp" alt="Chic Hat Glamour Cake" />
          <img src="/cakes/cake-06.webp" alt="Stitch & Angel Birthday Cake" />
          <img src="/cakes/cake-07.webp" alt="Dino peppa Birthday Cake" />
        </div>
      </section>

      {/* SERVICES SPLIT */}
      <section className="services-split" id="services">
        <div className="services-slider">
          {serviceSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`services-slide ${idx === serviceIdx ? 'active' : ''}`}
              style={{ backgroundImage: `url('${slide.img}')` }}
            >
              <div className="slide-content">
                <h5>{slide.title}</h5>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
          <div className="slider-nav">
            {serviceSlides.map((_, idx) => (
              <span
                key={idx}
                className={`slider-dot ${idx === serviceIdx ? 'active' : ''}`}
                onClick={() => setServiceIdx(idx)}
              />
            ))}
          </div>
        </div>

        <div className="services-content">
          <div>
            <span className="tag">Crafted Just For You</span>
            <h2 style={{ marginTop: '10px' }}>Custom Cakes Made For Every Moment</h2>
            <p style={{ marginTop: '16px' }}>At Momma Micky's Cakes, we turn your sweetest dreams into reality with exquisite cakes baked fresh daily from premium, natural ingredients.</p>
            <p style={{ marginTop: '12px' }}>Whether celebrating a wedding, milestone birthday, or themed celebration, our designs bring elegance, joy, and unforgettable taste to your table.</p>
          </div>

          <div className="accordion" style={{ marginTop: '20px' }}>
            <div className={`accordion-item ${openAccordion === 0 ? 'open' : ''}`}>
              <div className="accordion-title" onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
                <svg className="accordion-icon" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
                Custom Design Consultation
              </div>
              <div className="accordion-body">
                We collaborate closely with you on theme, colors, flavor combinations, and decorative toppers to match your party aesthetic.
              </div>
            </div>
            <div className={`accordion-item ${openAccordion === 1 ? 'open' : ''}`}>
              <div className="accordion-title" onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
                <svg className="accordion-icon" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
                Finest Organic & Fresh Ingredients
              </div>
              <div className="accordion-body">
                Every tier is baked with Belgian chocolate, pure Madagascar vanilla, churned butter, and farm-fresh eggs for superior flavor and texture.
              </div>
            </div>
            <div className={`accordion-item ${openAccordion === 2 ? 'open' : ''}`}>
              <div className="accordion-title" onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}>
                <svg className="accordion-icon" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
                Careful Delivery & Setup
              </div>
              <div className="accordion-body">
                Momma Micky's Cakes provides temperature-controlled delivery and on-site tiered assembly for all large event orders.
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/services" className="btn">Our Full Services</Link>
          </div>
        </div>
      </section>

      {/* CAKE SHOP SPOTLIGHT */}
      <section className="growth-section" id="shop">
        <div className="growth-header">
          <span className="tag">Momma Micky's Cakes Favorites</span>
          <h2>Our Custom Handcrafted Signatures</h2>
        </div>
        <div className="growth-grid">
          <div className="growth-card">
            <img src="/cakes/cake-02.webp" alt="Pablo Black & Gold Cake" />
            <div className="growth-card-info">
              <h4>Pablo Luxury Black & Gold</h4>
              <p>Stunning contrast cake with black brushstroke, gold leaf, and floating metallic spheres.</p>
              <div className="growth-card-actions">
                <span>$65.00</span>
                <button
                  onClick={() => addToCart({
                    id: 1,
                    name: 'Pablo Luxury Black & Gold',
                    price: 65.00,
                    image: '/cakes/cake-02.webp',
                    category: 'luxury',
                    description: 'Stunning contrast cake with black brushstroke, gold leaf, and floating metallic spheres.'
                  })}
                  className="btn"
                  style={{ marginLeft: 'auto', padding: '8px 18px', cursor: 'pointer' }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
          <div className="growth-card">
            <img src="/cakes/cake-09.webp" alt="Lady Laca Floral Gold Cake" />
            <div className="growth-card-info">
              <h4>Lady Laca Sunburst Blossom</h4>
              <p>Pastel peach tier with golden fans, orange sugar dahlias, and gold butterfly accents.</p>
              <div className="growth-card-actions">
                <span>$70.00</span>
                <button
                  onClick={() => addToCart({
                    id: 2,
                    name: 'Lady Laca Sunburst Blossom',
                    price: 70.00,
                    image: '/cakes/cake-09.webp',
                    category: 'wedding',
                    description: 'Pastel peach tier with golden fans, orange sugar dahlias, and gold butterfly accents.'
                  })}
                  className="btn"
                  style={{ marginLeft: 'auto', padding: '8px 18px', cursor: 'pointer' }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
          <div className="growth-card">
            <img src="/cakes/cake-06.webp" alt="Stitch & Angel Theme Cake" />
            <div className="growth-card-info">
              <h4>Stitch & Angel Birthday Fantasy</h4>
              <p>Baby blue tier with custom Stitch & Angel edible art, ice cream cone topper & pink hearts.</p>
              <div className="growth-card-actions">
                <span>$75.00</span>
                <button
                  onClick={() => addToCart({
                    id: 3,
                    name: 'Stitch & Angel Birthday Fantasy',
                    price: 75.00,
                    image: '/cakes/cake-06.webp',
                    category: 'kids',
                    description: 'Baby blue tier with custom Stitch & Angel edible art, ice cream cone topper & pink hearts.'
                  })}
                  className="btn"
                  style={{ marginLeft: 'auto', padding: '8px 18px', cursor: 'pointer' }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
          <div className="growth-card">
            <img src="/cakes/cake-03.webp" alt="Mzukulu Pink Glamour" />
            <div className="growth-card-info">
              <h4>Mzukulu Pink Glamour Hat</h4>
              <p>Blush pink finish with chic fashion topper, golden bubbles, and dual candles.</p>
              <div className="growth-card-actions">
                <span>$68.00</span>
                <button
                  onClick={() => addToCart({
                    id: 4,
                    name: 'Mzukulu Pink Glamour Hat',
                    price: 68.00,
                    image: '/cakes/cake-03.webp',
                    category: 'celebration',
                    description: 'Blush pink finish with chic fashion topper, golden bubbles, and dual candles.'
                  })}
                  className="btn"
                  style={{ marginLeft: 'auto', padding: '8px 18px', cursor: 'pointer' }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
          <div className="growth-card">
            <img src="/cakes/1000569250.webp" alt="Monarch Marble & Gold" />
            <div className="growth-card-info">
              <h4>Monarch Marble & Gold</h4>
              <p>Hand-painted marble fondant with veined gold leaf and minimalist modern cake architecture.</p>
              <div className="growth-card-actions">
                <span>$79.00</span>
                <button
                  onClick={() => addToCart({
                    id: 27,
                    name: 'Monarch Marble & Gold',
                    price: 79.00,
                    image: '/cakes/1000569250.webp',
                    category: 'luxury',
                    description: 'Hand-painted marble fondant with veined gold leaf and minimalist modern cake architecture.'
                  })}
                  className="btn"
                  style={{ marginLeft: 'auto', padding: '8px 18px', cursor: 'pointer' }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
          <div className="growth-card">
            <img src="/cakes/cake-10.webp" alt="Minnie Mouse Chocolate Dream" />
            <div className="growth-card-info">
              <h4>Alma's Minnie Mouse Chocolate Cake</h4>
              <p>Rich chocolate sponge filled with vanilla buttercream, mini chocolate bars, and Minnie toppers.</p>
              <div className="growth-card-actions">
                <span>$60.00</span>
                <button
                  onClick={() => addToCart({
                    id: 6,
                    name: "Alma's Minnie Mouse Chocolate",
                    price: 60.00,
                    image: '/cakes/cake-10.webp',
                    category: 'kids',
                    description: 'Rich chocolate sponge filled with vanilla buttercream, mini chocolate bars, and Minnie toppers.'
                  })}
                  className="btn"
                  style={{ marginLeft: 'auto', padding: '8px 18px', cursor: 'pointer' }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/gallery" className="btn">Explore All 50+ Cakes in Gallery</Link>
        </div>
      </section>

      {/* INTERACTIVE CAKE BUILDER PROMO BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-pink-soft) 0%, var(--color-beige) 100%)',
        padding: '70px 30px',
        color: 'var(--color-text)',
        borderTop: '2px solid var(--color-gold)',
        borderBottom: '2px solid var(--color-gold)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '1.05em' }}>
              Custom Confection Studio
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2em, 4vw, 3.2em)', color: 'var(--color-primary)', margin: '12px 0 16px', lineHeight: 1.2 }}>
              Design Your Own Dream Cake
            </h2>
            <p style={{ color: 'var(--color-text)', fontSize: '1.05em', lineHeight: 1.7, marginBottom: '28px' }}>
              Have an exact idea in mind? Use our interactive cake builder to choose tier sizes, gourmet sponge flavors, fillings, artisan frostings, and 24K gold or floral accents with instant live pricing.
            </p>
            <button
              onClick={() => setCustomizerOpen(true)}
              className="btn"
              style={{ padding: '14px 34px', fontSize: '1.1em', cursor: 'pointer' }}
            >
              Launch Interactive Cake Builder
            </button>
          </div>
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.4)' }}>
            <img
              src="/cakes/1000569250.webp"
              alt="Momma Micky Custom Cake Studio"
              style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              background: 'rgba(23, 21, 28, 0.85)',
              backdropFilter: 'blur(6px)',
              padding: '12px 20px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#fff'
            }}>
              <span style={{ fontSize: '0.9em', fontWeight: 600 }}>Tiers • Flavors • Frostings • Inscriptions</span>
              <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>Customized For You</span>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES / PRICING */}
      <section className="packages-section" id="prices">
        <div className="packages-header">
          <span className="tag">Celebration Packs</span>
          <h2>Momma Micky's Cakes Bundles</h2>
        </div>
        <div className="packages-grid">
          <div className="package-card">
            <div className="package-bg" style={{ backgroundImage: "url('/cakes/cake-04.webp')" }}></div>
            <div className="package-overlay"></div>
            <div className="package-content">
              <h4>Purple Ruffle Glam</h4>
              <p>Textured lavender rosettes, silver glitter top, and black bow ribbons.</p>
            </div>
          </div>
          <div className="package-card">
            <div className="package-bg" style={{ backgroundImage: "url('/cakes/cake-07.webp')" }}></div>
            <div className="package-overlay"></div>
            <div className="package-content">
              <h4>Dino Explorer Birthday</h4>
              <p>Vibrant teal tier with friendly dinosaur toppers and jungle palm leaves.</p>
            </div>
          </div>
          <div className="package-card">
            <div className="package-bg" style={{ backgroundImage: "url('/cakes/cake-05.webp')" }}></div>
            <div className="package-overlay"></div>
            <div className="package-content">
              <h4>Traditional Fruit Cake Feast</h4>
              <p>Rich, slow-matured spiced fruit loaves packed with candied cherries and raisins.</p>
            </div>
          </div>
          <div className="package-card">
            <div className="package-bg" style={{ backgroundImage: "url('/cakes/cake-01.webp')" }}></div>
            <div className="package-overlay"></div>
            <div className="package-content">
              <h4>Golden Velvet Multi-Tier</h4>
              <p>Four tall layers of red velvet and vanilla sponge with golden sphere accents.</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/packages" className="btn" style={{ background: '#fff', color: 'var(--color-orange)' }}>View All Packages</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-bg" style={{ backgroundImage: "url('/cakes/cake-02.webp')" }}></div>
        <div className="testimonials-overlay"></div>
        <div className="testimonials-inner">
          <p className="testimonials-title">What Our Clients Say About Momma Micky's Cakes</p>
          <div className="testimonial-carousel">
            <div className="testimonial-slide active">
              <p className="testimonial-text">"{testimonials[tIdx].quote}"</p>
              <div className="testimonial-author">
                <img className="testimonial-avatar" src={testimonials[tIdx].avatar} alt={testimonials[tIdx].name} />
                <div>
                  <div className="testimonial-name">{testimonials[tIdx].name}</div>
                  <div className="testimonial-city">{testimonials[tIdx].city}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-nav">
            <div className="testimonial-btn" onClick={() => setTIdx((tIdx - 1 + testimonials.length) % testimonials.length)}>
              <svg viewBox="0 0 1000 1000"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"/></svg>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`t-dot ${idx === tIdx ? 'active' : ''}`}
                  onClick={() => setTIdx(idx)}
                />
              ))}
            </div>
            <div className="testimonial-btn" onClick={() => setTIdx((tIdx + 1) % testimonials.length)}>
              <svg viewBox="0 0 1000 1000"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section" id="newsletter">
        <div className="newsletter-inner">
          <span className="tag">Sweet Deals</span>
          <h2>Join Momma Micky's VIP Club</h2>
          <p>Subscribe to receive seasonal cake menus, discounts on custom party orders, and free baking recipes from Momma Micky's Cakes!</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          {subscribed && (
            <p style={{ marginTop: '16px', color: 'var(--color-orange)', fontFamily: 'var(--font-heading)' }}>
              Thank you for subscribing to Momma Micky's Cakes!
            </p>
          )}
        </div>
      </section>

      {/* VIDEO MODAL */}
      <div className={`video-modal ${isVideoOpen ? 'open' : ''}`} onClick={() => setIsVideoOpen(false)}>
        <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
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
    </>
  );
}

function AppContent({ showScrollTop }) {
  const { toastMessage } = useCart();

  return (
    <div className="mommamickys-app">
      <NavigationBar />
      <CartDrawer />
      <CustomCakeBuilderModal />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: 'var(--color-primary)',
          color: '#fff',
          padding: '16px 26px',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderLeft: '4px solid var(--color-orange)',
          animation: 'fadeIn 0.3s ease'
        }}>
          <span style={{ fontSize: '1.4em' }}></span>
          <div style={{ fontWeight: 600, fontSize: '0.95em' }}>{toastMessage}</div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      {/* SCROLL TO TOP */}
      <div
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg>
      </div>
    </div>
  );
}

// Main App Router Setup
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <Router>
        <AppContent showScrollTop={showScrollTop} />
      </Router>
    </CartProvider>
  );
}
