const modal = document.getElementById("pecaModal");

// Função para abrir o modal com os dados dinâmicos
function abrirModal(nome, imagem, descricao) {
    document.getElementById('modalTitle').innerText = nome;
    document.getElementById('modalImg').src = imagem;
    document.getElementById('modalDesc').innerText = descricao;
    document.getElementById('peca-nome-hidden').value = nome;
    
    modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    modal.style.display = "none";
}

// Fechar se clicar fora do modal
window.onclick = function(event) {
    if (event.target == modal) {
        fecharModal();
    }
}

// Lógica de envio do formulário
document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault();

    const agendamento = {
        peca: document.getElementById('peca-nome-hidden').value,
        data: document.getElementById('data').value,
        hora: document.getElementById('hora').value
    };

    console.log("Dados do Agendamento:", agendamento);

    // Feedback visual
    alert(`Sucesso! Agendamento de ${agendamento.peca} marcado para ${agendamento.data} às ${agendamento.hora}.`);
    
    fecharModal();
    this.reset();
});