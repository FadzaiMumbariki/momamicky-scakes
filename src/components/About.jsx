export default function About() {
  const galleryImages = [
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-01.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-02.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-03.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-04.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-05.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-06.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-07.jpg',
    'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/gallery-08.jpg'
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-left">
          <div className="about-left-bg"></div>
          <img 
            src="https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/chef-avatar.jpg" 
            alt="Chef" 
            className="about-circle-img"
          />
          <div className="about-text">
            <h2>Mommamicky</h2>
            <h5>Master Baker & Owner</h5>
          </div>
        </div>
        
        <div className="play-btn-wrap">
          <div className="play-btn">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
