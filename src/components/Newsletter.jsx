import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };
  
  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">
        <span className="tag">STAY UPDATED</span>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on new flavors, special offers, and baking tips delivered to your inbox.</p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

