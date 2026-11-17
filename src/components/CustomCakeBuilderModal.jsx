import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function CustomCakeBuilderModal() {
  const { customizerOpen, setCustomizerOpen, addToCart, setIsCartOpen } = useCart();

  const [step, setStep] = useState(1);
  const [size, setSize] = useState({ name: 'Single Tier 8" (Serves 14-18)', price: 60, image: '/cakes/1000569250.webp' });
  const [flavor, setFlavor] = useState('Belgian Chocolate Truffle');
  const [frosting, setFrosting] = useState('Swiss Meringue Buttercream');
  const [addons, setAddons] = useState([]);
  const [inscription, setInscription] = useState('');
  const [eventDate, setEventDate] = useState('');

  if (!customizerOpen) return null;

  const sizeOptions = [
    { name: 'Single Tier 6" (Serves 8-10)', price: 45, image: '/cakes/cake-03.webp' },
    { name: 'Single Tier 8" (Serves 14-18)', price: 60, image: '/cakes/1000569250.webp' },
    { name: 'Double Tier 6" + 8" (Serves 30-38)', price: 115, image: '/cakes/1000569262.webp' },
    { name: 'Triple Tier Grand Celebration (Serves 60+)', price: 195, image: '/cakes/1000569274.webp' }
  ];

  const flavorOptions = [
    { name: 'Belgian Chocolate Truffle', desc: 'Deep rich chocolate sponge with fudge layer' },
    { name: 'Madagascar Vanilla Bean', desc: 'Classic, fragrant vanilla sponge with strawberry preserve' },
    { name: 'Velvet Red Velvet', desc: 'Silky cocoa red sponge with cream cheese mousse' },
    { name: 'Lemon Curd & Poppyseed', desc: 'Zesty organic lemon cake with tangy lemon filling' },
    { name: 'Traditional Spiced Fruit', desc: 'Slow-matured rum-spiced artisan fruit sponge' }
  ];

  const frostingOptions = [
    { name: 'Swiss Meringue Buttercream', desc: 'Silky, not too sweet, perfect piped details' },
    { name: 'Pristine Fondant Satin Finish', desc: 'Smooth luxury finish ideal for painting and sculpting' },
    { name: 'Rustic Semi-Naked Cake', desc: 'Chic exposed sponge with botanical accents' },
    { name: 'Dark Chocolate Ganache Glaze', desc: 'Luxurious glossy Belgian chocolate drip' }
  ];

  const addonOptions = [
    { id: 'gold', name: '24K Edible Gold Leaf Accents', price: 15 },
    { id: 'flowers', name: 'Handcrafted Sugar & Fresh Floral Bouquet', price: 20 },
    { id: 'topper', name: 'Custom Acrylic Name / Number Topper', price: 12 },
    { id: 'macarons', name: 'French Macaron & Meringue Crown', price: 15 }
  ];

  const toggleAddon = (addon) => {
    if (addons.find(a => a.id === addon.id)) {
      setAddons(addons.filter(a => a.id !== addon.id));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const calculatedTotal = size.price + addons.reduce((sum, a) => sum + a.price, 0);

  const handleFinishCustomCake = () => {
    const customCakeItem = {
      id: `custom-${Date.now()}`,
      name: `Custom Cake: ${size.name}`,
      price: calculatedTotal,
      image: size.image,
      category: 'custom',
      description: `Flavor: ${flavor} | Frosting: ${frosting} | Add-ons: ${addons.map(a => a.name).join(', ') || 'None'}${inscription ? ` | Inscription: "${inscription}"` : ''}${eventDate ? ` | Date: ${eventDate}` : ''}`
    };

    addToCart(customCakeItem);
    setCustomizerOpen(false);
    setIsCartOpen(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10002,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={() => setCustomizerOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '20px 28px',
          background: 'var(--color-primary)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', fontSize: '0.75em', letterSpacing: '1px', fontWeight: 600 }}>
              Interactive Cake Builder
            </span>
            <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4em' }}>
              Design Your Dream Cake
            </h3>
          </div>
          <button
            onClick={() => setCustomizerOpen(false)}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.6em', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        {/* Step Indicators */}
        <div style={{ display: 'flex', background: '#f5f5f5', borderBottom: '1px solid #e5e5e5' }}>
          {[
            { num: 1, title: 'Size & Tiers' },
            { num: 2, title: 'Flavors' },
            { num: 3, title: 'Frosting' },
            { num: 4, title: 'Accents' },
            { num: 5, title: 'Review' }
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => setStep(s.num)}
              style={{
                flex: 1,
                padding: '12px 6px',
                textAlign: 'center',
                cursor: 'pointer',
                borderBottom: step === s.num ? '3px solid var(--color-orange)' : '3px solid transparent',
                background: step === s.num ? '#fff' : 'transparent',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '0.75em', fontWeight: 700, color: step === s.num ? 'var(--color-orange)' : '#888' }}>
                STEP {s.num}
              </div>
              <div style={{ fontSize: '0.85em', color: step === s.num ? 'var(--color-primary)' : '#666', fontWeight: 600 }}>
                {s.title}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px' }}>
          {step === 1 && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2em', marginBottom: '8px' }}>
                Select Cake Size & Tier Configuration
              </h4>
              <p style={{ color: 'var(--color-text)', fontSize: '0.9em', marginBottom: '20px' }}>
                All sizes are baked with generous multi-layers of sponge and premium fillings.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {sizeOptions.map((opt) => (
                  <div
                    key={opt.name}
                    onClick={() => setSize(opt)}
                    style={{
                      border: size.name === opt.name ? '2px solid var(--color-orange)' : '1px solid #e0e0e0',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: size.name === opt.name ? '#fff9f5' : '#fff',
                      transition: 'all 0.2s ease',
                      boxShadow: size.name === opt.name ? '0 4px 15px rgba(236, 90, 25, 0.15)' : 'none'
                    }}
                  >
                    <img src={opt.image} alt={opt.name} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                    <div style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.95em', color: 'var(--color-primary)', marginBottom: '4px' }}>
                        {opt.name}
                      </div>
                      <div style={{ color: 'var(--color-orange)', fontWeight: 700, fontSize: '1.1em' }}>
                        ${opt.price}.00
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2em', marginBottom: '8px' }}>
                Choose Your Sponge Flavor
              </h4>
              <p style={{ color: 'var(--color-text)', fontSize: '0.9em', marginBottom: '20px' }}>
                Baked fresh with farm-fresh eggs, pure butter, and natural extracts.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {flavorOptions.map((f) => (
                  <div
                    key={f.name}
                    onClick={() => setFlavor(f.name)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '8px',
                      border: flavor === f.name ? '2px solid var(--color-orange)' : '1px solid #e0e0e0',
                      background: flavor === f.name ? '#fff9f5' : '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '1em' }}>
                        {f.name}
                      </div>
                      <div style={{ color: '#777', fontSize: '0.85em', marginTop: '2px' }}>
                        {f.desc}
                      </div>
                    </div>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '2px solid var(--color-orange)',
                      background: flavor === f.name ? 'var(--color-orange)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '0.7em'
                    }}>
                      {flavor === f.name ? '✓' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2em', marginBottom: '8px' }}>
                Select Frosting & Outer Coating
              </h4>
              <p style={{ color: 'var(--color-text)', fontSize: '0.9em', marginBottom: '20px' }}>
                Choose how you would like Momma Micky to cover and finish your cake.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {frostingOptions.map((fr) => (
                  <div
                    key={fr.name}
                    onClick={() => setFrosting(fr.name)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '8px',
                      border: frosting === fr.name ? '2px solid var(--color-orange)' : '1px solid #e0e0e0',
                      background: frosting === fr.name ? '#fff9f5' : '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '1em' }}>
                        {fr.name}
                      </div>
                      <div style={{ color: '#777', fontSize: '0.85em', marginTop: '2px' }}>
                        {fr.desc}
                      </div>
                    </div>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '2px solid var(--color-orange)',
                      background: frosting === fr.name ? 'var(--color-orange)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '0.7em'
                    }}>
                      {frosting === fr.name ? '✓' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2em', marginBottom: '8px' }}>
                Artistic Accents & Luxury Add-ons
              </h4>
              <p style={{ color: 'var(--color-text)', fontSize: '0.9em', marginBottom: '20px' }}>
                Add special touches to elevate your centerpiece (select all that apply).
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {addonOptions.map((addon) => {
                  const isChecked = Boolean(addons.find(a => a.id === addon.id));
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '8px',
                        border: isChecked ? '2px solid var(--color-orange)' : '1px solid #e0e0e0',
                        background: isChecked ? '#fff9f5' : '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          style={{ accentColor: 'var(--color-orange)', width: '18px', height: '18px' }}
                        />
                        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                          {addon.name}
                        </span>
                      </div>
                      <span style={{ color: 'var(--color-orange)', fontWeight: 700 }}>
                        +${addon.price}.00
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2em', marginBottom: '8px' }}>
                Review Your Bespoke Cake Summary
              </h4>
              <p style={{ color: 'var(--color-text)', fontSize: '0.9em', marginBottom: '20px' }}>
                Review the configuration and add your custom inscription or event date.
              </p>

              <div style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
                  <img src={size.image} alt={size.name} style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', margin: '0 0 6px', color: 'var(--color-primary)', fontSize: '1.2em' }}>
                      {size.name}
                    </h4>
                    <div style={{ fontSize: '0.9em', color: '#555', lineHeight: 1.5 }}>
                      <strong>Flavor:</strong> {flavor}<br />
                      <strong>Frosting:</strong> {frosting}<br />
                      <strong>Add-ons:</strong> {addons.length > 0 ? addons.map(a => a.name).join(', ') : 'None'}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85em', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Custom Message on Cake (optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Happy 25th Birthday Chloe!"
                    value={inscription}
                    onChange={(e) => setInscription(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '14px', fontSize: '0.9em' }}
                  />

                  <label style={{ display: 'block', fontSize: '0.85em', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Event Date:
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '0.9em' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Live Price & Navigation */}
        <div style={{
          padding: '18px 28px',
          background: '#f9f9f9',
          borderTop: '1px solid #e5e5e5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.8em', color: '#777', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Estimated Price
            </span>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6em', color: 'var(--color-orange)', fontWeight: 700 }}>
              ${calculatedTotal}.00
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="btn btn-outline"
                style={{ padding: '10px 18px', fontSize: '0.9em' }}
              >
                ← Back
              </button>
            )}

            {step < 5 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="btn"
                style={{ padding: '10px 24px', fontSize: '0.9em' }}
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleFinishCustomCake}
                className="btn"
                style={{ padding: '10px 24px', fontSize: '0.9em' }}
              >
                Add Custom Cake to Cart 🎂
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
