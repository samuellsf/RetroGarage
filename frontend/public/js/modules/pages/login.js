document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('login-modal');
    const openBtn = document.getElementById('user-menu-btn');
    const closeBtn = document.querySelector('.close-btn');

    const secLogin = document.getElementById('section-login');
    const secForgot = document.getElementById('section-forgot');
    const secRegister = document.getElementById('section-register');

    const linkForgot = document.getElementById('link-forgot');
    const linkRegister = document.getElementById('link-register');
    const linksBackLogin = document.querySelectorAll('.link-back-login');

    const showSection = (section) => {
        if (!section) return;
        [secLogin, secForgot, secRegister].forEach(s => {
            if (s) s.style.display = 'none';
        });
        section.style.display = 'block';
    };

    if (openBtn) {
        openBtn.onclick = (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            showSection(secLogin); 
        };
    }

    if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
    
    window.onclick = (e) => { 
        if (e.target === modal) modal.style.display = 'none'; 
    };

    if (linkForgot) linkForgot.onclick = (e) => { e.preventDefault(); showSection(secForgot); };
    if (linkRegister) linkRegister.onclick = (e) => { e.preventDefault(); showSection(secRegister); };
    
    linksBackLogin.forEach(link => {
        link.onclick = (e) => { e.preventDefault(); showSection(secLogin); };
    });

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.onsubmit = (e) => {
            e.preventDefault();
        
            localStorage.setItem('retroGarage_auth', 'true'); 
            alert("Login realizado! Acesso liberado aos clássicos.");
            window.location.reload(); 
        };
    }

    const forgotForm = document.getElementById('forgot-form');
    if (forgotForm) {
        forgotForm.onsubmit = (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('forgot-email');
            const email = emailInput ? emailInput.value : "seu e-mail";
            alert(`Código enviado para ${email}! Verifique sua caixa de entrada.`);
            showSection(secLogin);
        };
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.onsubmit = (e) => {
            e.preventDefault();
            localStorage.setItem('retroGarage_auth', 'true'); 
            alert("Cadastro realizado com sucesso! Bem-vindo à RetroGarage.");
            window.location.reload(); 
        };
    }
});