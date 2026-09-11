import os
import glob
import re

files = glob.glob('b:/milan website/*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Mr Printo formatting
    modern_badge_1 = '<span style=\"display:inline-flex; align-items:center; gap:4px; background:rgba(250, 204, 21, 0.15); color:var(--primary); padding:2px 8px; border-radius:12px; font-size:0.75em; font-weight:600; margin-left:6px; border:1px solid rgba(250, 204, 21, 0.3);\"><i class=\"fa-solid fa-user-tie\"></i> Mr. Printo - Sales Outdoor</span>'
    content = content.replace(' (Mr Printo)', modern_badge_1)
    
    modern_badge_2 = '<span style=\"display:inline-flex; align-items:center; gap:4px; background:rgba(250, 204, 21, 0.15); color:var(--primary); padding:4px 10px; border-radius:12px; font-size:0.85em; font-weight:600; margin-top:8px; border:1px solid rgba(250, 204, 21, 0.3);\"><i class=\"fa-solid fa-user-tie\"></i> Mr. Printo - Sales Outdoor</span>'
    content = content.replace(' <span style=\"font-size:0.9em;color:var(--text-muted);\">(Mr Printo)</span>', modern_badge_2)
    
    # 2. Update Footer Working Hours
    content = content.replace('Mon-Sat: 7:30 AM - 8:30 PM', 'Mon-Sun: 7:30 AM - 8:30 PM')

    # 3. Update Contact Page Working Hours Panel
    old_contact_hours = '''<div class=\"hour-row\">\n                                <span>Monday - Thursday</span>\n                                <span>7:30 AM - 8:30 PM</span>\n                            </div>\n                            <div class=\"hour-row\">\n                                <span>Friday</span>\n                                <span>7:30 AM - 8:30 PM</span>\n                            </div>\n                            <div class=\"hour-row\">\n                                <span>Saturday</span>\n                                <span>7:30 AM - 8:30 PM</span>\n                            </div>\n                            <div class=\"hour-row closed\">\n                                <span>Sunday</span>\n                                <span>Closed</span>\n                            </div>'''
    
    new_contact_hours = '''<div class=\"hour-row\">\n                                <span>Monday - Sunday</span>\n                                <span>7:30 AM - 8:30 PM</span>\n                            </div>'''
    content = content.replace(old_contact_hours, new_contact_hours)
    
    # 4. Update Schema Working Hours
    old_schema_hours = '''"openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
          "opens": "07:30",
          "closes": "20:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "07:30",
          "closes": "20:30"
        }
      ]'''
    
    new_schema_hours = '''"openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:30",
          "closes": "20:30"
        }
      ]'''
    content = content.replace(old_schema_hours, new_schema_hours)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Update complete")
