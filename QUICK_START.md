# Quinton Stocton Photography - Quick Start Guide

## Local Development

### Start the Web Server
```bash
./setup.sh
```
Then open: **http://localhost:5000**

## Deploy to Shopify

### 1. Install Shopify CLI
Download from: https://shopify.dev/docs/themes/tools/cli

### 2. Deploy Automatically
```bash
./deploy-shopify.sh
```

### 3. Or Deploy Manually
```bash
cd shopify-theme
shopify theme push
```

## Push Code to GitHub

### 1. Create a GitHub Repository
- Go to https://github.com/new
- Name: `quinton-photography`
- Create repository

### 2. Push Your Code
```bash
git remote add origin https://github.com/YOUR_USERNAME/quinton-photography.git
git branch -M main
git push -u origin main
```

### 3. Use with Shopify CLI
```bash
shopify theme create --repository https://github.com/YOUR_USERNAME/quinton-photography
```

## Project Structure

```
├── index.html              # Homepage
├── reviews.html            # Reviews page
├── contact.html            # Contact page
├── about.html              # About page
├── portfolio.html          # Portfolio page
├── services.html           # Services page
├── style.css               # Main stylesheet
├── script.js               # Client-side JavaScript
├── backend.py              # Web server
├── setup.sh                # Start development server
├── deploy-shopify.sh       # Deploy to Shopify
└── shopify-theme/          # Shopify theme files
    ├── config/
    ├── sections/
    ├── snippets/
    └── assets/
```

## Features

✅ Responsive design (mobile, tablet, desktop)
✅ Professional photography portfolio
✅ Reviews and testimonials showcase
✅ Service listings and pricing
✅ Social media links
✅ SEO optimized
✅ Fast loading with lazy image loading

## Troubleshooting

**Port 5000 already in use?**
```bash
lsof -i :5000
kill -9 <PID>
```

**Git permission denied?**
Make sure you have SSH keys set up or use HTTPS token authentication.

**Shopify CLI not found?**
Download from: https://shopify.dev/docs/themes/tools/cli/install

---

For more info, see the main README.md files in subdirectories.
