export default function Growth() {
  const products = [
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/product-01.jpg',
      name: 'Chocolate Dream',
      price: '$45.00',
      description: 'Rich chocolate cake with ganache'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/product-02.jpg',
      name: 'Vanilla Bliss',
      price: '$40.00',
      description: 'Classic vanilla with buttercream'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/product-03.jpg',
      name: 'Red Velvet',
      price: '$48.00',
      description: 'Signature red velvet cake'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/product-04.jpg',
      name: 'Carrot Cake',
      price: '$42.00',
      description: 'Moist carrot with cream cheese'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/product-05.jpg',
      name: 'Lemon Tart',
      price: '$38.00',
      description: 'Tangy lemon with meringue'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/product-06.jpg',
      name: 'Berry Delight',
      price: '$46.00',
      description: 'Mixed berries with cream'
    }
  ];
  
  return (
    <section className="growth-section">
      <div className="growth-header">
        <span className="tag">OUR MENU</span>
        <h2>Popular Cakes</h2>
      </div>
      
      <div className="growth-grid">
        {products.map((product, index) => (
          <div key={index} className="growth-card">
            <img src={product.image} alt={product.name} />
            <div className="growth-card-info">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <div className="growth-card-actions">
                <span className="text-orange" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1em' }}>
                  {product.price}
                </span>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
