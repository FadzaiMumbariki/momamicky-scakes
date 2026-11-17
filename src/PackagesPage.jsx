import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext.jsx';

export default function PackagesPage() {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState('all');

  const packages = [
    {
      image: '/cakes/cake-01.webp',
      title: 'Golden Velvet Multi-Tier',
      description: 'Four tall layers of red velvet and vanilla sponge with golden sphere accents.',
      price: '$65.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-02.webp',
      title: 'Pablo Black & Gold Luxury',
      description: 'Stunning contrast cake with black brushstroke, gold leaf, and floating metallic spheres.',
      price: '$65.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-03.webp',
      title: 'Mzukulu Pink Glamour Hat',
      description: 'Blush pink finish with chic fashion topper, golden bubbles, and dual candles.',
      price: '$68.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-04.webp',
      title: 'Purple Ruffle Glam',
      description: 'Textured lavender rosettes, silver glitter top, and black bow ribbons.',
      price: '$60.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-05.webp',
      title: 'Traditional Fruit Cake Feast',
      description: 'Rich, slow-matured spiced fruit loaves packed with candied cherries and raisins.',
      price: '$45.00',
      category: 'treats'
    },
    {
      image: '/cakes/cake-06.webp',
      title: 'Stitch & Angel Birthday Fantasy',
      description: 'Baby blue tier with custom Stitch & Angel edible art, ice cream cone topper & pink hearts.',
      price: '$75.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-07.webp',
      title: 'Dino Explorer Birthday',
      description: 'Vibrant teal tier with friendly dinosaur toppers and jungle palm leaves.',
      price: '$70.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-08.webp',
      title: 'Nomae Magenta Butterfly Elegance',
      description: 'Textured white tier with vibrant magenta fashion illustration and flying 3D butterflies.',
      price: '$65.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-09.webp',
      title: 'Lady Laca Sunburst Blossom',
      description: 'Pastel peach tier with golden fans, orange sugar dahlias, and gold butterfly accents.',
      price: '$70.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-10.webp',
      title: "Alma's Minnie Mouse Chocolate",
      description: 'Rich chocolate sponge filled with vanilla buttercream, mini chocolate bars, and Minnie toppers.',
      price: '$60.00',
      category: 'birthday'
    },
    {
      image: '/cakes/1000569113.webp',
      title: 'Floral Crown Symphony Tier',
      description: 'Cascading sugar blossoms, delicate pastel roses, and fresh organic sponge layers.',
      price: '$78.00',
      category: 'wedding'
    },
    {
      image: '/cakes/1000569134.webp',
      title: 'Emerald Gold Leaf Elegance',
      description: 'Contemporary deep emerald tier accented with 24k edible gold leaf and geometric flair.',
      price: '$72.00',
      category: 'wedding'
    },
    {
      image: '/cakes/1000569248.webp',
      title: 'Rose Champagne Grandeur',
      description: 'Infused with sparkling champagne notes and finished with shimmering gold petal rosettes.',
      price: '$88.00',
      category: 'wedding'
    },
    {
      image: '/cakes/1000569250.webp',
      title: 'Monarch Marble & Gold Splendor',
      description: 'Hand-painted marble fondant with veined gold leaf and minimalist architectural tiers.',
      price: '$79.00',
      category: 'wedding'
    },
    {
      image: '/cakes/1000569247.webp',
      title: 'Carnival Confetti Birthday Box',
      description: 'Playful rainbow sprinkle explosion with custom festive balloon toppers.',
      price: '$58.00',
      category: 'birthday'
    },
    {
      image: '/cakes/1000569251.webp',
      title: 'Princess Tiara Strawberry Delight',
      description: 'Royal tiara embellishments, pink sugar ruffles, and real strawberry vanilla cream.',
      price: '$72.00',
      category: 'birthday'
    },
    {
      image: '/cakes/1000569258.webp',
      title: 'Fairy Tale Castle Adventure',
      description: 'Whimsical castle spires, sparkle dust, and pastel pink turrets for magical birthdays.',
      price: '$85.00',
      category: 'birthday'
    },
    {
      image: '/cakes/1000569267.webp',
      title: 'Wonderland Safari Jungle Cake',
      description: 'Friendly animal toppers, lush monstera leaves, and handcrafted edible jungle vines.',
      price: '$76.00',
      category: 'birthday'
    },
    {
      image: '/cakes/1000569163.webp',
      title: 'Chocolate Cascade Drip Platter',
      description: 'Velvety dark chocolate drip over vanilla bean frosting loaded with artisan confections.',
      price: '$62.00',
      category: 'treats'
    },
    {
      image: '/cakes/1000569242.webp',
      title: 'Strawberry Blossom Artisan Box',
      description: 'Fresh organic strawberry layers with cream cheese frosting and dehydrated berry dust.',
      price: '$64.00',
      category: 'treats'
    },
    {
      image: '/cakes/1000569255.webp',
      title: 'Caramel Macchiato Tower',
      description: 'Espresso-soaked sponge layered with salted caramel buttercream and roasted nuts.',
      price: '$68.00',
      category: 'treats'
    },
    {
      image: '/cakes/1000569259.webp',
      title: 'Belgian Dark Truffle Bliss',
      description: 'Decadent 70% dark Belgian cocoa ganache crowned with handcrafted dusting truffles.',
      price: '$75.00',
      category: 'treats'
    },
    {
      image: '/cakes/1000569274.webp',
      title: 'Diamond Jubilee Triple Tier',
      description: 'Grand three-tier centerpiece cake with crystalline sugar geometry and silver embroidery.',
      price: '$98.00',
      category: 'wedding'
    },
    {
      image: '/cakes/1000569276.webp',
      title: "Momma Micky's Signature Masterpiece",
      description: 'Our premier bakery showpiece combining the most intricate custom sugar craft.',
      price: '$85.00',
      category: 'wedding'
    }
  ];

  const filteredPackages = activeFilter === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === activeFilter);

  return (
    <div className="packages-page">
      <section className="packages-hero-section">
        <div className="packages-hero-overlay"></div>
        <div className="packages-hero-content">
          <span className="tag tag-white">Celebration Packs</span>
          <h1>Momma Micky's Cakes Packages</h1>
          <p>Handcrafted custom cakes baked with love for every special occasion</p>
        </div>
      </section>

      <section className="packages-main-section">
        <div className="packages-container">
          {/* Filter Tabs */}
          <div className="packages-filters">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Packages ({packages.length})
            </button>
            <button
              className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
              onClick={() => setActiveFilter('wedding')}
            >
              Weddings & Luxury
            </button>
            <button
              className={`filter-btn ${activeFilter === 'birthday' ? 'active' : ''}`}
              onClick={() => setActiveFilter('birthday')}
            >
              Birthdays & Themed
            </button>
            <button
              className={`filter-btn ${activeFilter === 'treats' ? 'active' : ''}`}
              onClick={() => setActiveFilter('treats')}
            >
              Artisan Treats & Loaves
            </button>
          </div>

          {/* Packages Grid */}
          <div className="packages-grid-full">
            {filteredPackages.map((pkg, idx) => (
              <div key={idx} className="package-full-card">
                <div className="package-full-image">
                  <img src={pkg.image} alt={pkg.title} loading="lazy" />
                  <div className="package-overlay"></div>
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'var(--color-primary)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75em',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {pkg.category}
                  </span>
                </div>
                <div className="package-full-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.description}</p>
                  <div className="package-full-footer">
                    <span className="package-price">{pkg.price}</span>
                    <button
                      onClick={() => addToCart({
                        id: `pkg-${pkg.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
                        name: pkg.title,
                        price: pkg.price,
                        image: pkg.image,
                        category: pkg.category,
                        description: pkg.description
                      })}
                      className="btn btn-small"
                      style={{ cursor: 'pointer' }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{ color: 'var(--color-text)', marginBottom: '16px', fontSize: '1.05em' }}>
              Looking to see every single cake created by Momma Micky?
            </p>
            <Link to="/gallery" className="btn" style={{ padding: '14px 34px' }}>
              Explore Complete 50+ Cake Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
