// assets/js/animations.js
// Gestionnaire d'animations pour DA SILVA CONSTRUCTION

class AnimationsManager {
    constructor() {
        this.isInitialized = false;
        this.observedElements = new Set();
        this.scrollPosition = 0;
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        if (this.isInitialized) return;
        
        // Attendre que le DOM soit complètement chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
        } else {
            this.setupAnimations();
        }
        
        this.isInitialized = true;
    }
    
    setupAnimations() {
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupSmoothScroll();
        this.setupHoverEffects();
        this.setupLoadingAnimations();
        this.setupCounterAnimations();
    }
    
    // Configuration des animations au scroll
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    // Ne plus observer l'élément une fois animé
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observer les éléments à animer
        this.observeElements(observer, [
            '.content',
            '.gallery__item',
            '.timeline__item',
            '.process__step',
            '.guarantee',
            '.hero__content'
        ]);
    }
    
    // Observer les éléments pour les animations
    observeElements(observer, selectors) {
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                if (!this.observedElements.has(el)) {
                    // Ajouter un délai progressif pour les éléments multiples
                    el.style.transitionDelay = `${index * 0.1}s`;
                    this.prepareElementForAnimation(el);
                    observer.observe(el);
                    this.observedElements.add(el);
                }
            });
        });
    }
    
    // Préparer un élément pour l'animation
    prepareElementForAnimation(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
    
    // Animer un élément
    animateElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        
        // Ajouter une classe pour les animations CSS supplémentaires
        element.classList.add('animated');
    }
    
    // Effets parallax
    setupParallaxEffects() {
        let ticking = false;
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            
            // Parallax pour l'image hero
            const heroImage = document.querySelector('.hero__image');
            if (heroImage) {
                const rate = scrolled * -0.3;
                heroImage.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
            
            // Parallax pour les éléments de timeline
            const timelineItems = document.querySelectorAll('.timeline__year');
            timelineItems.forEach((item, index) => {
                const rate = scrolled * 0.1 * (index % 2 === 0 ? 1 : -1);
                item.style.transform = `translateY(${rate}px)`;
            });
            
            ticking = false;
        };
        
        const requestParallax = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };
        
        // Optimisation : seulement si pas sur mobile
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', requestParallax, { passive: true });
        }
    }
    
    // Navigation smooth scroll
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Tracker l'interaction
                    if (window.trackEvent) {
                        window.trackEvent('navigation_click', {
                            target_section: anchor.getAttribute('href')
                        });
                    }
                }
            });
        });
    }
    
    // Effets hover
    setupHoverEffects() {
        // Effet hover sur les cartes de galerie
        const galleryItems = document.querySelectorAll('.gallery__item');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-10px)';
                item.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = 'none';
            });
        });
        
        // Effet hover sur les boutons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                if (btn.classList.contains('btn--primary')) {
                    btn.style.transform = 'translateY(-2px)';
                    btn.style.boxShadow = '0 10px 20px rgba(230, 126, 34, 0.3)';
                }
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = 'none';
            });
        });
    }
    
    // Animations de chargement
    setupLoadingAnimations() {
        // Animation de la timeline
        const timelineItems = document.querySelectorAll('.timeline__item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('timeline__item--loaded');
            }, index * 200);
        });
        
        // Animation des compteurs (si présents)
        this.setupCounterAnimations();
    }
    
    // Animations des compteurs
    setupCounterAnimations() {
        const counters = document.querySelectorAll('[data-counter]');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-counter'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }
    
    // Animation de typewriter (machine à écrire)
    typewriterEffect(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        const typeChar = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, speed);
            }
        };
        
        typeChar();
    }
    
    // Animation de fade in avec délai
    fadeInWithDelay(elements, delay = 200) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * delay);
        });
    }
    
    // Animation de slide in depuis la gauche/droite
    slideInAnimation(element, direction = 'left') {
        const translateX = direction === 'left' ? '-100px' : '100px';
        
        element.style.transform = `translateX(${translateX})`;
        element.style.opacity = '0';
        element.style.transition = 'all 0.6s ease';
        
        // Déclencher l'animation
        setTimeout(() => {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
        }, 100);
    }
    
    // Animation de rotation
    rotateAnimation(element, degrees = 360, duration = 1000) {
        element.style.transition = `transform ${duration}ms ease`;
        element.style.transform = `rotate(${degrees}deg)`;
    }
    
    // Animation de scale (zoom)
    scaleAnimation(element, scale = 1.1, duration = 300) {
        const originalTransform = element.style.transform;
        
        element.style.transition = `transform ${duration}ms ease`;
        element.style.transform = `scale(${scale})`;
        
        setTimeout(() => {
            element.style.transform = originalTransform;
        }, duration);
    }
    
    // Fonction utilitaire pour ajouter des animations personnalisées
    addCustomAnimation(element, animationClass, duration = 1000) {
        element.classList.add(animationClass);
        
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, duration);
    }
    
    // Nettoyer les event listeners (pour éviter les fuites mémoire)
    cleanup() {
        this.observedElements.clear();
        // Ici vous pouvez ajouter d'autres nettoyages si nécessaire
    }
}

// Animations CSS supplémentaires (à ajouter dans le CSS)
const additionalCSS = `
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0,0,0);
    }
    40%, 43% {
        transform: translate3d(0, -30px, 0);
    }
    70% {
        transform: translate3d(0, -15px, 0);
    }
    90% {
        transform: translate3d(0, -4px, 0);
    }
}

.animated {
    animation-fill-mode: both;
}

.slideInUp {
    animation: slideInUp 0.6s ease;
}

.slideInLeft {
    animation: slideInLeft 0.6s ease;
}

.slideInRight {
    animation: slideInRight 0.6s ease;
}

.fadeIn {
    animation: fadeIn 0.6s ease;
}

.pulse {
    animation: pulse 2s infinite;
}

.bounce {
    animation: bounce 2s infinite;
}

/* Animation pour la timeline */
.timeline__item--loaded {
    animation: slideInUp 0.6s ease forwards;
}

/* Preloader animation */
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.preloader__spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(230, 126, 34, 0.3);
    border-top: 4px solid #e67e22;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.preloader--hidden {
    opacity: 0;
    pointer-events: none;
}
`;

// Fonction pour injecter le CSS additionnel
function injectAdditionalCSS() {
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
}

// Initialisation globale et export
if (typeof window !== 'undefined') {
    window.AnimationsManager = AnimationsManager;
    
    // Injecter le CSS additionnel
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectAdditionalCSS);
    } else {
        injectAdditionalCSS();
    }
}

// Export pour utilisation dans d'autres modules si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationsManager;
}