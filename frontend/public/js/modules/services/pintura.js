/* ======= PINTURA.JS ======= */
const destaquesCores = [
    {
        title: "Vermelho Candy",
        text: "Profundidade excepcional com acabamento espelhado de alto brilho.",
        image: "assets/icons/Vermelho-Candy.png"
    },
    {
        title: "Preto Fosco Acetinado",
        text: "Elegância discreta com textura suave e baixa reflexão de luz.",
        image: "assets/icons/Preto-Fosco-Acetinado.png"
    },
    {
        title: "Azul Metalizado",
        text: "Partículas metálicas que ganham vida sob a luz solar direta.",
        image: "assets/icons/Azul-Metalizado.png"
    },
    {
        title: "Dourado Candy",
        text: "Brilho intenso com um toque de luxo e sofisticação perfeiro pro seu dia-dia.",
        image: "assets/icons/Dourado-Candy.png"
    },
    {
        title: "Cinza Fosco Urbano",
        text: "Visual moderno e agressivo com acabamento sem brilho.",
        image: "assets/icons/Cinza-Fosco-Urbano.png"   
    }
];

let corAtual = 0;

function atualizarCarrosselPintura() {
    const titleEl = document.getElementById('showcase-title');
    const textEl = document.getElementById('showcase-text');
    const stageEl = document.querySelector('.showcase-stage');

    if (titleEl && textEl && stageEl) {
        const item = destaquesCores[corAtual];
        titleEl.innerText = item.title;
        textEl.innerText = item.text;
        stageEl.style.backgroundImage = `url(${item.image})`;
    }
}

/* === VITRINE DE ESTILOS == */
const todosEstilos = [];

const categorias = [
    "Candy",
    "Fosco",
    "Metalizado"
];

const especificacoes = [
    "Brilho Profundo",
    "Acabamento Premium",
    "Pigmentação Especial",
    "Alta Resistência"
];

// 100 cores diferentes
const cores = [
    "Vermelho Candy",
    "Azul Royal",
    "Preto Fosco",
    "Prata Metálico",
    "Verde Militar",
    "Laranja Queimado",
    "Amarelo Ouro",
    "Azul Bebê",
    "Branco Pérola",
    "Cinza Chumbo",
    "Roxo Neon",
    "Verde Limão",
    "Azul Tiffany",
    "Cobre Metálico",
    "Champagne",
    "Grafite",
    "Bordô",
    "Turquesa",
    "Rosa Pink",
    "Dourado",
    "Bronze",
    "Verde Esmeralda",
    "Azul Marinho",
    "Preto Piano",
    "Vermelho Ferrari",
    "Prata Lunar",
    "Cinza Nardo",
    "Azul Elétrico",
    "Laranja Candy",
    "Vinho Metálico",
    "Branco Gelo",
    "Verde Oliva",
    "Areia Fosca",
    "Amarelo Neon",
    "Roxo Candy",
    "Azul Céu",
    "Preto Carbon",
    "Azul Safira",
    "Verde Água",
    "Cinza Titanium",
    "Rosé Gold",
    "Verde Neon",
    "Marrom Café",
    "Pérola Azul",
    "Pérola Vermelha",
    "Pérola Verde",
    "Pérola Roxa",
    "Pérola Dourada",
    "Cinza Fosco",
    "Azul Fosco",
    "Laranja Neon",
    "Rosa Candy",
    "Branco Metálico",
    "Azul Vintage",
    "Verde Vintage",
    "Vermelho Vintage",
    "Creme Clássico",
    "Marfim",
    "Champagne Gold",
    "Preto Ônix",
    "Azul Oceano",
    "Azul Turquesa",
    "Verde Pistache",
    "Cinza Lunar",
    "Azul Midnight",
    "Roxo Metálico",
    "Verde Candy",
    "Dourado Fosco",
    "Bronze Fosco",
    "Prata Fosca",
    "Branco Satin",
    "Azul Satin",
    "Preto Satin",
    "Verde Satin",
    "Vermelho Satin",
    "Laranja Satin",
    "Púrpura",
    "Magenta",
    "Azul Gelo",
    "Cinza Urbano",
    "Verde Floresta",
    "Amarelo Canário",
    "Laranja Lava",
    "Azul Plasma",
    "Verde Radioativo",
    "Preto Vulcano",
    "Cinza Steel",
    "Azul Polar",
    "Branco Lunar",
    "Prata Espelhado",
    "Cobre Fosco",
    "Rosa Metálico",
    "Azul Celeste",
    "Verde Jade",
    "Azul Profundo",
    "Preto Absoluto",
    "Vermelho Sangue",
    "Cinza Tempestade",
    "Azul Relic",
    "Verde Relic"
];

const modelos = [
    "Mustang 1967",
    "Chevrolet Bel Air",
    "Cadillac Eldorado",
    "Porsche 356",
    "Volkswagen Fusca",
    "Chevrolet Impala",
    "Ford Maverick",
    "Dodge Charger",
    "Opala SS",
    "Camaro 1969",
    "Mercedes 300SL",
    "Jaguar E-Type",
    "Chevrolet Corvette",
    "Ferrari Dino",
    "Pontiac GTO",
    "Buick Riviera",
    "Lincoln Continental",
    "Ford Galaxie",
    "Chevrolet Fleetline",
    "Kombi Clássica"
    
];

for (let i = 1; i <= 100; i++) {
    const cat = categorias[i % categorias.length];
    const cor = cores[i - 1];
    const modelo = modelos[i % modelos.length];

    todosEstilos.push({
        id: i,
        nome: `${modelo} ${cor}`,
        categoria: cat,
        spec: especificacoes[i % especificacoes.length],
        cor: cor,
        modelo: modelo,
       
        imagem: `https://loremflickr.com/600/400/classic,car/all?lock=${i}`
    });
}

/* ===== LÓGICA DO BOTÃO SUBIR AO TOPO ======= */
const btnBackToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnBackToTop.classList.add('show');
    } else {
        btnBackToTop.classList.remove('show');
    }
});

btnBackToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


let estilosFiltrados = [...todosEstilos];
let batchAtual = 0;
const itensPorBatch = 12;

const grid = document.getElementById('grid-vitrine');
const btnLoadMore = document.getElementById('load-more');
const filtros = document.querySelectorAll('.filter-btn');

function criarCard(estilo) {
    const card = document.createElement('div');
    card.className = 'pintura-card';
    card.innerHTML = `
        <img src="${estilo.imagem}" alt="${estilo.nome}" loading="lazy">
        <h3 style="color: var(--gold); margin-top: 15px;">${estilo.nome}</h3>
        <p style="font-size: 0.8rem; color: #aaa; min-height: 2.5rem;">${estilo.spec}</p>
        <hr style="border: 0.5px solid #333; margin: 10px 0;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.7rem; background: #333; padding: 3px 8px; border-radius: 10px; text-transform: uppercase;">${estilo.categoria}</span>
            <a href="https://wa.me/5561900000000?text=Olá! Tenho interesse no estilo #${estilo.id}" target="_blank" style="color: #25d366; font-size: 1.2rem;"><i class="fab fa-whatsapp"></i></a>
        </div>
    `;
    return card;
}

function carregarLote() {
    const inicio = batchAtual * itensPorBatch;
    const fim = inicio + itensPorBatch;
    const lote = estilosFiltrados.slice(inicio, fim);

    lote.forEach(estilo => {
        if (grid) grid.appendChild(criarCard(estilo));
    });

    batchAtual++;

    if (btnLoadMore) {
        btnLoadMore.style.display = (fim >= estilosFiltrados.length) ? 'none' : 'inline-block';
    }
}
 

/* ====== EVENTOS E INICIALIZAÇÃO ====== */
document.addEventListener('DOMContentLoaded', () => {
    carregarLote();
    atualizarCarrosselPintura(); 

    // Lógica das setas do carrossel
    const btnLeft = document.querySelector('.showcase-arrow.left');
    const btnRight = document.querySelector('.showcase-arrow.right');

    if (btnLeft && btnRight) {
        btnLeft.addEventListener('click', () => {
            corAtual = (corAtual - 1 + destaquesCores.length) % destaquesCores.length;
            atualizarCarrosselPintura();
        });
        btnRight.addEventListener('click', () => {
            corAtual = (corAtual + 1) % destaquesCores.length;
            atualizarCarrosselPintura();
        });
    }
/* ===== LÓGICA DE AUTOMATIZAÇÃO ===== */
    let autoPlayInterval;
    const tempoTroca = 5000; 

    function iniciarAutoPlay() {
      
        pararAutoPlay();
        
        autoPlayInterval = setInterval(() => {
         
            corAtual = (corAtual + 1) % destaquesCores.length;
            atualizarCarrosselPintura();
        }, tempoTroca);
    }

    function pararAutoPlay() {
        clearInterval(autoPlayInterval);
    }


    iniciarAutoPlay();

  
    if (btnLeft && btnRight) {
        [btnLeft, btnRight].forEach(botao => {
            botao.addEventListener('click', () => {
                iniciarAutoPlay(); 
            });
        });
    }

    const showcaseContainer = document.querySelector('.hero-showcase');
    if (showcaseContainer) {
        showcaseContainer.addEventListener('mouseenter', pararAutoPlay);
        showcaseContainer.addEventListener('mouseleave', iniciarAutoPlay);
    }
    // Filtros da Vitrine
    filtros.forEach(botao => {
        botao.addEventListener('click', () => {
            filtros.forEach(b => b.classList.remove('active'));
            botao.classList.add('active');
            const filtro = botao.getAttribute('data-filter');
            if (grid) grid.innerHTML = '';
            batchAtual = 0;
            estilosFiltrados = (filtro === 'all') ? [...todosEstilos] : todosEstilos.filter(e => e.categoria === filtro);
            carregarLote();
        });
    });

    if (btnLoadMore) btnLoadMore.addEventListener('click', carregarLote);

    // Formulário de Agendamento
    const formAgendamento = document.getElementById('form-agendamento');
    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input');
            const dataFormatada = inputs[1].value.split('-').reverse().join('/');
            const mensagem = encodeURIComponent(
                `🚗 *Solicitação de Agendamento - RetroGarage*\n\n` +
                `👤 *Cliente:* ${inputs[0].value}\n` +
                `📅 *Data:* ${dataFormatada}\n` +
                `⏰ *Horário:* ${inputs[2].value}\n` +
                `🚘 *Veículo:* ${inputs[3].value}\n\n` +
                `Aguardo confirmação da disponibilidade!`
            );
            window.open(`https://wa.me/5561900000000?text=${mensagem}`, '_blank');
            this.reset();
        });
    }
});