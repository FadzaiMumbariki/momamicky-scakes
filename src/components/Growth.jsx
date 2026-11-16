import { products } from '../data/cakes';

export default function Growth() {
  
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
