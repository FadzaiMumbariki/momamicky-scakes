export default function Blog() {
  const posts = [
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/blog-01.jpg',
      date: 'Oct 15, 2026',
      title: 'Top 10 Wedding Cake Trends',
      excerpt: 'Discover the latest trends in wedding cake designs for 2026.'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/blog-02.jpg',
      date: 'Oct 20, 2026',
      title: 'The Art of Cake Decoration',
      excerpt: 'Learn about the techniques behind stunning cake decorations.'
    },
    {
      image: 'https://nicdarkthemes.com/food/food-wordpress-theme/wp-content/uploads/sites/halloween/blog-03.jpg',
      date: 'Oct 25, 2026',
      title: 'Choosing the Perfect Flavor',
      excerpt: 'A guide to selecting the ideal cake flavor for your event.'
    }
  ];
  
  return (
    <section className="blog-section">
      <div className="blog-header">
        <div className="blog-header-left">
          <span className="tag">OUR BLOG</span>
          <h2>Latest News</h2>
        </div>
        <a href="#blog" className="btn">View All Posts</a>
      </div>
      
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <div 
              className="blog-card-bg"
              style={{ backgroundImage: `url(${post.image})` }}
            />
            <div className="blog-card-overlay"></div>
            <div className="blog-card-content">
              <div className="blog-date">{post.date}</div>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
