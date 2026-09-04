// Initialize AOS Animation
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50
        });

        // Set dynamic year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');

        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').classList.remove('fa-xmark');
                mobileToggle.querySelector('i').classList.add('fa-bars');
            });
        });

// =========================================
// WORLD-CLASS PREMIUM FEATURES
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Hide preloader after a slight delay to ensure smooth transition
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 500); // 500ms delay for premium feel
    }

    // 2. Sticky Glassmorphism Header
    const header = document.getElementById('header');
    
    // 3. Scroll-to-Top Button
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    window.addEventListener('scroll', () => {
        // Header logic
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll-to-top logic
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });
});


// Lightbox Logic for Catalog
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.querySelector('.lightbox-close');
        
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img').src;
                lightboxImg.src = img;
                lightbox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // prevent scrolling
            });
        });
        
        const closeLightbox = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
        
        closeBtn.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });
    }
});

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
