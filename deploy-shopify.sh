#!/bin/bash

set -e

echo "🚀 Deploying to Shopify Theme"
echo "=============================="
echo ""

# Check if Shopify CLI is installed
if ! command -v shopify &> /dev/null; then
    echo "❌ Shopify CLI is not installed."
    echo "📥 Install it from: https://shopify.dev/docs/themes/tools/cli"
    exit 1
fi

echo "✓ Shopify CLI found"
echo ""

# Get current directory
THEME_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "📁 Theme directory: $THEME_DIR"
echo ""

# Check for shopify-theme directory
if [ -d "shopify-theme" ]; then
    echo "📂 Found shopify-theme directory"
    echo "🔄 Pushing theme to Shopify..."
    echo ""
    cd shopify-theme
    shopify theme push
else
    echo "⚠️  No shopify-theme directory found"
    echo ""
    echo "To deploy:"
    echo "1. Upload the shopify-theme folder to your Shopify store"
    echo "2. Or use: shopify theme push -d shopify-theme"
fi

echo ""
echo "✓ Deployment script complete!"
