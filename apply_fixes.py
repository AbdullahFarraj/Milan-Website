import os
import re

files = ['index.html', 'about.html', 'catalog.html', 'contact.html']

# 1. Update Schema Opening Hours
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = content.replace('"closes": "08:30"', '"closes": "20:30"')
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

# 2. Replace Unrelated Logos in index.html
with open('index.html', 'r', encoding='utf-8') as file:
    index_content = file.read()

# Finding the marquee-content block and replacing it
marquee_pattern = re.compile(r'<div class="marquee-content">.*?</div>', re.DOTALL)
new_marquee = """<div class="marquee-content">
                        <div class="brand-badge">JOTUN</div>
                        <div class="brand-badge">BERGER</div>
                        <div class="brand-badge">MAKITA</div>
                        <div class="brand-badge">BOSCH</div>
                        <div class="brand-badge">DEWALT</div>
                        <div class="brand-badge">GROHE</div>
                        <div class="brand-badge">JOTUN</div>
                        <div class="brand-badge">BERGER</div>
                        <div class="brand-badge">MAKITA</div>
                        <div class="brand-badge">BOSCH</div>
                        <div class="brand-badge">DEWALT</div>
                        <div class="brand-badge">GROHE</div>
                    </div>"""
index_content = marquee_pattern.sub(new_marquee, index_content)
with open('index.html', 'w', encoding='utf-8') as file:
    file.write(index_content)

# Add CSS for brand-badge
with open('style.css', 'a', encoding='utf-8') as file:
    file.write("""\n
/* Text-based Brand Badges */
.brand-badge {
    font-size: 1.5rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    white-space: nowrap;
    display: inline-block;
    margin: 0 15px;
}
.brand-badge:hover {
    color: var(--primary);
    border-color: var(--primary);
}
""")

# 3. Unique Page Titles & Meta Descriptions
meta_data = {
    'about.html': {
        'title': 'About Us | MILAN STAR BUILDING MATERIALS TRADING L.L.C Dubai',
        'desc': 'Learn about Milan Star Building Materials Trading L.L.C in Al Qusais, Dubai. Premier supplier of hardware, sanitary ware, paints, and tools with 5.0 Google rating.'
    },
    'catalog.html': {
        'title': 'Product Catalog | Milan Star Building Materials Dubai',
        'desc': 'Browse our extensive catalog of premium interior building materials, hardware, sanitary fittings, and construction supplies in Dubai.'
    },
    'contact.html': {
        'title': 'Contact & Location | Milan Star Building Materials Al Qusais',
        'desc': 'Visit Milan Star Building Materials on Damascus St, Al Qusais Industrial Area 1, Dubai. Call 04 572 7391 or WhatsApp 055 365 6298.'
    }
}

for filename, data in meta_data.items():
    with open(filename, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace Title
    title_pattern = re.compile(r'<title>.*?</title>', re.DOTALL)
    content = title_pattern.sub(f'<title>{data["title"]}</title>', content)
    
    # Replace Meta Description
    desc_pattern = re.compile(r'<meta\s+name="description"\s+content="[^"]*">', re.IGNORECASE)
    new_desc = f'<meta name="description" content="{data["desc"]}">'
    if desc_pattern.search(content):
        content = desc_pattern.sub(new_desc, content)
    else:
        # If it happens to be multiline
        desc_pattern_multi = re.compile(r'<meta name="description"\s+content="[^"]*">', re.IGNORECASE | re.DOTALL)
        content = desc_pattern_multi.sub(new_desc, content)
        
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)

# 4. Image Optimization for site-logo
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We will replace <img src="logo.png" with <img src="logo.png" loading="eager" width="200" height="60" style="object-fit: contain;"
    # Need to be careful not to duplicate if we run script multiple times
    if 'loading="eager"' not in content:
        content = content.replace('<img src="logo.png"', '<img src="logo.png" loading="eager" width="220" height="70" style="object-fit: contain;"')
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("All fixes applied successfully!")
