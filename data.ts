
import { ProtocoloItem, LinkSocial, ProcessoCriativoItem, PreparoItem, PortfolioItem, FAQItem } from './types';

// ==========================================
// CONFIGURAÇÕES GERAIS E TEXTOS
// ==========================================

export const TEXTOS_GERAIS = {
  marca: "W. Siqueira",
  slogan: "A PELE FALA. EU ESCUTO.", 
  heroTituloPrincipal: "WILLIAM",
  heroTituloSecundario: "Etching Silence",
  heroTextoDescritivo: "Especialista em tatuagens neotradicionais e blackwork em São Paulo. Projetos exclusivos desenhados para sua anatomia com máxima biossegurança. Agende sua consultoria e transforme sua ideia em arte.",
  anoEstabelecimento: "EST. 2018",
  tituloMetodologia: {
    linha1: "INTENSIDADE",
    linha2: "Silenciosa"
  },
  citacaoImagem: "\"O corpo não é uma tela, mas uma paisagem.\"",
  tituloFlash: "Flash\nDay",
  dataProximoEvento: "16 de Novembro, 2024",
  tituloPosCuidado: "A longevidade da sua arte depende da sua dedicação.",
  rodapeChamada: "Vamos conversar sobre a próxima marca que você quer carregar para sempre.", 
  rodapeTexto: "O suporte pós-tatuagem é vitalício. Se notar qualquer anormalidade, entre em contato imediatamente.",
  rodapeBotao: "Falar com o Especialista",
  endereco: [
    "Studio W. Siqueira",
    "Vila Madalena - São Paulo, SP",
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
    tituloParte1: "EU SOU WILLIAM",
    tituloDestaque: "MATERIALIZO",
    tituloParte2: "HISTÓRIAS.",
    descricao: "Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.",
    imagens: [
      {
        url: "https://images.unsplash.com/photo-1550625624-2c49c71607a9?q=80&w=800&auto=format&fit=crop",
        alt: "Artista tatuando em estúdio com iluminação focada"
      },
      {
        url: "https://images.unsplash.com/photo-1572978398450-4886e0624d55?q=80&w=800&auto=format&fit=crop",
        alt: "Detalhe de tatuagem geométrica em processo"
      },
      {
        url: "https://images.unsplash.com/photo-1440635592348-167b1b30296f?q=80&w=800&auto=format&fit=crop",
        alt: "Ambiente do estúdio com arte na parede e atmosfera calma"
      }
    ]
  },
  concept: {
    titulo: "CONCEPT",
    subtitulo: "O Manifesto do Processo",
    textoPrincipal: "Não imponho formas. Descubro formas. Cada corpo tem sua geografia — curvas, texturas, cicatrizes, histórias. Minha tatuagem é um mapa que respeita o território.",
    textoSecundario: "A pele me conta uma história. Eu apenas a traduzo em linhas. Escuto o silêncio entre as palavras do cliente para encontrar a imagem que já existe, latente, esperando para emergir.",
    imagens: [
      {
        url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
        alt: "Esboço artístico em papel texturizado"
      },
      {
        url: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop",
        alt: "Textura detalhada de tinta preta sobre pele"
      }
    ]
  }
};

export const IMAGENS = {
  // Imagens gerais do sistema
};

// ==========================================
// PORTFOLIO ITEMS
// ==========================================
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        id: 1,
        title: "FLORA OBSCURA",
        placement: "Antebraço",
        image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "ATLAS",
        placement: "Costas",
        image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "GEOMETRIA SACRA",
        placement: "Ombro",
        image: "https://images.unsplash.com/photo-1565431665671-55447a06f35b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "SERPENTINE",
        placement: "Braço",
        image: "https://images.unsplash.com/photo-1590246296335-e11dd82eb619?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "MEMENTO MORI",
        placement: "Peito",
        image: "https://images.unsplash.com/photo-1590520637380-60df0897b77f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "ETHEREAL HANDS",
        placement: "Costela",
        image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop"
    }
];

// ==========================================
// PROCESSO CRIATIVO
// ==========================================
export const PROCESSO_CRIATIVO: ProcessoCriativoItem[] = [
  {
    id: 1,
    titulo: "Briefing & Conexão",
    subtitulo: "Entendemos sua história.",
    descricao: "Uma conversa profunda para captar a essência do que você deseja expressar. Analisamos referências, memórias e significados para construir uma base sólida para a arte."
  },
  {
    id: 2,
    titulo: "Estudo Anatômico",
    subtitulo: "Projeção digital no corpo.",
    descricao: "Utilizamos fotografia e edição digital (Photoshop) para projetar o desenho diretamente sobre a foto do seu corpo. Isso garante que a arte respeite sua musculatura, curvaturas e fluxo natural, criando uma peça orgânica e fluida."
  },
  {
    id: 3,
    titulo: "Sketching",
    subtitulo: "O desenho ganha vida.",
    descricao: "O momento onde a ideia toma forma. Traços iniciais, definição de fluxos, luz e sombra são refinados para criar uma composição visual única antes de passar para a pele."
  },
  {
    id: 4,
    titulo: "A Sessão",
    subtitulo: "Execução técnica.",
    descricao: "O ritual final. Com precisão cirúrgica e materiais de alta qualidade, a arte é eternizada na pele em um ambiente seguro, estéril e acolhedor."
  }
];

// ==========================================
// PREPARO (NOVO)
// ==========================================
export const ITENS_PREPARO: PreparoItem[] = [
  {
    id: 1,
    titulo: "Hidratação",
    descricao: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada recebe melhor a tinta, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior."
  },
  {
    id: 2,
    titulo: "Descanso",
    descricao: "Durma bem na noite anterior (8h+). O corpo precisa de energia para lidar com a sessão. Faça uma refeição reforçada antes de vir ao estúdio para evitar quedas de pressão."
  },
  {
    id: 3,
    titulo: "Zero Álcool",
    descricao: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo, o que expulsa o pigmento e dificulta o trabalho."
  },
  {
    id: 4,
    titulo: "Vestimenta",
    descricao: "Venha com roupas confortáveis, pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local e permitindo a circulação."
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
// FAQ (NOVO)
// ==========================================
export const ITENS_FAQ: FAQItem[] = [
  {
    id: 1,
    pergunta: "Qual o valor médio de uma sessão?",
    resposta: "O valor não é cobrado por tamanho, mas pela complexidade do projeto e tempo de execução. O valor mínimo de abertura de agenda é R$ 800. Para um orçamento preciso, é necessário enviar referências, local do corpo e tamanho aproximado via WhatsApp."
  },
  {
    id: 2,
    pergunta: "Você realiza coberturas (Cover-up)?",
    resposta: "Sim, mas sob avaliação prévia. Coberturas exigem uma análise cuidadosa do pigmento existente. Em alguns casos, recomendo algumas sessões de laser para clareamento antes de tatuar por cima, garantindo um resultado limpo e duradouro."
  },
  {
    id: 3,
    pergunta: "Posso levar acompanhante?",
    resposta: "Para garantir o foco total e a biossegurança do ambiente, permitimos apenas um acompanhante por cliente. O estúdio é um ambiente de concentração e intimidade artística."
  },
  {
    id: 4,
    pergunta: "Quanto tempo demora para cicatrizar?",
    resposta: "A cicatrização superficial leva cerca de 2 a 3 semanas. A regeneração completa das camadas profundas da pele pode levar até 3 meses. Siga rigorosamente o protocolo de aftercare fornecido."
  },
  {
    id: 5,
    pergunta: "Você desenha a arte antes?",
    resposta: "Sim. O projeto é exclusivo. Apresento o desenho no dia da sessão ou envio um esboço digital (mockup) alguns dias antes, dependendo da complexidade do projeto acordado no briefing."
  }
];

// ==========================================
// REDES SOCIAIS
// ==========================================
export const REDES_SOCIAIS: LinkSocial[] = [
  { nome: 'WhatsApp', url: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento.' },
  { nome: 'Instagram', url: 'https://instagram.com/' },
  { nome: 'E-mail', url: 'mailto:contato@wsiqueira.com' },
];
