import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext.jsx';

export default function ServicesPage() {
  const { setCustomizerOpen } = useCart();
  return (
    <div className="services-page-view" style={{ paddingTop: '110px' }}>
      {/* HERO BANNER */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--color-pink) 0%, var(--color-beige) 100%)',
          textAlign: 'center',
          color: 'var(--color-text)',
          overflow: 'hidden',
          padding: '80px 20px'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ color: 'var(--color-gold)', fontSize: '1em' }}>What we do</span>
          <h1 style={{ fontSize: 'clamp(2.2em, 5vw, 3.5em)', margin: '12px 0 16px', color: 'var(--color-primary)', lineHeight: 1.2 }}>
            We help your business grow
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT - TWO COLUMN SPLIT */}
      <section style={{ background: '#fff', padding: '0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', minHeight: '700px', alignItems: 'stretch' }}>
          
          {/* Left Text Content */}
          <div style={{ padding: '100px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
            <p style={{ color: 'var(--color-text)', fontSize: '1.05em', lineHeight: 1.9, marginBottom: '28px' }}>
              Every client is unique, and so are our services designed with care. We combine industry knowledge with a commitment to excellence to create tailored solutions that work best for you. Our focus is on delivering consistent quality and fostering trust through clear communication.
            </p>
            <p style={{ color: 'var(--color-text)', fontSize: '1.05em', lineHeight: 1.9, marginBottom: '36px' }}>
              We believe quality service comes from passion, experience, and integrity combined. Our team is here to support you with personalized care and effective solutions tailored specifically for your needs. We prioritize your goals and work diligently to consistently exceed your expectations.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setCustomizerOpen(true)}
                className="btn"
                style={{ padding: '14px 34px', fontSize: '1.1em', cursor: 'pointer' }}
              >
                Build Custom Cake
              </button>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '14px 34px', fontSize: '1.1em' }}>
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div style={{ position: 'relative', minHeight: '500px' }}>
            <img
              src="/cakes/cake-02.jpg"
              alt="Momma Micky's Premium Services"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section style={{ padding: '100px 40px', background: 'var(--color-light)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '1.1em' }}>Our Services</span>
            <h2 style={{ fontSize: 'clamp(2.2em, 5vw, 3em)', margin: '12px 0 0', fontFamily: 'var(--font-heading)' }}>
              What We Offer
            </h2>
          </div>

          {/* Services Grid - 3 Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            
            {/* Service 1 */}
            <div style={{ background: '#fff', padding: '20px 16px', borderRadius: '6px', boxShadow: '0 3px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-orange)' }}>
                <img 
                  src="/cakes/cake-02.jpg" 
                  alt="Custom Design Consultation" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '0.95em', marginBottom: '8px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                Custom Design Consultation
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.5, fontSize: '0.75em' }}>
                We collaborate closely with you on theme, colors, flavor combinations, and decorative toppers to match your celebration aesthetic perfectly.
              </p>
            </div>

            {/* Service 2 */}
            <div style={{ background: '#fff', padding: '20px 16px', borderRadius: '6px', boxShadow: '0 3px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-orange)' }}>
                <img 
                  src="/cakes/cake-09.jpg" 
                  alt="Premium Organic Ingredients" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '0.95em', marginBottom: '8px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                Premium Organic Ingredients
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.5, fontSize: '0.75em' }}>
                Every tier is baked with Belgian chocolate, pure Madagascar vanilla, churned butter, and farm-fresh eggs for superior flavor and texture.
              </p>
            </div>

            {/* Service 3 */}
            <div style={{ background: '#fff', padding: '20px 16px', borderRadius: '6px', boxShadow: '0 3px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-orange)' }}>
                <img 
                  src="/cakes/cake-06.jpg" 
                  alt="Safe Delivery & Setup" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '0.95em', marginBottom: '8px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                Safe Delivery & Setup
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.5, fontSize: '0.75em' }}>
                Temperature-controlled delivery and professional on-site tiered assembly for all large event orders to ensure pristine presentation.
              </p>
            </div>

            {/* Service 4 */}
            <div style={{ background: '#fff', padding: '20px 16px', borderRadius: '6px', boxShadow: '0 3px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-orange)' }}>
                <img 
                  src="/cakes/cake-03.jpg" 
                  alt="Edible Art & Decorations" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '0.95em', marginBottom: '8px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                Edible Art & Decorations
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.5, fontSize: '0.75em' }}>
                Hand-sculpted sugar flowers, custom fondant work, and edible gold leaf details crafted by our expert decorators.
              </p>
            </div>

            {/* Service 5 */}
            <div style={{ background: '#fff', padding: '20px 16px', borderRadius: '6px', boxShadow: '0 3px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-orange)' }}>
                <img 
                  src="/cakes/cake-08.jpg" 
                  alt="Event Coordination" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '0.95em', marginBottom: '8px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                Event Coordination
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.5, fontSize: '0.75em' }}>
                Complete dessert table planning and coordination with your event planner to ensure seamless integration with your celebration theme.
              </p>
            </div>

            {/* Service 6 */}
            <div style={{ background: '#fff', padding: '20px 16px', borderRadius: '6px', boxShadow: '0 3px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-orange)' }}>
                <img 
                  src="/cakes/cake-04.jpg" 
                  alt="Allergy Accommodations" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ fontSize: '0.95em', marginBottom: '8px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                Allergy Accommodations
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.5, fontSize: '0.75em' }}>
                We offer gluten-free, dairy-free, and nut-free options to ensure everyone at your celebration can enjoy our delicious cakes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, var(--color-pink) 0%, var(--color-beige) 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text)' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '16px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
            Ready to Order Your Dream Cake?
          </h2>
          <p style={{ fontSize: '1.15em', marginBottom: '30px', color: 'var(--color-text)' }}>
            Let's create something amazing together. Contact us today to discuss your celebration needs.
          </p>
          <Link to="/contact" className="cta-btn">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
