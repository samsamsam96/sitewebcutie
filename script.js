// ==================== Mobile Menu Toggle ====================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== Smooth Scroll with Offset ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Header Scroll Effect ====================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0.8rem 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        header.style.padding = '1.2rem 0';
    }
    
    lastScroll = currentScroll;
});

// ==================== Intersection Observer for Fade-in Animation ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .timeline-item, .stat-card, .about-text'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== Contact Form Handling ====================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Simple validation (you would replace this with actual form submission)
    const inputs = contactForm.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = 'transparent';
        }
    });
    
    if (isValid) {
        // Show success message (you would replace this with actual form submission)
        alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
        contactForm.reset();
    } else {
        alert('Veuillez remplir tous les champs obligatoires.');
    }
});

// Reset border color on input
contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--color-primary)';
    });
    
    input.addEventListener('blur', function() {
        if (this.value.trim()) {
            this.style.borderColor = 'transparent';
        }
    });
});

// ==================== Active Navigation Link ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Add Hover Effect to Project Cards ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== Initialize ====================
console.log('Portfolio website loaded successfully! 🚀');
