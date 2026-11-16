// Real cake images from Mommamicky's portfolio
// Using placeholder images until real photos are added
const placeholders = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80', // Colorful birthday cake
  'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80', // Pink elegant cake
  'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80', // Layered cake
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80', // Fashion themed
  'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80', // Character cake
  'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80', // Gold decorated
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80', // Butterfly theme
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80', // Purple cake
  'https://images.unsplash.com/photo-1562440499-64c9a74f0364?w=800&q=80', // Chocolate cake
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80', // Fruit cake
];

export const cakeImages = {
  // Birthday Cakes - will use real images once added to public/images/cakes/
  stitchCake: placeholders[4],
  birthdayGoldCake: placeholders[5],
  fashionPinkCake: placeholders[3],
  fashionMagentaCake: placeholders[3],
  dino1stBirthday: placeholders[4],
  pabloCake: placeholders[5],
  purpleButterfly: placeholders[7],
  minnieMouse: placeholders[8],
  
  // Specialty Cakes
  layeredCake: placeholders[2],
  fruitCakes: placeholders[9],
};

// Gallery images for About section
export const galleryImages = [
  placeholders[0],
  placeholders[1],
  placeholders[2],
  placeholders[3],
  placeholders[4],
  placeholders[5],
  placeholders[6],
  placeholders[7],
];

// Products for menu
export const products = [
  {
    image: placeholders[4],
    name: 'Character Cakes',
    price: 'From $65',
    description: 'Custom character designs for kids'
  },
  {
    image: placeholders[1],
    name: 'Elegant Birthday',
    price: 'From $55',
    description: 'Gold & floral decorations'
  },
  {
    image: placeholders[3],
    name: 'Fashion Cakes',
    price: 'From $70',
    description: 'Stylish lady-themed designs'
  },
  {
    image: placeholders[2],
    name: 'Layered Cakes',
    price: 'From $50',
    description: 'Red velvet & vanilla layers'
  },
  {
    image: placeholders[7],
    name: 'Butterfly Dreams',
    price: 'From $60',
    description: 'Elegant butterfly decorations'
  },
  {
    image: placeholders[9],
    name: 'Fruit Cakes',
    price: 'From $45',
    description: 'Traditional rich fruit cakes'
  },
];

// Blog posts
export const blogPosts = [
  {
    image: placeholders[4],
    date: 'Nov 10, 2026',
    title: 'First Birthday Cake Ideas',
    excerpt: 'Creative designs for your child\'s special first birthday celebration.'
  },
  {
    image: placeholders[3],
    date: 'Nov 12, 2026',
    title: 'Adult Birthday Cake Trends',
    excerpt: 'Sophisticated and stylish designs for milestone birthdays.'
  },
  {
    image: placeholders[8],
    date: 'Nov 14, 2026',
    title: 'Classic Character Cakes',
    excerpt: 'Timeless Disney-inspired designs that never go out of style.'
  },
];

// Service slider images
export const serviceSlides = [
  {
    image: placeholders[1],
    title: 'Birthday Celebrations',
    description: 'Beautiful cakes for all ages and themes'
  },
  {
    image: placeholders[5],
    title: 'Custom Designs',
    description: 'Personalized cakes tailored to your vision'
  },
  {
    image: placeholders[7],
    title: 'Special Occasions',
    description: 'Elegant cakes for memorable moments'
  },
];

// Package cards
export const packages = [
  {
    image: placeholders[8],
    title: 'Kids Party Package',
    description: 'Perfect for children\'s parties'
  },
  {
    image: placeholders[3],
    title: 'Adult Celebration',
    description: 'Sophisticated designs for adults'
  },
  {
    image: placeholders[2],
    title: 'Premium Package',
    description: 'Multi-layered specialty cakes'
  },
  {
    image: placeholders[9],
    title: 'Traditional Package',
    description: 'Classic fruit cakes'
  },
];
