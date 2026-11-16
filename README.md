# Mommamicky's Cakes - React Application

A modern, responsive React website for a bakery business showcasing cakes, services, and team members.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**: 
  - Hero section with image slideshow and rotating text
  - Service slider with custom navigation
  - Team member flip cards
  - Testimonial carousel
  - Accordion menus
  - Smooth scroll animations
- **Modern UI/UX**: 
  - Halloween/spooky themed design
  - Smooth transitions and animations
  - Custom fonts (Griffy & Open Sans)
  - Interactive hover effects

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.jsx       - Navigation header with mobile menu
│   ├── Hero.jsx         - Hero section with slideshow
│   ├── About.jsx        - About section with gallery
│   ├── Services.jsx     - Services slider with accordion
│   ├── Features.jsx     - Feature icons grid
│   ├── Team.jsx         - Team flip cards
│   ├── Growth.jsx       - Product menu grid
│   ├── Ideas.jsx        - Values/trust section
│   ├── Packages.jsx     - Package cards
│   ├── CTA.jsx          - Call-to-action section
│   ├── Blog.jsx         - Blog posts grid
│   ├── Testimonials.jsx - Customer testimonials carousel
│   ├── Newsletter.jsx   - Newsletter subscription form
│   ├── Footer.jsx       - Site footer
│   └── ScrollToTop.jsx  - Scroll to top button
├── App.jsx              - Main App component
├── App.css              - Global styles
└── main.jsx             - React entry point
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

The development server runs on `http://localhost:5173` by default.

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --color-primary: #2D2D2D;
  --color-accent: #F65F1C;
  --color-orange: #EC5A19;
  --color-purple: #800EA8;
  /* ... more colors */
}
```

### Content
Each component can be customized by editing the respective `.jsx` file in `src/components/`.

## 📱 Responsive Breakpoints

- Desktop: > 900px
- Tablet: 600px - 900px
- Mobile: < 600px

## 🚀 Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties, Flexbox, Grid)
- Google Fonts (Griffy, Open Sans)

## 📝 License

All rights reserved © 2026 Mommamicky's Cakes
