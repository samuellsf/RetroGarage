const verificarAcesso = () => {
    const paginasRestritas = ['carros.html', 'motos.html', 'pecas.html', 'pintura.html'];
    const caminho = window.location.pathname;
    const paginaAtual = caminho.substring(caminho.lastIndexOf('/') + 1);
    const usuarioLogado = localStorage.getItem('retroGarage_auth') === 'true';

   
    if (paginasRestritas.includes(paginaAtual) && !usuarioLogado) {
        alert("⚠️ Acesso Restrito! Por favor, faça login.");
        window.location.href = 'index.html';
        return;
    }

    
    if (usuarioLogado) {
        document.body.classList.add('user-authenticated');
    }
};


verificarAcesso();


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('nav-menu');
    const usuarioLogado = localStorage.getItem('retroGarage_auth') === 'true';

    if (menuBtn && navMenu) {
        menuBtn.onclick = () => navMenu.classList.toggle('active');
    }

   
    const linksMenu = document.querySelectorAll('nav a, .nav-menu a');
    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const paginasRestritas = ['carros.html', 'motos.html', 'pecas.html', 'pintura.html'];
            
            if (paginasRestritas.includes(href) && !usuarioLogado) {
                e.preventDefault();
                const modal = document.getElementById('login-modal');
                if (modal) modal.style.display = 'flex';
            }
        });
    });
});