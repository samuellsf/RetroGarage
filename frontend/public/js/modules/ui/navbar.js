// frontend/public/js/modules/ui/navbar.js

const navbarHTML = `
    <nav class="navbar">
        <div class="logo">
            <a href="./index.html">RetroGarage</a>
        </div>
        <button id="menuBtn" class="menu-btn">
            <i class="fas fa-bars"></i>
        </button>
        
        <ul class="nav-links" id="nav-menu">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./carros.html">Carros</a></li>
            <li><a href="./pecas.html">Peças</a></li>
        </ul>
        <div class="nav-icons">
            <a href="./carrinho.html" class="cart-icon">
                <i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span>
            </a>
            <a href="./login.html" class="user-icon">👤</a>
        </div>
    </nav>
`;

export const navbar = {
    init() {
        const container = document.getElementById('navbar-container');
        if (container) {
            container.innerHTML = navbarHTML;
            
            // Ativa o contador de itens vermelho
            this.updateCartBadge();
            
            // ATIVA O SEU CÓDIGO DO MENU HAMBÚRGUER AQUI DETRO
            this.setupMobileMenu();
        }
    },

    setupMobileMenu() {
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

            // Fecha o menu ao clicar em qualquer link
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
    },

    updateCartBadge() {
        const badge = document.getElementById('cart-count');
        if (badge) {
            const cart = localStorage.getItem('retrogarage_cart');
            const cartItems = cart ? JSON.parse(cart) : [];
            const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
            badge.innerText = totalItems;
        }
    }
};