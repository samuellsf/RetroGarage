const inicializarHeroShowcase = () => {
  const imagens = document.querySelectorAll('.showcase-image');
  const indicadores = document.querySelectorAll('.indicator');
  const titulo = document.getElementById('showcase-title');
  const texto = document.getElementById('showcase-text');

  const slides = [
    {
      titulo: 'Porsche 911',
      texto: 'Linhas atemporais, presença esportiva e uma das silhuetas mais reconhecíveis da história automotiva.'
    },
    {
      titulo: 'Ferrari 250 GT',
      texto: 'Elegância italiana, proporções clássicas e um apelo visual que reforça o espírito exclusivo da coleção.'
    },
    {
      titulo: 'Mercedes-Benz 300 SL',
      texto: 'Um ícone absoluto do design automotivo, combinando luxo, herança e imponência visual.'
    }
  ];

  if (!imagens.length || !indicadores.length || !titulo || !texto) return;

  let indiceAtual = 0;
  let intervalo;

  const atualizarSlide = (indice) => {
    imagens.forEach((img, i) => {
      img.classList.toggle('active', i === indice);
    });

    indicadores.forEach((btn, i) => {
      btn.classList.toggle('active', i === indice);
    });

    titulo.textContent = slides[indice].titulo;
    texto.textContent = slides[indice].texto;
    indiceAtual = indice;
  };

  const proximoSlide = () => {
    const proximo = (indiceAtual + 1) % slides.length;
    atualizarSlide(proximo);
  };

  const iniciarAutoplay = () => {
    clearInterval(intervalo);
    intervalo = setInterval(proximoSlide, 4500);
  };

  indicadores.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
      atualizarSlide(indice);
      iniciarAutoplay();
    });
  });

  atualizarSlide(0);
  iniciarAutoplay();
};

window.addEventListener('load', inicializarHeroShowcase);