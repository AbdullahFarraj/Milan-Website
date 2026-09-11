import os
import glob
import re

files = glob.glob('b:/milan website/*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Footer and About/Catalog/Contact page replacements
    content = content.replace(
        '<p><i class=\"fa-solid fa-phone\" style=\"color: var(--primary); width: 20px;\"></i> <a href=\"tel:045727391\">04 572 7391</a> / <a href=\"tel:0553656298\">055 365 6298</a></p>',
        '<p><i class=\"fa-solid fa-phone\" style=\"color: var(--primary); width: 20px;\"></i> <a href=\"tel:045727391\">04 572 7391</a><br><i class=\"fa-solid fa-phone\" style=\"color: transparent; width: 20px;\"></i> <a href=\"tel:0553656298\">055 365 6298</a> (Mr Printo)</p>'
    )
    
    # Contact panel in contact.html replacement
    content = content.replace(
        '<a href=\"tel:045727391\">04 572 7391</a> / <a href=\"tel:0553656298\">055 365 6298</a> <br><span style=\"font-size:0.9em;color:var(--text-muted);\">(Mr Printo)</span>',
        '<a href=\"tel:045727391\">04 572 7391</a><br><a href=\"tel:0553656298\">055 365 6298</a> <span style=\"font-size:0.9em;color:var(--text-muted);\">(Mr Printo)</span>'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Phone numbers updated")
