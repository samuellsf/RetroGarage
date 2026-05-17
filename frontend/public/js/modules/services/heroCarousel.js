const inicializarHeroShowcase = () => {
  let imagens;
  
  const indicadoresContainer = document.querySelector('.showcase-indicators');
  const titulo = document.getElementById('showcase-title');
  const texto = document.getElementById('showcase-text');

  const btnPrev = document.querySelector('.showcase-arrow.left');
  const btnNext = document.querySelector('.showcase-arrow.right');

  const showcaseStage = document.querySelector('.showcase-stage');
  console.log('showcaseStage:', showcaseStage);

 
  if (!showcaseStage) return;


 
  const slides = [
    {
      titulo: 'Porsche 911',
      texto: 'Linhas atemporais, presença esportiva e uma das silhuetas mais reconhecíveis da história automotiva.',
      imagem: 'frontend/public/assets/icons/porsche-911.webp'
    },
    {
      titulo: 'Ferrari 250 GTO',
      texto: 'Elegância italiana, proporções clássicas e um apelo visual que reforça o espírito exclusivo da coleção.',
      imagem: 'frontend/public/assets/icons/ferrari-250-gto.jpg'
    },
    {
      titulo: 'Mercedes-Benz 300 SL',
      texto: 'Um ícone absoluto do design automotivo, combinando luxo, herança e imponência visual.',
      imagem: 'frontend/public/assets/icons/mercedes-benz300sl.png'
    },
    {
    titulo: 'Ford Mustang 1969',
    texto: 'Design marcante, proporções musculosas e um símbolo icônico da performance americana clássica.',
    imagem: 'frontend/public/assets/icons/ford-mustang.png'
  },
  {
    titulo: 'Chevrolet Camaro SS 1969',
    texto: 'Estilo agressivo, presença imponente e uma identidade forte que traduz potência e atitude.',
    imagem: 'frontend/public/assets/icons/chevrolet-camaro-1969.png'
  },
  {
    titulo: 'Jaguar E-Type',
    texto: 'Linhas fluidas, elegância incomparável e uma estética que atravessa gerações com sofisticação.',
    imagem: 'frontend/public/assets/icons/jaguar-e-type.png'
  },
  {
    titulo: 'Dodge Charger 1969',
    texto: 'Potência visceral e design intimidador, representando o auge da performance americana.',
    imagem: 'frontend/public/assets/icons/dodge-charger-1969.png'
  }

  ];

  

slides.forEach((slide, index) => {
  const img = document.createElement('img');

  img.src = slide.imagem; 
  img.classList.add('showcase-image');

  
img.style.opacity = '0';
img.onload = () => {
  img.style.opacity = '';
};

  
img.onerror = () => {
  img.src = 'assets/icons/carro1.png';
};


if (index === 0) {
  img.loading = 'eager';
  img.classList.add('active');
} else {
  img.loading = 'lazy';
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

 
  let startX = 0;
  let endX = 0;

 
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
  const slideAnterior = () => {
    const anterior = (indiceAtual - 1 + slides.length) % slides.length;
  atualizarSlide(anterior);
};

  
  const iniciarAutoplay = () => {
    clearInterval(intervalo);
    intervalo = setInterval(proximoSlide, 4500);
  };

  const pararAutoplay = () => {
    clearInterval(intervalo);
  };


  if (btnNext) {
    btnNext.addEventListener('click', () => {
      proximoSlide();
      iniciarAutoplay();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      slideAnterior();
      iniciarAutoplay();
    });
  }

  
  const handleSwipe = () => {
    const diff = startX - endX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      proximoSlide();
    } else {
      slideAnterior();
    }

    iniciarAutoplay();
  };

  // indicadores.forEach((botao, indice) => {
  //   botao.addEventListener('click', () => {
  //     atualizarSlide(indice);
  //     iniciarAutoplay();
  //   });
  // });

  // Inicia
  atualizarSlide(0);
  iniciarAutoplay();

 const showcase = document.querySelector('.hero-showcase');

if (showcase) {
  showcase.addEventListener('mouseenter', pararAutoplay);
  showcase.addEventListener('mouseleave', iniciarAutoplay);


  showcase.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

  showcase.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });
  }
};


window.addEventListener('load', () => {
  console.log('DOM 100% carregado');
  inicializarHeroShowcase();
});