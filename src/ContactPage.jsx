import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT } from './config.js';

export default function ContactPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Custom Cake Order',
    eventDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.state) {
      const { cartSummary, cartTotal, eventDate, orderNotes } = location.state;
      let initialMsg = '';
      if (cartSummary) initialMsg += `Order Items: ${cartSummary}\nEstimated Total: ${cartTotal}\n`;
      if (orderNotes) initialMsg += `Special Instructions: ${orderNotes}\n`;
      setFormData(prev => ({
        ...prev,
        eventDate: eventDate || prev.eventDate,
        message: initialMsg || prev.message
      }));
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Custom Cake Order',
        eventDate: '',
        message: ''
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = () => {
    let msg = `*Momma Micky's Cakes Inquiry*\n`;
    if (formData.name) msg += `*Name:* ${formData.name}\n`;
    if (formData.phone) msg += `*Phone:* ${formData.phone}\n`;
    if (formData.email) msg += `*Email:* ${formData.email}\n`;
    if (formData.inquiryType) msg += `*Type:* ${formData.inquiryType}\n`;
    if (formData.eventDate) msg += `*Event Date:* ${formData.eventDate}\n`;
    if (formData.message) msg += `*Details:*\n${formData.message}\n`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page-view" style={{ paddingTop: '110px' }}>
      {/* HERO BANNER */}
      <section
        style={{
          position: 'relative',
          minHeight: '280px',
          height: '38vh',
          maxHeight: '360px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: "url('/cakes/1000569248.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          textAlign: 'center',
          color: '#fff',
          overflow: 'hidden',
          padding: '40px 20px'
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
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '0.95em', fontWeight: 600, letterSpacing: '1px' }}>Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(2.2em, 5vw, 3.2em)', margin: '10px 0 14px', color: '#fff', lineHeight: 1.2, fontFamily: 'var(--font-heading)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
            Simple tools for big goals
          </h1>
          <p style={{ fontSize: '1em', color: 'rgba(255,255,255,0.95)', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
            At the core of our mission is a deep commitment to excellence and client satisfaction. Our team is here to create your dream celebration cake.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section style={{ background: '#fff', padding: '90px 40px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Card 1: Reach Out Easily */}
            <div style={{ background: 'var(--color-light)', padding: '50px 40px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', background: 'var(--color-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '40px', height: '40px', fill: '#fff' }} viewBox="0 0 512 512">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.6em', marginBottom: '16px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                Reach Out Easily
              </h3>
              <p style={{ color: 'var(--color-text)', marginBottom: '20px', lineHeight: 1.7 }}>
                Find all the necessary contact details to get in touch with us effortlessly.
              </p>
              <p style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                +263 78 834 0047
              </p>
            </div>

            {/* Card 2: General Info */}
            <div style={{ background: 'var(--color-light)', padding: '50px 40px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', background: 'var(--color-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '40px', height: '40px', fill: '#fff' }} viewBox="0 0 512 512">
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.6em', marginBottom: '16px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                General Info
              </h3>
              <p style={{ color: 'var(--color-text)', marginBottom: '20px', lineHeight: 1.7 }}>
                Find answers to common queries and additional information about our services.
              </p>
              <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginBottom: '8px' }}>
                mudiwas980@gmail.com
              </p>
              <p style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                +263 78 834 0047
              </p>
            </div>

            {/* Card 3: Who We Are */}
            <div style={{ background: 'var(--color-light)', padding: '50px 40px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', background: 'var(--color-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '40px', height: '40px', fill: '#fff' }} viewBox="0 0 640 512">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.6em', marginBottom: '16px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                Who We Are
              </h3>
              <p style={{ color: 'var(--color-text)', marginBottom: '20px', lineHeight: 1.7 }}>
                Learn more about our company, our mission, and our values.
              </p>
              <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginBottom: '8px' }}>
                mudiwas980@gmail.com
              </p>
              <p style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                +263 78 834 0047
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section style={{ background: 'var(--color-light)', padding: '100px 40px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '1.1em' }}>Get In Touch</span>
            <h2 style={{ fontSize: 'clamp(2.2em, 5vw, 3em)', margin: '12px 0 16px', fontFamily: 'var(--font-heading)' }}>
              Send Us A Message
            </h2>
            <p style={{ color: 'var(--color-text)', fontSize: '1.05em', lineHeight: 1.8 }}>
              Have a question or ready to order? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '50px 40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95em' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid var(--color-border)', borderRadius: '4px', fontSize: '1em', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95em' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid var(--color-border)', borderRadius: '4px', fontSize: '1em', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95em' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ width: '100%', padding: '14px 16px', border: '2px solid var(--color-border)', borderRadius: '4px', fontSize: '1em', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-orange)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95em' }}>
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid var(--color-border)', borderRadius: '4px', fontSize: '1em', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff' }}
                >
                  <option value="Custom Cake Order">Custom Cake Order</option>
                  <option value="Wedding Cake Consultation">Wedding Cake Consultation</option>
                  <option value="Birthday / Celebration Party">Birthday / Celebration Party</option>
                  <option value="Artisan Confections & Cupcakes">Artisan Confections & Cupcakes</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95em' }}>
                  Target Event / Delivery Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '14px 16px', border: '2px solid var(--color-border)', borderRadius: '4px', fontSize: '1em', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-orange)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95em' }}>
                Your Message & Order Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your event theme, number of guests, desired flavors, cake inscriptions, or any specific reference images..."
                style={{ width: '100%', padding: '14px 16px', border: '2px solid var(--color-border)', borderRadius: '4px', fontSize: '1em', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-orange)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button type="submit" className="btn" style={{ padding: '16px 36px', fontSize: '1.05em', cursor: 'pointer' }}>
                Send Message via Email
              </button>
              <button
                type="button"
                onClick={handleSendWhatsApp}
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '16px 36px',
                  borderRadius: '6px',
                  fontSize: '1.05em',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                Chat & Order on WhatsApp
              </button>
            </div>

            {submitted && (
              <p style={{ marginTop: '20px', textAlign: 'center', color: 'var(--color-orange)', fontWeight: 600, fontSize: '1.05em' }}>
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ background: '#fff', padding: '90px 40px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="tag" style={{ color: 'var(--color-orange)', fontSize: '1.1em' }}>Explore our world</span>
            <h2 style={{ fontSize: 'clamp(2.2em, 5vw, 3em)', margin: '12px 0 0', fontFamily: 'var(--font-heading)' }}>
              Get inspired and stay ahead
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            {/* Feature 1 */}
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ width: '100px', height: '100px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-orange)' }}>
                <img loading="lazy" src="/cakes/cake-02.jpg" alt="High Quality Standards" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '12px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                High Quality Standards
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.7, fontSize: '0.95em' }}>
                Professional consulting tailored to meet your unique business challenges and goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ width: '100px', height: '100px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-orange)' }}>
                <img loading="lazy" src="/cakes/cake-09.jpg" alt="Attention To Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '12px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                Attention To Detail
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.7, fontSize: '0.95em' }}>
                Every cake is crafted with meticulous attention to ensure perfection in every slice.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ width: '100px', height: '100px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-orange)' }}>
                <img loading="lazy" src="/cakes/cake-06.jpg" alt="Premium Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '12px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                Premium Experience
              </h4>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.7, fontSize: '0.95em' }}>
                Reliable customer support designed to provide fast and effective solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, var(--color-pink) 0%, var(--color-beige) 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text)' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '16px', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
            Ready to Create Something Amazing?
          </h2>
          <p style={{ fontSize: '1.15em', marginBottom: '30px', color: 'var(--color-text)' }}>
            Let's bring your cake vision to life. Contact us today!
          </p>
          <Link to="/" className="cta-btn">Back to Home</Link>
        </div>
      </section>
    </div>
  );
}

