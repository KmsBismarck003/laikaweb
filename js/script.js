/* ============================================================
   LAIKA CLUB — Main Script
   Handles: Theming, Navigation, Header scroll, Reveal animations, PDF
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------
       THEME MANAGEMENT (LIGHT/DARK)
    ---------------------------------------------------------- */
    const root = document.documentElement;
    const themeToggleBtn = document.querySelector('.theme-toggle');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('laika-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        updateLogos(theme);
    };

    const updateLogos = (theme) => {
        // LogoOsc.png was used on dark background, so let's assume it's for dark theme.
        // LogoClaro.png / logo.png for light theme.
        const logoSrc = theme === 'dark' ? 'logos/LogoOsc.png' : 'logos/LogoClaro.png';
        const logos = document.querySelectorAll('.brand-logo');
        logos.forEach(img => {
            // Check if LogoClaro exists by trying to load it, if not fallback to logo.png
            img.src = logoSrc;
            img.onerror = () => { img.src = theme === 'dark' ? 'logos/LogoOsc.png' : 'logos/logo.png'; };
        });
    };

    // Initial apply
    applyTheme(currentTheme);

    // Toggle event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('laika-theme', currentTheme);
            applyTheme(currentTheme);
        });
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('laika-theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme(currentTheme);
        }
    });

    /* ----------------------------------------------------------
       SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    ---------------------------------------------------------- */
    // Only apply animations if user has not requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };

        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target); // Run once
                }
            });
        };

        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

        document.querySelectorAll('.animate-reveal').forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback for older browsers or reduced motion
        document.querySelectorAll('.animate-reveal').forEach(el => {
            el.classList.add('is-revealed');
        });
    }

    /* ----------------------------------------------------------
       SIDEBAR NAVIGATION
    ---------------------------------------------------------- */
    document.addEventListener('click', (e) => {
        const hamburger  = e.target.closest('.hamburger');
        const closeBtn   = e.target.closest('.close-sidebar');
        const navLink    = e.target.closest('.sidebar nav a');
        const sidebar    = document.querySelector('.sidebar');
        const hamburgerIcon = document.querySelector('.hamburger');

        if (hamburger && sidebar) {
            const isOpen = sidebar.classList.toggle('open');
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }

        if ((closeBtn || navLink) && sidebar) {
            sidebar.classList.remove('open');
            if (hamburgerIcon) {
                hamburgerIcon.classList.remove('active');
                hamburgerIcon.setAttribute('aria-expanded', 'false');
            }
            document.body.style.overflow = '';
        }
    });

    // Close sidebar with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const sidebar = document.querySelector('.sidebar');
            const hamburger = document.querySelector('.hamburger');
            if (sidebar && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                if (hamburger) {
                    hamburger.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
                document.body.style.overflow = '';
            }
        }
    });

    /* ----------------------------------------------------------
       HEADER SCROLL STATE
    ---------------------------------------------------------- */
    const header = document.querySelector('header');
    if (header) {
        const handleScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial state
    }

    /* ----------------------------------------------------------
       PDF VIEWER TABS
    ---------------------------------------------------------- */
    const pdfTabs  = document.querySelectorAll('.doc-tab');
    const pdfFrame = document.getElementById('pdf-frame');

    if (pdfTabs.length && pdfFrame) {
        pdfTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                pdfTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                // Small fade effect when changing PDF
                pdfFrame.style.opacity = '0.5';
                setTimeout(() => {
                    pdfFrame.src = tab.getAttribute('data-pdf');
                    pdfFrame.style.opacity = '1';
                }, 200);
            });
        });
        
        // Ensure iframe transitions smoothly
        if (pdfFrame) {
            pdfFrame.style.transition = 'opacity 0.3s ease';
        }
    }

    /* ----------------------------------------------------------
       CONTACT FORM
    ---------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            
            // Animation state
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = '', 150);
            
            btn.textContent = 'Mensaje Enviado';
            btn.disabled = true;
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = 'Enviar Mensaje';
                btn.disabled = false;
                btn.style.opacity = '1';
                contactForm.reset();
            }, 3000);
        });
    }

});