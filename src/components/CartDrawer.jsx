import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { CONTACT } from '../config.js';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
  const [eventDate, setEventDate] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*Hello Momma Micky's Cakes!*\nI would like to place an order:\n\n`;
    cartItems.forEach((item, index) => {
      const priceStr = typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price;
      message += `${index + 1}. *${item.name || item.title}* (Qty: ${item.quantity}) - ${priceStr}\n`;
    });

    message += `\n*Estimated Total:* $${cartTotal.toFixed(2)}\n`;
    if (eventDate) message += `*Event / Delivery Date:* ${eventDate}\n`;
    if (orderNotes) message += `*Special Instructions / Inscription:* ${orderNotes}\n`;
    message += `\nPlease let me know your availability and payment instructions. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleContactCheckout = () => {
    setIsCartOpen(false);
    navigate('/contact', {
      state: {
        cartSummary: cartItems.map(i => `${i.quantity}x ${i.name || i.title}`).join(', '),
        cartTotal: `$${cartTotal.toFixed(2)}`,
        eventDate,
        orderNotes
      }
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10001,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          background: '#fff',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          background: 'var(--color-pink)',
          color: 'var(--color-primary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

            <div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '1.25em' }}>
                Your Order Cart
              </h3>
              <span style={{ fontSize: '0.8em', color: 'var(--color-text)' }}>
                {cartCount} item{cartCount !== 1 ? 's' : ''} selected
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-primary)',
              fontSize: '1.6em',
              cursor: 'pointer',
              lineHeight: 1
            }}
          >
            ✕
          </button>
        </div>

        {/* Cart Item List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 24px'
        }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-text)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '1.3em', marginBottom: '8px' }}>
                Your cart is empty
              </h4>
              <p style={{ fontSize: '0.9em', color: '#777', maxWidth: '280px', margin: '0 auto 24px' }}>
                Explore our signature cakes and packages to add your celebration favorites!
              </p>
              <button
                onClick={() => { setIsCartOpen(false); navigate('/gallery'); }}
                className="btn"
                style={{ padding: '10px 24px', fontSize: '0.9em' }}
              >
                Browse Cake Gallery
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cartItems.map((item) => {
                const rawPrice = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '') || 0);
                return (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      background: '#fafafa',
                      alignItems: 'center'
                    }}
                  >
                    <img loading="lazy" src={item.image}
                      alt={item.name || item.title}
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{
                        margin: '0 0 4px',
                        fontSize: '0.95em',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {item.name || item.title}
                      </h4>
                      <div style={{ color: 'var(--color-orange)', fontWeight: 600, fontSize: '0.9em', marginBottom: '6px' }}>
                        ${rawPrice.toFixed(2)}
                      </div>

                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            background: '#e0e0e0',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.85em', fontWeight: 600, minWidth: '18px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            background: '#e0e0e0',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            marginLeft: 'auto',
                            background: 'none',
                            border: 'none',
                            color: '#999',
                            fontSize: '0.75em',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Order Options */}
              <div style={{ marginTop: '10px', paddingTop: '16px', borderTop: '1px solid #eee' }}>
                <label style={{ display: 'block', fontSize: '0.85em', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Event / Delivery Date:
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '0.85em',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-body)'
                  }}
                />

                <label style={{ display: 'block', fontSize: '0.85em', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '6px' }}>
                  Cake Inscription or Special Notes:
                </label>
                <textarea
                  placeholder="e.g., 'Happy 10th Birthday Leo!', gluten-free request, flavor preference..."
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  rows="2"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '0.85em',
                    fontFamily: 'var(--font-body)',
                    resize: 'none'
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer & Actions */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '20px 24px',
            background: '#f9f9f9',
            borderTop: '1px solid #eee'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.05em', fontWeight: 600, color: 'var(--color-primary)' }}>
                Estimated Total:
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5em', color: 'var(--color-orange)', fontWeight: 700 }}>
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleWhatsAppCheckout}
                style={{
                  width: '100%',
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 18px',
                  borderRadius: '6px',
                  fontSize: '1em',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
              >
                Order Instantly via WhatsApp
              </button>

              <button
                onClick={handleContactCheckout}
                className="btn"
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  fontSize: '0.95em',
                  textAlign: 'center'
                }}
              >
                Send Order Inquiry via Form
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <button
                  onClick={clearCart}
                  style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.8em', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-orange)', fontSize: '0.8em', cursor: 'pointer', fontWeight: 600 }}
                >
                  Continue Browsing →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

