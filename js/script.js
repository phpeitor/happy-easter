document.addEventListener("DOMContentLoaded", function() {

  // Generar 11 nubes
  for (let i = 1; i <= 11; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud' + i;
    document.body.appendChild(cloud);
  }

  // Generar forehead1 y forehead2 dentro de .head
  const head = document.querySelector('.head');
  for (let i = 1; i <= 2; i++) {
    const el = document.createElement('div');
    el.className = 'forehead' + i;
    head.appendChild(el);
  }

  // Generar arm1 y arm2 dentro de .torso
  const torso = document.querySelector('.torso');
  for (let i = 1; i <= 2; i++) {
    const el = document.createElement('div');
    el.className = 'arm' + i;
    torso.appendChild(el);
  }

  // Generar foot1 y foot2 dentro de .theman
  const theman = document.querySelector('.theman');
  for (let i = 1; i <= 2; i++) {
    const el = document.createElement('div');
    el.className = 'foot' + i;
    theman.appendChild(el);
  }

  // Animaciones Typed.js
  let typed1 = new Typed('#paragraph', {
    strings: ["Feliz Semana Santa"],
    typeSpeed: 200,
    cursorChar: "|",
    onComplete: function() {
      let typed2 = new Typed('#paragraph2', {
        strings: ["amvsoft.tech"],
        typeSpeed: 150,
        cursorChar: "*"
      });
    }
  });

});