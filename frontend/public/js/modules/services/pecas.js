/* ======= PECAS.JS ======= */

/* ===== DESTAQUES DO CARROSSEL ===== */
const destaquesPecas = [
    {
        title: "Motores V8 Small Block",
        text: "Motores completos revisados com garantia e performance premium.",
        image: "assets/pecas/motor-v8.png"
    },
    {
        title: "Suspensão Pneumática",
        text: "Tecnologia e conforto para clássicos e projetos modernos.",
        image: "assets/pecas/suspensao.png"
    },
    {
        title: "Carburadores Weber",
        text: "Performance e originalidade para seu projeto.",
        image: "assets/pecas/carburador.png"
    }
];

let pecaAtual = 0;

/* ===== FUNÇÃO DO CARROSSEL ===== */
function atualizarCarrosselPecas() {
    const titleEl = document.getElementById('showcase-title');
    const textEl = document.getElementById('showcase-text');
    const stageEl = document.querySelector('.showcase-stage');

    if (titleEl && textEl && stageEl) {
        const item = destaquesPecas[pecaAtual];
        titleEl.innerText = item.title;
        textEl.innerText = item.text;
        stageEl.style.backgroundImage = `url(${item.image})`;
    }
}

/* ===== CADASTRO MANUAL DAS PEÇAS (VITRINE) ===== */
// Aqui você insere as peças reais. Criei alguns exemplos abaixo.
// As categorias DEVEM ser exatamente: "Motor", "Suspensão" ou "Acabamento" (ou as que usar nos botões de filtro).

const dadosPecas = [
    {
        id: 1,
        nome: "Carburador Weber 40 DCOE - Opala SS",
        categoria: "Motor",
        spec: "Performance Grade A",
        imagem: "assets/pecas/weber-40.jpg" // Caminho da sua pasta local
    },
    {
        id: 2,
        nome: "Amortecedor Bilstein B6 - Mustang 1967",
        categoria: "Suspensão",
        spec: "Garantia de 1 Ano",
        imagem: "assets/pecas/amortecedor-mustang.png"
    },
    {
        id: 3,
        nome: "Volante Esportivo Maverick GT",
        categoria: "Acabamento",
        spec: "Peça Original OEM",
        imagem: "assets/pecas/volante-maverick.jpg"
    },
    {
        id: 4,
        nome: "Pistão Forjado IAPEL - Dodge Charger",
        categoria: "Motor",
        spec: "Importação Direta",
        imagem: "assets/pecas/pistao-dodge.jpg"
    },
    {
        id: 5,
        nome: "Kit Suspensão Coilover - Camaro 1969",
        categoria: "Suspensão",
        spec: "Performance Grade A",
        imagem: "assets/pecas/coilover-camaro.jpg"
    },
    {
        id: 6,
        nome: "Radiador de Alumínio Brasado - Bel Air",
        categoria: "Motor",
        spec: "Garantia de 1 Ano",
        imagem: "assets/pecas/radiador-belair.jpg"
    }
    // Você pode continuar adicionando quantos itens quiser aqui seguindo essa estrutura...
];

/* ===== CONFIGURAÇÃO DO GRID ===== */
// Apontamos os estilos filtrados para a nossa nova lista manual
let estilosFiltrados = [...dadosPecas];
let batchAtual = 0;
const itensPorBatch = 12; // Quantos cards aparecem por vez ao clicar em "Load More"

const grid = document.getElementById('grid-vitrine');
const btnLoadMore = document.getElementById('load-more');
const filtros = document.querySelectorAll('.filter-btn');

/* ===== CRIAÇÃO DOS CARDS ===== */

function criarCard(estilo) {

    const card = document.createElement('div');

    card.className = 'peca-card';
    
    // Adicionamos estilos direto no card para precaver o vazamento e fixar a largura
    card.style.width = '100%';
    card.style.maxWidth = '300px'; 
    card.style.overflow = 'hidden'; 
    card.style.boxSizing = 'border-box';

    card.innerHTML = `
        <img src="${estilo.imagem}" alt="${estilo.nome}" loading="lazy" style="
            width: 100%;
            height: 200px;
            object-fit: cover;
            object-position: center;
            display: block;
        ">

        <h3 style="color: var(--gold); margin-top: 15px;">
            ${estilo.nome}
        </h3>

        <p style="font-size: 0.8rem; color: #aaa;">
            ${estilo.spec}
        </p>

        <hr style="border: 0.5px solid #333; margin: 10px 0;">

        <div style="display:flex;justify-content:space-between;align-items:center;">

            <span style="
                font-size:0.7rem;
                background:#333;
                padding:3px 8px;
                border-radius:10px;
                text-transform:uppercase;
            ">
                ${estilo.categoria}
            </span>

            <a
                href="https://wa.me/5561900000000?text=Olá! Tenho interesse na peça #${estilo.id}"
                target="_blank"
                style="color:#25d366;font-size:1.2rem;"
            >
                <i class="fab fa-whatsapp"></i>
            </a>

        </div>
    `;

    return card;

}

/* ===== CARREGAMENTO DOS LOTES ===== */
function carregarLote() {
    const inicio = batchAtual * itensPorBatch;
    const fim = inicio + itensPorBatch;
    const lote = estilosFiltrados.slice(inicio, fim);

    lote.forEach(estilo => {
        if (grid) {
            grid.appendChild(criarCard(estilo));
        }
    });

    batchAtual++;

    if (btnLoadMore) {
        btnLoadMore.style.display = (fim >= estilosFiltrados.length) ? 'none' : 'inline-block';
    }
}

/* ===== INICIALIZAÇÃO ===== */
document.addEventListener('DOMContentLoaded', () => {
    carregarLote();
    atualizarCarrosselPecas();

    /* ===== BOTÕES DO CARROSSEL ===== */
    const btnLeft = document.querySelector('.showcase-arrow.left');
    const btnRight = document.querySelector('.showcase-arrow.right');

    if (btnLeft && btnRight) {
        btnLeft.addEventListener('click', () => {
            pecaAtual = (pecaAtual - 1 + destaquesPecas.length) % destaquesPecas.length;
            atualizarCarrosselPecas();
        });

        btnRight.addEventListener('click', () => {
            pecaAtual = (pecaAtual + 1) % destaquesPecas.length;
            atualizarCarrosselPecas();
        });
    }

    /* ===== FILTROS ===== */
    filtros.forEach(botao => {
        botao.addEventListener('click', () => {
            filtros.forEach(b => b.classList.remove('active'));
            botao.classList.add('active');
            
            const filtro = botao.getAttribute('data-filter');
            if (grid) { grid.innerHTML = ''; }
            batchAtual = 0;
            
            // Filtra com base na nossa lista manual dadosPecas
            estilosFiltrados = (filtro === 'all') 
                ? [...dadosPecas] 
                : dadosPecas.filter(e => e.categoria === filtro);
                
            carregarLote();
        });
    });

    /* ===== LOAD MORE ===== */
    if (btnLoadMore) btnLoadMore.addEventListener('click', carregarLote);
    
    /* ===== FORMULÁRIO DE CONSULTORIA ===== */
    const formAgendamento = document.getElementById('form-agendamento');
    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input');
            const mensagem = encodeURIComponent(
                `🔧 *Solicitação de Peças*\n\n` +
                `👤 *Cliente:* ${inputs[0].value}\n` +
                `⚙️ *Peça:* ${inputs[1].value}\n` +
                `🚘 *Veículo:* ${inputs[2].value}\n\n` +
                `Gostaria de consultar disponibilidade e valores.`
            );
            window.open(`https://wa.me/5561900000000?text=${mensagem}`, '_blank');
            this.reset();
        });
    }
});