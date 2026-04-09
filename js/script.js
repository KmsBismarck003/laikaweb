document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('open');
            body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'visible';
        });

        // Close button inside sidebar
        const closeBtn = document.querySelector('.close-sidebar');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                hamburger.classList.remove('active');
                sidebar.classList.remove('open');
                body.style.overflow = 'visible';
            });
        }

        // Close menu on link click
        sidebar.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                sidebar.classList.remove('open');
                body.style.overflow = 'visible';
            });
        });
    }

    // Scroll Effect for Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // PDF Viewer Logic
    const pdfTabs = document.querySelectorAll('.pdf-tab');
    const pdfFrame = document.getElementById('pdf-frame');

    if (pdfTabs && pdfFrame) {
        pdfTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                pdfTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                pdfFrame.src = tab.getAttribute('data-pdf');
            });
        });
    }
});
