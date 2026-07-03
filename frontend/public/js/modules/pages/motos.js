/* ======= PECAS.JS ======= */

/* ===== DESTAQUES DO CARROSSEL ===== */
const destaquesMotos = [
    {
        title: "Harley-Davidson Breakout 117",
        text: "O ápice do estilo chopper americano com o motor Milwaukee-Eight de força bruta.",
        image: "assets/motos/breakout-117.jpg"
    },
    {
        title: "Triumph Rocket 3 Storm",
        text: "A moto com o maior motor do mundo em produção: 2.500cc de pura adrenalina.",
        image: "assets/motos/rocket-3.jpg"
    },
    {
        title: "BMW R 18 Classic",
        text: "O maior motor Boxer da história da BMW em um design purista e atemporal.",
        image: "assets/motos/bmw-r18.jpg"
    },
    {
        title: "Royal Enfield Super Meteor 650",
        text: "O melhor custo-benefício para quem busca uma autêntica cruiser estradeira.",
        image: "assets/motos/super-meteor.jpg"
    }
];

let motoAtual = 0;

/* ===== FUNÇÃO DO CARROSSEL ===== */
function atualizarCarrosselMotos() {
    const titleEl = document.getElementById('showcase-title');
    const textEl = document.getElementById('showcase-text');
    const stageEl = document.querySelector('.showcase-stage');

    if (titleEl && textEl && stageEl) {
        const item = destaquesMotos[motoAtual];
        titleEl.innerText = item.title;
        textEl.innerText = item.text;
        stageEl.style.backgroundImage = `url(${item.image})`;
    }
}

/* ===== CADASTRO MANUAL DAS MOTOS (VITRINE) ===== */
// Aqui você insere as motos reais. Criei alguns exemplos abaixo.
// As categorias DEVEM ser exatamente: "Clássica", "Customizada" ou "Acabamento" (ou as que usar nos botões de filtro).

const dadosMotos = [
  {
    id: 1,
    marca: "Triumph",
    modelo: "Rocket 3 Storm R",
    ano: 2025,
    cilindrada: 2458,
    potencia: "180 cv",
    torque: "22.5 kgfm",
    preco: 125000.00,
    disponivel: true,
    imagem: "assets/motos/rocket-3.jpg"
  },
  {
    id: 2,
    marca: "Harley-Davidson",
    modelo: "Breakout 117",
    ano: 2024,
    cilindrada: 1923,
    potencia: "101 cv",
    torque: "17.2 kgfm",
    preco: 115000.00,
    disponivel: true,
    imagem: "assets/motos/breakout-117.jpg"
  },
  {
    id: 3,
    marca: "BMW",
    modelo: "R 18",
    ano: 2024,
    cilindrada: 1802,
    potencia: "91 cv",
    torque: "16.1 kgfm",
    preco: 95000.00,
    disponivel: false,
    imagem: "assets/motos/bmw-r18.jpg"
  },
  {
    id: 4,
    marca: "Royal Enfield",
    modelo: "Super Meteor 650",
    ano: 2024,
    cilindrada: 650,
    potencia: "47 cv",
    torque: "5.3 kgfm",
    preco: 95000.00,
    disponivel: false,
    imagem: "assets/motos/super-meteor.jpg"
  }
];
    
    // Você pode continuar adicionando quantos itens quiser aqui seguindo essa estrutura...

/* ===== CONFIGURAÇÃO DO GRID ===== */
// Apontamos os estilos filtrados para a nossa nova lista manual
let estilosFiltrados = [...dadosMotos];
let batchAtual = 0;
const itensPorBatch = 12; // Quantos cards aparecem por vez ao clicar em "Load More"

const grid = document.getElementById('grid-vitrine');
const btnLoadMore = document.getElementById('load-more');
const filtros = document.querySelectorAll('.filter-btn');

/* ===== CRIAÇÃO DOS CARDS ===== */

function criarCard(estilo) {

    const card = document.createElement('div');

    card.className = 'moto-card';
    
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
                href="https://wa.me/5561900000000?text=Olá! Tenho interesse nesse modelo #${estilo.id}"
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
    atualizarCarrosselMotos();

    /* ===== BOTÕES DO CARROSSEL ===== */
    const btnLeft = document.querySelector('.showcase-arrow.left');
    const btnRight = document.querySelector('.showcase-arrow.right');

    if (btnLeft && btnRight) {
        btnLeft.addEventListener('click', () => {
            motoAtual = (motoAtual - 1 + destaquesMotos.length) % destaquesMotos.length;
            atualizarCarrosselMotos();
        });

        btnRight.addEventListener('click', () => {
            motoAtual = (motoAtual + 1) % destaquesMotos.length;
            atualizarCarrosselMotos();
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
            
            // Filtra com base na nossa lista manual dadosMotos
            estilosFiltrados = (filtro === 'all') 
                ? [...dadosMotos] 
                : dadosMotos.filter(e => e.categoria === filtro);
                
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
                `🔧 *Solicitação de Motos*\n\n` +
                `👤 *Cliente:* ${inputs[0].value}\n` +
                `⚙️ *Moto:* ${inputs[1].value}\n` +
                `🚘 *Veículo:* ${inputs[2].value}\n\n` +
                `Gostaria de consultar disponibilidade e valores.`
            );
            window.open(`https://wa.me/5561900000000?text=${mensagem}`, '_blank');
            this.reset();
        });
    }
});