// assets/js/main.js
// Logique principale Alpine.js pour DA SILVA CONSTRUCTION - Version Multi-pages

function mainApp() {
    return {
        scrolled: false,
        mobileMenuOpen: false,
        loaded: false,
        
        init() {
            this.loaded = true;
            this.handleScroll();
            window.addEventListener('scroll', () => this.handleScroll());
            
            // Initialiser les animations après le chargement
            this.$nextTick(() => {
                if (window.AnimationsManager) {
                    new window.AnimationsManager();
                }
            });

            // Smooth scroll pour les ancres internes
            this.initSmoothScroll();
        },
        
        handleScroll() {
            this.scrolled = window.scrollY > 100;
        },
        
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            
            // Empêcher le scroll du body quand le menu est ouvert
            if (this.mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        
        closeMenu() {
            this.mobileMenuOpen = false;
            document.body.style.overflow = 'auto';
        },

        initSmoothScroll() {
            // Smooth scroll pour les liens internes de la même page
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    }
}

// Fonction pour les galeries (prestations, réalisations)
function gallery() {
    return {
        projects: window.portfolioData || [],
        lightboxOpen: false,
        currentProject: null,
        currentIndex: 0,
        
        init() {
            // Écouter les touches clavier pour la navigation dans la lightbox
            document.addEventListener('keydown', (e) => {
                if (this.lightboxOpen) {
                    if (e.key === 'Escape') {
                        this.closeLightbox();
                    } else if (e.key === 'ArrowLeft') {
                        this.previousProject();
                    } else if (e.key === 'ArrowRight') {
                        this.nextProject();
                    }
                }
            });
        },
        
        openLightbox(index) {
            this.currentIndex = index;
            this.currentProject = this.projects[index];
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        
        closeLightbox() {
            this.lightboxOpen = false;
            this.currentProject = null;
            document.body.style.overflow = 'auto';
        },
        
        nextProject() {
            if (this.currentIndex < this.projects.length - 1) {
                this.currentIndex++;
                this.currentProject = this.projects[this.currentIndex];
            }
        },
        
        previousProject() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.currentProject = this.projects[this.currentIndex];
            }
        }
    }
}

// Fonction pour les formulaires de contact
function contactForm() {
    return {
        form: {
            name: '',
            email: '',
            phone: '',
            project: '',
            message: ''
        },
        errors: {},
        submitting: false,
        submitted: false,
        
        validateForm() {
            this.errors = {};
            
            if (!this.form.name.trim()) {
                this.errors.name = 'Le nom est requis';
            }
            
            if (!this.form.email.trim()) {
                this.errors.email = 'L\'email est requis';
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = 'Format d\'email invalide';
            }
            
            if (!this.form.message.trim()) {
                this.errors.message = 'Le message est requis';
            }
            
            return Object.keys(this.errors).length === 0;
        },
        
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        
        async submitForm() {
            if (!this.validateForm()) {
                return;
            }
            
            this.submitting = true;
            
            try {
                // Simulation d'envoi de formulaire
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // En production, ici vous feriez un vrai appel API
                console.log('Formulaire soumis:', this.form);
                
                this.submitted = true;
                
                // Afficher un message de succès
                alert('Merci pour votre demande ! Nous vous contacterons rapidement.');
                
                // Reset du formulaire
                this.resetForm();
                
            } catch (error) {
                console.error('Erreur lors de l\'envoi:', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            } finally {
                this.submitting = false;
            }
        },
        
        resetForm() {
            this.form = {
                name: '',
                email: '',
                phone: '',
                project: '',
                message: ''
            };
            this.errors = {};
            this.submitted = false;
        }
    }
}

// Fonction pour les compteurs animés (stats)
function animateCounters() {
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
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Fonction utilitaire pour le smooth scroll
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Fonction pour tracker les interactions (analytics)
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    // Ici vous pouvez intégrer Google Analytics, Facebook Pixel, etc.
    
    // Exemple Google Analytics (à adapter selon votre configuration)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            ...eventData,
            page_title: document.title,
            page_location: window.location.href
        });
    }
}

// Initialisation globale pour toutes les pages
document.addEventListener('DOMContentLoaded', function() {
    // Tracker le chargement de la page
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
    
    // Initialiser les compteurs animés
    animateCounters();
    
    // Ajouter des listeners pour les CTA
    document.querySelectorAll('.btn--primary, .btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                button_location: this.getAttribute('href') || 'form_submit',
                page: window.location.pathname
            });
        });
    });
    
    // Tracker les clics sur les liens téléphone
    document.querySelectorAll('a[href^="tel:"]').forEach(tel => {
        tel.addEventListener('click', function() {
            trackEvent('phone_click', {
                phone_number: this.getAttribute('href').replace('tel:', ''),
                page: window.location.pathname
            });
        });
    });

    // Tracker les clics email
    document.querySelectorAll('a[href^="mailto:"]').forEach(email => {
        email.addEventListener('click', function() {
            trackEvent('email_click', {
                email: this.getAttribute('href').replace('mailto:', ''),
                page: window.location.pathname
            });
        });
    });

    // Navigation entre pages - tracking
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('navigation_click', {
                from_page: window.location.pathname,
                to_page: this.getAttribute('href'),
                link_text: this.textContent.trim()
            });
        });
    });
});

// Fonction pour afficher des notifications toast
function showNotification(message, type = 'success') {
    // Créer l'élément notification
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Styles pour la notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 2rem',
        background: type === 'success' ? '#DAA520' : '#e74c3c',
        color: 'white',
        borderRadius: '8px',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        fontFamily: 'Georgia, serif',
        fontWeight: '600'
    });
    
    document.body.appendChild(notification);
    
    // Animer l'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Export pour utilisation dans d'autres modules si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mainApp,
        gallery,
        contactForm,
        smoothScrollTo,
        trackEvent,
        showNotification,
        animateCounters
    };
}