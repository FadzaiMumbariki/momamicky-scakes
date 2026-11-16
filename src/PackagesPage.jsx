import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const packages = [
    {
      image: '/cakes/cake-01.jpg',
      title: 'Golden Velvet Multi-Tier',
      description: 'Four tall layers of red velvet and vanilla sponge with golden sphere accents.',
      price: '$65.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-02.jpg',
      title: 'Pablo Black & Gold Luxury',
      description: 'Stunning contrast cake with black brushstroke, gold leaf, and floating metallic spheres.',
      price: '$65.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-03.jpg',
      title: 'Mzukulu Pink Glamour Hat',
      description: 'Blush pink finish with chic fashion topper, golden bubbles, and dual candles.',
      price: '$68.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-04.jpg',
      title: 'Purple Ruffle Glam',
      description: 'Textured lavender rosettes, silver glitter top, and black bow ribbons.',
      price: '$60.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-05.jpg',
      title: 'Traditional Fruit Cake Feast',
      description: 'Rich, slow-matured spiced fruit loaves packed with candied cherries and raisins.',
      price: '$45.00',
      category: 'treats'
    },
    {
      image: '/cakes/cake-06.jpg',
      title: 'Stitch & Angel Birthday Fantasy',
      description: 'Baby blue tier with custom Stitch & Angel edible art, ice cream cone topper & pink hearts.',
      price: '$75.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-07.jpg',
      title: 'Dino Explorer Birthday',
      description: 'Vibrant teal tier with friendly dinosaur toppers and jungle palm leaves.',
      price: '$70.00',
      category: 'birthday'
    },
    {
      image: '/cakes/cake-08.jpg',
      title: 'Nomae Magenta Butterfly Elegance',
      description: 'Textured white tier with vibrant magenta fashion illustration and flying 3D butterflies.',
      price: '$65.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-09.jpg',
      title: 'Lady Laca Sunburst Blossom',
      description: 'Pastel peach tier with golden fans, orange sugar dahlias, and gold butterfly accents.',
      price: '$70.00',
      category: 'wedding'
    },
    {
      image: '/cakes/cake-10.jpg',
      title: 'Alma\'s Minnie Mouse Chocolate',
      description: 'Rich chocolate sponge filled with vanilla buttercream, mini chocolate bars, and Minnie toppers.',
      price: '$60.00',
      category: 'birthday'
    },
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
              All Cakes
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'birthday' ? 'active' : ''}`}
              onClick={() => setActiveFilter('birthday')}
            >
              Birthday Cakes
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
              onClick={() => setActiveFilter('wedding')}
            >
              Wedding & Events
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'treats' ? 'active' : ''}`}
              onClick={() => setActiveFilter('treats')}
            >
              Special Treats
            </button>
          </div>
          
          {/* Package Grid */}
          <div className="packages-grid-full">
            {filteredPackages.map((pkg, index) => (
              <div key={index} className="package-full-card">
                <div className="package-full-image">
                  <img src={pkg.image} alt={pkg.title} />
                  <div className="package-overlay"></div>
                </div>
                <div className="package-full-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.description}</p>
                  <div className="package-full-footer">
                    <span className="package-price">{pkg.price}</span>
                    <Link to="/contact" className="btn btn-small">Order Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
