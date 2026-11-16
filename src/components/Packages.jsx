import { packages as packageData } from '../data/cakes';

export default function Packages() {
  const packages = packageData;
  
  return (
    <section className="packages-section">
      <div className="packages-header">
        <span className="tag">PACKAGES</span>
        <h2>Choose Your Package</h2>
      </div>
      
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <div 
              className="package-bg"
              style={{ backgroundImage: `url(${pkg.image})` }}
            />
            <div className="package-overlay"></div>
            <div className="package-content">
              <h4>{pkg.title}</h4>
              <p>{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
