// js/modules/services/app.js

const inicializarMenu = () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      
      e.stopPropagation(); 
      navMenu.classList.toggle('active');
    });

   
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
};


window.addEventListener('load', inicializarMenu);