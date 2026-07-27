# Advanced React Portfolio

A modern, fully responsive portfolio website built with React, featuring dark mode, smooth animations, and a beautiful design.

### 🚀 Features

- ✨ **Smooth Animations** - Built with Framer Motion
- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Fully Responsive** - Works on all devices
- 🎨 **Modern Design** - Gradient backgrounds and interactive elements
- ⚡ **Performance Optimized** - Fast load times
- 🔧 **Easy to Customize** - Simple structure and clear code
- 📝 **Multiple Sections** - Hero, About, Projects, Skills, Contact, Footer

### 📋 Sections

1. **Navigation** - Sticky navbar with theme toggle and mobile menu
2. **Hero** - Eye-catching introduction with CTAs
3. **About** - Personal intro with stats
4. **Projects** - Filterable project showcase
5. **Skills** - Skills organized by category
6. **Contact** - Contact form and social links
7. **Footer** - Social links and copyright

### 🛠️ Tech Stack

- React 18
- Framer Motion (Animations)
- React Icons (Icons)
- React Scroll (Smooth scrolling)
- CSS3 (Custom properties and animations)

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Sesha371994/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm run build
```

### 🎨 Customization

### Update Personal Information

Edit the following components to add your information:

- **Hero.js** - Update name, title, and description
- **About.js** - Modify about text and stats
- **Projects.js** - Add your projects
- **Skills.js** - Update your skills
- **Contact.js** - Add your contact information
- **Footer.js** - Update social links

### Customize Colors

Edit `src/styles/global.css` to change the color scheme:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  /* ... other colors ... */
}
```

### Add Your Own Images

Replace placeholder images in the components with your actual images:

```jsx
// In Hero.js or other components
<img src="your-image.jpg" alt="Profile" />
```

### 🌓 Theme System

The portfolio automatically includes a dark/light mode toggle. Colors are defined using CSS variables for easy customization.

### 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)

### 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'build' folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Add to package.json
"homepage": "https://yourusername.github.io/portfolio"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy scripts to package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### 📝 License

This project is open source and available under the MIT License.

### 🤝 Contributing

Feel free to fork this project and customize it for your needs!

---

**Happy building! 🎉**
