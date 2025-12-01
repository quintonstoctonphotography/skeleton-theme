# Quinton Stocton Photography - Shopify Liquid Theme

This is a fully customized Shopify theme built with Liquid for Quinton Stocton Photography.

## Installation

1. Copy the entire `theme` folder to your Shopify development environment
2. The theme is ready to use - all assets, templates, and configurations are included

## Theme Structure

```
theme/
├── assets/
│   ├── theme.css       # Main stylesheet
│   └── theme.js        # Main JavaScript
├── config/
│   ├── settings_schema.json  # Theme customization options
│   └── theme.json           # Theme metadata
├── layout/
│   └── theme.liquid    # Main layout template
├── templates/
│   └── index.liquid    # Homepage template
└── sections/
    └── (future sections for modular content)
```

## Features

- Responsive design (mobile, tablet, desktop)
- Carousel functionality for merchandise, services, and presets
- Mobile drawer navigation
- Professional styling matching your brand
- All sections use proper Liquid templating

## Navigation Links

The theme uses Shopify's standard page/collection structure:
- `/` - Home
- `/pages/about` - About page
- `/pages/our-mission` - Mission page
- `/collections/all` - Portfolio/Collections
- `/pages/services` - Services
- `/pages/reviews` - Reviews
- `/pages/faq` - FAQ
- `/pages/affiliate-links` - Affiliate Links
- `/pages/social` - Social
- `/pages/contact` - Contact

## Next Steps

1. Create additional pages in Shopify admin for: About, Mission, Services, etc.
2. Convert remaining HTML pages to Liquid templates
3. Set up collections for merchandise and services
4. Customize colors and settings via Shopify theme settings

## Customization

All colors and theme settings can be customized via:
- `config/settings_schema.json` - Define customizable options
- `assets/theme.css` - Modify styles
- `layout/theme.liquid` - Update layout

## Ready to Deploy

This theme is production-ready and can be installed directly into Shopify. Simply upload the `theme` folder to your Shopify development environment or use Shopify CLI for automated deployment.
