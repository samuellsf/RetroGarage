import { cartService } from '../services/cart.service.js';
import { cartUI } from '../ui/cartUI.js';
import { navbar } from '../ui/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    
    
    if (navbar && typeof navbar.init === 'function') {
        navbar.init(); 
    } else if (navbar && typeof navbar.render === 'function') {
        navbar.render();
    }

    const itemsContainer = document.getElementById('cart-items-container');
    const btnCheckout = document.getElementById('btn-checkout');


    function updatePage() {
        const cartItems = cartService.getCart();
        const total = cartService.calculateTotal();

       
        cartUI.renderCartList(
            cartItems, 
            itemsContainer, 
            handleQuantityChange, 
            handleRemoveItem
        );

      
        cartUI.renderSummary(total);

      
        if (navbar && typeof navbar.updateCartBadge === 'function') {
            navbar.updateCartBadge();
        }
    }

    
    function handleQuantityChange(id, change) {
        cartService.updateQuantity(id, change);
        updatePage();
    }


    function handleRemoveItem(id) {
        cartService.removeFromCart(id);
        updatePage();
    }


    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            const cart = cartService.getCart();
            if (cart.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            alert('Integração de checkout simulada com sucesso!');
        });
    }

    
    updatePage();
});