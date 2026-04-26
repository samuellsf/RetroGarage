const inicializarHeroShowcase = () => {
  let imagens;
  
  const indicadoresContainer = document.querySelector('.showcase-indicators');
  const titulo = document.getElementById('showcase-title');
  const texto = document.getElementById('showcase-text');

  const slides = [
    {
      titulo: 'Porsche 911',
      texto: 'Linhas atemporais, presença esportiva e uma das silhuetas mais reconhecíveis da história automotiva.',
      imagem: 'assets/icons/carro1.png'
    },
    {
      titulo: 'Ferrari 250 GT',
      texto: 'Elegância italiana, proporções clássicas e um apelo visual que reforça o espírito exclusivo da coleção.',
      imagem: 'assets/icons/ferrari-250-gto.jpg'
    },
    {
      titulo: 'Mercedes-Benz 300 SL',
      texto: 'Um ícone absoluto do design automotivo, combinando luxo, herança e imponência visual.',
      imagem: 'assets/icons/Mercedes.png'
    },
    {
    titulo: 'Ford Mustang 1969',
    texto: 'Design marcante, proporções musculosas e um símbolo icônico da performance americana clássica.',
    imagem: 'assets/icons/carro1.png'
  },
  {
    titulo: 'Chevrolet Camaro SS',
    texto: 'Estilo agressivo, presença imponente e uma identidade forte que traduz potência e atitude.',
    imagem: 'assets/icons/carro1.png'
  },
  {
    titulo: 'Jaguar E-Type',
    texto: 'Linhas fluidas, elegância incomparável e uma estética que atravessa gerações com sofisticação.',
    imagem: 'assets/icons/carro1.png'
  }
  ];

  const showcaseStage = document.querySelector('.showcase-stage');

// Criar imagens automaticamente
slides.forEach((slide, index) => {
  const img = document.createElement('img');

  img.src = slide.imagem; 
  img.classList.add('showcase-image');
  // fallback se a imagem falhar
img.onerror = () => {
  img.src = 'assets/icons/carro1.png';
};

  if (index === 0) {
    img.classList.add('active');
  }

  showcaseStage.appendChild(img);
});

slides.forEach((_, index) => {
  const button = document.createElement('button');
  button.classList.add('indicator');

  if (index === 0) {
    button.classList.add('active');
  }

  button.addEventListener('click', () => {
    atualizarSlide(index);
    iniciarAutoplay();
  });

  indicadoresContainer.appendChild(button);
});

imagens = document.querySelectorAll('.showcase-image');
const indicadores = document.querySelectorAll('.indicator');

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

  // indicadores.forEach((botao, indice) => {
  //   botao.addEventListener('click', () => {
  //     atualizarSlide(indice);
  //     iniciarAutoplay();
  //   });
  // });

  atualizarSlide(0);
  iniciarAutoplay();
};

window.addEventListener('load', inicializarHeroShowcase);