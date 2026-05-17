const verificarAcesso = () => {
    const usuarioLogado = localStorage.getItem('retroGarage_auth') === 'true';

    if (usuarioLogado) {
        document.body.classList.add('user-authenticated');
    }
};

verificarAcesso();

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('nav-menu');

  
    if (menuBtn && navMenu) {
        menuBtn.onclick = () => navMenu.classList.toggle('active');
    }
    

});