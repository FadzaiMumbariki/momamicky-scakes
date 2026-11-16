export default function Packages() {
  const packages = [
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/package-01.jpg',
      title: 'Basic Package',
      description: 'Perfect for small gatherings'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/package-02.jpg',
      title: 'Premium Package',
      description: 'For special celebrations'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/package-03.jpg',
      title: 'Luxury Package',
      description: 'Ultimate wedding experience'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/package-04.jpg',
      title: 'Custom Package',
      description: 'Tailored to your needs'
    }
  ];
  
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
