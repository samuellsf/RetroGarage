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
       
        textEl.style.opacity = 0;
        stageEl.style.opacity = 0; 
        titleEl.style.transform = 'translateY(10px)';
        textEl.style.transform = 'translateY(10px)';

        const item = destaquesCores[corAtual];

        setTimeout(() => {
            titleEl.innerText = item.title;
            textEl.innerText = item.text;
            stageEl.style.backgroundImage = `url(${item.image})`;

            titleEl.style.opacity = 1;
            textEl.style.opacity = 1;
            stageEl.style.opacity = 1; 
            
            titleEl.style.transform = 'translateY(0)';
            textEl.style.transform = 'translateY(0)';
        }, 400); 
    }
}


/* === VITRINE DE ESTILOS DE CARROS CLÁSSICOS === */

const categorias = ["Candy", "Fosco", "Metalizado"];
const especificacoes = ["Brilho Profundo", "Acabamento Premium", "Pigmentação Especial", "Alta Resistência"];

const todosEstilos = [
    // === CATEGORIA: CANDY (1 a 33) ===
    {
        id: 1,
        nome: "Mustang Fastback",
        modelo: "Mustang",
        ano: 1967,
        cor: "Vermelho Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "Restauração completa de pintura com verniz alto sólidos. Visual agressivo e impecável.",
       imagem: "/assets/img/pintura/candy/MustangFastback(1967)-VermelhoCandy.png"
    },
    {
        id: 2,
        nome: "Chevrolet Bel Air",
        modelo: "Bel Air",
        ano: 1957,
        cor: "Azul Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "Pintura saia e blusa clássica. O brilho profundo desse azul no sol é inexplicável.",
    imagem: "/assets/img/pintura/candy/ChevroletBelAir (1957) - Azul Candy.png"
    },
    {
        id: 3,
        nome: "Ford Maverick GT",
        modelo: "Maverick",
        ano: 1974,
        cor: "Laranja Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Pigmentação candy vibrante que destaca os vincos clássicos do capô do Maverick.",
        imagem: "/assets/img/pintura/candy/FordMaverickGT (1974) - LaranjaCandy.png"
    },
    {
        id: 4,
        nome: "Volkswagen Fusca",
        modelo: "Fusca",
        ano: 1972,
        cor: "Verde Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "Visual customizado 'Cal Look' com pintura verde brilhante e acessórios cromados.",
        imagem: "/assets/img/pintura/candy/VolkswagenFusca (1972) - VerdeCandy.png"
    },
    {
        id: 5,
        nome: "Cadillac Eldorado",
        modelo: "Eldorado",
        ano: 1959,
        cor: "Rosa Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "O clássico rabo de peixe americano com uma pintura candy que chama atenção por onde passa.",
        imagem: "/assets/img/pintura/candy/Cadillac-Eldorado (1959) - Rosa Candy.png"
    },
    {
        id: 6,
        nome: "Chevrolet Impala",
        modelo: "Impala",
        ano: 1964,
        cor: "Roxo Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Estilo Lowrider legítimo com várias camadas de verniz e reflexo efeito espelho.",
        imagem: "/assets/img/pintura/candy/Chevrolet Impala (1964) - Roxo Candy.png"
    },
    {
        id: 7,
        nome: "Dodge Charger R/T",
        modelo: "Charger",
        ano: 1975,
        cor: "Vinho Candy",
        categoria: "Candy",
        spec: "Alta Resistência",
        comentario: "Tom sóbrio e imponente para o muscle car brasileiro. Pintura impecável.",
        imagem: "/assets/img/pintura/candy/Dodge Charger RT (1975) - Vinho Candy.png"
    },
    {
        id: 8,
        nome: "Chevrolet Opala SS",
        modelo: "Opala",
        ano: 1976,
        cor: "Amarelo Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "As clássicas faixas pretas do SS contrastando com o fundo amarelo ultra brilhante.",
        imagem: "/assets/img/pintura/candy/Chevrolet Opala SS (1977) - Amarelo Candy.png"
    },
    {
        id: 9,
        nome: "Camaro Super Sport",
        modelo: "Camaro",
        ano: 1969,
        cor: "Azul Cobalto Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "Pintura de alta performance com pigmentos que mudam de tom dependendo da luz.",
        imagem: "/assets/img/pintura/candy/Camaro-Super Sport(1969) - Azul CobaltoCandy.png"
    },
    {
        id: 10,
        nome: "Porsche 356 Speedster",
        modelo: "Porsche 356",
        ano: 1956,
        cor: "Vermelho Rubi Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Visual sofisticado e curvas acentuadas pelo acabamento candy premium.",
        imagem: "/assets/img/pintura/candy/Porsche356 Speedster(1956)-VermelhoRubiCandy.png"
    },
    {
        id: 11,
        nome: "Jaguar E-Type",
        modelo: "Jaguar E-Type",
        ano: 1961,
        cor: "Verde Britânico Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "Uma releitura moderna da cor mais tradicional da marca britânica.",
        imagem: "/assets/img/pintura/candy/Jaguar E-Type (1961) – Verde Britânico.webp"
    },
    {
        id: 12,
        nome: "Chevrolet Corvette C2",
        modelo: "Corvette",
        ano: 1963,
        cor: "Prata Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "Modelo Split Window com pintura prata reflexiva e translúcida.",
        imagem: "/assets/img/pintura/candy/Chevrolet Corvette C2 Split Window (1963).jpg"
    },
    {
        id: 13,
        nome: "Lincoln Continental",
        modelo: "Lincoln",
        ano: 1965,
        cor: "Cobre Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Presença executiva e luxuosa com um tom cobre exclusivo de exposição.",
        imagem: "assets/images/lincoln-65.jpg"
    },
    {
        id: 14,
        nome: "Ford Galaxie 500",
        modelo: "Galaxie",
        ano: 1968,
        cor: "Azul Midnight Candy",
        categoria: "Candy",
        spec: "Alta Resistência",
        comentario: "Conforto presidencial combinado com uma pintura digna de colecionador.",
        imagem: "assets/images/galaxie-68.jpg"
    },
    {
        id: 15,
        nome: "Volkswagen Kombi",
        modelo: "Kombi",
        ano: 1961,
        cor: "Creme e Vermelho Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "Saia e blusa de respeito. Restauração de alto nível mantendo a nostalgia.",
        imagem: "assets/images/kombi-61.jpg"
    },
    {
        id: 16,
        nome: "Pontiac GTO",
        modelo: "Pontiac GTO",
        ano: 1966,
        cor: "Laranja Queimado Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "O pai dos muscle cars purpurinado com a melhor tinta translúcida do mercado.",
        imagem: "assets/images/gto-66.jpg"
    },
    {
        id: 17,
        nome: "Buick Riviera",
        modelo: "Buick Riviera",
        ano: 1965,
        cor: "Verde Esmeralda Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Linhas agressivas suavizadas pelo brilho nobre da esmeralda.",
        imagem: "assets/images/riviera-65.jpg"
    },
    {
        id: 18,
        nome: "Chevrolet Fleetline",
        modelo: "Fleetline",
        ano: 1948,
        cor: "Marrom Café Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "Visual Bomb de época, rebaixado na medida certa e pintura impecável.",
        imagem: "assets/images/fleetline-48.jpg"
    },
    {
        id: 19,
        nome: "Ford Pick-up F100",
        modelo: "F100",
        ano: 1953,
        cor: "Vermelho Maçã Candy",
        categoria: "Candy",
        spec: "Alta Resistência",
        comentario: "Pick-up clássica americana com caçamba de madeira tratada e brilho extremo.",
        imagem: "assets/images/f100-53.jpg"
    },
    {
        id: 20,
        nome: "Willys Overland Interlagos",
        modelo: "Interlagos",
        ano: 1965,
        cor: "Azul Escuro Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "O esportivo de fibra brasileiro brilhando mais do que quando saiu da fábrica.",
        imagem: "assets/images/interlagos-65.jpg"
    },
    {
        id: 21,
        nome: "Puma GTE",
        modelo: "Puma GTE",
        ano: 1973,
        cor: "Amarelo Ouro Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Clássico fora-de-série nacional com pintura de três etapas e verniz alto brilho.",
        imagem: "assets/images/puma-73.jpg"
    },
    {
        id: 22,
        nome: "Alfa Romeo Giulia",
        modelo: "Giulia",
        ano: 1970,
        cor: "Rosso Corsa Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "Charme italiano com profundidade tridimensional na lataria.",
        imagem: "assets/images/giulia-70.jpg"
    },
    {
        id: 23,
        nome: "Dodge Dart Coupe",
        modelo: "Dart",
        ano: 1972,
        cor: "Turquesa Candy",
        categoria: "Candy",
        spec: "Alta Resistência",
        comentario: "Visual despojado dos anos 70 destacado por uma cor refrescante e brilhante.",
        imagem: "assets/images/dart-72.jpg"
    },
    {
        id: 24,
        nome: "Chevrolet Chevette Hatch",
        modelo: "Chevette",
        ano: 1979,
        cor: "Prata Lunar Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "Restauração minuciosa, mantendo a originalidade com toque moderno na tinta.",
        imagem: "assets/images/chevette-79.jpg"
    },
    {
        id: 25,
        nome: "Shelby Cobra",
        modelo: "Cobra",
        ano: 1965,
        cor: "Azul Guards Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "As lendárias faixas brancas sobrepostas em um azul translúcido destruidor.",
        imagem: "assets/images/cobra-65.jpg"
    },
    {
        id: 26,
        nome: "Volkswagen Karmann Ghia",
        modelo: "Karmann Ghia",
        ano: 1969,
        cor: "Bordô Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "Elegância alemã com design italiano ressaltado por um tom vinho profundo.",
        imagem: "assets/images/karmann-69.jpg"
    },
    {
        id: 27,
        nome: "Ford Thunderbird",
        modelo: "Thunderbird",
        ano: 1955,
        cor: "Coral Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "Visual retrô de Miami Beach com acabamento espelhado de luxo.",
        imagem: "assets/images/tbird-55.jpg"
    },
    {
        id: 28,
        nome: "Mercury Coupe",
        modelo: "Mercury",
        ano: 1951,
        cor: "Preto Cherry Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Customização Lead Sled clássica. Parece preto na sombra e roxo escuro no sol.",
        imagem: "assets/images/mercury-51.jpg"
    },
    {
        id: 29,
        nome: "Datsun 240Z",
        modelo: "Datsun 240Z",
        ano: 1971,
        cor: "Laranja Sunset Candy",
        categoria: "Candy",
        spec: "Alta Resistência",
        comentario: "Esportivo japonês icônico com pintura candy que realça o capô alongado.",
        imagem: "assets/images/datsun-71.jpg"
    },
    {
        id: 30,
        nome: "Plymouth Barracuda",
        modelo: "Barracuda",
        ano: 1970,
        cor: "Roxo Plum Crazy Candy",
        categoria: "Candy",
        spec: "Brilho Profundo",
        comentario: "A icônica cor da Mopar reinventada com tecnologia de tripla camada.",
        imagem: "assets/images/cuda-70.jpg"
    },
    {
        id: 31,
        nome: "Fiat 147",
        modelo: "Fiat 147",
        ano: 1978,
        cor: "Verde Água Candy",
        categoria: "Candy",
        spec: "Acabamento Premium",
        comentario: "Pequeno notável nacional totalmente revitalizado e brilhando intensamente.",
        imagem: "assets/images/fiat147-78.jpg"
    },
    {
        id: 32,
        nome: "Aston Martin DB5",
        modelo: "DB5",
        ano: 1964,
        cor: "Cinza Titanium Candy",
        categoria: "Candy",
        spec: "Pigmentação Especial",
        comentario: "Estilo agente secreto com um reflexo metálico tridimensional refinado.",
        imagem: "assets/images/db5-64.jpg"
    },
    {
        id: 33,
        nome: "Chevrolet Veraneio",
        modelo: "Veraneio",
        ano: 1974,
        cor: "Azul Royal Candy",
        categoria: "Candy",
        spec: "Alta Resistência",
        comentario: "Grande porte e presença marcante com pintura impecável de alta durabilidade.",
        imagem: "assets/images/veraneio-74.jpg"
    },

    // === CATEGORIA: FOSCO ACETINADO(34 a 66) ===
    {
        id: 34,
        nome: "Dodge Charger R/T",
        modelo: "Charger",
        ano: 1970,
        cor: "Preto Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Visual totalmente intimidador com acabamento fosco acetinado. Proteção contra riscos.",
        imagem: "assets/images/charger-70.jpg"
    },
    {
        id: 35,
        nome: "Ford Mustang Mach 1",
        modelo: "Mustang",
        ano: 1969,
        cor: "Cinza Chumbo Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Acabamento stealth moderno aplicado a um clássico bruto das pistas americanas.",
        imagem: "assets/images/mach1-69.jpg"
    },
    {
        id: 36,
        nome: "Chevrolet Opala Comodoro",
        modelo: "Opala",
        ano: 1979,
        cor: "Verde Militar Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Projeto customizado diferenciado com teto vinil las Vegas e pintura opaca.",
        imagem: "assets/images/opala-79.jpg"
    },
    {
        id: 37,
        nome: "Volkswagen Variant",
        modelo: "Variant",
        ano: 1973,
        cor: "Areia Fosca",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Estilo Rat Look bem trabalhado com verniz fosco para proteger a pátina.",
        imagem: "assets/images/variant-73.jpg"
    },
    {
        id: 38,
        nome: "De Tomaso Pantera",
        modelo: "De Tomaso Pantera",
        ano: 1971,
        cor: "Vermelho Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Superesportivo exótico com pintura acetinada que destaca as tomadas de ar.",
        imagem: "assets/images/pantera-71.jpg"
    },
    {
        id: 39,
        nome: "Chevrolet C10",
        modelo: "C10",
        ano: 1971,
        cor: "Azul Petróleo Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Picape de trabalho convertida em cruiser de asfalto com visual limpo e fosco.",
        imagem: "assets/images/c10-71.jpg"
    },
    {
        id: 40,
        nome: "Ford Falcon XB",
        modelo: "Falcon",
        ano: 1973,
        cor: "Preto Interceptor Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Inspirado nos monstros do cinema apocalíptico, pintura fosca anti-reflexo.",
        imagem: "assets/images/falcon-73.jpg"
    },
    {
        id: 41,
        nome: "BMW 2002 Turbo",
        modelo: "BMW 2002",
        ano: 1974,
        cor: "Branco Satin Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Visual europeu de pista clássico com envelopamento/pintura líquida fosca.",
        imagem: "assets/images/bmw-74.jpg"
    },
    {
        id: 42,
        nome: "Ferrari Dino 246 GT",
        modelo: "Ferrari Dino",
        ano: 1972,
        cor: "Amarelo Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Uma quebra de protocolo ousada que resultou em um design absurdamente futurista.",
        imagem: "assets/images/dino-72.jpg"
    },
    {
        id: 43,
        nome: "Chevrolet Chevelle SS",
        modelo: "Chevelle",
        ano: 1970,
        cor: "Cinza Nardo Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Cor moderna de superesportivos aplicada com perfeição no monstro do quarto de milha.",
        imagem: "assets/images/chevelle-70.jpg"
    },
    {
        id: 44,
        nome: "Volkswagen SP2",
        modelo: "SP2",
        ano: 1975,
        cor: "Laranja Lava Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "O design nacional mais bonito de todos os tempos realçado pela pintura sem brilho.",
        imagem: "assets/images/sp2-75.jpg"
    },
    {
        id: 45,
        nome: "Toyota Bandeirante",
        modelo: "Bandeirante",
        ano: 1982,
        cor: "Verde Oliva Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Pintura militar texturizada ultra resistente para aguentar qualquer trilha pesada.",
        imagem: "assets/images/bandeirante-82.jpg"
    },
    {
        id: 46,
        nome: "Lancia Stratos",
        modelo: "Lancia Stratos",
        ano: 1974,
        cor: "Branco Neve Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Lenda do Rally mundial purificada com acabamento fosco de competição.",
        imagem: "assets/images/stratos-74.jpg"
    },
    {
        id: 47,
        nome: "Plymouth Road Runner",
        modelo: "Road Runner",
        ano: 1969,
        cor: "Preto Carbono Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Bad boy das ruas americanas com ronco ensurdecedor e visual totalmente opaco.",
        imagem: "assets/images/roadrunner-69.jpg"
    },
    {
        id: 48,
        nome: "Porsche 911 Carrera RS",
        modelo: "Porsche 911",
        ano: 1973,
        cor: "Cinza Rato Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Estilo minimalista focado em performance com a icônica asa rabo de pato.",
        imagem: "assets/images/porsche911-73.jpg"
    },
    {
        id: 49,
        nome: "Chevrolet Corvette C3",
        modelo: "Corvette",
        ano: 1978,
        cor: "Roxo Deep Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "A carroceria em formato de garrafa de Coca-Cola ganha destaque com esse tom fosco.",
        imagem: "assets/images/corvette-78.jpg"
    },
    {
        id: 50,
        nome: "Ford Fairlane",
        modelo: "Fairlane",
        ano: 1967,
        cor: "Vinho Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Visual elegante e agressivo, com acabamento acetinado de toque suave.",
        imagem: "assets/images/fairlane-67.jpg"
    },
    {
        id: 51,
        nome: "Mercedes-Benz 280SL",
        modelo: "Mercedes 280SL",
        ano: 1969,
        cor: "Azul Vintage Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "O clássico 'Pagoda' com uma roupagem moderna fosca altamente refinada.",
        imagem: "assets/images/mercedes-69.jpg"
    },
    {
        id: 52,
        nome: "Volkswagen Zé do Caixão",
        modelo: "VW 1600",
        ano: 1970,
        cor: "Preto Ébano Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Nome icônico, visual soturno. Um dos carros mais exóticos da lista.",
        imagem: "assets/images/zedocaixao-70.jpg"
    },
    {
        id: 53,
        nome: "Dodge Polara",
        modelo: "Polara",
        ano: 1977,
        cor: "Cobre Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Pequeno notável da Dodge com uma cor fosca metalizada de cair o queixo.",
        imagem: "assets/images/polara-77.jpg"
    },
    {
        id: 54,
        nome: "Chevrolet Bel Air Nomad",
        modelo: "Bel Air Nomad",
        ano: 1955,
        cor: "Turquesa Satin Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "A perua mais estilosa do mundo com acabamento fosco suave tipo seda.",
        imagem: "assets/images/nomad-55.jpg"
    },
    {
        id: 55,
        nome: "Shelby Mustang GT500",
        modelo: "Mustang Eleanor",
        ano: 1967,
        cor: "Cinza Gunmetal Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Inspirado na Eleanor do cinema, mas em uma versão fosca matadora.",
        imagem: "assets/images/eleanor-67.jpg"
    },
    {
        id: 56,
        nome: "Gurgel X12",
        modelo: "Gurgel X12",
        ano: 1980,
        cor: "Camuflado Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Pintura de utilitário militar brasileiro com alta proteção contra arranhões de galhos.",
        imagem: "assets/images/gurgel-80.jpg"
    },
    {
        id: 57,
        nome: "Wilys Aero Willys",
        modelo: "Aero Willys",
        ano: 1966,
        cor: "Grafite Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Sedan clássico brasileiro nacional com estilo restaurado fora do padrão.",
        imagem: "assets/images/aerowillys-66.jpg"
    },
    {
        id: 58,
        nome: "Hudson Hornet",
        modelo: "Hudson Hornet",
        ano: 1952,
        cor: "Azul Marinho Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "O campeão das pistas ovais americanas com pintura fosca rebaixado até o chão.",
        imagem: "assets/images/hudson-52.jpg"
    },
    {
        id: 59,
        nome: "Ford Model A Hot Rod",
        modelo: "Fordinho A",
        ano: 1929,
        cor: "Preto Chassis Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Hot Rod purista, sem para-lamas, motor V8 exposto e pintura fosca rústica.",
        imagem: "assets/images/hotrod-29.jpg"
    },
    {
        id: 60,
        nome: "Chevrolet Opala Caravan",
        modelo: "Caravan",
        ano: 1978,
        cor: "Verde Floresta Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Perua nacional customizada com rodas largas e pintura fosca lisa.",
        imagem: "assets/images/caravan-78.jpg"
    },
    {
        id: 61,
        nome: "Jeep Willys CJ-5",
        modelo: "Jeep Willys",
        ano: 1963,
        cor: "Amarelo Trator Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "Visual jipeiro bruto com tinta fosca poliuretano para aguentar o tranco.",
        imagem: "assets/images/jeep-63.jpg"
    },
    {
        id: 62,
        nome: "Volkswagen TL",
        modelo: "VW TL",
        ano: 1972,
        cor: "Branco Gelo Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Raro modelo fastback da VW com pintura fosca suave e interior em couro caramelo.",
        imagem: "assets/images/vwtl-72.jpg"
    },
    {
        id: 63,
        nome: "Lincoln Zephyr",
        modelo: "Zephyr",
        ano: 1939,
        cor: "Bordô Escuro Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Linhas aerodinâmicas pré-guerra acentuadas pela sofisticação do verniz fosco.",
        imagem: "assets/images/zephyr-39.jpg"
    },
    {
        id: 64,
        nome: "Dodge Magnum",
        modelo: "Magnum",
        ano: 1980,
        cor: "Preto Acetato Fosco",
        categoria: "Fosco",
        spec: "Alta Resistência",
        comentario: "O topo de linha da Dodge nacional com pintura fosca e grade dianteira cromada.",
        imagem: "assets/images/magnum-80.jpg"
    },
    {
        id: 65,
        nome: "Chevrolet Monza Hatch",
        modelo: "Monza",
        ano: 1983,
        cor: "Prata Titanium Fosco",
        categoria: "Fosco",
        spec: "Acabamento Premium",
        comentario: "Início dos anos 80 em grande estilo com pintura fosca e rodas originais restauradas.",
        imagem: "assets/images/monza-83.jpg"
    },
    {
        id: 66,
        nome: "AC Cobra",
        modelo: "AC Cobra",
        ano: 1962,
        cor: "Azul Elétrico Fosco",
        categoria: "Fosco",
        spec: "Pigmentação Especial",
        comentario: "Carroceria super leve de alumínio com pintura fosca moderna e agressiva.",
        imagem: "assets/images/accobra-62.jpg"
    },

    // === CATEGORIA: METALIZADO (67 a 100) ===
    {
        id: 67,
        nome: "Chevrolet Corvette Split Window",
        modelo: "Corvette",
        ano: 1963,
        cor: "Prata Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "Pintura clássica que parece metal líquido sob as luzes da cidade.",
        imagem: "assets/images/corvette-63-silver.jpg"
    },
    {
        id: 68,
        nome: "Ford Thunderbird Landau",
        modelo: "Thunderbird",
        ano: 1966,
        cor: "Azul Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "Luxo sobre rodas com partículas metálicas finas que reluzem na luz solar.",
        imagem: "assets/images/tbird-66.jpg"
    },
    {
        id: 69,
        nome: "Volkswagen Passat Pointer",
        modelo: "Passat",
        ano: 1986,
        cor: "Vermelho Flash Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "O esportivo nacional mais desejado dos anos 80 com pintura rejuvenescida de fábrica.",
        imagem: "assets/images/passat-86.jpg"
    },
    {
        id: 70,
        nome: "Chevrolet Opala Diplomata",
        modelo: "Opala",
        ano: 1992,
        cor: "Azul Stratos Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "O último ano de produção do grande clássico com sua pintura metálica original refeita.",
        imagem: "assets/images/opala-92.jpg"
    },
    {
        id: 71,
        nome: "Mercedes-Benz 300SL Gullwing",
        modelo: "Mercedes Gullwing",
        ano: 1954,
        cor: "Prata Flecha Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "As lendárias portas asas de gaivota combinadas com a cor histórica das pistas.",
        imagem: "assets/images/gullwing-54.jpg"
    },
    {
        id: 72,
        nome: "DeLorean DMC-12",
        modelo: "DeLorean",
        ano: 1981,
        cor: "Inox Escovado Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "Visual icônico do cinema com acabamento em aço inoxidável envernizado.",
        imagem: "assets/images/delorean-81.jpg"
    },
    {
        id: 73,
        nome: "Ferrari Testarossa",
        modelo: "Ferrari Testarossa",
        ano: 1984,
        cor: "Rosso Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "As grelhas laterais marcantes do ícone dos anos 80 em pintura metálica premium.",
        imagem: "assets/images/testarossa-84.jpg"
    },
    {
        id: 74,
        nome: "Lamborghini Countach",
        modelo: "Countach",
        ano: 1985,
        cor: "Branco Pérola Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "Pintura perolizada com flocos metálicos que mudam de cor conforme o ângulo.",
        imagem: "assets/images/countach-85.jpg"
    },
    {
        id: 75,
        nome: "Ford Escort XR3",
        modelo: "Escort XR3",
        ano: 1988,
        cor: "Azul Benetton Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "O conversível nacional mais famoso com pintura metálica brilhante impecável.",
        imagem: "assets/images/escort-88.jpg"
    },
    {
        id: 76,
        nome: "Chevrolet Kadett GSi",
        modelo: "Kadett GSi",
        ano: 1993,
        cor: "Vinho Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "Esportivo de respeito com painel digital e pintura metálica restaurada.",
        imagem: "assets/images/kadett-93.jpg"
    },
    {
        id: 77,
        nome: "Fiat Uno Turbo",
        modelo: "Uno Turbo",
        ano: 1994,
        cor: "Amarelo Modena Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "Foguete de bolso nacional com pintura metálica brilhante e pressurizada.",
        imagem: "assets/images/unoturbo-94.jpg"
    },
    {
        id: 78,
        nome: "Volkswagen Gol GTI",
        modelo: "Gol GTI",
        ano: 1989,
        cor: "Azul Mônaco Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "O primeiro carro nacional com injeção eletrônica e a lendária pintura saia e blusa cinza.",
        imagem: "assets/images/golgti-89.jpg"
    },
    {
        id: 79,
        nome: "Jaguar XJS V12",
        modelo: "Jaguar XJS",
        ano: 1980,
        cor: "Verde Racing Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "Motor V12 sedoso e pintura metálica britânica clássica de alto padrão.",
        imagem: "assets/images/jaguar-80.jpg"
    },
    {
        id: 80,
        nome: "BMW M3 E30",
        modelo: "BMW M3",
        ano: 1987,
        cor: "Vermelho Puro Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "Nascida nas pistas de corrida, com carroceria alargada e pintura metálica perfeita.",
        imagem: "assets/images/bmwm3-87.jpg"
    },
    {
        id: 81,
        nome: "Alfa Romeo 2300",
        modelo: "Alfa 2300",
        ano: 1981,
        cor: "Cinza Grafite Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "O requinte italiano produzido em solo brasileiro com pintura metálica executiva.",
        imagem: "assets/images/alfa2300-81.jpg"
    },
    {
        id: 82,
        nome: "Dodge LeBaron",
        modelo: "LeBaron",
        ano: 1980,
        cor: "Champagne Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "Conforto extremo e elegância em tom champagne brilhante de alto luxo.",
        imagem: "assets/images/lebaron-80.jpg"
    },
    {
        id: 83,
        nome: "Ford Corcel II",
        modelo: "Corcel II",
        ano: 1982,
        cor: "Ouro Velho Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "Linhas retas elegantes dos anos 80 destacadas por uma pintura dourada metálica.",
        imagem: "assets/images/corcel-82.jpg"
    },
    {
        id: 84,
        nome: "Chevrolet Chevette DL",
        modelo: "Chevette",
        ano: 1990,
        cor: "Cinza Platina Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "A tração traseira mais querida do Brasil com pintura metalizada renovada.",
        imagem: "assets/images/chevette-90.jpg"
    },
    {
        id: 85,
        nome: "Puma GTS Conversível",
        modelo: "Puma GTS",
        ano: 1978,
        cor: "Vermelho Rubi Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "Design fluido conversível brilhando forte com pigmentos metálicos reflexivos.",
        imagem: "assets/images/pumagts-78.jpg"
    },
    {
        id: 86,
        nome: "Volkswagen Fusca Itamar",
        modelo: "Fusca Itamar",
        ano: 1994,
        cor: "Prata Lunar Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "O retorno triunfal do Fusca nos anos 90 com a cor metálica mais desejada da época.",
        imagem: "assets/images/itamar-94.jpg"
    },
    {
        id: 87,
        nome: "Gurgel BR800",
        modelo: "BR800",
        ano: 1989,
        cor: "Azul Cristal Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "O pioneiro 100% brasileiro revitalizado com pintura metálica brilhante na fibra.",
        imagem: "assets/images/br800-89.jpg"
    },
    {
        id: 88,
        nome: "Ford Del Rey Belina",
        modelo: "Belina",
        ano: 1985,
        cor: "Verde Quartzo Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "Espaço familiar e requinte clássico com pintura metálica lisa de época.",
        imagem: "assets/images/belina-85.jpg"
    },
    {
        id: 89,
        nome: "Chevrolet Bonanza",
        modelo: "Bonanza",
        ano: 1991,
        cor: "Preto Ônix Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "SUV bruto da GM com flocos metálicos que dão um brilho absurdo sob o sol.",
        imagem: "assets/images/bonanza-91.jpg"
    },
    {
        id: 90,
        nome: "Shelby GT350",
        modelo: "Shelby GT350",
        ano: 1965,
        cor: "Branco Wimbledon Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "Pintura de colecionador clássica com faixas azuis metálicas cruzando a carroceria.",
        imagem: "assets/images/shelby65.jpg"
    },
    {
        id: 91,
        nome: "Chrysler Esplanada",
        modelo: "Esplanada",
        ano: 1969,
        cor: "Azul Continental Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "Raridade nacional dos anos 60 com motor V8 refeito e pintura metálica impecável.",
        imagem: "assets/images/esplanada-69.jpg"
    },
    {
        id: 92,
        nome: "Simca Chambord",
        modelo: "Chambord",
        ano: 1964,
        cor: "Bordô Nobre Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "Luxo e nostalgia da indústria automobilística brasileira com pintura reluzente.",
        imagem: "assets/images/simca-64.jpg"
    },
    {
        id: 93,
        nome: "Dodge Magna Cruiser",
        modelo: "Dodge Magnum",
        ano: 1979,
        cor: "Bronze Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "Tom bronze refinado com interior em veludo combinando. Presença pura.",
        imagem: "assets/images/dodgebronze-79.jpg"
    },
    {
        id: 94,
        nome: "Volkswagen Logus Wolfsburg",
        modelo: "Logus",
        ano: 1995,
        cor: "Verde Dark Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "Edição especial com motor AP 2.0 e pintura metálica diferenciada de fábrica.",
        imagem: "assets/images/logus-95.jpg"
    },
    {
        id: 95,
        nome: "Chevrolet Omega Diamond",
        modelo: "Omega",
        ano: 1994,
        cor: "Cinza Quartz Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "O absoluto dos anos 90 com pintura metálica espelhada impecável.",
        imagem: "assets/images/omega-94.jpg"
    },
    {
        id: 96,
        nome: "Ford F1000 Super Serie",
        modelo: "F1000",
        ano: 1986,
        cor: "Marrom Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "Picape bruta movida a diesel com pintura saia e blusa metálica restaurada.",
        imagem: "assets/images/f1000-86.jpg"
    },
    {
        id: 97,
        nome: "Fiat Tempra Turbo",
        modelo: "Tempra Turbo",
        ano: 1995,
        cor: "Preto Absoluto Metálico",
        categoria: "Metalizado",
        spec: "Pigmentação Especial",
        comentario: "O sedan esportivo italiano que dominou os anos 90 com brilho metálico sutil.",
        imagem: "assets/images/tempra-95.jpg"
    },
    {
        id: 98,
        nome: "Toyota Corolla SE-G",
        modelo: "Corolla",
        ano: 1996,
        cor: "Verde Esmeralda Metálico",
        categoria: "Metalizado",
        spec: "Brilho Profundo",
        comentario: "Início da lenda dos importados no Brasil com pintura metálica perfeita.",
        imagem: "assets/images/corolla-96.jpg"
    },
    {
        id: 99,
        nome: "Chevrolet Opala Gran Luxo",
        modelo: "Opala",
        ano: 1974,
        cor: "Teal Metálico",
        categoria: "Metalizado",
        spec: "Acabamento Premium",
        comentario: "Mistura perfeita entre azul e verde metálico com teto vinil preto.",
        imagem: "assets/images/opala-74.jpg"
    },
    {
        id: 100,
        nome: "Volkswagen Santana GLS",
        modelo: "Santana",
        ano: 1989,
        cor: "Cinza Nobre Metálico",
        categoria: "Metalizado",
        spec: "Alta Resistência",
        comentario: "O topo de linha da VW nos anos 80 com pintura metálica impecável de colecionador.",
        imagem: "assets/images/santana-89.jpg"
    }
];

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

        <h3 style="color: var(--gold); margin-top: 15px;">
            ${estilo.nome}
        </h3>

        <p><strong>Modelo:</strong> ${estilo.modelo}</p>

        <p><strong>Ano:</strong> ${estilo.ano}</p>

        <p><strong>Cor:</strong> ${estilo.cor}</p>

        <p><strong>Categoria:</strong> ${estilo.categoria}</p>

        <p><strong>Especificação:</strong> ${estilo.spec}</p>

        <p style="font-size: 0.8rem; color: #aaa;">
            ${estilo.comentario}
            
      <hr style="border: 0.5px solid #333; margin: 10px 0;"> <div style="display: flex; justify-content: space-between; align-items: center;"> <span style="font-size: 0.7rem; background: #333; padding: 3px 8px; border-radius: 10px; text-transform: uppercase;">${estilo.categoria}</span> <a href="https://wa.me/5561900000000?text=Olá! Tenho interesse no estilo #${estilo.id}" target="_blank" style="color: #25d366; font-size: 1.2rem;"><i class="fab fa-whatsapp"></i></a> </div>
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