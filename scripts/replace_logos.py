import os
import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as file:
    index_content = file.read()

# Finding the marquee-content block and replacing it
marquee_pattern = re.compile(r'<div class="marquee-content">.*?</div>', re.DOTALL)
new_marquee = """<div class="marquee-content">
                        <!-- First Set -->
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Jotun_logo.svg" alt="Jotun">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Berger_Paints_India_Logo.svg" alt="Berger">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Makita_Logo.svg" alt="Makita">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg" alt="Bosch">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/DeWalt_Logo.svg" alt="DeWalt">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Grohe_logo.svg" alt="Grohe">
                        <!-- Second Set (Duplicate for smooth infinite scroll) -->
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Jotun_logo.svg" alt="Jotun">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Berger_Paints_India_Logo.svg" alt="Berger">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Makita_Logo.svg" alt="Makita">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg" alt="Bosch">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/DeWalt_Logo.svg" alt="DeWalt">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Grohe_logo.svg" alt="Grohe">
                    </div>"""
index_content = marquee_pattern.sub(new_marquee, index_content)
with open('index.html', 'w', encoding='utf-8') as file:
    file.write(index_content)

# 2. Update style.css
with open('style.css', 'r', encoding='utf-8') as file:
    css_content = file.read()

# Remove brand-badge CSS if it exists
css_content = re.sub(r'/\* Text-based Brand Badges \*/.*?\.brand-badge:hover\s*{[^}]*}', '', css_content, flags=re.DOTALL)

# Add marquee image CSS
new_css = """
/* Marquee Image Styles */
.marquee-content img {
    height: 45px;
    width: auto;
    margin: 0 35px;
    filter: grayscale(100%) brightness(0.8);
    opacity: 0.7;
    transition: all 0.3s ease;
}

.marquee-content img:hover {
    filter: grayscale(0%) brightness(1);
    opacity: 1;
    transform: scale(1.08);
}
"""
css_content += new_css

with open('style.css', 'w', encoding='utf-8') as file:
    file.write(css_content)

print("Applied SVG logos and CSS styles successfully.")
