// Intersection Observer for Scroll Animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after it becomes visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.glass-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
};

// CSS class for visible state
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Simple typewriter effect for hero subtext
const typewriterEffect = () => {
    const el = document.querySelector('.typewriter');
    if (!el) return;
    
    const text = el.textContent;
    el.textContent = '';
    let i = 0;
    
    const type = () => {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    
    type();
};

document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    typewriterEffect();
});

// Particles already handled by app.js, ensuring no double initialization
// Remove redundant particlesJS calls if present in this file or index.html
