#!/bin/bash

set -e

echo "🎬 Quinton Stocton Photography - Setup Script"
echo "=============================================="

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

echo ""
echo "📁 Project directory: $PROJECT_DIR"

# Check Python
echo ""
echo "✓ Checking Python..."
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    exit 1
fi
PYTHON_VERSION=$(python3 --version)
echo "   Found: $PYTHON_VERSION"

# Start server
echo ""
echo "🚀 Starting web server on port 5000..."
echo "   URL: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

python3 backend.py
