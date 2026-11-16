export default function Ideas() {
  const ideas = [
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/idea-01.jpg',
      title: 'Trust & Quality',
      description: 'Over 10 years of experience delivering exceptional cakes for every occasion.'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/idea-02.jpg',
      title: 'Creative Innovation',
      description: 'Constantly exploring new flavors and designs to exceed your expectations.'
    }
  ];
  
  return (
    <section className="ideas-section">
      <div className="ideas-header">
        <span className="tag">WHY CHOOSE US</span>
        <h2>Our Values</h2>
        <p>
          We combine traditional baking techniques with modern creativity to deliver 
          cakes that are both beautiful and delicious.
        </p>
      </div>
      
      <div className="ideas-cards">
        {ideas.map((idea, index) => (
          <div key={index} className="ideas-card">
            <div 
              className="ideas-card-bg"
              style={{ backgroundImage: `url(${idea.image})` }}
            />
            <div className="ideas-card-overlay"></div>
            <div className="ideas-card-content">
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
              <a href="#about" className="btn">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
