import os

files = ['index.html', 'about.html', 'catalog.html', 'contact.html']

insert_html = """
    <!-- Security & Social Tags -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https://upload.wikimedia.org https://lh3.googleusercontent.com https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://unpkg.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; script-src 'self' 'unsafe-inline' https://unpkg.com;">
    <meta property="og:title" content="MILAN STAR BUILDING MATERIALS TRADING L.L.C">
    <meta property="og:description" content="Premium interior building materials, hardware, and finishings in Al Qusais Dubai. 5.0-star rating.">
    <meta property="og:image" content="https://www.milanstarbmt.com/logo.png">
    <meta property="og:url" content="https://www.milanstarbmt.com/">
    <meta property="og:type" content="website">"""

search_str = '<meta name="viewport" content="width=device-width, initial-scale=1.0">'

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if search_str in content and 'og:title' not in content:
        content = content.replace(search_str, search_str + insert_html)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated {f}')

# Also replace target="_blank" with target="_blank" rel="noopener noreferrer"
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We will simply string replace this specific pattern since we know how we wrote it
    if 'target="_blank"' in content and 'rel="noopener noreferrer"' not in content:
        content = content.replace('target="_blank"', 'target="_blank" rel="noopener noreferrer"')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Fixed noopener in {f}')
