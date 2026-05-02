/* ===== pintiura.js  ====== */
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
        if (fim >= estilosFiltrados.length) {
            btnLoadMore.style.display = 'none';
        } else {
            btnLoadMore.style.display = 'inline-block';
        }
    }
}

filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('active'));
        botao.classList.add('active');
        const filtro = botao.getAttribute('data-filter');
        if (grid) grid.innerHTML = '';
        batchAtual = 0;
        if (filtro === 'all') {
            estilosFiltrados = [...todosEstilos];
        } else {
            estilosFiltrados = todosEstilos.filter(e => e.categoria === filtro);
        }
        carregarLote();
    });
});

if (btnLoadMore) btnLoadMore.addEventListener('click', carregarLote);

/* ===== LÓGICA DE AGENDAMENTO (WhatsApp) ======= */
document.addEventListener('DOMContentLoaded', () => {
    carregarLote();

    const formAgendamento = document.getElementById('form-agendamento');
    
    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(e) {
            e.preventDefault();

   
            const inputs = this.querySelectorAll('input');
            const nome = inputs[0].value;
            const data = inputs[1].value;
            const hora = inputs[2].value;
            const veiculo = inputs[3].value;

     
            const dataFormatada = data.split('-').reverse().join('/');

         
            const mensagem = encodeURIComponent(
                `🚗 *Solicitação de Agendamento - RetroGarage*\n\n` +
                `👤 *Cliente:* ${nome}\n` +
                `📅 *Data:* ${dataFormatada}\n` +
                `⏰ *Horário:* ${hora}\n` +
                `🚘 *Veículo:* ${veiculo}\n\n` +
                `Aguardo confirmação da disponibilidade!`
            );

        
            const fone = "5561900000000";
            
  
            window.open(`https://wa.me/${fone}?text=${mensagem}`, '_blank');
            
        
            this.reset();
        });
    }
});