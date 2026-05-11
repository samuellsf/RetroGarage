export const checkAuth = () => {
    const userIsLogged = localStorage.getItem('retroGarage_logged') === 'true';

   
    if (!userIsLogged && !window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        alert("Acesso restrito! Por favor, faça login ou cadastre-se para ver nossos clássicos.");
        window.location.href = 'index.html'; 
    }
};

checkAuth();