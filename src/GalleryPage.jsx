import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Pablo Black & Gold Luxury Cake',
      price: 65.00,
      image: '/cakes/cake-02.jpg',
      description: 'Stunning contrast cake with black brushstroke, gold leaf accents'
    },
    {
      id: 2,
      name: 'Mzukulu Pink Glamour Hat',
      price: 68.00,
      image: '/cakes/cake-03.jpg',
      description: 'Blush pink finish with chic fashion topper and golden bubbles'
    },
    {
      id: 3,
      name: 'Purple Ruffle Glam Cake',
      price: 72.00,
      image: '/cakes/cake-04.jpg',
      description: 'Textured lavender rosettes with silver glitter top'
    },
    {
      id: 4,
      name: 'Traditional Fruit Cake',
      price: 45.00,
      image: '/cakes/cake-05.jpg',
      description: 'Rich, slow-matured spiced fruit loaves with candied cherries'
    },
    {
      id: 5,
      name: 'Stitch & Angel Birthday Fantasy',
      price: 75.00,
      image: '/cakes/cake-06.jpg',
      description: 'Baby blue tier with custom Stitch & Angel edible art'
    },
    {
      id: 6,
      name: 'Dino Explorer Birthday Cake',
      price: 70.00,
      image: '/cakes/cake-07.jpg',
      description: 'Vibrant teal tier with friendly dinosaur toppers'
    },
    {
      id: 7,
      name: 'Nomae Magenta Butterfly Elegance',
      price: 65.00,
      image: '/cakes/cake-08.jpg',
      description: 'Textured white tier with vibrant magenta fashion illustration'
    },
    {
      id: 8,
      name: 'Lady Laca Sunburst Blossom',
      price: 70.00,
      image: '/cakes/cake-09.jpg',
      description: 'Pastel peach tier with golden fans and orange sugar dahlias'
    },
    {
      id: 9,
      name: 'Alma\'s Minnie Mouse Chocolate',
      price: 60.00,
      image: '/cakes/cake-10.jpg',
      description: 'Rich chocolate sponge with vanilla buttercream and Minnie toppers'
    },
    {
      id: 10,
      name: 'Golden Velvet Multi-Tier',
      price: 85.00,
      image: '/cakes/cake-01.jpg',
      description: 'Four tall layers of red velvet and vanilla sponge'
    },
    {
      id: 11,
      name: 'Elegant Rose Garden Cake',
      price: 78.00,
      image: '/cakes/cake-02.jpg',
      description: 'Sophisticated design with handcrafted sugar roses'
    },
    {
      id: 12,
      name: 'Celebration Party Cake',
      price: 55.00,
      image: '/cakes/cake-03.jpg',
      description: 'Festive design perfect for any celebration'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ marginTop: '100px' }}>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2D2D2D 0%, #1a1a1a 100%)',
        padding: '80px 40px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/cakes/cake-09.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '700px'
        }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1em',
            color: 'var(--color-orange)',
            letterSpacing: '1.5px',
            display: 'block',
            marginBottom: '12px'
          }}>
            Our Collection
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2em, 5vw, 3.5em)',
            color: 'white',
            marginBottom: '16px',
            fontWeight: 500,
            lineHeight: 1.2
          }}>
            Premium Cake Gallery
          </h1>
          <p style={{
            fontSize: '0.95em',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.6',
            maxWidth: '550px',
            margin: '0 auto'
          }}>
            Explore our handcrafted collection of custom cakes, each one a masterpiece designed to make your celebration unforgettable.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section style={{
        background: '#fff',
        padding: '80px 40px'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto'
        }}>
          {/* Product Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {products.map((product) => (
              <div key={product.id} style={{
                background: '#fff',
                border: '1px solid #f0f0f0',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {/* Product Image */}
                <div style={{
                  position: 'relative',
                  paddingTop: '100%',
                  overflow: 'hidden',
                  background: '#f8f8f8'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  
                  {/* Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(236, 90, 25, 0.9) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    padding: '14px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                    <button
                      onClick={() => addToCart(product)}
                      style={{
                        background: '#fff',
                        color: 'var(--color-orange)',
                        border: 'none',
                        padding: '10px 20px',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1em',
                        fontWeight: 600,
                        cursor: 'pointer',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--color-dark)';
                        e.target.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#fff';
                        e.target.style.color = 'var(--color-orange)';
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div style={{ padding: '18px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05em',
                    color: 'var(--color-primary)',
                    marginBottom: '6px',
                    fontWeight: 500,
                    lineHeight: '1.3'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{
                    fontSize: '0.82em',
                    color: 'var(--color-text)',
                    marginBottom: '12px',
                    lineHeight: '1.5'
                  }}>
                    {product.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid #f0f0f0'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25em',
                      color: 'var(--color-orange)',
                      fontWeight: 600
                    }}>
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      style={{
                        background: 'transparent',
                        border: '2px solid var(--color-orange)',
                        color: 'var(--color-orange)',
                        padding: '6px 14px',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.8em',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--color-orange)';
                        e.target.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--color-orange)';
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: 'var(--color-orange)',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2em, 4vw, 3em)',
            color: '#fff',
            marginBottom: '16px',
            fontWeight: 500
          }}>
            Can't Find What You're Looking For?
          </h2>
          <p style={{
            fontSize: '1.1em',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '32px',
            lineHeight: '1.7'
          }}>
            Let us create a custom cake designed specifically for your celebration. Contact our team to discuss your vision.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              background: '#fff',
              color: 'var(--color-orange)',
              padding: '16px 40px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2em',
              fontWeight: 600,
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-dark)';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = 'var(--color-orange)';
            }}
          >
            Request Custom Cake
          </Link>
        </div>
      </section>
    </div>
  );
}
