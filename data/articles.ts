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
  videoUrl?: string;
  videoDuration?: string;
  videoPoster?: string;
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
    id: 'disp-venancio-mondlane',
    time: '12:15',
    category: 'POLÍTICA · TRIBUNAL SUPREMO',
    title: 'Julgamento de Venâncio Mondlane marcado para 17 de Novembro no Tribunal Supremo',
    summary: 'Antigo candidato presidencial responde a cinco acusações no âmbito das manifestações pós-eleitorais de 2024. Tribunal autorizou cobertura escrita.',
    urgency: 'high'
  },
  {
    id: 'disp-arsenal-premier-league',
    time: '14:30',
    category: 'FUTEBOL · PREMIER LEAGUE',
    title: 'Arsenal reforça liderança da Premier League com 27 pontos e amplia vantagem sobre Manchester City',
    summary: 'Vitória por 1-0 sobre o Hull City com golo de Ødegaard isola os Gunners no topo; City sofre terceira derrota consecutiva.',
    urgency: 'high'
  },
  {
    id: 'disp-ucm-tarcisio-abibo',
    time: '15:10',
    category: 'LUTO · UCM NAMPULA',
    title: 'UCM anuncia com profunda consternação o falecimento do docente Tarcísio Abibo da FEC',
    summary: 'Mestre Tarcísio Abibo (1957–2026), docente da Faculdade de Educação e Comunicação em Nampula, faleceu vítima de doença.',
    urgency: 'high'
  },
  {
    id: 'disp-muatala-grupo-15',
    time: '11:42',
    category: 'INSEGURANÇA · NAMPULA',
    title: 'Grupo “15” invade residências e aterroriza moradores de Muatala',
    summary: 'Indivíduos armados com catanas assaltam várias casas na madrugada de 4 de Novembro; moradores exigem posto policial permanente.',
    urgency: 'high'
  },
  {
    id: 'disp-ucm-penitenciario',
    time: '11:35',
    category: 'NAMPULA · UCM',
    title: 'Estudantes de Relações Públicas e Marketing da UCM realizam visita ao Estabelecimento Penitenciário Regional Norte',
    summary: 'Académicos do 3.º ano da Faculdade de Educação e Comunicação em Nampula conhecem funcionamento e comunicação institucional do sistema prisional.',
    urgency: 'high'
  },
  {
    id: 'disp-belenenses',
    time: '11:28',
    category: 'DROGAS NA CIDADE DE NAMPULA',
    title: 'Consumo de drogas preocupa moradores do bairro de Belenenses',
    summary: 'Consequências sociais e familiares, agressões e furtos geram preocupação entre moradores e líderes comunitários em Nampula.',
    urgency: 'high'
  },
  {
    id: 'disp-detentos',
    time: '11:05',
    category: 'NAMPULA · SAÚDE PENITENCIÁRIA',
    title: 'Consumo de drogas entre jovens preocupa autoridades de saúde em Nampula',
    summary: 'Técnica de saúde do ICAP na Penitenciária Regional alerta para aumento de casos graves de abstinência, complicações cardiovasculares e circulação da droga "Maka".',
    urgency: 'high'
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

export const ARTICLE_VENANCIO_MONDLANE: Article = {
  id: 'julgamento-venancio-mondlane-tribunal-supremo',
  category: 'POLÍTICA & JUSTIÇA · MOÇAMBIQUE',
  categoryColor: '#ba1a1a',
  isUrgent: true,
  isExclusive: false,
  title: 'Julgamento de Venâncio Mondlane marcado para 17 de Novembro no Tribunal Supremo',
  subtitle: 'Antigo candidato presidencial será julgado no âmbito do processo relacionado com as manifestações pós-eleitorais de 2024. O caso desperta grande atenção no cenário político e judicial de Moçambique.',
  leadParagraph: 'O julgamento do político moçambicano Venâncio Mondlane está marcado para o dia 17 de Novembro de 2026, no Tribunal Supremo, em Maputo. O processo está relacionado com as manifestações que ocorreram em Moçambique após as eleições gerais de Outubro de 2024.',
  fullContent: [
    'O julgamento do político moçambicano Venâncio Mondlane está marcado para o dia 17 de Novembro de 2026, no Tribunal Supremo, em Maputo. O processo está relacionado com as manifestações que ocorreram em Moçambique após as eleições gerais de Outubro de 2024.',
    'Inicialmente previsto para 6 de Outubro, o julgamento foi adiado na sequência de um pedido apresentado pela defesa, que alegou incompatibilidade de agendas. Posteriormente, foi definida a nova data de 17 de Novembro.',
    'Venâncio Mondlane responde a cinco acusações apresentadas pelo Ministério Público, nomeadamente apologia pública ao crime, incitamento à desobediência colectiva, instigação pública à prática de crime, instigação ao terrorismo e incitamento ao terrorismo.',
    'O caso ganhou ainda maior atenção depois de o Tribunal Supremo ter recusado o pedido da defesa para que a audiência fosse transmitida em directo pela televisão e pelas plataformas digitais. Apesar da decisão, o tribunal autorizou a presença do público e a cobertura jornalística através de registos escritos.',
    'O presidente do Tribunal Supremo, Adelino Muchanga, afirmou que a instituição está preparada para conduzir o julgamento, garantindo que a decisão será baseada nos factos constantes do processo e na lei.',
    'O julgamento representa um dos processos judiciais de maior relevância política no país, tendo em conta o contexto das manifestações pós-eleitorais e o debate público sobre justiça, direitos políticos e liberdade de manifestação.',
    'Nota: As acusações constituem alegações do Ministério Público e deverão ser apreciadas pelo tribunal. Venâncio Mondlane beneficia da presunção de inocência até decisão judicial definitiva.'
  ],
  author: {
    name: 'Redação Central de Justiça',
    role: 'Correspondente Judicial em Maputo',
    avatar: 'RJ',
    affiliation: 'Manhã Informativo · Cobertura Política e Judiciária'
  },
  dateline: 'Maputo, Moçambique',
  readTime: '4 min de leitura',
  updatedAt: 'Hoje às 12:15 CAT',
  imageUrl: '/assets/aistudio/VENANCIO_b21a954f.jpg',
  imageCaption: 'Venâncio Mondlane acompanhado por escolta da Polícia da República de Moçambique e advogados em Maputo durante deslocação judicial.',
  audioDuration: '05:40 min',
  tags: ['Política', 'Justiça', 'Moçambique', 'Venâncio Mondlane', 'Tribunal Supremo', 'Eleições 2024', 'Maputo']
};

export const ARTICLE_ARSENAL_PREMIER_LEAGUE: Article = {
  id: 'arsenal-reforca-lideranca-premier-league',
  category: 'DESPORTO INTERNACIONAL · PREMIER LEAGUE',
  categoryColor: '#ba1a1a',
  isExclusive: false,
  isUrgent: false,
  title: 'Arsenal reforça liderança da Premier League e aumenta pressão sobre Manchester City e Brighton',
  subtitle: 'Os Gunners chegam aos 27 pontos em dez jornadas, consolidam a primeira posição do campeonato inglês e aproveitam o momento difícil do Manchester City para ampliar a vantagem na corrida pelo título.',
  leadParagraph: 'O Arsenal está a protagonizar um início de temporada bastante positivo na Premier League 2026/27. Depois de dez jornadas disputadas, a equipa londrina ocupa a primeira posição da classificação, com 27 pontos, resultado de nove vitórias e apenas uma derrota.',
  fullContent: [
    'O Arsenal está a protagonizar um início de temporada bastante positivo na Premier League 2026/27. Depois de dez jornadas disputadas, a equipa londrina ocupa a primeira posição da classificação, com 27 pontos, resultado de nove vitórias e apenas uma derrota.',
    'A campanha coloca os Gunners numa posição privilegiada na luta pelo título inglês, numa temporada em que vários clubes tradicionais procuram afirmar-se como candidatos à conquista do campeonato.',
    'A equipa orientada por Mikel Arteta tem demonstrado regularidade nos resultados e capacidade para conquistar pontos mesmo em partidas equilibradas. Um dos exemplos mais recentes foi a vitória por 1-0 diante do Hull City, no dia 7 de Novembro, resultado que permitiu ao Arsenal somar mais três pontos e manter a liderança.',
    'Vitória sobre o Hull City reforça confiança dos londrinos',
    'No encontro da décima jornada, disputado no dia 7 de Novembro, o Arsenal venceu o Hull City por 1-0, numa partida marcada pela resistência defensiva da equipa adversária.',
    'O momento decisivo surgiu aos 72 minutos, quando o médio norueguês Martin Ødegaard aproveitou uma recarga após uma defesa do guarda-redes adversário para marcar o único golo da partida.',
    'Apesar das dificuldades encontradas durante o encontro, o Arsenal conseguiu controlar o resultado e assegurar uma vitória importante na corrida pelo campeonato.',
    'Este triunfo representou também a quarta vitória consecutiva da equipa na Premier League, reforçando a confiança do grupo para os próximos compromissos.',
    'Manchester City perde terreno na corrida pelo título',
    'Enquanto o Arsenal continua a somar resultados positivos, o Manchester City atravessa um momento complicado na competição.',
    'A formação orientada por Pep Guardiola sofreu uma derrota por 3-1 diante do Nottingham Forest, no dia 7 de Novembro. O resultado representou a terceira derrota consecutiva do City no campeonato.',
    'A derrota deixou os Citizens com 21 pontos, seis atrás do Arsenal, aumentando a pressão sobre a equipa na luta pela recuperação da liderança.',
    'O Nottingham Forest surpreendeu com uma exibição ofensiva eficaz. Jair Cunha e Liam Delap marcaram na primeira parte, enquanto Rayan Cherki reduziu para o Manchester City. Delap voltou a marcar na segunda parte e confirmou o triunfo da equipa da casa.',
    'A sequência negativa do Manchester City representa uma oportunidade importante para o Arsenal ampliar a sua vantagem na classificação.',
    'Brighton também entra na disputa',
    'Outro destaque desta temporada é o Brighton, que ocupa a segunda posição com 22 pontos, cinco atrás do Arsenal.',
    'A equipa tem apresentado números ofensivos expressivos e venceu o Brentford por 2-0 na décima jornada, demonstrando que não pretende abandonar a luta pelas primeiras posições.',
    'O Liverpool, com 18 pontos, também permanece entre os primeiros classificados, enquanto o Chelsea soma 16 pontos e procura recuperar terreno.'
  ],
  author: {
    name: 'Redação de Desporto Internacional',
    role: 'Correspondente de Futebol Europeu',
    avatar: 'DI',
    affiliation: 'Manhã Informativo · Caderno de Desporto'
  },
  dateline: 'Londres / Maputo',
  readTime: '4 min de leitura',
  updatedAt: 'Hoje às 14:30 CAT',
  imageUrl: '/assets/aistudio/arsenal_ff8dbb7e.jpg',
  imageCaption: 'Jogadores do Arsenal comemoram mais um resultado positivo na Premier League; Gunners lideram isolados com 27 pontos após 10 jornadas.',
  audioDuration: '05:10 min',
  tags: ['Arsenal', 'Premier League', 'Manchester City', 'Brighton', 'Futebol Inglês', 'Mikel Arteta', 'Desporto']
};

export const ARTICLE_UCM_TARCISIO_ABIBO: Article = {
  id: 'obituario-ucm-docente-tarcisio-abibo',
  category: 'UNIVERSIDADE CATÓLICA DE MOÇAMBIQUE · FEC',
  categoryColor: '#0D1B2A',
  isExclusive: false,
  isUrgent: true,
  title: 'UCM anuncia morte do docente Tarcísio Abibo, da Faculdade de Educação e Comunicação',
  subtitle: 'A instituição manifesta profunda consternação pelo falecimento do Mestre Tarcísio Abibo, docente em Nampula que dedicou a sua vida à formação superior.',
  leadParagraph: 'A Universidade Católica de Moçambique (UCM) anunciou, com profunda consternação, o falecimento do Mestre Tarcísio Abibo, docente da Faculdade de Educação e Comunicação (FEC), em Nampula. O académico morreu no dia 6 de Novembro de 2026, vítima de doença.',
  fullContent: [
    'A Universidade Católica de Moçambique (UCM) anunciou, com profunda consternação, o falecimento do Mestre Tarcísio Abibo, docente da Faculdade de Educação e Comunicação (FEC), em Nampula. O académico morreu no dia 6 de Novembro de 2026, vítima de doença.',
    'A informação foi divulgada através de uma nota de falecimento emitida pela instituição, na qual a Universidade manifesta pesar pela perda do docente e apresenta as suas condolências à família enlutada, aos colegas e à comunidade académica.',
    'Tarcísio Abibo nasceu no dia 1 de Outubro de 1957 e dedicou parte da sua vida à docência, contribuindo para a formação de estudantes no ensino superior.',
    'Na nota, a UCM destaca a dimensão da perda para a Faculdade de Educação e Comunicação e expressa solidariedade a todos os que partilharam momentos profissionais e académicos com o docente.',
    'O seu falecimento representa um momento de luto para a comunidade académica da Universidade Católica de Moçambique, particularmente para os docentes, estudantes e colaboradores da FEC.',
    'Que a sua alma descanse em paz.'
  ],
  author: {
    name: 'Redação Central & Delegação de Nampula',
    role: 'Comunicação Universitária & Sociedade',
    avatar: 'UCM',
    affiliation: 'Manhã Informativo · Cobertura Especial Nampula'
  },
  dateline: 'Nampula, Moçambique',
  readTime: '3 min de leitura',
  updatedAt: 'Atualizado hoje às 15:10 CAT',
  imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-11_at_06.09.39_9f385582.jpeg',
  imageCaption: 'Nota oficial de falecimento da Universidade Católica de Moçambique: Mestre Tarcísio Abibo (★ 01-10-1957 † 06-11-2026), Docente da FEC.',
  audioDuration: '04:20 min',
  tags: ['UCM', 'FEC', 'Nampula', 'Tarcísio Abibo', 'Educação', 'Obituário', 'Luto']
};

export const ARTICLE_VIDEO_REPORTAGEM_DROGAS: Article = {
  id: 'video-reportagem-drogas-jovens-nampula',
  category: 'SEGURANÇA & COMUNIDADE · NAMPULA',
  categoryColor: '#ba1a1a',
  isExclusive: true,
  isUrgent: true,
  title: 'GRUPO “15” INVADE RESIDÊNCIAS E ATERRORIZA MORADORES DE MUATALA',
  subtitle: 'Moradores do bairro de Muatala, em Nampula, voltam a viver momentos de medo e insegurança após onda de assaltos com catanas. Comunidade exige instalação urgente de posto policial.',
  leadParagraph: 'Moradores do bairro de Muatala, na cidade de Nampula, voltaram a viver momentos de medo e insegurança na madrugada desta quarta-feira, 4 de Novembro, após um grupo de indivíduos, conhecido localmente por “15”, protagonizar uma série de assaltos a residências. Segundo relatos dos moradores, os indivíduos terão invadido várias casas, ameaçando os ocupantes com recurso a catanas e apoderando-se de dinheiro e telemóveis.',
  videoUrl: '/assets/aistudio/whatsapp-video-2026-11-09-at-172750_AGxcINv2_659203cc.mp4',
  videoDuration: '01:43 min',
  videoPoster: '/assets/aistudio/reportagem_video_poster.jpg',
  fullContent: [
    'Moradores do bairro de Muatala, na cidade de Nampula, voltaram a viver momentos de medo e insegurança na madrugada desta quarta-feira, 4 de Novembro, após um grupo de indivíduos, conhecido localmente por “15”, protagonizar uma série de assaltos a residências. Segundo relatos dos moradores, os indivíduos terão invadido várias casas, ameaçando os ocupantes com recurso a catanas e apoderando-se de dinheiro e telemóveis.',
    'A onda de criminalidade está a gerar preocupação entre os residentes, que afirmam já não se sentir seguros nas próprias residências, sobretudo durante a noite. Perante a situação, a comunidade apela à intervenção urgente das autoridades policiais e exige a instalação de um posto policial no bairro, como forma de reforçar o patrulhamento, prevenir novos ataques e garantir a segurança dos habitantes.',
    'Fonte: Trabalho de reportagem e depoimentos dos moradores de Muatala, Nampula.'
  ],
  author: {
    name: 'Equipa de Reportagem de Campo',
    role: 'Jornalismo Investigativo & Audiovisual',
    avatar: 'MI',
    affiliation: 'Manhã Informativo · Delegação de Nampula'
  },
  dateline: 'Nampula / Moçambique',
  readTime: 'Vídeo 01:43 min · 3 min leitura',
  updatedAt: 'Edição Especial de Hoje',
  imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_09.39.40_624df156.jpeg',
  imageCaption: 'Vídeo da Reportagem: Moradores do bairro de Muatala relatam momentos de pânico e exigem posto policial permanente após assaltos com catanas pelo grupo "15".',
  audioDuration: '03:40 min',
  tags: ['Grupo 15', 'Muatala', 'Nampula', 'Insegurança', 'Polícia da República de Moçambique', 'Assaltos', 'Comunidade']
};

export const ARTICLE_DROGAS_BELENENSES: Article = {
  id: 'investigacao-drogas-belenenses',
  category: 'DROGAS NA CIDADE DE NAMPULA',
  categoryColor: '#ba1a1a',
  isExclusive: true,
  isUrgent: true,
  title: 'Consumo de drogas preocupa moradores do bairro de Belenenses',
  subtitle: 'Conflitos, agressões, furtos e sofrimento emocional geram alarme social; moradores, jovens e secretário do bairro relatam desafios da crise.',
  leadParagraph: 'O consumo de drogas no bairro de Belenenses, na cidade de Nampula, está a gerar preocupação entre os moradores, devido às consequências sociais e familiares associadas a esta prática, nomeadamente conflitos, agressões, furtos e sofrimento emocional. Durante uma reportagem realizada esta semana naquela comunidade, consumidores, um indivíduo que conseguiu recuperar-se da dependência, o secretário do bairro e um jovem residente partilharam os seus testemunhos e opiniões sobre esta realidade.',
  fullContent: [
    'O consumo de drogas no bairro de Belenenses, na cidade de Nampula, está a gerar preocupação entre os moradores, devido às consequências sociais e familiares associadas a esta prática, nomeadamente conflitos, agressões, furtos e sofrimento emocional. Durante uma reportagem realizada esta semana naquela comunidade, consumidores, um indivíduo que conseguiu recuperar-se da dependência, o secretário do bairro e um jovem residente partilharam os seus testemunhos e opiniões sobre esta realidade.',
    'Entre os factores apontados para o envolvimento dos jovens no consumo de drogas estão o sofrimento emocional, o stress e a falta de apoio no ambiente familiar. Segundo um dos jovens entrevistados, para alguns consumidores, o contacto com estas substâncias não começa necessariamente por curiosidade ou procura de prazer, mas surge como uma tentativa de lidar com problemas pessoais e situações difíceis vividas no seio familiar.',
    'O testemunho evidencia uma dimensão social do problema, mostrando que o consumo de drogas não afecta apenas os indivíduos envolvidos, mas também as suas famílias e a comunidade em que estão inseridos.',
    'Para além dos factores emocionais e familiares, a situação levanta preocupações sobre a segurança e a convivência comunitária, sobretudo perante os relatos de agressões e furtos associados ao consumo de substâncias.',
    'A reportagem procurou compreender as razões que levam alguns jovens a envolver-se no consumo de drogas, as consequências dessa prática e os desafios enfrentados pelas famílias e pelas estruturas comunitárias na prevenção e no combate a este fenómeno.'
  ],
  author: {
    name: 'Redação de Investigação · Nampula',
    role: 'Reportagem Especial no Bairro de Belenenses',
    avatar: 'NB',
    affiliation: 'Nampula / Moçambique'
  },
  dateline: 'Bairro de Belenenses, Nampula',
  readTime: '5 min de leitura',
  updatedAt: 'Hoje às 11:28 CAT',
  imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_09.39.40_624df156.jpeg',
  imageCaption: 'Fig. 1 — Reportagem no bairro de Belenenses, cidade de Nampula: Testemunhos de residentes e jovens sobre o impacto social do consumo de drogas.',
  audioDuration: '06:30 min',
  tags: ['Drogas na Cidade de Nampula', 'Nampula', 'Belenenses', 'Consumo de Drogas', 'Sociedade']
};

export const ARTICLE_DETENTOS_ARREPENDIDOS: Article = {
  id: 'drogas-jovens-saude-nampula',
  category: 'SAÚDE PÚBLICA & SISTEMA PENITENCIÁRIO',
  categoryColor: '#0050cc',
  isExclusive: true,
  title: 'CONSUMO DE DROGAS ENTRE JOVENS PREOCUPA AUTORIDADES DE SAÚDE EM NAMPULA',
  subtitle: 'Frustração, influência de amizades e problemas familiares apontados como principais causas. Penitenciária Regional de Nampula recebe mensalmente casos graves de abstinência e complicações orgânicas',
  leadParagraph: 'Nampula — O consumo de drogas entre jovens continua a ser um dos maiores desafios de saúde pública e ordem social em Moçambique. A preocupação foi manifestada numa entrevista exclusiva concedida ao Manhã Informativo por uma técnica de saúde do ICAP, afecta à Penitenciária Regional de Nampula, unidade que recebe reclusos de Cabo Delgado, Nampula e parte da Zambézia. Segundo a especialista, que lida diariamente com dependentes químicos em regime penitenciário, os casos têm aumentado e chegam já com danos físicos graves, incluindo problemas cardiovasculares e até Acidentes Vasculares Cerebrais (AVC), fenómeno agravado pela circulação da droga "Maka".',
  fullContent: [
    'Nampula — O consumo de drogas entre jovens continua a ser um dos maiores desafios de saúde pública e ordem social em Moçambique. A preocupação foi manifestada numa entrevista exclusiva concedida ao Manhã Informativo por uma técnica de saúde do ICAP, afecta à Penitenciária Regional de Nampula, unidade que recebe reclusos de Cabo Delgado, Nampula e parte da Zambézia.',
    'Segundo a especialista, que lida diariamente com dependentes químicos em regime penitenciário, os casos têm aumentado e chegam já com danos físicos graves, incluindo problemas cardiovasculares e até Acidentes Vasculares Cerebrais (AVC).',
    'O fenómeno está associado à recente circulação da droga conhecida como "Maka" na cidade de Nampula, que tem provocado quadros clínicos complexos e difíceis de gerir.',
    'A entrevista na íntegra:',
    'P — Quais são os principais fatores que podem levar um jovem a consumir drogas?',
    'R — Os principais fatores que podem levar um jovem a consumir drogas, eu diria até pode ser frustração, pode ser por amizades. Às vezes o jovem quando dão por si já estão metidos na droga, já são dependentes por certas amizades, entram na onda de algumas pessoas que consomem drogas e eu penso que é mais frustrações. O jovem tem ambição, tem um desejo de alguma coisa, não consegue alcançar aquilo que ele sonhou, então acaba entrando em depressão e mete-se nas drogas.',
    'E alguns problemas são a partir da família, dentro da família. A frustração está dentro da família, ele acaba saindo para fora para procurar aquilo que ele não encontra em casa. Infelizmente às vezes pensa que se ir consumir uma droga, do princípio ele pensa que aquilo vai lhe aliviar, vai se sentir bem, mas depois quando começa a ser dependente, já é dependente, é difícil voltar.',
    'P — Quais são os efeitos que o consumo de droga tem causado na saúde mental e física?',
    'R — A droga tem vários efeitos. Tem efeitos psíquicos, efeitos cognitivos. A pessoa começa a ter surtos psicóticos por causa do efeito da droga e perde a memória porque as drogas destroem o sistema nervoso central.',
    'E depois também quando tem o síndrome de abstinência... aqui no contexto penitenciário é difícil eles encontrarem a droga. Quando uma pessoa já é dependente químico, a dependência química é uma doença muito grave. Nós temos que entender que aquela pessoa que está a consumir droga está doente.',
    'Às vezes cai no mundo de crime porque quer alimentar a necessidade de droga por causa da dependência, e quando chega aqui já não tem acesso à droga então tem crises de abstinência. Começam a ter delírios, começam a ter problemas sérios de saúde.',
    'Nós aqui temos terapia de substituição, que é a metadona, que é um medicamento que actua parecido com a droga mas não é droga. Vai fazer com que ele, por último, vai abandonando, vai fazer limpeza e vai ficar livre das drogas.',
    'P — Com que frequência tem recebido estes casos de abstinência aqui na penitenciária?',
    'R — Sempre que vem um grupo da penitenciária provincial, eles mandam uma vez por mês ou duas vezes por mês, naquele grupo sempre tem uns três, quatro que têm histórico de dependência química.',
    'Alguns vêm com crise de abstinência, outros vêm com danos graves. Existem casos que a droga provoca problemas do sistema cardiovascular e outros até pode levar até um AVC, Acidente Vascular Cerebral, ou falência de órgãos, porque são pessoas que já estão há muito tempo a consumir.',
    'Como este problema cria ruptura familiar, quando uma família descobre que o filho é dependente, expulsa de casa ou ele mesmo sai, vai viver naquele ciclo de amigos que são consumidores, quando chega lá precisam de dinheiro para consumir e depois começam a cometer crimes para ter dinheiro. Estes já estão a começar a ter problema não só de abstinência, como também de falência orgânica.',
    'Nós aqui temos um psicólogo clínico que faz acompanhamento de todos que têm histórico de dependência química.',
    'P — Qual foi o caso que mais teve dificuldade em lidar?',
    'R — Tivemos ultimamente, aqui na cidade de Nampula, esse consumo da famosa droga "Maca", então tivemos muitas situações muito difíceis de lidar. Tivemos um jovem até que já tinha problemas sérios cardiovascular e este foi internado no hospital. Felizmente ele tinha cometido um crime, estava com uma pena muito curta, ficou internado cerca de um mês porque já tinha um dano do coração. Foi feito tratamento e através da penitenciária, da assistência social, tivemos contacto com os familiares.',
    'Este é um dos casos que nós tivemos de sucesso, porque conseguimos interagir com a família, a família aceitou. O psicólogo não trabalha só com o dependente, tem que também trabalhar com os pais porque nenhum pai quer ter um filho dependente químico. O tratamento não é só do doente, é também da família.',
    'P — Que medidas devemos tomar como sociedade perante estes jovens que precisam de ajuda?',
    'R — A medida primeiro nós temos que entender a ele como doente e todo o doente precisa de ajuda. A principal ajuda é da família. Não podemos abandonar uma pessoa só porque ele é dependente químico porque essa pessoa precisa de ser recuperada. É um jovem que tem muito para dar e tem que ser recuperado então nós temos que encaminhar a ele a unidades de saúde, tem um hospital especializado, o centro de saúde mental.',
    'E também tem que ter muito apoio familiar, muito apoio dos amigos, porque às vezes essas pessoas começam por perder autoestima, já não cuidam de si, a aparência muda muito e às vezes nós costumamos já discriminá-los.',
    'Então primeiro, não discriminar. Para ele estar naquele mundo é preciso ajudar, procurar ajuda para ele. Se tu não consegues ajudar, procurar muita gente, uma rede de apoio. Tem que ter uma rede de apoio para essas pessoas para poder se livrarem das drogas porque discriminar não é solução. Temos que recuperar essa pessoa, estamos a perder muitos jovens por causa de drogas, jovens que têm muito para dar mas infelizmente estão doentes.'
  ],
  author: {
    name: 'Técnica de Saúde do ICAP & Redação',
    role: 'Entrevista Exclusiva de Saúde & Reinserção',
    avatar: 'ICAP',
    affiliation: 'Penitenciária Regional de Nampula'
  },
  dateline: 'Penitenciária Regional de Nampula',
  readTime: 'Vídeo 05:14 min · 8 min leitura',
  updatedAt: 'Hoje às 11:35 CAT',
  videoUrl: '/assets/aistudio/video_dtr_ae604677.mp4',
  videoDuration: '05:14 min',
  videoPoster: '/assets/aistudio/icap_entrevista_poster.jpg',
  imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_09.34.10_5b3c5914.jpeg',
  imageCaption: 'Vídeo da Entrevista Exclusiva: Técnica de saúde do ICAP, afecta à Penitenciária Regional de Nampula, detalha os casos graves de abstinência, danos cardiovasculares e apoio psicológico aos jovens.',
  audioDuration: '10:45 min',
  tags: ['Consumo de Drogas', 'Nampula', 'Maka', 'Penitenciária Regional de Nampula', 'ICAP', 'Saúde Mental', 'Abstinência']
};

export const ARTICLE_UCM_VISITA_PENITENCIARIO: Article = {
  id: 'ucm-visita-penitenciario-norte',
  category: 'COMUNICAÇÃO & ENSINO UNIVERSITÁRIO · UCM',
  categoryColor: '#0050cc',
  isExclusive: true,
  title: 'Estudantes da UCM Realizam Visita ao Estabelecimento Penitenciário Regional Norte, em Nampula',
  subtitle: 'Académicos do 3.º ano de Relações Públicas e Marketing Estratégico tiveram a oportunidade de conhecer de perto uma instituição do sistema penitenciário moçambicano.',
  leadParagraph: 'Estudantes do 3.º ano do curso de Relações Públicas e Marketing Estratégico da Universidade Católica de Moçambique (UCM), Faculdade de Educação e Comunicação, em Nampula, realizaram uma visita ao Estabelecimento Penitenciário Regional Norte.',
  fullContent: [
    'Estudantes do 3.º ano do curso de Relações Públicas e Marketing Estratégico da Universidade Católica de Moçambique (UCM), Faculdade de Educação e Comunicação, em Nampula, realizaram uma visita ao Estabelecimento Penitenciário Regional Norte.',
    'A actividade enquadra-se na importância da formação académica aliada à experiência prática, permitindo aos estudantes estabelecer contacto com instituições públicas e conhecer melhor as suas dinâmicas de funcionamento e comunicação institucional.',
    'A iniciativa representa uma oportunidade de aprendizagem para os futuros profissionais de Relações Públicas e Marketing Estratégico, sobretudo no que diz respeito à comunicação organizacional, relacionamento institucional e responsabilidade social.',
    'A aproximação entre a universidade e as instituições da sociedade constitui um elemento importante para a formação de profissionais preparados para compreender os diferentes contextos sociais e organizacionais.',
    'MANHÃ INFORMATIVO — Informar, esclarecer e dar voz à sociedade.'
  ],
  author: {
    name: 'Redação UCM · Comunicação & Relações Públicas',
    role: 'Faculdade de Educação e Comunicação',
    avatar: 'UCM',
    affiliation: 'Universidade Católica de Moçambique (Nampula)'
  },
  dateline: 'Nampula / Moçambique',
  readTime: '4 min de leitura',
  updatedAt: 'Hoje às 11:45 CAT',
  imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_09.35.10_d0248070.jpeg',
  imageCaption: 'Fig. 1 — Estudantes do 3.º ano de Relações Públicas e Marketing Estratégico da UCM (Faculdade de Educação e Comunicação) em visita ao Estabelecimento Penitenciário Regional Norte, em Nampula.',
  audioDuration: '04:50 min',
  tags: ['UCM', 'Nampula', 'Educação e Comunicação', 'Penitenciário', 'Relações Públicas', 'Marketing Estratégico']
};

export const ARTICLE_OPINIAO_NASSECO: Article = {
  id: 'artigo-op-joao-nasseco-ia',
  category: 'ARTIGO DE OPINIÃO · ENSINO SUPERIOR & IA',
  categoryColor: '#0050cc',
  isExclusive: true,
  isAnalysis: true,
  title: 'O Dilema de Tudo Elaborado: A Inteligência Artificial e o Vazio do Pensamento Universitário',
  subtitle: 'DESAFIOS DOS DOCENTES E ESTUDANTES UNIVERSITÁRIOS: Por trás da promessa de optimização do tempo e democratização do conhecimento, esconde-se o risco de os estudantes terceirizarem a sua própria capacidade de pensar criticamente.',
  leadParagraph: 'A presença da Inteligência Artificial, no ambiente académico, deixou de ser uma tendência de futuro para se tornar uma realidade incontornável. Ferramentas de geração de texto, código e imagem transformaram drasticamente a rotina de quem habita os campus universitários. Contudo, por trás da promessa de optimização do tempo e democratização do conhecimento, esconde-se um desafio muito mais profundo do que o simples combate ao plágio: o risco de os estudantes terceirizarem a sua própria capacidade de pensar criticamente, diga-se em abono da verdade, é deveras preocupante.',
  fullContent: [
    'A presença da Inteligência Artificial, no ambiente académico, deixou de ser uma tendência de futuro para se tornar uma realidade incontornável. Ferramentas de geração de texto, código e imagem transformaram drasticamente a rotina de quem habita os campus universitários. Contudo, por trás da promessa de optimização do tempo e democratização do conhecimento, esconde-se um desafio muito mais profundo do que o simples combate ao plágio: o risco de os estudantes terceirizarem a sua própria capacidade de pensar criticamente, diga-se em abono da verdade, é deveras preocupante.',
    'O primeiro grande obstáculo reside na ilusão de produtividade. Ao delegar competências para redacção de ensaios, resolução de problemas complexos ou a síntese de artigos científicos à IA, o estudante abdica do processo mais valioso da formação superior: o desconforto do erro e o esforço cognitivo. A aprendizagem não acontece no resultado final entregue ao professor, mas sim, nas horas de leitura, no debate interno e na frustração de refazer um argumento sólido. Quando a máquina entrega a resposta pronta, o universitário corre o risco de se tornar um mero editor de textos alheios, ignorando o desenvolvimento da sua própria voz académica, porquanto ser uso inadequado, pois obriga-se-nos a repensar a razão existencial da Inteligência Artificial –FONTE DE INSPIRAÇÃO.',
    'Além disso, a disparidade socioeconómica e o isolamento intelectual ganham novos contornos. Se, por um lado, a IA pode servir como um tutor personalizado para quem não tem acesso a outros recursos, por outro, ela pode aprofundar um fosso de competências. Aqueles que utilizam a tecnologia apenas como um "atalho" para cumprir prazos formam-se sem as habilidades de comunicação, síntese e investigação exigidas pelo mercado de trabalho contemporâneo — um mercado que, ironicamente, já automatiza as tarefas básicas que a IA faz, hoje.',
    'Por fim, o desafio ético transcende as barreiras dos comités de integridade das universidades. Trata-se de uma questão de responsabilidade intelectual. Confiar cegamente em algoritmos que replicam preconceitos e geram alucinações (informações falsas) sem uma verificação rigorosa compromete a qualidade da ciência e do debate público que a universidade tem o dever de proteger.',
    'Portanto, o caminho não passa pela proibição ingénua da tecnologia, mas sim pela redefinição do papel do estudante. As universidades precisam de migrar de um modelo de avaliação focado na memorização e na entrega mecânica para metodologias que exijam reflexão em tempo real, debate e aplicação prática. Diante da IA, o maior desafio do universitário moderno não é aprender a programar ou a usar comandos perfeitos, mas sim garantir que a sua mente continue a ser o território onde as perguntas mais difíceis — e verdadeiramente humanas — são formuladas.',
    'Nampula, 02 de Novembro de 2026 – MOÇAMBIQUE'
  ],
  author: {
    name: 'João Nasseco',
    role: 'Autor de Opinião & Académico',
    avatar: 'JN',
    affiliation: 'Nampula, Moçambique'
  },
  dateline: 'Nampula / Moçambique',
  readTime: '6 min de leitura',
  updatedAt: '02 de Novembro de 2026',
  audioDuration: '06:15 min',
  tags: ['Inteligência Artificial', 'Universidade', 'Pensamento Crítico', 'Ensino Superior', 'Nampula', 'João Nasseco']
};

export const ARTICLE_OPINIAO_MARISSA: Article = {
  id: 'artigo-op-marissa-alexandre-ensino',
  category: 'ARTIGO DE OPINIÃO · QUALIDADE ACADÉMICA',
  categoryColor: '#ba1a1a',
  isExclusive: true,
  isAnalysis: true,
  title: 'Ensino Superior em Moçambique: Diplomas a Mais, Qualidade a Menos?',
  subtitle: 'Estaremos realmente a formar quadros com qualidade ou estaremos, em alguns casos, demasiado preocupados em entregar diplomas? Uma reflexão sobre a expansão universitária e as exigências do país.',
  leadParagraph: 'O ensino superior é frequentemente apresentado como uma das principais vias para o desenvolvimento de Moçambique. É nas universidades que se espera formar profissionais competentes, produzir conhecimento e preparar cidadãos capazes de responder aos desafios do país. No entanto, importa fazer uma pergunta incómoda: estaremos realmente a formar quadros com qualidade ou estaremos, em alguns casos, demasiado preocupados em entregar diplomas?',
  fullContent: [
    'O ensino superior é frequentemente apresentado como uma das principais vias para o desenvolvimento de Moçambique. É nas universidades que se espera formar profissionais competentes, produzir conhecimento e preparar cidadãos capazes de responder aos desafios do país. No entanto, importa fazer uma pergunta incómoda: estaremos realmente a formar quadros com qualidade ou estaremos, em alguns casos, demasiado preocupados em entregar diplomas?',
    'Nos últimos anos, o acesso ao ensino superior tornou-se uma possibilidade para mais moçambicanos, graças à expansão das instituições e da oferta de cursos. Esta abertura é positiva e deve ser valorizada. Porém, aumentar o número de universidades e de estudantes não significa, automaticamente, melhorar a qualidade da formação. O crescimento do sector precisa de ser acompanhado por condições adequadas de ensino, docentes qualificados, bibliotecas actualizadas, laboratórios funcionais, investigação científica e mecanismos rigorosos de avaliação.',
    'Em algumas instituições, os estudantes enfrentam salas de aulas sobrelotadas, falta de materiais de apoio, bibliografia desactualizada e dificuldades no acesso a laboratórios ou espaços de estudo. Há também situações em que a componente prática parece receber menos atenção do que a transmissão teórica dos conteúdos. Como consequência, chegam ao mercado de trabalho licenciados com diplomas nas mãos, mas com fragilidades evidentes nas competências técnicas, na comunicação e na resolução prática de problemas reais.',
    'A proliferação de cursos sem a devida correspondência com as necessidades reais da economia nacional gera frustração tanto para as empresas empregadoras como para as famílias que investiram as suas poupanças na formação dos seus filhos. É imperativo que as autoridades do ensino superior e as próprias instituições universitárias façam uma reflexão profunda e corajosa: o prestígio académico não se mede pelo número de canudos entregues nas cerimónias de graduação, mas pela capacidade e integridade dos profissionais que colocamos ao serviço da Nação.',
    'Nampula, Moçambique.'
  ],
  author: {
    name: 'Marissa Alexandre',
    role: 'Autora de Opinião & Analista Educacional',
    avatar: 'MA',
    affiliation: 'Nampula / Moçambique'
  },
  dateline: 'Nampula / Moçambique',
  readTime: '5 min de leitura',
  updatedAt: 'Novembro de 2026',
  audioDuration: '05:40 min',
  tags: ['Ensino Superior', 'Qualidade de Ensino', 'Moçambique', 'Diplomas', 'Marissa Alexandre', 'Educação']
};

export const ARTICLE_OPINIAO_NURA: Article = {
  id: 'artigo-op-nura-felix-estagios',
  category: 'ARTIGO DE OPINIÃO · UCM & MERCADO DE TRABALHO',
  categoryColor: '#0050cc',
  isExclusive: true,
  isAnalysis: true,
  title: 'Sem Estágios, Não Há Experiência: O Desafio da Universidade Católica de Moçambique na Preparação para o Mercado de Trabalho',
  subtitle: 'A desconexão entre os bancos universitários e as exigências do mercado exige parcerias estratégicas urgentes entre a UCM e o tecido empresarial e institucional em Nampula.',
  leadParagraph: 'Para a maioria dos estudantes universitários, a chegada ao final do curso é acompanhada por uma barreira quase intransponível: o anúncio de emprego que exige "experiência prévia comprovada de 2 a 3 anos" para funções de entrada. Como pode um jovem recém-licenciado ter experiência se as oportunidades de estágio curricular e profissional continuam a ser escassas e desarticuladas? Na Universidade Católica de Moçambique (UCM), particularmente na Faculdade de Educação e Comunicação em Nampula, esta questão assume uma urgência que não pode ser ignorada.',
  fullContent: [
    'Para a maioria dos estudantes universitários, a chegada ao final do curso é acompanhada por uma barreira quase intransponível: o anúncio de emprego que exige "experiência prévia comprovada de 2 a 3 anos" para funções de entrada. Como pode um jovem recém-licenciado ter experiência se as oportunidades de estágio curricular e profissional continuam a ser escassas e desarticuladas? Na Universidade Católica de Moçambique (UCM), particularmente na Faculdade de Educação e Comunicação em Nampula, esta questão assume uma urgência que não pode ser ignorada.',
    'A teoria ensinada nas salas de aula é fundamental para moldar o pensamento analítico e os fundamentos éticos do futuro profissional. Contudo, na ausência de contacto direto com o ambiente real de trabalho — seja em redações, agências de comunicação, departamentos de recursos humanos, gabinetes de marketing institucional ou escolas —, o estudante conclui a licenciatura sem o domínio das rotinas práticas e da dinâmica interpessoal exigida pelas organizações modernas.',
    'O desafio que se coloca à UCM e às demais instituições de ensino superior em Nampula é o de construir pontes sólidas e institucionais com o tecido empresarial, o sector público e a sociedade civil. Não basta esperar que o estudante, por iniciativa própria e muitas vezes sem redes de influência pessoal, procure uma vaga de estágio. É imperativo que a universidade celebre protocolos vinculativos de estágio obrigatório e remunerado com empresas do Corredor de Nacala, bancos, órgãos de comunicação social e delegações governamentais.',
    'Iniciativas como a recente visita dos estudantes de Relações Públicas e Marketing Estratégico ao Estabelecimento Penitenciário Regional Norte demonstram como o contacto de campo oxigena a formação e desperta a consciência cívica e profissional dos formandos. Esse tipo de inserção prática deve deixar de ser uma exceção louvável para se converter numa metodologia estruturante do currículo académico.',
    'Sem estágios estruturados, continuaremos a alimentar o ciclo perverso da exclusão juvenil do mercado de trabalho. Investir em programas de estágio é valorizar o talento dos jovens da província de Nampula e garantir que a Universidade Católica de Moçambique cumpra cabalmente a sua nobre missão de formar para a excelência e para o serviço da sociedade.',
    'Nampula — Moçambique.'
  ],
  author: {
    name: 'Nura Félix',
    role: 'Autora de Opinião & Académica',
    avatar: 'NF',
    affiliation: 'UCM · Faculdade de Educação e Comunicação (Nampula)'
  },
  dateline: 'Nampula / Moçambique',
  readTime: '5 min de leitura',
  updatedAt: 'Novembro de 2026',
  audioDuration: '05:30 min',
  tags: ['UCM', 'Estágios', 'Mercado de Trabalho', 'Nampula', 'Nura Félix', 'Opinião', 'Educação e Comunicação']
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
  },
  ARTICLE_VENANCIO_MONDLANE,
  ARTICLE_ARSENAL_PREMIER_LEAGUE,
  ARTICLE_UCM_TARCISIO_ABIBO
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
      ARTICLE_VENANCIO_MONDLANE,
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
      ARTICLE_UCM_VISITA_PENITENCIARIO,
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
  artigos: {
    sectionId: 'artigos',
    sectionTitle: 'Artigos & Ensaios de Opinião',
    sectionSubtitle: 'Espaço de reflexão crítica, debate universitário e ensaios académicos sobre Inteligência Artificial, qualidade do ensino e inserção profissional da juventude.',
    leadArticle: ARTICLE_OPINIAO_NASSECO,
    articles: [
      ARTICLE_OPINIAO_MARISSA,
      ARTICLE_OPINIAO_NURA,
      ARTICLE_UCM_VISITA_PENITENCIARIO
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
      ARTICLE_UCM_VISITA_PENITENCIARIO,
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
