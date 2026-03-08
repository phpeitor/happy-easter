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
        showCursor: false,
        onComplete: function() {
            new Typed('#paragraph2', {
                strings: ["amvsoft.tech"],
                typeSpeed: 150,
                cursorChar: "*",
                onComplete: function() {
                    startJesusChat();
                }
            });
        }
    });

    // ===================== Chat 7 palabras =====================
    const phrases = [
        { text: "Padre, perdónalos, porque no saben lo que hacen.",     ref: "Lucas 23, 34" },
        { text: "En verdad te digo: hoy estarás conmigo en el Paraíso.", ref: "Lucas 23, 43" },
        { text: "Mujer, ahí tienes a tu hijo. Ahí tienes a tu madre.",   ref: "Juan 19, 26-27" },
        { text: "Dios mío, Dios mío, ¿por qué me has abandonado?",       ref: "Mateo 27, 46" },
        { text: "Tengo sed.",                                             ref: "Juan 19, 28" },
        { text: "Todo está consumado.",                                   ref: "Juan 19, 30" },
        { text: "Padre, en tus manos encomiendo mi espíritu.",           ref: "Lucas 23, 46" }
    ];

    function startJesusChat() {
        const body = document.getElementById('jesusChat');
        let index = 0;

        function typeNextPhrase() {
            if (index >= phrases.length) return;

            // Fila con avatar + burbuja con span de typed
            const msgEl = document.createElement('div');
            msgEl.className = 'jesus-chat__msg';

            const avatar = document.createElement('div');
            avatar.className = 'jesus-chat__avatar';
            avatar.textContent = '✝';

            const bubble = document.createElement('div');
            bubble.className = 'jesus-chat__bubble';

            const typedSpan = document.createElement('span');
            const typedId = 'jc-typed-' + index;
            typedSpan.id = typedId;

            const ref = document.createElement('div');
            ref.className = 'jesus-chat__ref';
            ref.textContent = phrases[index].ref;

            bubble.appendChild(typedSpan);
            bubble.appendChild(ref);
            msgEl.appendChild(avatar);
            msgEl.appendChild(bubble);
            body.appendChild(msgEl);
            body.scrollTop = body.scrollHeight;

            const currentIndex = index;
            index++;

            new Typed('#' + typedId, {
                strings: [phrases[currentIndex].text],
                typeSpeed: 55,
                showCursor: currentIndex < phrases.length - 1 ? false : true,
                cursorChar: '|',
                onComplete: function(self) {
                    body.scrollTop = body.scrollHeight;
                    if (currentIndex < phrases.length - 1) {
                        setTimeout(typeNextPhrase, 900);
                    }
                }
            });
        }

        setTimeout(typeNextPhrase, 800);
    }
  
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