#!/usr/bin/env python3
import http.server
import socketserver
import os
from pathlib import Path

PORT = 5000
DIRECTORY = "."

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def do_GET(self):
        # Parse the path
        path = self.path.split('?')[0]  # Remove query string
        
        # List of page routes
        pages = ['index', 'reviews', 'contact', 'about', 'portfolio', 'services', 
                 'affiliate', 'mission', 'faq', 'social', 'privacy', 'terms', 
                 'refund', 'shipping', 'cancellation', 'merchandise', 'presets']
        
        # Check if the path is a page (without .html)
        for page in pages:
            if path == f'/{page}':
                self.path = f'/{page}.html'
                break
        
        # Call parent to serve the file
        super().do_GET()
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f'Serving HTTP on 0.0.0.0 port {PORT} (http://0.0.0.0:{PORT}/) ...')
        httpd.serve_forever()
