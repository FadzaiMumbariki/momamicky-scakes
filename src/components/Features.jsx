export default function Features() {
  const features = [
    {
      icon: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/icon-01.png',
      title: 'Fresh Daily',
      description: 'Baked fresh every morning'
    },
    {
      icon: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/icon-02.png',
      title: 'Organic',
      description: 'Premium organic ingredients'
    },
    {
      icon: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/icon-03.png',
      title: 'Custom Design',
      description: 'Personalized to your taste'
    },
    {
      icon: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/icon-04.png',
      title: 'Free Delivery',
      description: 'On orders over $50'
    }
  ];
  
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
