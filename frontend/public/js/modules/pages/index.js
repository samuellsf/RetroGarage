import { navbar } from '../ui/navbar.js';

document.addEventListener('DOMContentLoaded', () => {

    if (navbar && typeof navbar.init === 'function') {
        navbar.init();
    }


    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon && icon.classList.contains('fa-xmark')) {
                    icon.classList.replace('fa-xmark', 'fa-bars');
                }
            });
        });
    }
});