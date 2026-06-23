export const cartUI = {
    renderCartList(cartItems, container, onQuantityChange, onRemoveItem) {
        if (cartItems.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <p>Seu carrinho está vazio.</p>
                    <a href="./carros.html" class="btn btn-primary">Ver Catálogo</a>
                </div>
            `;
            return;
        }

        container.innerHTML = cartItems.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image || './assets/pecas/placeholder.png'}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p class="unit-price">Preço unitário: R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="btn-qty decrease" data-id="${item.id}">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="btn-qty increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn-remove" data-id="${item.id}">Remover</button>
                </div>
                <div class="cart-item-total">
                    R$ ${(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
            </div>
        `).join('');

        this.setupEvents(container, onQuantityChange, onRemoveItem);
    },

    renderSummary(total) {
        const formattedTotal = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        document.getElementById('cart-subtotal').innerText = formattedTotal;
        document.getElementById('cart-total').innerText = formattedTotal;
    },

    setupEvents(container, onQuantityChange, onRemoveItem) {
        container.querySelectorAll('.btn-qty').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const change = e.target.classList.contains('increase') ? 1 : -1;
                onQuantityChange(id, change);
            });
        });

        container.querySelectorAll('.btn-remove').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                onRemoveItem(id);
            });
        });
    }
};