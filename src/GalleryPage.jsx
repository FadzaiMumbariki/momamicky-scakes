import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [cartNotification, setCartNotification] = useState('');

  const products = [
    {
      id: 1,
      name: 'Pablo Black & Gold Luxury Cake',
      price: 65.00,
      image: '/cakes/cake-02.jpg',
      category: 'luxury',
      description: 'Stunning contrast cake with black brushstroke, gold leaf accents and floating metallic spheres.'
    },
    {
      id: 2,
      name: 'Lady Laca Sunburst Blossom',
      price: 70.00,
      image: '/cakes/cake-09.jpg',
      category: 'wedding',
      description: 'Pastel peach tier with golden fans, orange sugar dahlias, and gold butterfly accents.'
    },
    {
      id: 3,
      name: 'Stitch & Angel Birthday Fantasy',
      price: 75.00,
      image: '/cakes/cake-06.jpg',
      category: 'kids',
      description: 'Baby blue tier with custom Stitch & Angel edible art, ice cream cone topper & pink hearts.'
    },
    {
      id: 4,
      name: 'Mzukulu Pink Glamour Hat',
      price: 68.00,
      image: '/cakes/cake-03.jpg',
      category: 'celebration',
      description: 'Blush pink finish with chic fashion topper, golden bubbles, and dual celebration candles.'
    },
    {
      id: 5,
      name: 'Nomae Magenta Butterfly Elegance',
      price: 65.00,
      image: '/cakes/cake-08.jpg',
      category: 'wedding',
      description: 'Textured white tier with vibrant magenta fashion illustration and flying 3D butterflies.'
    },
    {
      id: 6,
      name: "Alma's Minnie Mouse Chocolate",
      price: 60.00,
      image: '/cakes/cake-10.jpg',
      category: 'kids',
      description: 'Rich chocolate sponge with vanilla buttercream, mini chocolate bars, and Minnie toppers.'
    },
    {
      id: 7,
      name: 'Purple Ruffle Glam Cake',
      price: 72.00,
      image: '/cakes/cake-04.jpg',
      category: 'luxury',
      description: 'Textured lavender rosettes with silver glitter top and black bow ribbons.'
    },
    {
      id: 8,
      name: 'Traditional Fruit Cake Feast',
      price: 45.00,
      image: '/cakes/cake-05.jpg',
      category: 'treats',
      description: 'Rich, slow-matured spiced fruit loaves packed with candied cherries, raisins, and aromatic spices.'
    },
    {
      id: 9,
      name: 'Dino Explorer Birthday Cake',
      price: 70.00,
      image: '/cakes/cake-07.jpg',
      category: 'kids',
      description: 'Vibrant teal tier with friendly dinosaur toppers and jungle palm leaves.'
    },
    {
      id: 10,
      name: 'Golden Velvet Multi-Tier',
      price: 85.00,
      image: '/cakes/cake-01.jpg',
      category: 'wedding',
      description: 'Four tall layers of red velvet and vanilla sponge with golden sphere accents.'
    },
    {
      id: 11,
      name: 'Royal Pearl Celebration Tier',
      price: 80.00,
      image: '/cakes/1000568924.jpg',
      category: 'luxury',
      description: 'Hand-piped pearls, smooth ivory fondant, and decadent gold leaf detailing.'
    },
    {
      id: 12,
      name: 'Floral Crown Symphony Cake',
      price: 78.00,
      image: '/cakes/1000569113.jpg',
      category: 'wedding',
      description: 'Enchanting floral cascade with hand-sculpted blossoms and delicate sugar petals.'
    },
    {
      id: 13,
      name: 'Emerald & Gold Leaf Confection',
      price: 72.00,
      image: '/cakes/1000569134.jpg',
      category: 'luxury',
      description: 'Rich emerald textures complemented by 24k edible gold dust and contemporary geometric lines.'
    },
    {
      id: 14,
      name: 'Radiant Sunset Buttercream',
      price: 68.00,
      image: '/cakes/1000569141.jpg',
      category: 'celebration',
      description: 'Warm sunset gradient buttercream frosted to perfection with delicate wafer paper fans.'
    },
    {
      id: 15,
      name: 'Pastel Romance Tier Cake',
      price: 75.00,
      image: '/cakes/1000569160.jpg',
      category: 'wedding',
      description: 'Soft pastel hues with layered textures, dried floral arrangements, and romantic script.'
    },
    {
      id: 16,
      name: 'Chocolate Cascade Drip Cake',
      price: 62.00,
      image: '/cakes/1000569163.jpg',
      category: 'treats',
      description: 'Velvety dark chocolate drip running down vanilla bean frosting loaded with artisan confections.'
    },
    {
      id: 17,
      name: 'Enchanted Forest Fantasy',
      price: 74.00,
      image: '/cakes/1000569169.jpg',
      category: 'celebration',
      description: 'Woodland-inspired textures, edible moss accents, and chocolate bark elements.'
    },
    {
      id: 18,
      name: 'Whispering Lilac Delight',
      price: 66.00,
      image: '/cakes/1000569240.jpg',
      category: 'wedding',
      description: 'Gentle lavender brushstrokes with pearlescent beads and fresh botanical sprigs.'
    },
    {
      id: 19,
      name: 'Velvet Noir Gold Shimmer',
      price: 70.00,
      image: '/cakes/1000569241.jpg',
      category: 'luxury',
      description: 'Deep midnight glaze crowned with shimmering sugar crystals and gold painted accents.'
    },
    {
      id: 20,
      name: 'Strawberry Blossom Fantasy',
      price: 64.00,
      image: '/cakes/1000569242.jpg',
      category: 'treats',
      description: 'Fresh organic strawberry layers with cream cheese frosting and dehydrated berry dust.'
    },
    {
      id: 21,
      name: 'Golden Jubilee Milestone',
      price: 82.00,
      image: '/cakes/1000569243.jpg',
      category: 'celebration',
      description: 'Custom anniversary or milestone celebration cake embellished with sculpted numbers and fans.'
    },
    {
      id: 22,
      name: 'Sapphire Starry Night',
      price: 76.00,
      image: '/cakes/1000569244.jpg',
      category: 'luxury',
      description: 'Constellation-inspired midnight blue finish with sparkling silver dust and celestial toppers.'
    },
    {
      id: 23,
      name: 'Sweet Garden Party Tier',
      price: 69.00,
      image: '/cakes/1000569246.jpg',
      category: 'wedding',
      description: 'Intricate piped floral borders inspired by English cottage gardens with vanilla sponge.'
    },
    {
      id: 24,
      name: 'Carnival Confetti Birthday',
      price: 58.00,
      image: '/cakes/1000569247.jpg',
      category: 'kids',
      description: 'Joyful sprinkle explosions with custom colorful balloon garland toppers and candy pop art.'
    },
    {
      id: 25,
      name: 'Rose Champagne Grandeur',
      price: 88.00,
      image: '/cakes/1000569248.jpg',
      category: 'luxury',
      description: 'Infused with sparkling rosé notes, covered in champagne gold luster and hand-piped rosettes.'
    },
    {
      id: 26,
      name: 'Tropical Mango Sunrise',
      price: 62.00,
      image: '/cakes/1000569249.jpg',
      category: 'treats',
      description: 'Zesty mango passionfruit curd layers encased in coconut-infused buttercream.'
    },
    {
      id: 27,
      name: 'Monarch Marble & Gold',
      price: 79.00,
      image: '/cakes/1000569250.jpg',
      category: 'luxury',
      description: 'Hand-painted marble fondant with veined gold leaf and minimalist modern cake architecture.'
    },
    {
      id: 28,
      name: 'Princess Tiara Strawberry Cake',
      price: 72.00,
      image: '/cakes/1000569251.jpg',
      category: 'kids',
      description: 'Royal crown embellishments, pink sugar ruffles, and sweet vanilla strawberry cream.'
    },
    {
      id: 29,
      name: 'Citrus Blossom Delight',
      price: 55.00,
      image: '/cakes/1000569252.jpg',
      category: 'treats',
      description: 'Lemon zest sponge with candied orange crisps and rosemary herb garnishes.'
    },
    {
      id: 30,
      name: 'Vintage Lace Pearl Wedding',
      price: 95.00,
      image: '/cakes/1000569253.jpg',
      category: 'wedding',
      description: 'Timeless heirloom edible lace applied over pristine ivory satin fondant with three tiers.'
    },
    {
      id: 31,
      name: 'Rainbow Wonder Joy Cake',
      price: 65.00,
      image: '/cakes/1000569254.jpg',
      category: 'kids',
      description: 'Six vibrant inner cake layers revealed upon slicing, finished in fluffy cloud frosting.'
    },
    {
      id: 32,
      name: 'Caramel Macchiato Tower',
      price: 68.00,
      image: '/cakes/1000569255.jpg',
      category: 'treats',
      description: 'Espresso-soaked sponge layered with salted caramel buttercream and roasted macadamias.'
    },
    {
      id: 33,
      name: 'Celestial Midnight Galaxy',
      price: 84.00,
      image: '/cakes/1000569256.jpg',
      category: 'luxury',
      description: 'Mirror glaze cosmic swirl with interstellar purple and gold accents for grand events.'
    },
    {
      id: 34,
      name: 'Sweet Blossom Basket',
      price: 70.00,
      image: '/cakes/1000569257.jpg',
      category: 'celebration',
      description: 'Basketweave textured piping filled with an abundance of pastel buttercream wild roses.'
    },
    {
      id: 35,
      name: 'Fairy Tale Castle Dream',
      price: 85.00,
      image: '/cakes/1000569258.jpg',
      category: 'kids',
      description: 'Whimsical castle spires, sparkle dust, and pastel pink turrets for royal birthday dreams.'
    },
    {
      id: 36,
      name: 'Belgian Dark Truffle Bliss',
      price: 75.00,
      image: '/cakes/1000569259.jpg',
      category: 'treats',
      description: 'Decadent 70% dark Belgian cocoa ganache crowned with handcrafted dusting truffles.'
    },
    {
      id: 37,
      name: 'Peaches & Cream Silk',
      price: 67.00,
      image: '/cakes/1000569260.jpg',
      category: 'celebration',
      description: 'Silky smooth buttercream in peach ombré tones with fragrant floral embellishments.'
    },
    {
      id: 38,
      name: 'Golden Honeycomb Artisan',
      price: 63.00,
      image: '/cakes/1000569261.jpg',
      category: 'treats',
      description: 'Crisp honey toffee crunch pieces, real wildflower honey drizzle, and golden spheres.'
    },
    {
      id: 39,
      name: 'Opal Elegance Two-Tier',
      price: 89.00,
      image: '/cakes/1000569262.jpg',
      category: 'wedding',
      description: 'Iridescent pearl sheen across two balanced tiers topped with an exquisite sugar orchid.'
    },
    {
      id: 40,
      name: 'Glamour Starlight Couture',
      price: 78.00,
      image: '/cakes/1000569263.jpg',
      category: 'luxury',
      description: 'High-fashion aesthetic with textured sequins, metallic paint, and sculpted monogram plaque.'
    },
    {
      id: 41,
      name: 'Wildflower Meadow Cake',
      price: 71.00,
      image: '/cakes/1000569264.jpg',
      category: 'wedding',
      description: 'Rustic textured edges with pressed edible pansies, violas, and organic lavender.'
    },
    {
      id: 42,
      name: 'Cocoa Hazelnut Crunch',
      price: 64.00,
      image: '/cakes/1000569265.jpg',
      category: 'treats',
      description: 'Nutella buttercream frosting with toasted hazelnuts and crispy wafer layers.'
    },
    {
      id: 43,
      name: 'Neon Glow Party Special',
      price: 73.00,
      image: '/cakes/1000569266.jpg',
      category: 'celebration',
      description: 'Electrifying bright splash colors, playful acrylic party toppers, and fun geometric tiers.'
    },
    {
      id: 44,
      name: 'Wonderland Safari Adventure',
      price: 76.00,
      image: '/cakes/1000569267.jpg',
      category: 'kids',
      description: 'Safari animal toppers, lush monstera leaves, and handcrafted edible jungle vines.'
    },
    {
      id: 45,
      name: 'Rose Gold Petal Splendor',
      price: 82.00,
      image: '/cakes/1000569268.jpg',
      category: 'wedding',
      description: 'Cascade of cascading rose gold dusted petals draping down pure white vanilla tiers.'
    },
    {
      id: 46,
      name: 'Ruby Velvet Decadence',
      price: 77.00,
      image: '/cakes/1000569271.jpg',
      category: 'luxury',
      description: 'Deep ruby red velvet tiers with gold-leaf accents, cream cheese silk, and sugar gems.'
    },
    {
      id: 47,
      name: 'Lavender Dreamscape Cake',
      price: 69.00,
      image: '/cakes/1000569272.jpg',
      category: 'celebration',
      description: 'Dreamy lavender swirls with meringue kisses, white chocolate spheres, and dried blooms.'
    },
    {
      id: 48,
      name: 'Artisan Lemon Meringue Tower',
      price: 60.00,
      image: '/cakes/1000569273.jpg',
      category: 'treats',
      description: 'Torched Italian meringue peaks crowned over bright lemon curd and shortbread layers.'
    },
    {
      id: 49,
      name: 'Diamond Jubilee Triple Tier',
      price: 98.00,
      image: '/cakes/1000569274.jpg',
      category: 'wedding',
      description: 'Grand three-tier centerpiece cake with crystalline sugar geometry and silver embroidery.'
    },
    {
      id: 50,
      name: 'Sweet Celebration Carousel',
      price: 79.00,
      image: '/cakes/1000569275.jpg',
      category: 'kids',
      description: 'Carousel horse toppers, pastel carnation piping, and festive celebration ribbons.'
    },
    {
      id: 51,
      name: 'Signature Momma Micky Masterpiece',
      price: 85.00,
      image: '/cakes/1000569276.jpg',
      category: 'luxury',
      description: "Our signature bakery showpiece combining Momma Micky's most beloved artisanal techniques."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Cakes' },
    { id: 'luxury', label: 'Luxury & Glamour' },
    { id: 'wedding', label: 'Weddings & Floral' },
    { id: 'celebration', label: 'Celebration' },
    { id: 'kids', label: 'Kids & Themed' },
    { id: 'treats', label: 'Artisan Treats' }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setCartNotification(`Added "${product.name}" to your order list!`);
    setTimeout(() => setCartNotification(''), 3500);
  };

  return (
    <div style={{ marginTop: '100px' }}>
      {/* TOAST NOTIFICATION */}
      {cartNotification && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: 'var(--color-primary)',
          color: '#fff',
          padding: '16px 26px',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderLeft: '4px solid var(--color-orange)',
          animation: 'fadeIn 0.3s ease'
        }}>
          <span style={{ fontSize: '1.2em' }}>🍰</span>
          <div>
            <div style={{ fontWeight: 600 }}>{cartNotification}</div>
            <Link to="/contact" style={{ color: 'var(--color-orange)', fontSize: '0.85em', textDecoration: 'underline' }}>
              Proceed to checkout & inquiry
            </Link>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '60vh',
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
          backgroundImage: 'url(/cakes/1000569250.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '850px'
        }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.1em',
            color: 'var(--color-orange)',
            letterSpacing: '2px',
            display: 'block',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            Handcrafted Signature Collection
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.4em, 5vw, 4em)',
            color: 'white',
            marginBottom: '16px',
            fontWeight: 500,
            lineHeight: 1.2
          }}>
            Momma Micky's Complete Gallery
          </h1>
          <p style={{
            fontSize: '1.05em',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: '1.7',
            maxWidth: '650px',
            margin: '0 auto 24px'
          }}>
            Explore over 50 of our freshly baked, custom celebration cakes. From lavish weddings to unforgettable birthday centrepieces, every cake is tailored to your taste.
          </p>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '6px 18px', borderRadius: '30px', color: '#fff', fontSize: '0.9em' }}>
            Showing <strong>{filteredProducts.length}</strong> creations in gallery
          </div>
        </div>
      </section>

      {/* VIDEO SPOTLIGHT BANNER */}
      <section style={{
        background: '#fff',
        padding: '50px 20px 20px',
        maxWidth: 'var(--max-width)',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'radial-gradient(circle at center, #232028 0%, #17151c 100%)',
          borderRadius: '16px',
          padding: '40px 30px',
          color: '#fff',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', fontSize: '0.85em', letterSpacing: '1.5px', fontWeight: 600 }}>
              Bakery In Action
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8em, 3vw, 2.5em)', margin: '10px 0 16px', color: '#fff' }}>
              Behind the Scenes at Momma Micky's
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95em' }}>
              Watch how our passionate team blends premium ingredients with artistic cake decorating. Every layer is carefully stacked and decorated with love.
            </p>
            <Link to="/contact" className="btn" style={{ padding: '12px 28px' }}>
              Book a Tasting
            </Link>
          </div>
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.5)', background: '#000' }}>
            <video
              src="/cakes/1000569213.mp4"
              controls
              poster="/cakes/1000569250.jpg"
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'contain' }}
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR SECTION */}
      <section style={{
        background: '#fff',
        padding: '40px 20px 20px',
        position: 'sticky',
        top: '90px',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '20px'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: selectedCategory === cat.id ? 'var(--color-orange)' : '#f5f5f5',
                  color: selectedCategory === cat.id ? '#fff' : 'var(--color-primary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9em',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <input
              type="text"
              placeholder="Search cakes or flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 18px',
                borderRadius: '30px',
                border: '1px solid #ddd',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9em',
                outline: 'none',
                transition: 'border 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-orange)'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            {searchQuery && (
              <span
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#999',
                  fontWeight: 'bold'
                }}
              >
                ✕
              </span>
            )}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section style={{
        background: '#fff',
        padding: '30px 20px 80px'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto'
        }}>
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: '3em', marginBottom: '16px' }}>🎂</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>No cakes found</h3>
              <p style={{ color: 'var(--color-text)', marginTop: '8px' }}>
                Try adjusting your search query or switching to another category.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn"
                style={{ marginTop: '20px', padding: '10px 24px' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '26px'
            }}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    background: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #ececec',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Product Image Container */}
                  <div
                    style={{
                      position: 'relative',
                      paddingTop: '95%',
                      overflow: 'hidden',
                      background: '#f8f8f8',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedImage(product)}
                    title="Click to view full photo"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />

                    {/* Category Pill Tag */}
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(23, 21, 28, 0.82)',
                      color: '#fff',
                      fontSize: '0.72em',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}>
                      {product.category}
                    </span>

                    {/* Quick View Pill */}
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(255,255,255,0.92)',
                      color: 'var(--color-primary)',
                      borderRadius: '20px',
                      padding: '4px 10px',
                      fontSize: '0.75em',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span>🔍 Zoom</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15em',
                      color: 'var(--color-primary)',
                      marginBottom: '8px',
                      fontWeight: 500,
                      lineHeight: '1.3'
                    }}>
                      {product.name}
                    </h3>
                    <p style={{
                      fontSize: '0.85em',
                      color: 'var(--color-text)',
                      marginBottom: '16px',
                      lineHeight: '1.5',
                      flex: 1
                    }}>
                      {product.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '12px',
                      borderTop: '1px solid #f0f0f0'
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.3em',
                        color: 'var(--color-orange)',
                        fontWeight: 600
                      }}>
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        style={{
                          background: 'var(--color-orange)',
                          border: 'none',
                          color: '#fff',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.85em',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'background 0.25s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'var(--color-dark)'}
                        onMouseLeave={(e) => e.target.style.background = 'var(--color-orange)'}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FULL PHOTO LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              borderBottom: '1px solid #eee'
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', margin: 0, color: 'var(--color-primary)' }}>
                {selectedImage.name}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5em',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ background: '#111', display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '65vh' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                style={{ maxHeight: '65vh', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ margin: '0 0 6px', color: 'var(--color-text)', fontSize: '0.95em' }}>
                  {selectedImage.description}
                </p>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4em', color: 'var(--color-orange)', fontWeight: 600 }}>
                  ${selectedImage.price.toFixed(2)}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => { addToCart(selectedImage); setSelectedImage(null); }}
                  className="btn"
                  style={{ padding: '10px 22px' }}
                >
                  Add To Order
                </button>
                <Link
                  to="/contact"
                  className="btn btn-outline"
                  style={{ padding: '10px 22px' }}
                >
                  Custom Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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
            Have a Dream Cake in Mind?
          </h2>
          <p style={{
            fontSize: '1.1em',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '32px',
            lineHeight: '1.7'
          }}>
            If you have a photo, sketch, or color scheme, Momma Micky can bring it to life! Contact us directly to book a consultation.
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
              textDecoration: 'none',
              borderRadius: '6px'
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
