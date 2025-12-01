# Shopify Theme Setup Guide - For Complete Beginners

## What You Just Built

You've created a **Shopify Liquid Theme** - this is custom code that controls how your photography business website looks and functions when hosted on Shopify. Think of it like custom wallpaper and furniture arrangements for your store.

---

## Prerequisites: What You Need (5 minutes)

Before you start, you need:

1. **A Shopify Account** (free trial or paid store) - go to [shopify.com](https://shopify.com) and create one
2. **Node.js installed on your computer** - download from [nodejs.org](https://nodejs.org) (get the LTS version)
3. **Command line/Terminal access** - comes with Mac/Linux, or use Command Prompt on Windows

---

## Step 1: Install Shopify CLI (The Tool That Does The Magic)

The **Shopify CLI** is software that lets your computer talk to Shopify's servers.

### On Mac:
Open Terminal and paste this:
```bash
brew install shopify-cli
```

### On Windows:
1. Go to [github.com/shopify/cli/releases](https://github.com/shopify/cli/releases)
2. Download the `.exe` file for Windows
3. Run it and follow the installer

### On Linux:
```bash
brew install shopify-cli
```

**To verify it worked:** Type this in Terminal/Command Prompt:
```bash
shopify version
```
You should see a version number like `3.50.0`

---

## Step 2: Connect Your Computer to Your Shopify Store

This is how your computer gets permission to update your Shopify store.

1. **Get your theme files** - You already have them in the `theme/` folder
2. **Open Terminal/Command Prompt**
3. **Navigate to your theme folder** by typing:
   ```bash
   cd path/to/your/theme/folder
   ```
   Example: `cd ~/quinton-photography-theme`

4. **Authenticate with Shopify** by typing:
   ```bash
   shopify login --store=your-store.myshopify.com
   ```
   Replace `your-store` with your actual Shopify store name

5. **A browser window will open** - click "Install App" to give permission

---

## Step 3: Push Your Theme to Shopify (Launch It!)

This uploads all your code to Shopify's servers.

**In Terminal/Command Prompt, make sure you're still in the theme folder, then type:**
```bash
shopify theme push
```

**What happens:**
- Your computer sends all files from the `theme/` folder to Shopify
- Shopify processes them and creates your live website
- You see: "✓ Pushed successfully" if it worked

---

## Understanding Your Theme Files (The Blueprint)

Think of your theme like a house blueprint:

### **`theme/layout/theme.liquid`** 
- The **main frame** of every page
- Contains the header, navigation, and footer
- Loads CSS and JavaScript that make things work
- Every page uses this as a foundation

### **`theme/templates/`** (The 13 Pages)
Each file is one page of your site:
- `index.liquid` = Homepage
- `about.liquid` = About page
- `services.liquid` = Services page
- etc.

**How they work:** 
- These template files get wrapped inside `theme.liquid` 
- So users see: Header (from layout) + Page Content (from template) + Footer (from layout)

### **`theme/snippets/`** (Reusable Pieces)
- `header.liquid` = Top navigation (appears on every page)
- `footer.liquid` = Bottom section with links and social media

### **`theme/config/settings_schema.json`**
- Controls what the shop owner can customize in Shopify admin
- "Change my brand color" settings go here
- "Change my font" settings go here

### **`theme/assets/`** (Styling & Interactivity)
- `theme.css` = Colors, fonts, spacing (visual styling)
- `theme.js` = Code that makes carousels, accordions work
- `theme-styles.css` = Additional styling

---

## How Liquid Works (The Magic Language)

**Liquid** is a simple templating language that Shopify uses. It's just variables and conditions:

### **Variables** (Display data)
```liquid
{{ shop.name }}
```
Shows your Shopify store name

```liquid
{{ settings.color_primary }}
```
Shows the primary color you set in theme settings

### **Conditions** (If/Then logic)
```liquid
{% if user.logged_in %}
  Welcome back, {{ user.name }}!
{% else %}
  Please log in
{% endif %}
```

### **Loops** (Repeat things)
```liquid
{% for product in collection.products %}
  <h3>{{ product.title }}</h3>
{% endfor %}
```

---

## Customizing Your Theme (After Deployment)

### **Change Brand Color**
1. Log into your Shopify admin ([your-store.myshopify.com/admin](https://admin.shopify.com))
2. Go to "Sales Channels" → "Online Store" → "Themes"
3. Find your theme and click "Customize"
4. In the theme editor, look for "Color Settings" or "Primary Color"
5. Change from red (#BA0606) to whatever you want
6. **All pages update automatically!** 🎉

### **Change Text or Styling**
1. Edit the file in `theme/templates/` or `theme/snippets/`
2. Save your changes
3. Run: `shopify theme push` again
4. Wait 10 seconds, refresh your website

### **Add a New Page**
1. Create a new file: `theme/templates/new-page-name.liquid`
2. Copy structure from existing page (like `about.liquid`)
3. Edit the content
4. Create the page in Shopify admin
5. Run: `shopify theme push`

---

## The Files You Have (What's Actually Here)

```
theme/
├── config/
│   ├── settings_schema.json    ← Customization options
│   └── theme.json              ← Theme metadata
├── templates/
│   ├── index.liquid            ← Homepage
│   ├── about.liquid            ← About page
│   ├── mission.liquid          ← Mission page
│   ├── services.liquid         ← Services page
│   ├── portfolio.liquid        ← Portfolio/Gallery page
│   ├── reviews.liquid          ← Client testimonials
│   ├── contact.liquid          ← Contact form
│   ├── faq.liquid              ← FAQ accordion
│   ├── affiliate.liquid        ← Affiliate links
│   ├── social.liquid           ← Social media links
│   ├── privacy-policy.liquid   ← Privacy policy
│   ├── terms-of-service.liquid ← Terms
│   └── refund-policy.liquid    ← Refund policy
├── snippets/
│   ├── header.liquid           ← Top navigation (reused)
│   └── footer.liquid           ← Bottom section (reused)
├── layout/
│   └── theme.liquid            ← Main wrapper for all pages
├── assets/
│   ├── theme.css               ← Styling
│   ├── theme.js                ← Interactivity
│   └── theme-styles.css        ← More styling
└── .shopifyignore               ← Files to ignore
```

---

## Common Tasks

### **I want to change the homepage hero text**
1. Open `theme/templates/index.liquid`
2. Find the section that says `<h1>Who is Quinton Stocton?</h1>`
3. Change it to what you want
4. Save
5. Type: `shopify theme push`
6. Done!

### **I want to add a new service to the services page**
1. Open `theme/templates/services.liquid`
2. Find a service card (look for `<div class="service-card">`)
3. Copy that entire section
4. Paste it below
5. Edit the title, description, and price
6. Save and push: `shopify theme push`

### **I want to change the footer**
1. Open `theme/snippets/footer.liquid`
2. Edit text, links, or social media URLs
3. Save
4. Push: `shopify theme push`
5. This updates on EVERY page automatically! (since all pages use this footer)

### **I want to change colors everywhere at once**
1. Go to Shopify admin
2. Click your theme → Customize
3. Look for "Color Settings"
4. Change the primary color
5. All pages with `var(--color-base-primary)` update instantly

---

## Troubleshooting

### **"Command not found: shopify"**
- Shopify CLI isn't installed
- Solution: Go back to Step 1 and install it

### **"Authentication failed"**
- Your Shopify login expired
- Solution: Run: `shopify login --store=your-store.myshopify.com` again

### **"Theme push failed"**
- Your code has a syntax error
- Check your edits for typos in `{{ }}` or `{% %}`
- Make sure every opening tag has a closing tag

### **"Changes aren't showing up"**
1. Hard refresh: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Wait 30 seconds for the site to rebuild
3. Check in an incognito/private window (bypasses cache)

---

## What Each Code Section Does

### **CSS (theme.css)**
Controls how things LOOK:
- Colors (red, black, white)
- Sizes (how big buttons are)
- Spacing (distance between items)
- Borders (outlines)

### **JavaScript (theme.js)**
Controls how things WORK:
- Carousel sliding
- Menu opening/closing
- Form validation
- Smooth animations

### **Liquid (template files)**
Controls WHAT appears:
- Which elements show
- What text displays
- Which settings are used
- Page structure

---

## Next Steps After Deployment

1. **Set up your pages in Shopify admin**
   - Go to "Pages" in your Shopify admin
   - Create pages for each template (About, Services, etc.)
   - The theme automatically finds them

2. **Customize colors and fonts**
   - Theme Customize panel in Shopify admin

3. **Add your content**
   - Real photos instead of placeholder icons
   - Real descriptions instead of generic text

4. **Test everything**
   - Click all buttons
   - Try filling out forms
   - Check on mobile phone

5. **Publish your store**
   - Shopify admin → Settings → Publish your store

---

## Key Concepts to Remember

| Term | Means |
|------|-------|
| **Liquid** | Programming language Shopify uses |
| **Template** | Blueprint for a page (like about.liquid) |
| **Snippet** | Small reusable piece (like header or footer) |
| **CSS** | Code that controls how things look |
| **JavaScript** | Code that makes things interactive |
| **CLI** | Program that connects your computer to Shopify |
| **Theme** | Complete design + code for your store |
| **Asset** | File used on website (CSS, JS, images) |
| **Settings** | Options the store owner can customize |
| **Push** | Upload theme to Shopify |

---

## Helpful Resources

- **Shopify Documentation**: https://shopify.dev/docs/themes
- **Liquid Cheat Sheet**: https://shopify.dev/docs/api/liquid
- **Shopify CLI Help**: `shopify theme --help` in Terminal
- **Font Awesome Icons** (used in your theme): https://fontawesome.com/icons

---

## You're Done! 🎉

Your Shopify theme is:
- ✅ Professional and modern
- ✅ Fully customizable through the admin
- ✅ Mobile responsive
- ✅ Ready to deploy
- ✅ Easy to update

Start with Step 1 if you haven't already, and you'll have a live website in under 30 minutes.
