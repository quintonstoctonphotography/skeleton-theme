# Quinton Stocton Photography - Project Documentation

## Project Overview
Professional photography portfolio website for Quinton Stocton Photography. Features wedding photography, branding services, Lightroom presets, and more.

## Current Status (November 24, 2025)

### ✅ Completed
- Removed form submission dependencies (no SendGrid required)
- Static web server running on port 5000
- All HTML pages fully functional
- Navigation, mobile menu, carousels working
- GitHub integration connected
- Shell scripts created for easy setup and deployment

### 📁 Project Structure
- **Frontend**: HTML, CSS, JavaScript files in root directory
- **Backend**: Python HTTP server (backend.py)
- **Shopify Theme**: Complete theme files in shopify-theme/ folder
- **Setup**: setup.sh and deploy-shopify.sh for easy deployment

### 🔧 Technical Stack
- HTML5, CSS3, JavaScript (vanilla)
- Python 3 (static file server)
- No database required
- No backend API dependencies
- GitHub for version control

### 📋 Key Files
- `index.html` - Homepage
- `reviews.html` - Customer testimonials
- `contact.html` - Contact information
- `portfolio.html` - Photo gallery
- `services.html` - Service offerings
- `style.css` - Main stylesheet (responsive design)
- `script.js` - Carousel, navigation, lazy loading
- `backend.py` - Web server
- `setup.sh` - Development startup script
- `deploy-shopify.sh` - Shopify deployment script

### 🎨 Design
- Dark theme with red accents (#BA0606)
- Mobile-first responsive design
- Fixed navigation header
- Drawer navigation for mobile
- Smooth animations and transitions
- Professional photography showcase

### 📱 Features
✅ Responsive navbar with hamburger menu
✅ Hero sections with CTAs
✅ Image carousels with navigation
✅ Customer reviews showcase
✅ Service cards
✅ Contact information display
✅ Social media links
✅ Footer with navigation
✅ Lazy image loading for performance
✅ SEO optimized metadata

### 🚀 Deployment Options

#### Local Development
```bash
./setup.sh
```

#### Shopify Theme
```bash
./deploy-shopify.sh
```

#### GitHub Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/quinton-photography.git
git push -u origin main
```

### 🔗 External Links
- **Shopify CLI**: https://shopify.dev/docs/themes/tools/cli
- **GitHub**: Connected via Replit integration

### 📝 Recent Changes
- Removed SendGrid email sending functionality
- Removed contact form and review submission form
- Simplified backend to static file server
- Added setup.sh and deploy-shopify.sh scripts
- Connected GitHub integration

### ⚙️ Environment
- Python 3.11 installed
- No external API keys needed
- Port 5000 (web server)
- Cross-origin resource sharing enabled

### 🐛 Known Issues
- None currently

### 📌 Next Steps (Optional)
- Add contact form with email backend if needed
- Integrate with Shopify store directly
- Add blog section
- Implement image optimization

### 📞 Support
For Shopify CLI help: https://shopify.dev/docs/themes/tools/cli
For GitHub help: https://docs.github.com/

---
Last Updated: November 24, 2025
