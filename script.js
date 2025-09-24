// Splash Ekran Kontrolü
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.querySelector('.splash-screen');
    const showContentBtn = document.getElementById('showContent');
    const mainContent = document.getElementById('mainContent');
    const navbarBrand = document.querySelector('.navbar-brand');
    const anasayfaNavLink = document.querySelector('.nav-link[href="#"]');

    // Splash ekranı otomatik gizle (isteğe bağlı)
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 0.5s';
            setTimeout(() => splash.style.display = 'none', 500);
        }, 1200);
    }

    // Daha Fazla Bilgi Butonu ile İçeriği Gösterme ve Hakkımda Bölümüne Kaydırma
    function showMainContent() {
        if (mainContent && showContentBtn) {
            mainContent.style.display = 'block';
            mainContent.style.opacity = '0';
            mainContent.style.transition = 'opacity 1s ease';
            setTimeout(() => {
                mainContent.style.opacity = '1';
                const hakkimda = document.querySelector('#hakkimda');
                if (hakkimda) {
                    hakkimda.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            showContentBtn.style.display = 'none';
        }
    }

    if (showContentBtn) {
        showContentBtn.addEventListener('click', showMainContent);
    }

    // Scroll ile İçeriği Gösterme
    let isScrolled = false;
    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0 && !isScrolled && window.scrollY < 50) {
            isScrolled = true;
            showMainContent();
        }
    });

    // Dokunmatik cihazlar için touchmove ile tetikleme
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    window.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        if (touchStartY - touchY > 50 && !isScrolled && window.scrollY < 50) {
            isScrolled = true;
            showMainContent();
        }
    });

    // Navbar'daki MEK Blog ve Anasayfa linkleri aynı işlevi görecek
    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (navbarBrand) {
        navbarBrand.addEventListener('click', scrollToTop);
    }
    if (anasayfaNavLink) {
        anasayfaNavLink.addEventListener('click', scrollToTop);
    }
});

// Navbar Scroll Efekti
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Beceriler İçin Animasyon
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('animate__animated', 'animate__fadeInUp');
    });
});