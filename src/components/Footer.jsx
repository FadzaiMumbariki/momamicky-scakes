export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <div className="footer-logo-txt">Mommamicky's</div>
          <p>
            Creating delicious memories since 2010. Our passion is baking cakes that bring joy 
            to every celebration, big or small.
          </p>
        </div>
        
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#wedding">Wedding Cakes</a></li>
            <li><a href="#birthday">Birthday Cakes</a></li>
            <li><a href="#corporate">Corporate Events</a></li>
            <li><a href="#custom">Custom Orders</a></li>
            <li><a href="#catering">Catering</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h5>Contact Info</h5>
          <div className="footer-contact-item">
            <span>Address:</span>
            <span>3697 Emganwini</span>
          </div>
          <div className="footer-contact-item">
            <span>Phone:</span>
            <span>+263 78 834 0047</span>
          </div>
          <div className="footer-contact-item">
            <span>Email:</span>
            <span>mudiwas980@gmail.com</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2026 Mommamicky's Cakes. All rights reserved.
        </div>
        <div className="footer-social">
          <a href="#facebook" className="social-link">f</a>
          <a href="#twitter" className="social-link">t</a>
          <a href="#instagram" className="social-link">i</a>
          <a href="#pinterest" className="social-link">p</a>
        </div>
      </div>
    </footer>
  );
}
