document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.navbar', { 
        duration: 1, 
        y: '-100%', 
        ease: 'power3.out',
        opacity: 0, 
        onComplete: () => {
            document.querySelector('.navbar').style.transform = 'none';
            document.querySelector('.navbar').style.opacity = '1';
        }
    });

    gsap.from('.profile-img', { 
        duration: 1.5, 
        scale: 0, 
        ease: 'back.out(1.7)', 
        delay: 0.5,
        onComplete: () => {
            document.querySelector('.profile-img').style.opacity = '1';
        }
    });
    gsap.from('.title-3d', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 1 });
    gsap.from('.subtitle', { duration: 1, y: 30, opacity: 0, ease: 'power3.out', delay: 1.2 });
    gsap.from('.bio-text', { duration: 1, y: 30, opacity: 0, ease: 'power3.out', delay: 1.4 });
    gsap.from('.cta-btn', { 
        duration: 1, 
        scale: 0.8, 
        opacity: 0, 
        ease: 'elastic.out(1, 0.5)', 
        delay: 0.5,
        onComplete: () => {
            document.querySelector('.cta-btn').style.opacity = '1';
        }
    });

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const skillValue = card.getAttribute('data-skill');
        const progressFill = card.querySelector('.progress-fill');
        gsap.to(progressFill, {
            width: `${skillValue}%`,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            }
        });
    });

    gsap.utils.toArray('.work-card').forEach(card => {
        gsap.from(card, {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            }
        });
    });

    VanillaTilt.init(document.querySelectorAll('.work-card'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3
    });

    gsap.from('.contact .section-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        }
    });

    gsap.from('.input-group', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        }
    });

    gsap.from('.submit-btn', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        }
    });

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        document.querySelector('.hero').style.backgroundPositionY = `${scrollPos * 0.3}px`;
    });

    gsap.from('.footer', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        }
    });

    gsap.from('.footer-socials a', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        }
    });

    gsap.from('.footer-text', {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        }
    });
});