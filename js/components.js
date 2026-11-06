/* ============================================================
   LAIKA CLUB — Web Components
   Custom Elements: laika-header, laika-sidebar, laika-footer
   ============================================================ */

class LaikaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="logo">
                    <a href="index.html">
                        <img class="brand-logo" src="logos/LogoOsc.png" alt="Laika Club">
                    </a>
                </div>
                <div class="header-right">
                    <nav class="header-desktop-nav" aria-label="Navegación rápida">
                        <a href="https://laika-club.vercel.app/" target="_blank" rel="noopener" class="header-link header-link-highlight">
                            <i class="fas fa-ticket-alt"></i> Boletos
                        </a>
                        <a href="privacidad.html" class="header-link">Privacidad</a>
                        <a href="contacto.html" class="header-link">Contacto</a>
                    </nav>
                    <div class="header-actions">
                        <button class="theme-toggle" aria-label="Cambiar tema">
                            <i class="fas fa-moon dark-icon"></i>
                            <i class="fas fa-sun light-icon"></i>
                        </button>
                        <button class="hamburger" aria-label="Abrir menu de navegacion" aria-expanded="false">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        `;
    }
}

class LaikaSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar" role="dialog" aria-modal="true" aria-label="Menu de navegacion">
                <div class="sidebar-container">
                    <div class="sidebar-top">
                        <div class="sidebar-brand-wrapper">
                            <img class="brand-logo" src="logos/LogoOsc.png" alt="Laika Club">
                            <span class="sidebar-brand-pill">Portal Institucional</span>
                        </div>
                        <button class="close-sidebar" aria-label="Cerrar menu">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <div class="sidebar-grid">
                        <!-- Columna Principal -->
                        <div class="sidebar-section-main">
                            <span class="sidebar-eyebrow">Navegación Principal</span>
                            <nav class="sidebar-nav">
                                <a href="index.html"><span class="nav-number">00</span>Inicio</a>
                                <a href="mision.html"><span class="nav-number">01</span>Misión</a>
                                <a href="vision.html"><span class="nav-number">02</span>Visión</a>
                                <a href="valores.html"><span class="nav-number">03</span>Valores</a>
                                <a href="objetivo.html"><span class="nav-number">04</span>Objetivo</a>
                                <a href="fan.html"><span class="nav-number">05</span>Para el Fan</a>
                                <a href="organizador.html"><span class="nav-number">06</span>Organizador</a>
                                <a href="documentacion.html"><span class="nav-number">07</span>Documentación</a>
                            </nav>
                        </div>

                        <!-- Columna Lateral / Legal & Venta -->
                        <div class="sidebar-section-side">
                            <!-- Banner Venta Boletos -->
                            <a href="https://laika-club.vercel.app/" target="_blank" rel="noopener" class="sidebar-ticket-card">
                                <div class="ticket-card-icon">
                                    <i class="fas fa-ticket-alt"></i>
                                </div>
                                <div class="ticket-card-content">
                                    <span class="ticket-card-badge">Venta Oficial</span>
                                    <h4>Comprar Boletos</h4>
                                    <p>Accede a la plataforma de venta de boletos en vivo: laika-club.vercel.app</p>
                                </div>
                                <div class="ticket-card-arrow">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </a>

                            <div class="sidebar-legal-group">
                                <span class="sidebar-eyebrow">Legal y Privacidad</span>
                                <nav class="sidebar-nav-secondary">
                                    <a href="contacto.html"><span class="nav-number">08</span>Contacto</a>
                                    <a href="privacidad.html"><span class="nav-number">09</span>Aviso de Privacidad</a>
                                    <a href="eliminar-cuenta.html"><span class="nav-number">10</span>Eliminación de Cuenta</a>
                                </nav>
                            </div>

                            <div class="sidebar-info-card">
                                <span class="sidebar-eyebrow">Atención al Usuario</span>
                                <div class="sidebar-info-row">
                                    <i class="fas fa-phone-alt"></i>
                                    <a href="tel:7222390967">722 239 0967</a>
                                </div>
                                <div class="sidebar-info-row">
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:jreyes6458@gmail.com">jreyes6458@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-footer">
                        <div class="sidebar-footer-copy">
                            &copy; 2026 LAIKA Club. Todos los derechos reservados.
                        </div>
                        <div class="sidebar-social">
                            <a href="https://www.instagram.com/laika__club" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/people/Laika-Club/61581326425324/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.tiktok.com/@laika_club" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

class LaikaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-main">
                        <div class="footer-brand">
                            <img class="brand-logo" src="logos/LogoOsc.png" alt="Laika Club">
                            <p>Sistema integral de gestión y venta de boletos. Tecnología al servicio de experiencias excepcionales.</p>
                            <div class="footer-social" style="margin-top: 24px;">
                                <a href="https://www.instagram.com/laika__club" target="_blank" rel="noopener" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/people/Laika-Club/61581326425324/" target="_blank" rel="noopener" aria-label="Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.tiktok.com/@laika_club" target="_blank" rel="noopener" aria-label="TikTok">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>

                        <div class="footer-col">
                            <h5>Navegación</h5>
                            <a href="index.html">Inicio</a>
                            <a href="mision.html">Misión</a>
                            <a href="vision.html">Visión</a>
                            <a href="valores.html">Valores</a>
                            <a href="objetivo.html">Objetivo</a>
                            <a href="fan.html">Para el Fan</a>
                            <a href="organizador.html">Organizador</a>
                            <a href="documentacion.html">Documentación</a>
                        </div>

                        <div class="footer-col">
                            <h5>Legal & Venta</h5>
                            <a href="https://laika-club.vercel.app/" target="_blank" rel="noopener" style="color: var(--brand); font-weight: 600;"><i class="fas fa-ticket-alt"></i> Comprar Boletos</a>
                            <a href="privacidad.html">Aviso de Privacidad</a>
                            <a href="eliminar-cuenta.html">Eliminar Cuenta</a>
                            <a href="contacto.html">Contacto y Soporte</a>
                        </div>

                        <div class="footer-col">
                            <h5>Contacto</h5>
                            <a href="tel:7222390967"><i class="fas fa-phone-alt"></i> 722 239 0967</a>
                            <a href="mailto:jreyes6458@gmail.com"><i class="fas fa-envelope"></i> jreyes6458@gmail.com</a>
                            <div class="map-wrapper" style="margin-top: 20px;">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15064.306059882!2d-99.6!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA5OcKwMzYwMC4wIlc!5e0!3m2!1sen!2smx!4v1620000000000!5m2!1sen!2smx"
                                    loading="lazy"
                                    title="Ubicacion Laika Club">
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>&copy; 2026 Laika Club. Todos los derechos reservados. &nbsp;|&nbsp; <a href="privacidad.html" style="color: inherit; text-decoration: underline;">Aviso de Privacidad</a> &nbsp;|&nbsp; <a href="eliminar-cuenta.html" style="color: inherit; text-decoration: underline;">Eliminar Cuenta</a> &nbsp;|&nbsp; <a href="https://laika-club.vercel.app/" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">Boletos</a></p>
                        <p>Reyes de la Rosa José Ángel &nbsp;|&nbsp; Vazquez Nava Brandon</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('laika-header',  LaikaHeader);
customElements.define('laika-sidebar', LaikaSidebar);
customElements.define('laika-footer',  LaikaFooter);
