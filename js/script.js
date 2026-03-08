document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <= 11; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud' + i;
        document.body.appendChild(cloud);
    }

    const head = document.querySelector('.head');
    for (let i = 1; i <= 2; i++) {
        const el = document.createElement('div');
        el.className = 'forehead' + i;
        head.appendChild(el);
    }

    const torso = document.querySelector('.torso');
    for (let i = 1; i <= 2; i++) {
        const el = document.createElement('div');
        el.className = 'arm' + i;
        torso.appendChild(el);
    }

    const theman = document.querySelector('.theman');
    for (let i = 1; i <= 2; i++) {
        const el = document.createElement('div');
        el.className = 'foot' + i;
        theman.appendChild(el);
    }

    new Typed('#paragraph', {
        strings: ["Feliz Semana Santa"],
        typeSpeed: 200,
        cursorChar: "|",
        onComplete: function() {
        new Typed('#paragraph2', {
            strings: ["amvsoft.tech"],
            typeSpeed: 150,
            cursorChar: "*"
        });
        }
    });
  
    // ===================== Logo Lightbox =====================
    (function () {
        const logoEl = document.querySelector('.logo');
        if (!logoEl) return;
        const logoImg = logoEl.querySelector('.box img');

        logoEl.addEventListener('click', function () {
            const rect = logoEl.getBoundingClientRect();
            const logoCX = rect.left + rect.width / 2;
            const logoCY = rect.top + rect.height / 2;
            const vpCX = window.innerWidth / 2;
            const vpCY = window.innerHeight / 2;
            const dx = logoCX - vpCX;
            const dy = logoCY - vpCY;

            const overlay = document.createElement('div');
            overlay.className = 'logo-lightbox';
            overlay.style.setProperty('--lbx', dx + 'px');
            overlay.style.setProperty('--lby', dy + 'px');

            const img = document.createElement('img');
            img.src = logoImg.src;
            img.className = 'logo-lightbox__img';
            img.alt = 'Logo';

            const closeBtn = document.createElement('button');
            closeBtn.className = 'logo-lightbox__close';
            closeBtn.setAttribute('aria-label', 'Cerrar');
            closeBtn.innerHTML = '&times;';

            overlay.appendChild(img);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);

            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    overlay.classList.add('logo-lightbox--open');
                });
            });

            function closeLightbox() {
                overlay.classList.remove('logo-lightbox--open');
                overlay.classList.add('logo-lightbox--closing');
                img.addEventListener('animationend', function () {
                    overlay.remove();
                }, { once: true });
            }

            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                closeLightbox();
            });

            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) closeLightbox();
            });

            document.addEventListener('keydown', function onKey(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', onKey);
                }
            });
        });
    }());

});