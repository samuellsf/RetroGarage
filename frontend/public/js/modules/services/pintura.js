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
const categorias = ["Candy", "Fosco", "Metalizado"];
const especificacoes = ["Brilho Profundo", "Acabamento Premium", "Pigmentação Especial", "Alta Resistência"];

for (let i = 1; i <= 100; i++) {
    const cat = categorias[i % categorias.length];
    todosEstilos.push({
        id: i,
        nome: `${cat} Estilo Premium #${i}`,
        categoria: cat,
        spec: especificacoes[i % especificacoes.length],
        imagem: `assets/img/pinturas/pintura-${(i % 4) + 1}.jpg` 
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