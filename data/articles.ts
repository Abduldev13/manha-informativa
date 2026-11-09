export interface Article {
  id: string;
  category: string;
  categoryColor?: string;
  isUrgent?: boolean;
  isExclusive?: boolean;
  isAnalysis?: boolean;
  title: string;
  subtitle: string;
  leadParagraph: string;
  fullContent: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
    affiliation?: string;
  };
  dateline: string;
  readTime: string;
  updatedAt: string;
  imageUrl?: string;
  imageCaption?: string;
  audioDuration?: string;
  tags: string[];
}

export interface MarketItem {
  code: string;
  name: string;
  price: string;
  change: string;
  isUp: boolean;
  volume: string;
}

export interface DispatchItem {
  id: string;
  time: string;
  category: string;
  title: string;
  summary: string;
  urgency: 'high' | 'medium' | 'normal';
}

export interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  humidity: string;
  wind: string;
}

export const WEATHER_DATA: WeatherData[] = [
  { city: 'Maputo', temp: 27, condition: 'Ensolarado', humidity: '64%', wind: '18 km/h SE' },
  { city: 'Beira', temp: 29, condition: 'Parcialmente Nublado', humidity: '72%', wind: '22 km/h E' },
  { city: 'Nampula', temp: 31, condition: 'Céu Limpo', humidity: '55%', wind: '14 km/h NE' },
  { city: 'Tete', temp: 35, condition: 'Quente e Seco', humidity: '42%', wind: '10 km/h N' },
  { city: 'Pemba', temp: 30, condition: 'Brisa Marítima', humidity: '78%', wind: '20 km/h SE' },
  { city: 'Quelimane', temp: 28, condition: 'Sol com Nuvens', humidity: '70%', wind: '16 km/h E' },
];

export const FINANCIAL_TICKER: MarketItem[] = [
  { code: 'USD/MZN', name: 'Dólar Comercial', price: '63,85 MT', change: '+0,12%', isUp: true, volume: '48.2M' },
  { code: 'EUR/MZN', name: 'Euro', price: '69,14 MT', change: '-0,08%', isUp: false, volume: '22.5M' },
  { code: 'ZAR/MZN', name: 'Rand Sul-Africano', price: '3,54 MT', change: '+0,45%', isUp: true, volume: '95.1M' },
  { code: 'BVM INDX', name: 'Índice Bolsa de Valores de MZ', price: '1.428,90 pts', change: '+0,62%', isUp: true, volume: '14.8M MT' },
  { code: 'HCB.MZ', name: 'Hidroeléctrica Cahora Bassa', price: '4,85 MT', change: '+1,04%', isUp: true, volume: '2.4M' },
  { code: 'CDM.MZ', name: 'Cervejas de Moçambique', price: '92,00 MT', change: '0,00%', isUp: true, volume: '180K' },
  { code: 'BRENT', name: 'Petróleo Brent (Barril)', price: '74,40 USD', change: '+0,85%', isUp: true, volume: 'Global' },
  { code: 'LNG-ROV', name: 'Gás Natural Liquefeito Rovuma', price: '12,65 $/MMBtu', change: '+1,18%', isUp: true, volume: 'Export' },
];

export const BREAKING_DISPATCHES: DispatchItem[] = [
  {
    id: 'disp-belenenses',
    time: '11:28',
    category: 'NAMPULA · SEGURANÇA',
    title: 'Nampula: Brigadas cívicas e SERNIC travam pontos de venda de drogas no Bairro dos Belenenses',
    summary: 'Mobilização comunitária inédita no Bairro dos Belenenses resulta no resgate de jovens e encaminhamento para centros de apoio médico e profissional.',
    urgency: 'high'
  },
  {
    id: 'disp-detentos',
    time: '11:05',
    category: 'JUSTIÇA & REABILITAÇÃO',
    title: 'Penitenciária de Nampula: Detentos arrependidos concluem entrega de 400 carteiras escolares',
    summary: 'Reclusos em regime de capacitação profissional em marcenaria expressam pedido de perdão cívico e doam carteiras para alunos da província.',
    urgency: 'medium'
  },
  {
    id: 'disp-1',
    time: '10:45',
    category: 'INFRAESTRUTURAS',
    title: 'Porto de Nacala conclui expansão com calado de 14 metros para porta-contentores intercontinentais',
    summary: 'A Administração Portuária confirmou a prontidão operacional total do canal de navegação, quadruplicando a capacidade logística do Corredor do Norte.',
    urgency: 'high'
  },
  {
    id: 'disp-2',
    time: '10:48',
    category: 'POLÍTICA MONETÁRIA',
    title: 'Banco de Moçambique reforça reservas cambiais com novo mecanismo para exportadores agrícolas',
    summary: 'Aviso do Comité de Política Monetária estabelece incentivos para retenção de receitas de exportação de castanha e sésamo em moeda nacional.',
    urgency: 'medium'
  },
  {
    id: 'disp-3',
    time: '10:12',
    category: 'ENERGIA & INDÚSTRIA',
    title: 'Acordo com a Zâmbia e Malawi formaliza escoamento de energia da Central Solar de Metoro',
    summary: 'Electricidade de Moçambique (EDM) assinou adenda técnica que conecta 40MW de potência firme à rede interligada da Southern African Power Pool.',
    urgency: 'normal'
  },
  {
    id: 'disp-4',
    time: '09:35',
    category: 'EDUCAÇÃO SUPERIOR',
    title: 'Universidade Eduardo Mondlane inaugura Centro Nacional de Inteligência Artificial e Dados Agrícolas',
    summary: 'Projeto financiado com fundos bilaterais irá mapear produtividade de 120 mil pequenos agricultores nas províncias de Sofala, Manica e Zambézia.',
    urgency: 'normal'
  },
  {
    id: 'disp-5',
    time: '08:50',
    category: 'JUSTIÇA',
    title: 'Tribunal Administrativo valida contas gerais do Estado com 14 recomendações vinculativas',
    summary: 'Relatório submetido à Assembleia da República destaca melhorias no registo do património imobiliário público e na cobrança do IVA aduaneiro.',
    urgency: 'medium'
  }
];

// Lead stories for Front Page
export const PRIMARY_LEAD_STORY: Article = {
  id: 'lead-nacala-energia',
  category: 'GRANDE INVESTIGAÇÃO ECONÓMICA',
  categoryColor: '#0066FF',
  isExclusive: true,
  title: 'A Transformação do Corredor de Nacala e o Novo Polo Energético da África Austral',
  subtitle: 'Com investimento superior a 1,4 mil milhões de dólares, a profunda dragagem portuária e a integração ferroviária ao Malawi e Zâmbia convertem o Norte de Moçambique na espinha dorsal do comércio marítimo do Índico.',
  leadParagraph: 'Nas margens serenas da baía de águas profundas de Nacala, o ritmo compassado das gruas pórtico de última geração desenha o perfil de uma nova geografia económica. O Corredor de Nacala, outrora limitado por estrangulamentos operacionais e ligações ferroviárias fragmentadas, emerge neste último trimestre de 2026 como o complexo logístico e industrial mais competitivo da costa leste de África, interligando o coração mineiro e agrícola do hinterland ao apetite comercial dos mercados asiáticos.',
  fullContent: [
    'Nas margens serenas da baía de águas profundas de Nacala, o ritmo compassado das gruas pórtico de última geração desenha o perfil de uma nova geografia económica. O Corredor de Nacala, outrora limitado por estrangulamentos operacionais e ligações ferroviárias fragmentadas, emerge neste último trimestre de 2026 como o complexo logístico e industrial mais competitivo da costa leste de África, interligando o coração mineiro e agrícola do hinterland ao apetite comercial dos mercados asiáticos.',
    'A conclusão das obras de aprofundamento do cais para 14 metros de calado contínuo permite a atracação de navios Post-Panamax sem necessidade de alívio de carga em portos intermediários de Durban ou Dar es Salaam. De acordo com dados auditados pela Administração do Porto de Nacala, o tempo médio de desalfandegamento caiu de 72 horas para escassas 8 horas, graças à plena digitalização do Balcão Único Aduaneiro e à integração telemetrizada com a Linha do Norte.',
    '"O que estamos a presenciar não é apenas uma obra de engenharia portuária, mas a consolidação da soberania geoestratégica moçambicana no comércio transfronteiriço", explica o Dr. Celso Banze, especialista sénior em Comércio Internacional do Instituto Superior de Relações Internacionais (ISRI). "Os países do interior sem acesso ao mar — Malawi, Zâmbia e o sul da República Democrática do Congo — encontram agora em Nacala um corredor de menor atrito tarifário e fiabilidade ininterrupta."',
    'Paralelamente à vertente logística, a província de Nampula consolida um polo de geração energética híbrida. A combinação da energia hidrelétrica proveniente de Cahora Bassa com os novos parques solares de Metoro e a futura ligação ao terminal de Gás Natural Liquefeito de Palma assegura uma capacidade firme de mais de 350 megawatts dedicados à transformação industrial de matérias-primas locais, com destaque para o processamento agroindustrial de caju, gergelim e a purificação de grafite para baterias elétricas.',
    'Os desafios imediatos, contudo, residem na retenção de valor para as comunidades ribeirinhas. A Assembleia Provincial de Nampula aprovou uma resolução pioneira que reserva 12% das receitas de concessão portuária para fundos municipais de capacitação profissional e infraestruturas escolares, garantindo que o dividendo logístico se traduza em elevação salarial e competitividade humana sustentável para a juventude da região.'
  ],
  author: {
    name: 'Dr. Arlindo Muthemba',
    role: 'Editor Sénior de Infraestruturas & Economia',
    avatar: 'AM',
    affiliation: 'Enviado Especial a Nampula e Nacala-Porto'
  },
  dateline: 'Nacala-Porto / Nampula',
  readTime: '8 min de leitura',
  updatedAt: 'Atualizado hoje às 08:30 CAT',
  imageUrl: '/assets/images/porto_nacala_terminal_1794183536335.jpg',
  imageCaption: 'Fig. 1 — Terminal de contentores de águas profundas do Porto de Nacala operando em regime ininterrupto com guindastes de pórtico de grande escala.',
  audioDuration: '11:24 min',
  tags: ['Corredor de Nacala', 'Economia Nacional', 'Logística Portuária', 'SADC', 'Energia']
};

export const SECONDARY_LEAD_STORY: Article = {
  id: 'lead-banco-central-reservas',
  category: 'POLÍTICA MONETÁRIA & FINANÇAS',
  categoryColor: '#0050cc',
  isAnalysis: true,
  title: 'Banco de Moçambique e Ministério das Finanças Estruturam Novo Mecanismo de Garantia Cambial para Agroindústria',
  subtitle: 'Medida busca blindar pequenas e médias cooperativas contra flutuações das taxas de juro internacionais e fomentar a liquidação de importações de maquinaria agrícola em Meticais.',
  leadParagraph: 'Num movimento coordenado entre a autoridade monetária e a banca comercial em Maputo, foi anunciado hoje o pacote regulatório "Crédito Verde Agrário 2027", que disponibiliza uma linha de liquidez de 25 mil milhões de Meticais com taxa bonificada de 7,5% para projetos de irrigação e eletrificação de pomares no Corredor da Beira e em Manica.',
  fullContent: [
    'Num movimento coordenado entre a autoridade monetária e a banca comercial em Maputo, foi anunciado hoje o pacote regulatório "Crédito Verde Agrário 2027", que disponibiliza uma linha de liquidez de 25 mil milhões de Meticais com taxa bonificada de 7,5% para projetos de irrigação e eletrificação de pomares no Corredor da Beira e em Manica.',
    'A iniciativa responde aos apelos da Confederação das Associações Económicas de Moçambique (CTA), que apontava o custo do capital como principal obstáculo à modernização dos sistemas de refrigeração e secagem de cereais.',
    'Segundo o Governador do Banco Central, a estabilidade das reservas internacionais líquidas, que cobrem atualmente 5,2 meses de importações de bens e serviços, oferece o colchão prudencial necessário para esta flexibilização sem comprometer a meta de inflação anual inferior a 6%.'
  ],
  author: {
    name: 'Helena Mondlane',
    role: 'Repórter Especial de Macroeconomia',
    avatar: 'HM',
    affiliation: 'Redação Económica de Nampula & Maputo'
  },
  dateline: 'Nampula / Maputo',
  readTime: '5 min de leitura',
  updatedAt: 'Hoje às 09:15 CAT',
  imageUrl: '/assets/images/banco_central_metical_1794183564795.jpg',
  imageCaption: 'Banco de Moçambique — Notas oficiais do Metical e relatórios de auditoria financeira anual.',
  tags: ['Banco de Moçambique', 'Metical', 'Agroindústria', 'CTA']
};

export const ARTICLE_DROGAS_BELENENSES: Article = {
  id: 'investigacao-drogas-belenenses',
  category: 'INVESTIGAÇÃO SOCIAL · NAMPULA',
  categoryColor: '#ba1a1a',
  isExclusive: true,
  isUrgent: true,
  title: 'Investigação em Nampula: A Mobilização Comunitária Contra o Consumo e Tráfico de Drogas no Bairro dos Belenenses',
  subtitle: 'Líderes de quarteirão, brigadas do SERNIC e assistentes sociais unem esforços para estancar a venda de estupefacientes e acolher jovens toxicodependentes em recuperação no coração urbano da capital do Norte.',
  leadParagraph: 'No Bairro dos Belenenses, uma das zonas residenciais mais populosas e vibrantes da cidade de Nampula, a comunidade decidiu romper o silêncio diante da proliferação de pontos clandestinos de consumo e comércio de drogas. Mães de família organizaram comités de vigilância cívica e, em coordenação estreita com o Serviço Nacional de Investigação Criminal (SERNIC) e a Direção Provincial de Saúde, lançaram a campanha permanente "Belenenses Sem Drogas", desmantelando esconderijos e encaminhando dezenas de adolescentes para apoio psicológico e oficinas de formação profissional.',
  fullContent: [
    'No Bairro dos Belenenses, uma das zonas residenciais mais populosas e vibrantes da cidade de Nampula, a comunidade decidiu romper o silêncio diante da proliferação de pontos clandestinos de consumo e comércio de drogas. Mães de família organizaram comités de vigilância cívica e, em coordenação estreita com o Serviço Nacional de Investigação Criminal (SERNIC) e a Direção Provincial de Saúde, lançaram a campanha permanente "Belenenses Sem Drogas", desmantelando esconderijos e encaminhando dezenas de adolescentes para apoio psicológico e oficinas de formação profissional.',
    'A operação integrada resultou, nas últimas 72 horas, na apreensão de quantidades significativas de substâncias ilícitas que entravam por rotas marítimas e rodoviárias secundárias. O chefe do quarteirão 4 dos Belenenses, ancião Amisse Culane, sublinhou que a vitória não se faz apenas com detenções: "O nosso maior objetivo é salvar os nossos filhos. Quando identificamos um jovem dependente, levamo-lo ao posto de saúde e depois inserimo-lo em cursos de carpintaria e eletricidade para que tenha um ofício digno."',
    '"A repressão policial é apenas um braço da intervenção; a verdadeira barreira é a coesão das famílias e a criação de perspetivas reais de emprego para a juventude de Nampula", declarou a porta-voz provincial do SERNIC durante o balanço operacional realizado no centro comunitário local.',
    'A iniciativa comunitária dos Belenenses já está a ser estudada pelas autoridades municipais de Nampula para ser replicada nos bairros vizinhos de Muhala, Namutequeliua e Carrupeia, transformando a mobilização popular no principal baluarte contra o crime organizado.'
  ],
  author: {
    name: 'Dr. Bento Tamele & Sandra Machava',
    role: 'Enviados Especiais ao Bairro dos Belenenses',
    avatar: 'BT',
    affiliation: 'Redação de Investigação de Nampula'
  },
  dateline: 'Bairro dos Belenenses, Nampula',
  readTime: '6 min de leitura',
  updatedAt: 'Hoje às 11:10 CAT',
  imageUrl: '/assets/images/nampula_drogas_belenenses_1794183534755.jpg',
  imageCaption: 'Fig. 1 — Sessão de esclarecimento comunitário e sensibilização anti-drogas com líderes de quarteirão e assistentes sociais no Bairro dos Belenenses, em Nampula.',
  audioDuration: '09:40 min',
  tags: ['Nampula', 'Belenenses', 'Drogas', 'SERNIC', 'Comunidade']
};

export const ARTICLE_DETENTOS_ARREPENDIDOS: Article = {
  id: 'detentos-arrependidos-nampula',
  category: 'REABILITAÇÃO PENITENCIÁRIA & JUSTIÇA',
  categoryColor: '#0050cc',
  isExclusive: true,
  title: 'Vozes do Arrependimento: Detentos da Cadeia de Nampula Abraçam Ofícios de Marcenaria e Pedem Perdão à Sociedade',
  subtitle: 'Programa de reinserção social do Serviço Nacional Penitenciário forma reclusos em ofícios práticos, transformando vidas através da confecção de mobiliário escolar para crianças desfavorecidas.',
  leadParagraph: 'Nas oficinas do Estabelecimento Penitenciário Regional de Nampula, o som das serras manuais e o aroma a madeira de mogno substituíram o desespero pelo trabalho metódico. Mais de 180 detentos participam diariamente no projeto de reintegração produtiva, aprendendo carpintaria, marcenaria e serralharia. Muitos dos reclusos, com lágrimas de genuíno arrependimento, expressam publicamente o desejo de expiar os erros do passado e construir um futuro honrado junto das suas famílias.',
  fullContent: [
    'Nas oficinas do Estabelecimento Penitenciário Regional de Nampula, o som das serras manuais e o aroma a madeira de mogno substituíram o desespero pelo trabalho metódico. Mais de 180 detentos participam diariamente no projeto de reintegração produtiva, aprendendo carpintaria, marcenaria e serralharia. Muitos dos reclusos, com lágrimas de genuíno arrependimento, expressam publicamente o desejo de expiar os erros do passado e construir um futuro honrado junto das suas famílias.',
    'Fernando M., de 28 anos, que cumpre pena por delitos contra o património, mostra com orgulho as primeiras trinta carteiras escolares produzidas com as suas próprias mãos: "Quando olho para estas mesas que vão servir alunos que estudavam no chão nas escolas rurais de Meconta, sinto que estou a devolver algo de bom ao meu país. Errei gravemente, peço perdão de coração à sociedade e à minha mãe, mas hoje sei construir e quero trabalhar com as minhas mãos quando terminar a pena."',
    'O diretor do estabelecimento prisional de Nampula salientou que os índices de reincidência entre os reclusos que concluem os cursos profissionais caíram para menos de 4%: "A prisão moderna não é masmorra de castigo cego, mas espaço de reconstituição moral do homem. Quem entra aqui com remorso e sai com uma profissão de marceneiro ou pedreiro tem a dignidade resgatada."',
    'O programa conta com a parceria do Instituto Nacional de Emprego e Formação Profissional (INEFP) e do empresariado de Nampula, que já se comprometeu a contratar os formandos que obtenham certidão de bom comportamento e libertação condicional.'
  ],
  author: {
    name: 'Helena Mondlane',
    role: 'Repórter de Direitos Humanos & Justiça',
    avatar: 'HM',
    affiliation: 'Delegação de Nampula'
  },
  dateline: 'Cadeia Regional de Nampula',
  readTime: '7 min de leitura',
  updatedAt: 'Hoje às 10:45 CAT',
  imageUrl: '/assets/images/detentos_reabilitacao_nampula_1794183534098.jpg',
  imageCaption: 'Fig. 2 — Oficina de formação profissional em marcenaria na penitenciária de Nampula: Reclusos arrependidos dedicam-se à produção de mobiliário escolar.',
  audioDuration: '08:15 min',
  tags: ['Nampula', 'Detentos', 'Arrependimento', 'Reabilitação', 'Justiça']
};

export const OPINION_COLUMNISTS: Article[] = [
  {
    id: 'op-graca-chissano',
    category: 'TRIBUNA ACADÉMICA & SOBERANIA',
    title: 'A Soberania Fiscal e os Fundos Soberanos de Recursos Minerais: Lições para a Década',
    subtitle: 'A poupança intergeracional proveniente da bacia do Rovuma exige governança estrita e blindagem contra pressões orçamentais de curto prazo.',
    leadParagraph: 'A experiência internacional demonstra que a riqueza no subsolo só se converte em bem-estar coletivo duradouro quando as regras de alocação de receitas para o Fundo Soberano de Moçambique são cumpridas com rigor quase religioso e escrutínio público intransigente.',
    fullContent: [
      'A experiência internacional demonstra que a riqueza no subsolo só se converte em bem-estar coletivo duradouro quando as regras de alocação de receitas para o Fundo Soberano de Moçambique são cumpridas com rigor quase religioso e escrutínio público intransigente.',
      'Não podemos incorrer no erro clássico da chamada "doença holandesa", em que os ingressos massivos de divisas valorizam a moeda nacional em detrimento da agricultura e das pequenas fábricas domésticas.',
      'O investimento na educação técnica e em hospitais regionais deve ser o único destino dos dividendos extraordinários, preservando o capital principal para as gerações de 2040 e além.'
    ],
    author: {
      name: 'Prof. Dra. Graça Chissano',
      role: 'Catedrática de Economia do Desenvolvimento',
      avatar: 'GC',
      affiliation: 'Faculdade de Economia, Universidade Eduardo Mondlane'
    },
    dateline: 'Maputo',
    readTime: '6 min de leitura',
    updatedAt: 'Edição de Domingo',
    tags: ['Fundo Soberano', 'Gás do Rovuma', 'Desenvolvimento Sustentável']
  },
  {
    id: 'op-tomas-macamo',
    category: 'ENGENHARIA & RESILIÊNCIA CLIMÁTICA',
    title: 'A Engenharia das Águas no Baixo Zambeze: Proteger Vidas e Garantir as Safras',
    subtitle: 'Sistemas de eclusas automatizadas e monitoramento por satélite transformam o risco de cheias em oportunidade de irrigação controlada.',
    leadParagraph: 'As bacias dos rios Zambeze, Búzi e Púnguè não podem continuar a ser encaradas sob o signo da fatalidade climática. O planeamento hidroelétrico e de retenção de caudais é a pedra angular da soberania alimentar nacional.',
    fullContent: [
      'As bacias dos rios Zambeze, Búzi e Púnguè não podem continuar a ser encaradas sob o signo da fatalidade climática. O planeamento hidroelétrico e de retenção de caudais é a pedra angular da soberania alimentar nacional.',
      'Com o reforço das estações hidrométricas telemétricas e a dragagem preventiva dos esteiros, reduzimos em 60% os alertas vermelhos na província de Sofala nos últimos dois ciclos agrícolas.',
      'A ciência hidrológica nacional tem capacidade comprovada; urge disponibilizar o financiamento orçamental contínuo para a manutenção das comportas.'
    ],
    author: {
      name: 'Eng. Tomás Macamo',
      role: 'Especialista em Recursos Hídricos & Obras Públicas',
      avatar: 'TM',
      affiliation: 'Ordem dos Engenheiros de Moçambique'
    },
    dateline: 'Beira / Quelimane',
    readTime: '5 min de leitura',
    updatedAt: 'Edição de Domingo',
    tags: ['Zambeze', 'Clima', 'Engenharia Civil']
  },
  {
    id: 'op-yasmin-patel',
    category: 'ESTADO DE DIREITO & JUSTIÇA',
    title: 'O Princípio da Publicidade nos Contratos de Concessão de Obras Públicas',
    subtitle: 'Acesso universal aos anexos contratuais e às auditorias do Tribunal Administrativo consolida a confiança dos investidores sérios.',
    leadParagraph: 'A transparência na administração do bem público não é concessão graciosa do Executivo, mas mandato constitucional expresso. Quando cada cidadão e cada empresa local compreendem as obrigações dos concessionários de estradas e portos, o país torna-se imune à corrupção.',
    fullContent: [
      'A transparência na administração do bem público não é concessão graciosa do Executivo, mas mandato constitucional expresso.',
      'O fortalecimento das auditorias em tempo real pelo Tribunal Administrativo e a divulgação digital de relatórios trimestrais representam avanços fundamentais que colocam Moçambique na vanguarda dos padrões de integridade da África Austral.'
    ],
    author: {
      name: 'Dra. Yasmin Patel',
      role: 'Jurista & Investigadora de Direito Público',
      avatar: 'YP',
      affiliation: 'Centro de Estudos Jurídicos de Moçambique'
    },
    dateline: 'Maputo',
    readTime: '4 min de leitura',
    updatedAt: 'Edição de Domingo',
    tags: ['Justiça', 'Direito Constitucional', 'Transparência']
  }
];

export const GENERAL_ARTICLES: Article[] = [
  {
    id: 'art-cahora-bassa-expansao',
    category: 'ENERGIA NACIONAL',
    title: 'Cahora Bassa inicia testes de sincronicidade na Central Norte para adicionar 1.240 MW à grelha',
    subtitle: 'Consórcio técnico luso-moçambicano atinge marco histórico de fiabilidade técnica no aproveitamento hidroelétrico de Songo.',
    leadParagraph: 'Os técnicos da HCB concluíram com sucesso a fase de simulação hidrodinâmica na barragem de Cahora Bassa, permitindo antecipar para o primeiro semestre de 2027 a entrada das primeiras turbinas da expansão Norte.',
    fullContent: [
      'Os técnicos da HCB concluíram com sucesso a fase de simulação hidrodinâmica na barragem de Cahora Bassa, permitindo antecipar para o primeiro semestre de 2027 a entrada das primeiras turbinas da expansão Norte.',
      'Com este projeto, Moçambique consolida-se como o maior exportador líquido de energia limpa da região da SADC, com contratos de longo prazo assegurados com a África do Sul, Zimbabué e Botsuana.'
    ],
    author: {
      name: 'Simão Nhantumbo',
      role: 'Repórter de Energia & Indústria',
      avatar: 'SN'
    },
    dateline: 'Songo, Tete',
    readTime: '4 min',
    updatedAt: 'Ontem às 19:40',
    imageUrl: '/assets/images/cahora_bassa_barragem_1794183564236.jpg',
    imageCaption: 'Barragem de Cahora Bassa em pleno funcionamento com caudal controlado na albufeira de Songo, gerando energia limpa.',
    tags: ['HCB', 'Energia', 'Tete', 'Exportações']
  },
  {
    id: 'art-cultura-literatura',
    category: 'CADERNO DE CULTURA',
    title: 'A Poética da Reconstrução: Mia Couto e Paulina Chiziane em Diálogo no Simpósio Literário',
    subtitle: 'Encontro comemorativo da literatura moçambicana com grande participação de estudantes universitários e escritores.',
    leadParagraph: 'Entre memórias orais das províncias e a reinvenção permanente do idioma, os dois mais celebrados escritores moçambicanos debateram o papel da palavra escrita na cura comunitária e na consolidação da identidade cívica.',
    fullContent: [
      'Entre memórias orais das províncias e a reinvenção permanente do idioma, os dois mais celebrados escritores moçambicanos debateram o papel da palavra escrita na cura comunitária e na consolidação da identidade cívica.',
      'O público jovem, composto maioritariamente por estudantes universitários e autores emergentes, teve oportunidade de interpelar os romancistas sobre o futuro da circulação do livro nas bibliotecas distritais do Norte e Centro.'
    ],
    author: {
      name: 'Isabel Chongo',
      role: 'Crítica Literária & Ensaísta Cultural',
      avatar: 'IC'
    },
    dateline: 'Nampula / Maputo',
    readTime: '6 min',
    updatedAt: 'Hoje às 07:15',
    imageUrl: '/assets/images/conferencia_livros_maputo_1794183565704.jpg',
    imageCaption: 'Auditório durante o simpósio literário de Moçambique com Mia Couto, Paulina Chiziane e estudantes.',
    tags: ['Literatura', 'Cultura', 'Identidade', 'Livros']
  },
  {
    id: 'art-ciencia-biodiversidade-gorongosa',
    category: 'CIÊNCIA & BIODIVERSIDADE',
    title: 'Parque Nacional da Gorongosa descobre três novas espécies de anfíbios no maciço da Serra',
    subtitle: 'Expedição biológica multinacional liderada por investigadores moçambicanos do Laboratório E.O. Wilson documenta endemismos de alta altitude.',
    leadParagraph: 'A encosta florestada da Serra da Gorongosa volta a surpreender a comunidade científica internacional com a identificação de anfíbios e orquídeas microclimáticas de valor inestimável para a compreensão da biogeografia do Rift Africano.',
    fullContent: [
      'A encosta florestada da Serra da Gorongosa volta a surpreender a comunidade científica internacional com a identificação de anfíbios e orquídeas microclimáticas de valor inestimável para a compreensão da biogeografia do Rift Africano.',
      'O modelo de conservação integrada da Gorongosa, que alia ciência de ponta a programas de empoderamento de raparigas e agricultura sustentável nas zonas tampão, foi recentemente apontado pela UNESCO como exemplo mundial.'
    ],
    author: {
      name: 'Delfina Langa',
      role: 'Correspondente Científica',
      avatar: 'DL'
    },
    dateline: 'Chitengo, Gorongosa',
    readTime: '5 min',
    updatedAt: 'Sábado às 16:20',
    imageUrl: '/assets/images/hospital_nampula_medicos_1794183537547.jpg',
    imageCaption: 'Equipa de investigação científica e médica em sessão de análise laboratorial e de dados de campo.',
    tags: ['Gorongosa', 'Biodiversidade', 'Ciência', 'Sofala']
  }
];

// Rich dedicated articles for EACH specific navigation section
export interface SectionContent {
  sectionId: string;
  sectionTitle: string;
  sectionSubtitle: string;
  leadArticle: Article;
  articles: Article[];
}

export const SECTION_CONTENTS: Record<string, SectionContent> = {
  politica: {
    sectionId: 'politica',
    sectionTitle: 'Política, Soberania & Estado',
    sectionSubtitle: 'Cobertura aprofundada dos atos da Assembleia da República, governação descentralizada e relações exteriores de Moçambique.',
    leadArticle: {
      id: 'pol-assembleia-orcamento',
      category: 'ASSEMBLEIA DA REPÚBLICA · SESSÃO PLENÁRIA',
      isExclusive: true,
      title: 'Plenário da Assembleia da República Aprova Nova Lei Orgânica dos Municípios e Finanças Provinciais',
      subtitle: 'Com consenso alargado entre as três bancadas parlamentares, o diploma transfere 18% da arrecadação de taxas industriais para os governos provinciais e reforça a fiscalização municipal.',
      leadParagraph: 'Num dia de debate parlamentar cerrado mas pontuado por compromissos substantivos, a Assembleia da República aprovou hoje em definitivo o pacote de reformas sobre descentralização e gestão financeira dos 65 municípios e dez províncias do país.',
      fullContent: [
        'Num dia de debate parlamentar cerrado mas pontuado por compromissos substantivos, a Assembleia da República aprovou hoje em definitivo o pacote de reformas sobre descentralização e gestão financeira dos 65 municípios e dez províncias do país.',
        'A nova legislação resolve um contencioso de vários anos em torno da retenção local de receitas geradas por concessões minerais e portuárias, garantindo transferências automáticas e transparentes através do Sistema de Administração Financeira do Estado (e-SISTAFE).',
        '"Damos hoje um passo irreversível na consolidação da autonomia administrativa e democrática do nosso povo", salientou o Presidente da Comissão de Administração Pública e Poder Local na apresentação do parecer final.',
        'O texto promulgado inclui ainda a obrigatoriedade de orçamentos participativos em todas as autarquias com mais de 50 mil habitantes, permitindo às organizações comunitárias votar diretamente prioridades em saneamento, estradas vicinais e eletrificação escolar.'
      ],
      author: {
        name: 'Mateus Matsinhe',
        role: 'Editor de Assuntos Parlamentares',
        avatar: 'MM',
        affiliation: 'Correspondente no Palácio da Assembleia'
      },
      dateline: 'Maputo',
      readTime: '7 min de leitura',
      updatedAt: 'Hoje às 11:40 CAT',
      imageUrl: '/assets/images/parlamento_assembleia_debate_1794183536677.jpg',
      imageCaption: 'Bancadas parlamentares no plenário da Assembleia da República durante a votação final do diploma.',
      tags: ['Assembleia da República', 'Descentralização', 'Municípios', 'Estado']
    },
    articles: [
      {
        id: 'pol-diplomacia-sadc',
        category: 'DIPLOMACIA & SEGURANÇA REGIONAL',
        title: 'Cimeira Extraordinária da SADC em Maputo Valida Mecanismos Conjuntos de Proteção Costeira',
        subtitle: 'Chefes de Estado e de Governo subscrevem declaração para patrulhamento naval integrado no Canal de Moçambique.',
        leadParagraph: 'A cimeira de alto nível reuniu representantes de nove países da África Austral na capital moçambicana para consolidar a cooperação na segurança das rotas marítimas e prevenção contra pirataria.',
        fullContent: [
          'A cimeira de alto nível reuniu representantes de nove países da África Austral na capital moçambicana para consolidar a cooperação na segurança das rotas marítimas e prevenção contra pirataria.',
          'O memorando prevê partilha de dados de radar por satélite e exercícios navais anuais entre as Marinhas de Guerra de Moçambique, África do Sul e Tanzânia.'
        ],
        author: { name: 'Celso Banze', role: 'Analista de Relações Internacionais', avatar: 'CB' },
        dateline: 'Maputo',
        readTime: '5 min',
        updatedAt: 'Hoje às 10:20',
        tags: ['SADC', 'Defesa', 'Diplomacia']
      },
      {
        id: 'pol-reforma-eleitoral',
        category: 'ESTADO DE DIREITO',
        title: 'Comissão Nacional de Eleições Apresenta Relatório do Censo Eleitoral Biométrico',
        subtitle: 'Auditoria independente confirma fiabilidade de 99,4% na duplicação de registos e integridade de servidores centrais.',
        leadParagraph: 'Com o apoio de peritos da União Africana e da Commonwealth, o processo de auditoria biométrica foi concluído com nota positiva, antecipando uma fase eleitoral com maior transparência cívica.',
        fullContent: [
          'Com o apoio de peritos da União Africana e da Commonwealth, o processo de auditoria biométrica foi concluído com nota positiva.',
          'O relatório técnico elogia a interoperabilidade com a base de dados de identificação civil e a inclusão de cidadãos das zonas mais remotas do Niassa e Zambézia.'
        ],
        author: { name: 'Dra. Yasmin Patel', role: 'Jurista & Investigadora', avatar: 'YP' },
        dateline: 'Maputo',
        readTime: '4 min',
        updatedAt: 'Hoje às 09:10',
        tags: ['CNE', 'Censo', 'Democracia']
      }
    ]
  },
  economia: {
    sectionId: 'economia',
    sectionTitle: 'Economia, Indústria & Mercados',
    sectionSubtitle: 'Análise de conjuntura macroeconómica, Bolsa de Valores de Moçambique, grandes concessões e investimento privado.',
    leadArticle: {
      id: 'eco-lead-bvm',
      category: 'MERCADOS DE CAPITAIS & BANCA',
      isExclusive: true,
      title: 'Bolsa de Valores de Moçambique Regista Crescimento Recorde de Capitalização no 3º Trimestre',
      subtitle: 'Com a entrada de novas emissões de Obrigações Verdes e o desempenho robusto da HCB e petrolíferas, a capitalização global atinge 192 mil milhões de Meticais.',
      leadParagraph: 'O mercado de capitais moçambicano consolida-se em 2026 como o terceiro polo de atração financeira de maior dinamismo da SADC. A liquidez diária superou as médias históricas, impulsionada pelo interesse de investidores institucionais e fundos de pensões na diversificação de carteiras em moeda nacional.',
      fullContent: [
        'O mercado de capitais moçambicano consolida-se em 2026 como o terceiro polo de atração financeira de maior dinamismo da SADC. A liquidez diária superou as médias históricas, impulsionada pelo interesse de investidores institucionais e fundos de pensões na diversificação de carteiras em moeda nacional.',
        'As Obrigações do Tesouro e os títulos corporativos emitidos por operadoras de logística e eletricidade registaram taxas de subscrição acima de 140%, comprovando a sólida confiança dos agentes económicos nas diretrizes prudenciais do Banco Central.',
        '"Estamos a testemunhar o amadurecimento do aforro nacional e a canalização direta de poupança pública para investimentos em portos, pontes e silos de cereais", sublinhou o Presidente do Conselho de Administração da BVM durante a sessão matinal.'
      ],
      author: {
        name: 'Helena Mondlane',
        role: 'Editora de Economia',
        avatar: 'HM'
      },
      dateline: 'Nampula / Maputo',
      readTime: '6 min de leitura',
      updatedAt: 'Hoje às 09:30 CAT',
      imageUrl: '/assets/images/banco_central_metical_1794183564795.jpg',
      imageCaption: 'Banco de Moçambique — Notas oficiais do Metical e relatórios de auditoria financeira anual.',
      tags: ['BVM', 'Metical', 'Investimento', 'Economia']
    },
    articles: [
      {
        id: 'eco-agro-caju',
        category: 'AGRONEGÓCIO & EXPORTAÇÕES',
        title: 'Campanha de Comercialização da Castanha de Caju Ultrapassa 160 Mil Toneladas no Norte',
        subtitle: 'Fábricas de processamento doméstico em Nampula e Cabo Delgado retêm 65% do produto in natura para exportação de amêndoa de valor agregado.',
        leadParagraph: 'Os produtores familiares das províncias de Nampula e Zambézia celebram preços remuneradores acima de 45 Meticais por quilograma, estimulados pela concorrência das novas unidades industriais de descasque.',
        fullContent: [
          'Os produtores familiares das províncias de Nampula e Zambézia celebram preços remuneradores acima de 45 Meticais por quilograma.',
          'O Ministério da Agricultura destacou que o aumento da capacidade de processamento doméstico reduz a dependência de intermediários estrangeiros e cria 8.000 postos de trabalho diretos.'
        ],
        author: { name: 'Simão Nhantumbo', role: 'Repórter de Agronegócio', avatar: 'SN' },
        dateline: 'Nampula',
        readTime: '4 min',
        updatedAt: 'Hoje às 08:45',
        tags: ['Caju', 'Nampula', 'Exportações']
      },
      {
        id: 'eco-rovuma-gas',
        category: 'ENERGIA & PETRÓLEO',
        title: 'Área 4 da Bacia do Rovuma: Segunda Plataforma Flutuante de GNL Chega à Costa de Cabo Delgado',
        subtitle: 'Unidade industrial de liquefação tem capacidade para 3,4 milhões de toneladas métricas por ano.',
        leadParagraph: 'A indústria energética nacional atinge novo patamar com a aproximação da nova unidade FLNG, que iniciará testes de ancoragem nas águas profundas de Palma nas próximas semanas.',
        fullContent: [
          'A indústria energética nacional atinge novo patamar com a aproximação da nova unidade FLNG.',
          'As receitas fiscais geradas irão alimentar diretamente o Fundo Soberano de Moçambique nos termos da Lei nº 1/2024.'
        ],
        author: { name: 'Dr. Arlindo Muthemba', role: 'Editor Sénior', avatar: 'AM' },
        dateline: 'Pemba / Palma',
        readTime: '5 min',
        updatedAt: 'Ontem às 21:00',
        tags: ['GNL', 'Rovuma', 'Petróleo']
      }
    ]
  },
  sociedade: {
    sectionId: 'sociedade',
    sectionTitle: 'Sociedade, Justiça & Cidadania',
    sectionSubtitle: 'Investigação comunitária, reabilitação penitenciária, saúde pública e educação em Moçambique.',
    leadArticle: ARTICLE_DROGAS_BELENENSES,
    articles: [
      ARTICLE_DETENTOS_ARREPENDIDOS,
      {
        id: 'soc-saude-hospitais',
        category: 'SAÚDE PÚBLICA & INFRAESTRUTURAS',
        title: 'Ministério da Saúde Inaugura Hospital Geral de Nampula com Capacidade para 400 Camas e Bloco Cardíaco',
        subtitle: 'Nova unidade hospitalar de referência servirá as províncias do Norte e reduz em 80% as evacuações médicas para Maputo.',
        leadParagraph: 'A partir desta semana, a população do Norte de Moçambique conta com um dos mais avançados complexos médico-cirúrgicos da costa oriental africana. O Hospital Geral de Nampula foi projetado com tecnologia de diagnóstico por ressonância magnética e hemodiálise contínua.',
        fullContent: [
          'A partir desta semana, a população do Norte de Moçambique conta com um dos mais avançados complexos médico-cirúrgicos da costa oriental africana.',
          'O corpo clínico inicial conta com 65 médicos especialistas formados na Universidade Eduardo Mondlane e na Universidade Lúrio.'
        ],
        author: {
          name: 'Delfina Langa',
          role: 'Correspondente de Saúde & Sociedade',
          avatar: 'DL'
        },
        dateline: 'Nampula',
        readTime: '6 min de leitura',
        updatedAt: 'Hoje às 10:00 CAT',
        imageUrl: '/assets/images/hospital_nampula_medicos_1794183537547.jpg',
        imageCaption: 'Equipa médica e enfermagem no novo Hospital Geral de Nampula em ronda clínica pelos blocos de internamento.',
        tags: ['Saúde', 'Nampula', 'Hospitais', 'Sociedade']
      }
    ]
  },
  aovivo: {
    sectionId: 'aovivo',
    sectionTitle: 'Moçambique Ao Vivo (TV & Rádio 24H)',
    sectionSubtitle: 'Grelha contínua de emissão pública, telejornais em direto, debates com analistas e reportagem no terreno.',
    leadArticle: {
      id: 'live-lead-studio',
      category: 'EMISSÃO ESPECIAL DE SERVIÇO PÚBLICO',
      isExclusive: true,
      title: 'Emissão Especial: A Grande Mesa Redonda sobre o Futuro Energético e Portuário de Moçambique',
      subtitle: 'Transmissão simultânea na Televisão Digital Aberta e na Rádio 92.3 FM a partir dos estúdios centrais de Maputo.',
      leadParagraph: 'A equipa de pivôs e repórteres do Manhã Informativo conduz hoje uma emissão contínua com convidados governamentais, académicos e representantes empresariais sobre o impacto das infraestruturas no bem-estar dos cidadãos.',
      fullContent: [
        'A equipa de pivôs e repórteres do Manhã Informativo conduz hoje uma emissão contínua com convidados governamentais, académicos e representantes empresariais sobre o impacto das infraestruturas no bem-estar dos cidadãos.',
        'Durante a emissão de quatro horas, repórteres em direto a partir de Nacala, Beira, Chimoio e Quelimane trazem testemunhos em tempo real sobre a circulação de comboios de mercadorias e a eletrificação rural.',
        '"O papel da comunicação social pública e independente é iluminar os factos com rigor, permitindo que cada moçambicano forme a sua própria convicção cívica", assinalou a direção de informação.'
      ],
      author: {
        name: 'Sandra Machava & Bento Tamele',
        role: 'Pivôs Centrais de Emissão',
        avatar: 'SM',
        affiliation: 'Estúdios Centrais de Maputo'
      },
      dateline: 'Maputo',
      readTime: 'Emissão em curso',
      updatedAt: 'No ar neste momento',
      imageUrl: 'https://picsum.photos/seed/television-broadcast-studio-anchor/900/550',
      imageCaption: 'Estúdio central do Manhã Informativo com tecnologia de transmissão digital de alta definição.',
      tags: ['Televisão', 'Direto', 'Rádio', 'Debate']
    },
    articles: [
      {
        id: 'live-grelha-tarde',
        category: 'GRELHA DE PROGRAMAÇÃO',
        title: 'Grelha de Hoje: Telejornal das 13h, Caderno de Desporto e Documentário da Gorongosa',
        subtitle: 'Conheça os horários e conteúdos programados para as emissões em sinal aberto e streaming digital.',
        leadParagraph: 'A grelha de domingo destaca a cobertura da ronda do Campeonato Nacional de Futebol Moçambola e a grande entrevista cultural às 20h30.',
        fullContent: ['A grelha de domingo traz uma seleção cuidada de jornalismo de investigação, análise desportiva e documentários de património.'],
        author: { name: 'Redação Audiovisual', role: 'Guia TV', avatar: 'RA' },
        dateline: 'Maputo',
        readTime: 'Guia do dia',
        updatedAt: 'Atualizado às 06:00',
        tags: ['Grelha', 'TV', 'Programas']
      }
    ]
  },
  opiniao: {
    sectionId: 'opiniao',
    sectionTitle: 'Tribuna de Opinião & Ensaios Cívicos',
    sectionSubtitle: 'Espaço plural de reflexão crítica, ensaios académicos e artigos de fundo sobre o destino coletivo da Nação.',
    leadArticle: OPINION_COLUMNISTS[0],
    articles: [
      OPINION_COLUMNISTS[1],
      OPINION_COLUMNISTS[2],
      {
        id: 'op-geraldo-bive',
        category: 'URBANISMO & MEMÓRIA',
        title: 'A Arquitetura Art Déco de Maputo e a Urgência da Preservação Patrimonial',
        subtitle: 'A capital moçambicana possui um acervo monumental ímpar que requer instrumentos fiscais de conservação arquitetónica.',
        leadParagraph: 'Caminhar pela Baixa de Maputo e pelas avenidas arborizadas da Polana é percorrer um dos mais ricos museus ao ar livre da modernidade arquitetónica do século XX.',
        fullContent: [
          'Caminhar pela Baixa de Maputo e pelas avenidas arborizadas da Polana é percorrer um dos mais ricos museus ao ar livre da modernidade arquitetónica do século XX.',
          'A demolição inconsequente ou a descaracterização de edifícios históricos subtrai à memória das futuras gerações a espessura da nossa identidade cosmopolita e africana.'
        ],
        author: { name: 'Arq. Geraldo Bive', role: 'Urbanista & Investigador de Património', avatar: 'GB' },
        dateline: 'Maputo',
        readTime: '5 min de leitura',
        updatedAt: 'Edição de Domingo',
        tags: ['Maputo', 'Arquitetura', 'Património']
      }
    ]
  },
  africa: {
    sectionId: 'africa',
    sectionTitle: 'África & Relações Internacionais',
    sectionSubtitle: 'Integração regional da SADC, Zona de Comércio Livre Continental (AfCFTA) e geopolítica no Sul Global.',
    leadArticle: {
      id: 'afr-afcfta-comercio',
      category: 'ZONA DE COMÉRCIO LIVRE CONTINENTAL',
      isExclusive: true,
      title: 'Moçambique e África do Sul Lançam Corredor Alfandegário Integrado em Ressano Garcia',
      subtitle: 'Composto por controlo fronteiriço de paragem única (One-Stop Border Post), a nova infraestrutura reduz o tempo de trânsito de camiões de carga de 24 horas para 90 minutos.',
      leadParagraph: 'O posto de fronteira de Ressano Garcia / Komatipoort, por onde circula a maior parte das mercadorias terrestres entre Moçambique e a maior economia do continente, passa a funcionar sob controlo binacional digital e sem papel.',
      fullContent: [
        'O posto de fronteira de Ressano Garcia / Komatipoort passa a funcionar sob controlo binacional digital e sem papel.',
        'A infraestrutura conjunta beneficiou de financiamento da SADC e do Banco Africano de Desenvolvimento, servindo como modelo piloto para os postos fronteiriços de Machipanda (com o Zimbabué) e Zóbuè (com o Malawi).',
        '"A integração africana constrói-se na prática com estradas expeditas, controlos aduaneiros desburocratizados e confiança entre as nossas administrações fiscais", afirmou o Ministro dos Negócios Estrangeiros na cerimónia inaugural.'
      ],
      author: {
        name: 'Celso Banze',
        role: 'Editor de Assuntos Internacionais',
        avatar: 'CB'
      },
      dateline: 'Ressano Garcia',
      readTime: '6 min de leitura',
      updatedAt: 'Hoje às 09:40 CAT',
      imageUrl: '/assets/images/porto_beira_logistica_1794183565074.jpg',
      imageCaption: 'Terminal de carga e logística ferroviária integrada de transporte comercial e contentores.',
      tags: ['SADC', 'África do Sul', 'Fronteira', 'Comércio']
    },
    articles: [
      {
        id: 'afr-uniao-africana',
        category: 'UNIÃO AFRICANA',
        title: 'Cimeira de Adis Abeba Aprova Fundo Africano para Mitigação de Desastres Naturais',
        subtitle: 'Moçambique assume a vice-presidência do Conselho de Paz e Segurança da organização continental.',
        leadParagraph: 'A liderança moçambicana nas questões de emergência climática e reconstrução pós-ciclone granjeou o apoio unânime dos 55 Estados-membros da União Africana.',
        fullContent: [
          'A liderança moçambicana nas questões de emergência climática e reconstrução pós-ciclone granjeou o apoio unânime dos Estados-membros.'
        ],
        author: { name: 'Mateus Matsinhe', role: 'Repórter Diplomático', avatar: 'MM' },
        dateline: 'Adis Abeba / Maputo',
        readTime: '4 min',
        updatedAt: 'Ontem às 18:30',
        tags: ['União Africana', 'Clima', 'Diplomacia']
      }
    ]
  },
  cultura: {
    sectionId: 'cultura',
    sectionTitle: 'Cultura, Letras & Artes Vivas',
    sectionSubtitle: 'Literatura, música, teatro, fotografia, património imaterial e artes visuais de Moçambique.',
    leadArticle: GENERAL_ARTICLES[1],
    articles: [
      GENERAL_ARTICLES[0],
      GENERAL_ARTICLES[2],
      {
        id: 'cul-marrabenta-festival',
        category: 'MÚSICA TRADICIONAL & CONTEMPORÂNEA',
        title: 'Festival da Marrabenta Reúne Três Gerações no Pavilhão do Maxaquene em Maputo',
        subtitle: 'Homenagem aos mestres Dilon Djindji e Wazimbo comemora a vitalidade do ritmo que traduz a alma urbana moçambicana.',
        leadParagraph: 'Com guitarras ritmadas e dança contagiante, a 18ª edição do Festival Nacional da Marrabenta celebrou o género que é candidato a Património Cultural Imaterial da Humanidade pela UNESCO.',
        fullContent: [
          'Com guitarras ritmadas e dança contagiante, a 18ª edição do Festival Nacional da Marrabenta celebrou o género musical mais amado da capital.',
          'Músicos consagrados e jovens valores das bandas de garagem da Matola e Mafalala partilharam o palco até altas horas da madrugada.'
        ],
        author: { name: 'Isabel Chongo', role: 'Crítica Cultural', avatar: 'IC' },
        dateline: 'Nampula / Maputo',
        readTime: '4 min',
        updatedAt: 'Hoje às 07:45',
        tags: ['Marrabenta', 'Música', 'Cultura', 'Maputo']
      }
    ]
  },
  investigacao: {
    sectionId: 'investigacao',
    sectionTitle: 'Grandes Investigações & Escrutínio Público',
    sectionSubtitle: 'Dossiês documentados, auditorias forenses a contratos públicos e investigações especiais exclusivas.',
    leadArticle: ARTICLE_DROGAS_BELENENSES,
    articles: [
      PRIMARY_LEAD_STORY,
      ARTICLE_DETENTOS_ARREPENDIDOS,
      {
        id: 'inv-pesca-ilegal',
        category: 'INVESTIGAÇÃO AMBIENTAL & FISCAL',
        title: 'Dossiê: O Rastreio por Satélite da Frotas Não-Licenciadas no Banco de Sofala',
        subtitle: 'Investigação do Manhã Informativo revela como a vigilância telemétrica permitiu apreender quatro navios e recuperar 180 milhões de Meticais em multas ambientais.',
        leadParagraph: 'Durante seis meses, a nossa equipa de investigação cruzou dados de transponders AIS de navios de pesca com relatórios de patrulhamento da Administração Marítima.',
        fullContent: [
          'Durante seis meses, a nossa equipa de investigação cruzou dados de transponders AIS de navios de pesca com relatórios de patrulhamento da Administração Marítima.',
          'O resultado demonstrou a existência de circuitos clandestinos de transbordo de camarão em alto mar, prontamente desmantelados pela intervenção coordenada da Guarda Costeira e da Autoridade Tributária.'
        ],
        author: { name: 'Dr. Bento Tamele', role: 'Director Editorial', avatar: 'BT' },
        dateline: 'Nampula / Beira',
        readTime: '9 min de leitura',
        updatedAt: 'Exclusivo deste Domingo',
        tags: ['Investigação', 'Pesca Ilegal', 'Sofala', 'Ambiente']
      }
    ]
  }
};
