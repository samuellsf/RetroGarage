export const checkAuth = () => {
    const userIsLogged = localStorage.getItem('retroGarage_logged') === 'true';
    const path = window.location.pathname;
    if (!userIsLogged && !path.endsWith('index.html') && path !== '/') {
        alert("Acesso restrito! Por favor, faça login ou cadastre-se para ver nossos clássicos.");
        
        window.location.href = '/'; 
    }
};

checkAuth();