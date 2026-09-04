import re

# 1. Update style.css
css_append = """
/* Custom Scrollbar */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg-dark); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: #d4a715; }

/* Text Selection */
::selection { background: var(--primary); color: var(--bg-dark); }

/* Hero Stats Banner */
.hero-stats-banner {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 30px 50px;
    width: 80%;
    max-width: 900px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    z-index: 10;
}
.stat-item { text-align: center; color: white; }
.stat-num { font-size: 3rem; font-weight: 800; color: var(--primary); }
.stat-text { display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-top: 5px; font-weight: 600; }
@media(max-width: 768px) {
    .hero-stats-banner { flex-direction: column; gap: 30px; position: relative; bottom: 0; width: 90%; margin-top: 50px; }
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    opacity: 0.5;
}
@media(max-width: 768px) { .scroll-indicator { display: none; } }
.mouse {
    width: 25px;
    height: 40px;
    border: 2px solid rgba(255,255,255,0.7);
    border-radius: 15px;
    position: relative;
}
.mouse::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: var(--primary);
    border-radius: 2px;
    animation: scroll 2s infinite;
}
@keyframes scroll {
    0% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, 15px); opacity: 0; }
}

/* WhatsApp Tooltip & Pulse */
.whatsapp-container {
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 15px;
}
.wa-tooltip {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    padding: 8px 15px;
    border-radius: 20px;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(255,255,255,0.2);
    animation: fadeOutTooltip 5s forwards;
    animation-delay: 3s;
}
@keyframes fadeOutTooltip {
    0% { opacity: 1; transform: translateX(0); }
    100% { opacity: 0; transform: translateX(-10px); visibility: hidden; }
}
.floating-whatsapp {
    position: relative !important;
    bottom: 0 !important; left: 0 !important;
}
.pulse {
    animation: pulse-animation 2s infinite;
}
@keyframes pulse-animation {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
    70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* Typing Effect */
.cursor {
    display: inline-block;
    background-color: var(--primary);
    margin-left: 0.1rem;
    width: 3px;
    animation: blink 1s infinite;
}
@keyframes blink {
    0% { background-color: transparent; }
    50% { background-color: var(--primary); }
    100% { background-color: transparent; }
}
.typed-text {
    color: var(--primary);
    font-weight: 700;
}
"""
with open('style.css', 'r', encoding='utf-8') as f:
    if '/* Custom Scrollbar */' not in f.read():
        with open('style.css', 'a', encoding='utf-8') as fa:
            fa.write(css_append)
print("CSS updated")

# 2. Update main.js
js_append = """
// Dynamic Typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["hardware", "paints", "sanitary fittings", "building materials"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(!typedTextSpan) return;
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(!typedTextSpan) return;
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(typedTextSpan) {
      typedTextSpan.textContent = '';
      setTimeout(type, newTextDelay + 250);
  }
});

// Stats Counter Animation
const counters = document.querySelectorAll('.stat-num');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 15);
        } else {
            counter.innerText = target;
        }
    };
    
    // Simple observer
    let observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            updateCount();
            observer.disconnect();
        }
    });
    observer.observe(counter);
});
"""
with open('main.js', 'r', encoding='utf-8') as f:
    if 'Dynamic Typing Effect' not in f.read():
        with open('main.js', 'a', encoding='utf-8') as fa:
            fa.write(js_append)
print("JS updated")

# 3. Update HTML files for WhatsApp Container
html_files = ['index.html', 'about.html', 'catalog.html', 'contact.html']
wa_old = '<a href="https://wa.me/971553656298" class="floating-whatsapp" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">\n        <i class="fa-brands fa-whatsapp"></i>\n    </a>'
wa_new = """<div class="whatsapp-container">
        <div class="wa-tooltip">Chat with us online!</div>
        <a href="https://wa.me/971553656298" class="floating-whatsapp pulse" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'whatsapp-container' not in content:
        content = content.replace(wa_old, wa_new)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

# 4. Update index.html specifically for typing and stats banner
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Subtitle typing
old_subtitle = "At MILAN STAR BUILDING MATERIALS TRADING L.L.C (ميلان ستار لتجارة مواد البناء), we deliver exceptional quality hardware, paints, and finishings for professionals and homeowners alike."
new_subtitle = 'At MILAN STAR BUILDING MATERIALS TRADING L.L.C (ميلان ستار لتجارة مواد البناء), we deliver exceptional quality <span class="typed-text"></span><span class="cursor">&nbsp;</span> for professionals and homeowners alike.'
index_content = index_content.replace(old_subtitle, new_subtitle)

# Stats banner & Scroll indicator (Add before closing </section> of hero)
if 'hero-stats-banner' not in index_content:
    stats_html = """
            <div class="scroll-indicator">
                <div class="mouse"></div>
            </div>
            
            <div class="hero-stats-banner" data-aos="fade-up" data-aos-delay="400">
                <div class="stat-item">
                    <span class="stat-num" data-target="10">0</span>
                    <span class="stat-text">Years Experience</span>
                </div>
                <div class="stat-item">
                    <span class="stat-num" data-target="50">0</span>
                    <span class="stat-text">Premium Brands</span>
                </div>
                <div class="stat-item">
                    <span class="stat-num" data-target="5000">0</span>
                    <span class="stat-text">Happy Customers</span>
                </div>
            </div>
        </div>
    </section>"""
    # Replace the end of hero section
    index_content = index_content.replace('        </div>\n    </section>', stats_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_content)

print("HTML files updated")
