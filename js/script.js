/*
Happy Easter!
*/
document.addEventListener("DOMContentLoaded", function() {
let typed1 = new Typed('#paragraph', {
    strings: ["Feliz Semana Santa"],
    typeSpeed: 200,
	cursorChar: "|",
	onComplete: function() {
        let typed2 = new Typed('#paragraph2', {
            strings: ["FORTEL"],
            typeSpeed: 150,
            cursorChar: "*"
        });
    }
  }); 
 });