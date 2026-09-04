import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Fix WhatsApp
old_wa = """.whatsapp-container {
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
}"""

new_wa = """.whatsapp-container {
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 999;
}
.wa-tooltip {
    position: absolute;
    left: 80px;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
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
    0% { opacity: 1; transform: translateY(-50%) translateX(0); }
    100% { opacity: 0; transform: translateY(-50%) translateX(-10px); visibility: hidden; }
}"""
css = css.replace(old_wa, new_wa)

# 2. Fix hero-content centering and full width
css = re.sub(r'\.hero-content \{[^\}]*\}', """.hero-content {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}""", css)

css = re.sub(r'\.hero-content p \{[^\}]*\}', """.hero-content p {
    font-size: 1.25rem;
    color: var(--text-muted);
    margin: 0 auto 40px auto;
    max-width: 900px;
    font-weight: 400;
}""", css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS Fixed")
