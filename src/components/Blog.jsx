import { blogPosts } from '../data/cakes';

export default function Blog() {
  const posts = blogPosts;
  
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

