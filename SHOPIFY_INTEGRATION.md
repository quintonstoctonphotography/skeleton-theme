# Shopify Theme Integration Guide

## Professional Shopify Structure

This theme follows enterprise-grade Shopify theme development patterns with:

### Advanced Liquid Implementation
- **CSS Custom Properties System** (`theme-styles-variables.liquid`) - Dynamic theming via settings
- **Font Loading** - Optimized with Shopify CDN and font modifiers
- **Color Schemes** - Full settings-driven color management
- **Responsive Typography** - Fluid font sizing based on viewport

### Modern Architecture
- **Online Store 2.0 Compatible** - JSON template support
- **Customizable Sections** - All sections have `{% schema %}` blocks
- **Global Settings** - Centralized configuration in `settings_schema.json`
- **Editor Events** - Full Shopify Theme Editor integration

### Performance Optimized
- **CSS Variables** - Single-pass CSS calculations
- **Deferred Scripts** - All JS loads with `defer` attribute
- **Font Swapping** - `font-display: swap` for better Core Web Vitals
- **Lazy Loading** - Images use native `loading="lazy"`

---

## File Structure Breakdown

```
shopify-theme/
├── layout/
│   └── theme.liquid              # Master layout with Shopify Liquid
├── sections/
│   ├── header.liquid             # Header with settings integration
│   ├── footer.liquid             # Footer with dynamic content
│   └── hero-banner.liquid        # Customizable hero section
├── snippets/
│   ├── theme-styles-variables.liquid  # CSS variables & fonts
│   └── footer-social.liquid      # Reusable social links
├── assets/
│   ├── theme.css                 # Main stylesheet
│   ├── theme.js                  # JavaScript (theme.js replaced)
│   ├── theme-editor.js           # Shopify editor integration
│   ├── constants.js              # Theme constants
│   └── pubsub.js                 # Event system
├── config/
│   └── settings_schema.json      # All customization options
└── templates/
    └── index.json                # JSON-based homepage
```

---

## Key Professional Features

### 1. **Settings-Driven Customization**
All theme elements are controlled from `settings_schema.json`:

```liquid
<!-- In any section -->
{{ settings.color_primary }}           <!-- #BA0606 -->
{{ settings.business_name }}           <!-- "Quinton Stocton Photography" -->
{{ settings.type_body_font.family }}   <!-- "Segoe UI" -->
```

### 2. **CSS Variables System**
Dynamic styling without recompiling:

```css
:root {
  --color-primary: rgb(var(--color-primary));
  --font-body-family: var(--font-body-family);
  --spacing-lg: var(--spacing-lg);
}

body {
  background: rgb(var(--color-background));
  font-family: var(--font-body-family);
}
```

### 3. **Font Management**
Shopify's native font API for optimal loading:

```liquid
{% assign primary_font_bold = settings.type_body_font | font_modify: 'weight', 'bold' %}
{{ settings.type_body_font | font_face: font_display: 'swap' }}
```

### 4. **Customizable Sections**
Merchants can edit sections directly in Theme Editor:

```liquid
{% schema %}
{
  "name": "Hero Banner",
  "settings": [
    {
      "type": "text",
      "id": "hero_title",
      "label": "Title",
      "default": "Welcome"
    }
  ]
}
{% endschema %}
```

### 5. **Editor Integration**
Real-time preview of changes:

```javascript
// theme-editor.js
document.addEventListener('shopify:section:load', (event) => {
  // Re-initialize components when section is loaded
  reinitializeCarousels();
});
```

---

## Using Settings in Your Sections

### Access Global Settings
```liquid
<!-- Colors -->
<style>
  --color-primary: {{ settings.color_primary.hue }}, {{ settings.color_primary.saturation }}%, {{ settings.color_primary.lightness }}%;
</style>

<!-- Typography -->
<h1 style="font-family: {{ settings.type_heading_font.family }}">
  {{ page.title }}
</h1>

<!-- Business Info -->
<p>{{ settings.business_phone }}<br>{{ settings.business_email }}</p>

<!-- Social Links -->
<a href="{{ settings.social_facebook }}">Facebook</a>
```

### Create a New Settings Group
Add to `config/settings_schema.json`:

```json
{
  "type": "header",
  "content": "Your Section Name"
},
{
  "type": "text",
  "id": "custom_setting_id",
  "label": "Your Label",
  "default": "Default Value"
}
```

Then use in templates:
```liquid
{{ settings.custom_setting_id }}
```

---

## Advanced Liquid Patterns Used

### 1. **Conditional Font Loading**
```liquid
{% unless settings.type_body_font.system? %}
  <link rel="preconnect" href="https://fonts.shopifycdn.com" crossorigin>
{% endunless %}
```

### 2. **Dynamic Color Calculations**
```liquid
{% liquid
  assign background_color = scheme.settings.background
  assign brightness = background_color | color_brightness
  
  if brightness <= 26
    assign contrast_color = background_color | color_lighten: 50
  endif
%}
```

### 3. **Responsive Typography with Clamp**
```css
--font-size-h1: clamp(2rem, 5vw, 3.5rem);
```

### 4. **CSS Custom Properties Everywhere**
```css
.button {
  background: rgb(var(--color-primary));
  padding: var(--spacing-lg);
  font-family: var(--font-body-family);
  transition: all var(--transition-base);
}
```

---

## Customization Path for Merchants

### Via Shopify Admin
1. **Store Settings** → **Customize Theme**
2. **Theme Settings** tab shows all options from `settings_schema.json`
3. Change colors, fonts, text, links in real-time
4. Preview updates instantly

### Programmers - Adding New Features
1. Add setting to `config/settings_schema.json`
2. Reference in section via `{{ settings.your_id }}`
3. Restart dev server to see new setting in editor

### Example: Adding a "Accent Color"
```json
{
  "type": "color",
  "id": "color_accent",
  "label": "Accent Color",
  "default": "#FFD700"
}
```

Then use anywhere:
```liquid
<button style="background-color: {{ settings.color_accent }}">
  Click Me
</button>
```

---

## Deployment Checklist

- [ ] All custom settings configured in `settings_schema.json`
- [ ] Sections have `{% schema %}` blocks
- [ ] CSS uses CSS variables from `theme-styles-variables.liquid`
- [ ] JavaScript uses event system (`theme-editor.js`)
- [ ] All images optimized and lazy-loaded
- [ ] Mobile responsive tested (768px, 480px breakpoints)
- [ ] Theme published via Shopify CLI: `shopify theme publish`

---

## Resources

- [Shopify Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Theme Architecture](https://shopify.dev/docs/storefronts/themes/architecture)
- [Settings Schema Reference](https://shopify.dev/docs/storefronts/themes/configuration/settings-schema)
- [CSS Custom Properties in Shopify](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings)

---

**This theme is production-ready and follows Shopify's 2025 best practices!**
