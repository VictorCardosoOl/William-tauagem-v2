import React from 'react';
import { FlashItem, MetodologiaItem, ProtocoloItem, LinkSocial } from './types';

// ==========================================
// CONFIGURAÇÕES GERAIS E TEXTOS
// ==========================================

export const TEXTOS_GERAIS = {
  marca: "W. Siqueira",
  slogan: "A PELE FALA. EU ESCUTO.", // Updated per "Linguagem Textual Sugerida"
  heroTituloPrincipal: "WILLIAM",
  heroTituloSecundario: "Etching Silence",
  anoEstabelecimento: "EST. 2018",
  tituloMetodologia: {
    linha1: "INTENSIDADE",
    linha2: "Silenciosa"
  },
  citacaoImagem: "\"O corpo não é uma tela, mas uma paisagem.\"",
  tituloFlash: "Flash\nDay",
  dataProximoEvento: "14 de Outubro, 2023",
  tituloPosCuidado: "A longevidade da sua arte depende da sua dedicação.",
  rodapeChamada: "Vamos conversar sobre a próxima marca que você quer carregar para sempre.", // Updated
  rodapeTexto: "O suporte pós-tatuagem é vitalício. Se notar qualquer anormalidade, entre em contato imediatamente.",
  rodapeBotao: "Falar com o Especialista",
  endereco: [
    "Studio W. Siqueira",
    "São Paulo, SP",
    "Apenas com agendamento"
  ],
  manifesto: {
    titulo: "O MANIFESTO",
    fraseParte1: "Não apenas adornamos o corpo; nós o",
    fraseDestaque: "consagramos",
    fraseParte2: "com memória e intenção.",
    card1Titulo: "PREPARAÇÃO",
    card1Texto: "A tela deve estar pura. Hidrate-se profundamente por 48 horas. Evite álcool e anticoagulantes. O sono é a base da resistência.",
    card2Titulo: "PÓS-CUIDADO",
    card2Texto: "Trate o artefato como uma ferida. Mantenha limpo, hidrate com moderação. Deixe a pele respirar e se reformar em torno de sua nova história."
  },
  sobre: {
    tituloParte1: "EU SOU WILLIAM SIQUEIRA, E EU",
    tituloDestaque: "MATERIALIZO",
    tituloParte2: "HISTÓRIAS.",
    descricao: "Sua pele, minha tela. Efêmero na superfície, eterno na essência. Transformo narrativas pessoais em anatomia e arte perene.",
    imagens: [
      "https://images.unsplash.com/photo-1550625624-2c49c71607a9?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1572978398450-4886e0624d55?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1440635592348-167b1b30296f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  concept: {
    titulo: "CONCEPT",
    subtitulo: "O Manifesto do Processo",
    textoPrincipal: "Não imponho formas. Descubro formas. Cada corpo tem sua geografia — curvas, texturas, cicatrizes, histórias. Minha tatuagem é um mapa que respeita o território.",
    textoSecundario: "A pele me conta uma história. Eu apenas a traduzo em linhas. Escuto o silêncio entre as palavras do cliente para encontrar a imagem que já existe, latente, esperando para emergir.",
    imagens: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop", // Sketch/Art vibe
      "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop"  // Detail/Texture vibe
    ]
  }
};

export const IMAGENS = {
  heroBg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB0_HVgS98Rtv-hrJ5JiYtYulRMkLWemS_1JQqOGa4ljieuMkCU8gjl2CdvOfsXzMbChkTodA2X15Pw4p69K-PyOlcOpk-KouK-TaYP0DmgL0XeZWmj4ecDMW25Qnf9J6Ykn2Vu9_xGXVL4L4zGdlzT4LfY3bLUK6D_WVNXNgYMrwZ4Phf46E8bFiSRZK56oaueaF9OaSUKYEyZliV70EEP0113czAGJ3ir-_uBgYAWFu86ZBvABO4lfa7WsYaLPT-Dl7YqnAWkj-S",
  metodologiaDestaque: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-STUzuKJJHSBUZaOzfh9tc-i-BEj_eGW9OGvJsp36ABI46CSgyp0wR-dGQB7Ckn2hssdL-4x_gK5FO8XvCwaDM6H3gW5ek0zlUvGA7yhS1mwfrYKjqksapE_49ZYVKvy08kLdcF6TKyojvoGZcDuBefxd74uAO3KNdCC4n60Sf5iAgyTz4i3pRWbj51OD83USXZvy24jz5nMqDWQXI5RHnFpgzf6eo7v9VOW8MmuZKEIQLKW-31-JA_mZR1VVY5VIfkBF_wllCxQ4"
};

// ==========================================
// ITENS DE METODOLOGIA
// ==========================================
export const ITENS_METODOLOGIA: MetodologiaItem[] = [
  {
    id: 'm1',
    numero: '01',
    titulo: 'Consulta',
    descricao: 'Removemos o ruído para encontrar o significado central da sua narrativa.'
  },
  {
    id: 'm2',
    numero: '02',
    titulo: 'Criação',
    descricao: 'Traduzindo emoção em linha e forma, equilibrando o espaço negativo com tinta.'
  },
  {
    id: 'm3',
    numero: '03',
    titulo: 'Execução',
    descricao: 'O instrumento final da descoberta. Precisão encontra movimento orgânico.'
  }
];

// ==========================================
// ITENS DO FLASH DAY
// ==========================================
export const ITENS_FLASH: FlashItem[] = [
  {
    id: 'f1',
    status: 'DISPONIVEL',
    numero: '001',
    titulo: 'Espiral da Serpente',
    detalhes: '15cm x 5cm • Antebraço',
    svgPath: React.createElement(React.Fragment, null,
      React.createElement('circle', { cx: "50", cy: "50", r: "40", className: "stroke-white fill-none stroke-1" }),
      React.createElement('path', { d: "M50 10 L50 90 M10 50 L90 50", className: "stroke-white fill-none stroke-1" })
    )
  },
  {
    id: 'f2',
    status: 'VENDIDO',
    numero: '002',
    titulo: 'Costela Botânica',
    detalhes: '20cm x 10cm • Costela',
    svgPath: React.createElement(React.Fragment, null,
      React.createElement('rect', { height: "60", width: "60", x: "20", y: "20", className: "stroke-white fill-none stroke-1" }),
      React.createElement('circle', { cx: "50", cy: "50", r: "20", className: "stroke-white fill-none stroke-1" })
    )
  },
  {
    id: 'f3',
    status: 'DISPONIVEL',
    numero: '003',
    titulo: 'Fases da Lua',
    detalhes: '10cm x 3cm • Coluna',
    svgPath: React.createElement('path', { d: "M50 10 Q90 50 50 90 Q10 50 50 10", className: "stroke-white fill-none stroke-1" })
  }
];

// ==========================================
// PROTOCOLO DE CUIDADOS (AFTERCARE)
// ==========================================
export const ITENS_CUIDADOS: ProtocoloItem[] = [
  {
    fase: 'FASE I',
    titulo: 'A Cicatrização',
    descricao: 'Mantenha o curativo original por pelo menos 3 a 4 horas. Este é o período crítico onde a pele inicia o processo de vedação.',
    lista: [
      'Lave com sabão neutro e água fria',
      'Seque com papel toalha (sem esfregar)',
      'Evite roupas apertadas na região'
    ]
  },
  {
    fase: 'FASE II',
    titulo: 'Hidratação',
    descricao: 'A partir do segundo dia, aplique uma camada fina de pomada específica. O excesso de umidade pode prejudicar tanto quanto o ressecamento.',
    lista: [
      'Aplique 2 a 3 vezes ao dia',
      'Jamais remova as crostas (casquinhas)',
      'Permita que a pele respire naturalmente'
    ]
  },
  {
    fase: 'FASE III',
    titulo: 'Proteção',
    descricao: 'A proteção a longo prazo garante que as linhas permaneçam nítidas e os pigmentos vibrantes por décadas.',
    lista: [
      'Sem sol, mar ou piscina por 15 dias',
      'Use protetor solar FPS 50+ após 30 dias',
      'Mantenha a hidratação corporal diária'
    ]
  }
];

// ==========================================
// REDES SOCIAIS
// ==========================================
export const REDES_SOCIAIS: LinkSocial[] = [
  { nome: 'WhatsApp', url: '#' },
  { nome: 'Instagram', url: '#' },
  { nome: 'E-mail', url: '#' },
];