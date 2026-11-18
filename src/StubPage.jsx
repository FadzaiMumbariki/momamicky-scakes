import React from 'react';
import { Link } from 'react-router-dom';

export default function StubPage({ title, subtitle, description, highlights, badgeImage }) {
  return (
    <div className="stub-page-container" style={{ minHeight: '80vh', padding: '140px 20px 80px', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <span className="tag" style={{ fontSize: '1.2em' }}>Momma Micky's Cakes</span>
        <h1 style={{ color: 'var(--color-primary)', fontSize: 'clamp(2.5em, 5vw, 4em)', marginTop: '10px', marginBottom: '15px' }}>
          {title}
        </h1>
        <p style={{ fontSize: '1.25em', color: 'var(--color-orange)', fontWeight: 600, marginBottom: '24px' }}>
          {subtitle}
        </p>
        <p style={{ fontSize: '1.05em', color: 'var(--color-text)', maxWidth: '750px', margin: '0 auto 40px', lineHeight: 1.8 }}>
          {description}
        </p>

        {badgeImage && (
          <div style={{ maxWidth: '600px', margin: '0 auto 40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <img loading="lazy" src={badgeImage} alt={title} style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', margin: '40px 0', textAlign: 'left' }}>
            {highlights.map((item, idx) => (
              <div key={idx} style={{ padding: '24px', background: '#fafafa', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                <h4 style={{ color: 'var(--color-orange)', marginBottom: '8px', fontSize: '1.2em' }}>{item.heading}</h4>
                <p style={{ color: 'var(--color-text)', fontSize: '0.95em' }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn">Back to Home</Link>
          <Link to="/contact" className="btn btn-outline" style={{ background: '#fff' }}>Order Custom Cake</Link>
        </div>
      </div>
    </div>
  );
}

