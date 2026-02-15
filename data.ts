import React from 'react';
import { FlashItem, MetodologiaItem, ProtocoloItem, LinkSocial } from './types';

// ==========================================
// CONFIGURAÇÕES GERAIS E TEXTOS
// ==========================================

export const TEXTOS_GERAIS = {
  marca: "W. Siqueira",
  slogan: "Fine Line & Tatuagem Contemporânea",
  heroTituloPrincipal: "Traço",
  heroTituloSecundario: "Silêncio",
  anoEstabelecimento: "EST. 2018",
  tituloMetodologia: {
    linha1: "INTENSIDADE",
    linha2: "Silenciosa"
  },
  citacaoImagem: "\"O corpo não é uma tela, mas uma paisagem.\"",
  tituloFlash: "Flash\nDay",
  dataProximoEvento: "14 de Outubro, 2023",
  tituloPosCuidado: "A longevidade da sua arte depende da sua dedicação.",
  rodapeChamada: "Dúvidas sobre o processo?",
  rodapeTexto: "O suporte pós-tatuagem é vitalício. Se notar qualquer anormalidade, entre em contato imediatamente.",
  rodapeBotao: "Falar com o Especialista",
  endereco: [
    "Studio W. Siqueira",
    "São Paulo, SP",
    "Apenas com agendamento"
  ]
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