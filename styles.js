// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-based Animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null,
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

// Reveal section animations when they come into view
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    section.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});