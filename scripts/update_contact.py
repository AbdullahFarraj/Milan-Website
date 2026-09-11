import os
import glob
import re

files = glob.glob('b:/milan website/*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update Schema.org Address
    content = content.replace(
        '\"streetAddress\": \"Damascus Street, Al Qusais Industrial Area 1\",',
        '\"streetAddress\": \"Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First\",'
    )

    # Update Meta description
    content = content.replace(
        'Visit Milan Star Building Materials on Damascus St, Al Qusais Industrial Area 1, Dubai. Call 04 572 7391 or WhatsApp 055 365 6298.',
        'Visit Milan Star Building Materials at Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First, Dubai. Call 04 572 7391 or WhatsApp 055 365 6298.'
    )
    content = content.replace(
        'Visit Milan Star Building Materials on Damascus St, Al Qusais Industrial Area 1, Dubai.',
        'Visit Milan Star Building Materials at Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First, Dubai.'
    )
    
    # Update Contact Info Panel Address (contact.html)
    content = content.replace(
        'Al Qusais Industrial Area 1,<br>Damascus Street, Dubai,<br>United Arab Emirates',
        'Ali Saeed Abdullah Bel Hab Al Ameri Bldg.<br>Shop No-11-Al Qusais Ind First<br>Dubai, UAE'
    )

    # Update Footer Address
    content = content.replace(
        '<p><i class=\"fa-solid fa-location-dot\" style=\"color: var(--primary); width: 20px;\"></i> Al Qusais Industrial Area 1, Damascus St, Dubai</p>',
        '<p><i class=\"fa-solid fa-location-dot\" style=\"color: var(--primary); width: 20px;\"></i> Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First, Dubai</p>'
    )
    
    # Update Hero Address (index.html)
    content = content.replace(
        '<p class=\"hero-address\"><i class=\"fa-solid fa-location-dot\"></i> Damascus St, Al Qusais Industrial Area 1, Dubai</p>',
        '<p class=\"hero-address\"><i class=\"fa-solid fa-location-dot\"></i> Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First, Dubai</p>'
    )
    content = content.replace(
        '<div class=\"info-text\">Damascus Street, Al Qusais<br>Dubai, UAE</div>',
        '<div class=\"info-text\">Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11<br>Al Qusais Ind First, Dubai, UAE</div>'
    )
    content = content.replace(
        '<div class=\"info-text\">Damascus St, Al Qusais Industrial Area 1<br>Dubai, UAE</div>',
        '<div class=\"info-text\">Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11<br>Al Qusais Ind First, Dubai, UAE</div>'
    )
    content = content.replace(
        'Damascus Street, Dubai,<br>',
        ''
    )

    # Update Phone in Contact panel (contact.html)
    content = content.replace(
        '<div class=\"info-text\">\n                                <h4>Phone Number</h4>\n                                <a href=\"tel:0553656298\">055 365 6298</a>\n                            </div>',
        '<div class=\"info-text\">\n                                <h4>Phone Number</h4>\n                                <a href=\"tel:045727391\">04 572 7391</a> / <a href=\"tel:0553656298\">055 365 6298</a> <br><span style=\"font-size:0.9em;color:var(--text-muted);\">(Mr Printo)</span>\n                            </div>'
    )

    # Update Footer Phone
    content = content.replace(
        '<p><i class=\"fa-solid fa-phone\" style=\"color: var(--primary); width: 20px;\"></i> <a href=\"tel:0553656298\">055 365 6298</a></p>',
        '<p><i class=\"fa-solid fa-phone\" style=\"color: var(--primary); width: 20px;\"></i> <a href=\"tel:045727391\">04 572 7391</a> / <a href=\"tel:0553656298\">055 365 6298</a></p>'
    )
    content = content.replace(
        '<p><i class=\"fa-solid fa-phone\" style=\"color: var(--primary); width: 20px;\"></i> <a\n                                href=\"tel:0553656298\">055 365 6298</a></p>',
        '<p><i class=\"fa-solid fa-phone\" style=\"color: var(--primary); width: 20px;\"></i> <a href=\"tel:045727391\">04 572 7391</a> / <a href=\"tel:0553656298\">055 365 6298</a></p>'
    )
    
    # Update About Page intro text
    content = content.replace(
        'Strategically located in Al Qusais Industrial Area 1 on Damascus Street, Dubai',
        'Strategically located in Ali Saeed Abdullah Bel Hab Al Ameri Bldg., Shop No-11, Al Qusais Ind First, Dubai'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Update complete")
