import os
import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as file:
    index_content = file.read()

# Finding the marquee-content block and replacing it
marquee_pattern = re.compile(r'<div class="marquee-content">.*?</div>', re.DOTALL)
new_marquee = """<div class="marquee-content">
                        <!-- First Set -->
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Jotun_logo.svg" alt="Jotun">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Unternehmensgruppe_Berger_Logo.svg" alt="Berger">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Makita_Logo.svg" alt="Makita">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" alt="Bosch">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/DeWalt_Logo.svg" alt="DeWalt">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Grohe.svg" alt="Grohe">
                        <!-- Second Set (Duplicate for smooth infinite scroll) -->
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Jotun_logo.svg" alt="Jotun">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Unternehmensgruppe_Berger_Logo.svg" alt="Berger">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Makita_Logo.svg" alt="Makita">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" alt="Bosch">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/DeWalt_Logo.svg" alt="DeWalt">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Grohe.svg" alt="Grohe">
                    </div>"""
index_content = marquee_pattern.sub(new_marquee, index_content)
with open('index.html', 'w', encoding='utf-8') as file:
    file.write(index_content)

print("Applied REAL SVG logos successfully.")
