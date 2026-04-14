document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');
    const menuBtn = document.getElementById('menuBtn');

    searchIcon.addEventListener('click', () => {
        const query = searchInput.value;
        if(query) {
            console.log(`Buscando por: ${query}`);
          
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchIcon.click();
        }
    });

    menuBtn.addEventListener('click', () => {
        console.log("Abrir menu lateral...");
     
    });
});