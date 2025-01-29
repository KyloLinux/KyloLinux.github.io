// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileMenu.setAttribute('aria-expanded', 
        mobileMenu.classList.contains('active'));
});

// Typewriter Effect
const typeStrings = ["AI Innovation", "Smart Automation", "Data Insights"];
let currentIndex = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
    const typeElement = document.querySelector('.typing-effect');
    const fullText = typeStrings[currentIndex];
    
    currentText = isDeleting ? 
        fullText.substring(0, currentText.length - 1) :
        fullText.substring(0, currentText.length + 1);

    typeElement.textContent = currentText;

    let typeSpeed = 100;
    if(isDeleting) typeSpeed /= 2;

    if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % typeStrings.length;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    
    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.value-card').forEach(card => {
        observer.observe(card);
    });
});
