import os

files = ['index.html', 'about.html', 'catalog.html', 'contact.html']

old_csp = '''content="default-src 'self'; img-src 'self' data: https://upload.wikimedia.org https://lh3.googleusercontent.com https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://unpkg.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; script-src 'self' 'unsafe-inline' https://unpkg.com;"'''

new_csp = '''content="default-src 'self'; frame-src https://www.google.com; img-src 'self' data: https://upload.wikimedia.org https://lh3.googleusercontent.com https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://unpkg.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; script-src 'self' 'unsafe-inline' https://unpkg.com;"'''

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if old_csp in content:
        content = content.replace(old_csp, new_csp)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Fixed CSP in {f}')
