        // Elementos DOM
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const navbar = document.getElementById('navbar');

        // Menu mobile
        function toggleMobileMenu() {
            navbar.classList.toggle('mobile-active');
            mobileOverlay.classList.toggle('active');

            const icon = mobileMenuToggle.querySelector('i');
            if (navbar.classList.contains('mobile-active')) {
                icon.className = 'fas fa-times';
                navbar.classList.add('expanded');
            } else {
                icon.className = 'fas fa-bars';
                navbar.classList.remove('expanded');
            }
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', function () {
            // Menu mobile
            if (mobileMenuToggle) {
                mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            }

            if (mobileOverlay) {
                mobileOverlay.addEventListener('click', toggleMobileMenu);
            }

            // Tecla ESC fecha menu
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navbar.classList.contains('mobile-active')) {
                    toggleMobileMenu();
                }
            });

            // Configura navbar desktop
            if (window.innerWidth > 768) {
                let hoverTimeout;

                navbar.addEventListener('mouseenter', () => {
                    clearTimeout(hoverTimeout);
                    navbar.classList.add('expanded');
                });

                navbar.addEventListener('mouseleave', () => {
                    hoverTimeout = setTimeout(() => {
                        navbar.classList.remove('expanded');
                    }, 500);
                });
            }

            // Animações de entrada
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.apk-card').forEach(card => {
                observer.observe(card);
            });

            // Redimensionamento da janela
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navbar.classList.remove('mobile-active');
                    mobileOverlay.classList.remove('active');
                    mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
                }
            });

            // Simular clique nos botões de download
            document.querySelectorAll('.apk-btn-primary').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const appName = this.closest('.apk-card').querySelector('.apk-title').textContent;
                    alert(`Download iniciado: ${appName}\n\nO download começará em alguns segundos.`);
                });
            });

            // Simular clique nos botões de detalhes
            document.querySelectorAll('.apk-btn-secondary').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const card = this.closest('.apk-card');
                    const title = card.querySelector('.apk-title').textContent;
                    const version = card.querySelector('.apk-tag:nth-child(1)').textContent;
                    const size = card.querySelector('.apk-tag:nth-child(2)').textContent;
                    const android = card.querySelector('.apk-tag:nth-child(3)').textContent;
                    
                    alert(`${title}\n\nVersão: ${version}\nTamanho: ${size}\nAndroid: ${android}\n\nRecursos:\n• Modificado para melhor performance\n• Testado e seguro\n• Sem anúncios`);
                });
            });
        });
    