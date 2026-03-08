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

});