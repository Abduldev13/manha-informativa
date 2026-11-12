export interface CommentItem {
  id: string;
  authorName: string;
  authorLocation: string;
  authorRole?: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  userLiked?: boolean;
}

export const ARTICLE_COMMENTS: Record<string, CommentItem[]> = {
  // 1. Julgamento de Venâncio Mondlane
  'julgamento-venancio-mondlane-tribunal-supremo': [
    {
      id: 'c-vm-1',
      authorName: 'Dr. Salvador Cossa',
      authorLocation: 'Maputo',
      authorRole: 'Jurista & Docente Universitário',
      avatar: 'SC',
      content: 'A decisão de admitir a presença do público e o registo escrito pela imprensa, embora sem transmissão televisiva direta, é um equilíbrio importante para assegurar a publicidade dos atos processuais garantida pelo artigo 65 da Constituição.',
      timestamp: 'Há 25 minutos',
      likes: 42
    },
    {
      id: 'c-vm-2',
      authorName: 'Graça Macuácua',
      authorLocation: 'Matola',
      authorRole: 'Leitora Assídua',
      avatar: 'GM',
      content: 'Esperamos que o Tribunal Supremo paute a sua actuação com total imparcialidade e rigor técnico. O país precisa de tranquilidade, justiça e respeito escrupuloso pelos direitos civis e políticos.',
      timestamp: 'Há 40 minutos',
      likes: 31
    },
    {
      id: 'c-vm-3',
      authorName: 'Hermínio Mabote',
      authorLocation: 'Beira',
      authorRole: 'Sociólogo',
      avatar: 'HM',
      content: 'O adiamento concedido à defesa para 17 de Novembro demonstra que os prazos processuais e o direito a uma defesa condigna estão a ser respeitados. Todo o cidadão tem direito à presunção de inocência.',
      timestamp: 'Há 1 hora',
      likes: 19
    },
    {
      id: 'c-vm-4',
      authorName: 'Amélia Sitoe',
      authorLocation: 'Nampula',
      authorRole: 'Estudante de Direito',
      avatar: 'AS',
      content: 'As cinco acusações apresentadas pelo Ministério Público são de extrema gravidade jurídica. Caberá à produção da prova em audiência de discussão e julgamento esclarecer os factos materiais.',
      timestamp: 'Há 2 horas',
      likes: 15
    },
    {
      id: 'c-vm-5',
      authorName: 'Bernardo Nhantumbo',
      authorLocation: 'Xai-Xai',
      authorRole: 'Analista Cívico',
      avatar: 'BN',
      content: 'Importante o apelo à serenidade nacional. O povo moçambicano quer ver as instituições judiciais a funcionar com maturidade democrática e transparência nos autos.',
      timestamp: 'Há 3 horas',
      likes: 24
    },
    {
      id: 'c-vm-6',
      authorName: 'Dra. Luísa Chissano',
      authorLocation: 'Maputo',
      authorRole: 'Advogada',
      avatar: 'LC',
      content: 'A garantia de que a decisão será estritamente balizada pela lei e pelos factos, como sublinhou o Presidente do Tribunal Supremo, é a postura institucional que se impõe num Estado de Direito Democrático.',
      timestamp: 'Há 4 horas',
      likes: 28
    },
    {
      id: 'c-vm-7',
      authorName: 'Paulo Tembe',
      authorLocation: 'Quelimane',
      authorRole: 'Professor do Ensino Secundário',
      avatar: 'PT',
      content: 'A cobertura jornalística por escrito é fundamental para que todo o país possa acompanhar o desfecho das sessões sem ruídos ou desinformação nas redes sociais.',
      timestamp: 'Há 5 horas',
      likes: 12
    },
    {
      id: 'c-vm-8',
      authorName: 'Filomena Da Silva',
      authorLocation: 'Pemba',
      authorRole: 'Comerciante',
      avatar: 'FS',
      content: 'Moçambique já sofreu bastante com instabilidades. Que este julgamento traga esclarecimento da verdade e fortaleça a paz e a coesão de todas as províncias.',
      timestamp: 'Há 6 horas',
      likes: 37
    },
    {
      id: 'c-vm-9',
      authorName: 'Custódio Mondlane',
      authorLocation: 'Chimoio',
      authorRole: 'Engenheiro Agrónomo',
      avatar: 'CM',
      content: 'A separação de poderes deve ser preservada a todo o custo. Confiamos na serenidade dos juízes conselheiros destacados para este julgamento histórico.',
      timestamp: 'Há 7 horas',
      likes: 14
    },
    {
      id: 'c-vm-10',
      authorName: 'Inês Vilanculos',
      authorLocation: 'Inhambane',
      authorRole: 'Ativista de Direitos Humanos',
      avatar: 'IV',
      content: 'A nota de salvaguarda da presunção de inocência no artigo é um exemplo de jornalismo ético e responsável. Parabéns ao Manhã Informativo pelo equilíbrio editorial.',
      timestamp: 'Há 8 horas',
      likes: 45
    }
  ],

  // 2. Arsenal na Premier League
  'arsenal-reforca-lideranca-premier-league': [
    {
      id: 'c-ars-1',
      authorName: 'Mauro Calisto',
      authorLocation: 'Maputo',
      authorRole: 'Adepto dos Gunners MZ',
      avatar: 'MC',
      content: 'Que início de época espetacular! Nove vitórias em dez jornadas. Arteta finalmente conseguiu o equilíbrio entre consistência defensiva e maturidade para vencer jogos difíceis como contra o Hull City.',
      timestamp: 'Há 15 minutos',
      likes: 56
    },
    {
      id: 'c-ars-2',
      authorName: 'Edson Machel',
      authorLocation: 'Nampula',
      authorRole: 'Treinador de Futsal',
      avatar: 'EM',
      content: 'Ødegaard é o coração desta equipa. Quando o jogo estava fechado e o adversário montou um autocarro, ele apareceu no momento exato aos 72 minutos para resolver.',
      timestamp: 'Há 35 minutos',
      likes: 38
    },
    {
      id: 'c-ars-3',
      authorName: 'Carlos Mabjaia',
      authorLocation: 'Beira',
      authorRole: 'Comentador Desportivo',
      avatar: 'CM',
      content: 'A crise do Manchester City é real: três derrotas consecutivas com o 3-1 do Forest. Guardiola terá de repensar a transição defensiva sem Rodri.',
      timestamp: 'Há 50 minutos',
      likes: 27
    },
    {
      id: 'c-ars-4',
      authorName: 'Zainadine Chissano',
      authorLocation: 'Matola',
      authorRole: 'Leitor',
      avatar: 'ZC',
      content: 'Ninguém estava à espera deste Brighton no 2.º lugar com 22 pontos! Estão a jogar um futebol atraente e vertical. A Premier League este ano está muito imprevisível.',
      timestamp: 'Há 1 hora',
      likes: 21
    },
    {
      id: 'c-ars-5',
      authorName: 'Sérgio Manhiça',
      authorLocation: 'Chimoio',
      authorRole: 'Adepto do Man City',
      avatar: 'SM',
      content: 'O campeonato ainda está no primeiro terço. Seis pontos de diferença recuperam-se com facilidade a partir de Janeiro. Parabéns ao Arsenal, mas ainda há muita estrada.',
      timestamp: 'Há 2 horas',
      likes: 18
    },
    {
      id: 'c-ars-6',
      authorName: 'Dário Cuna',
      authorLocation: 'Quelimane',
      authorRole: 'Estudante Universitário',
      avatar: 'DC',
      content: 'A solidez de Declan Rice e William Saliba é o verdadeiro diferencial do Arsenal este ano. Concedem pouquíssimas oportunidades claras aos rivais.',
      timestamp: 'Há 3 horas',
      likes: 29
    },
    {
      id: 'c-ars-7',
      authorName: 'Beatriz Langa',
      authorLocation: 'Maputo',
      authorRole: 'Praticante de Atletismo',
      avatar: 'BL',
      content: 'Gostei muito da inclusão da tabela de classificação logo abaixo da notícia. Ajuda a ter a visão imediata da corrida ao título!',
      timestamp: 'Há 4 horas',
      likes: 16
    },
    {
      id: 'c-ars-8',
      authorName: 'Arnaldo Tivane',
      authorLocation: 'Tete',
      authorRole: 'Professor de Educação Física',
      avatar: 'AT',
      content: 'O Liverpool com 18 pontos e o Chelsea com 16 continuam vivos. Mas este Arsenal parece muito mais resiliente psicologicamente do que nas temporadas anteriores.',
      timestamp: 'Há 5 horas',
      likes: 22
    },
    {
      id: 'c-ars-9',
      authorName: 'Nelson Guambe',
      authorLocation: 'Nacala-Porto',
      authorRole: 'Gunner Moçambique',
      avatar: 'NG',
      content: 'Este ano o troféu vai para o Emirates! Já são 4 vitórias consecutivas. A equipa soube sofrer e manter a baliza inviolada.',
      timestamp: 'Há 6 horas',
      likes: 34
    },
    {
      id: 'c-ars-10',
      authorName: 'Filipe Sengo',
      authorLocation: 'Inhambane',
      authorRole: 'Jornalista Desportivo Local',
      avatar: 'FS',
      content: 'Delap e Jair Cunha fizeram uma exibição monumental pelo Nottingham Forest contra o City. Mostra que na Premier League não há favoritos antecipados.',
      timestamp: 'Há 7 horas',
      likes: 19
    }
  ],

  // 3. Obituário Mestre Tarcísio Abibo (UCM FEC)
  'obituario-ucm-docente-tarcisio-abibo': [
    {
      id: 'c-ta-1',
      authorName: 'Dr. Eugénio Macamo',
      authorLocation: 'Nampula',
      authorRole: 'Docente da UCM - FEC',
      avatar: 'EM',
      content: 'Perdemos um colega exemplar, de uma serenidade e dedicação pedagógica raras. O Mestre Tarcísio Abibo honrou a docência universitária na nossa faculdade com brio e amor pelos estudantes. Que descanse em paz.',
      timestamp: 'Há 10 minutos',
      likes: 64
    },
    {
      id: 'c-ta-2',
      authorName: 'Vanilda Muando',
      authorLocation: 'Nampula',
      authorRole: 'Antiga Estudante de Relações Públicas',
      avatar: 'VM',
      content: 'Foi meu professor no 2.º ano. Paciente, ouvia cada dúvida com respeito e sempre nos incentivava à leitura rigorosa. O seu legado viverá em cada um dos seus formandos.',
      timestamp: 'Há 25 minutos',
      likes: 51
    },
    {
      id: 'c-ta-3',
      authorName: 'Mussá Carimo',
      authorLocation: 'Nampula',
      authorRole: 'Colega de Departamento',
      avatar: 'MC',
      content: 'Um homem humilde, generoso com os novos docentes que chegavam à Faculdade de Educação e Comunicação. A comunidade académica de Nampula está de luto profundo.',
      timestamp: 'Há 45 minutos',
      likes: 43
    },
    {
      id: 'c-ta-4',
      authorName: 'Associação de Estudantes da FEC',
      authorLocation: 'Nampula',
      authorRole: 'Direção Académica',
      avatar: 'AE',
      content: 'Em nome de todo o corpo discente da Faculdade de Educação e Comunicação, manifestamos a nossa imensa dor pelo falecimento do Mestre Tarcísio Abibo. As nossas mais sentidas condolências à família.',
      timestamp: 'Há 1 hora',
      likes: 78
    },
    {
      id: 'c-ta-5',
      authorName: 'Padre Bernardo Zeca',
      authorLocation: 'Nampula',
      authorRole: 'Capelania Universitária UCM',
      avatar: 'BZ',
      content: 'Unimo-nos em oração pelo repouso eterno do Mestre Tarcísio. Que o Senhor conforte o coração da viúva, filhos e de todos os colegas da comunidade académica.',
      timestamp: 'Há 2 horas',
      likes: 49
    },
    {
      id: 'c-ta-6',
      authorName: 'Júlia Nhavene',
      authorLocation: 'Maputo',
      authorRole: 'Docente Universitária',
      avatar: 'JN',
      content: 'Conheci o Mestre Tarcísio em seminários pedagógicos nacionais. Um profissional comprometido com a qualidade do ensino superior em Moçambique. Uma perda irreparável para a academia.',
      timestamp: 'Há 3 horas',
      likes: 35
    },
    {
      id: 'c-ta-7',
      authorName: 'Alércio Sitoe',
      authorLocation: 'Nampula',
      authorRole: 'Estudante de Jornalismo',
      avatar: 'AS',
      content: 'As suas aulas marcaram a nossa visão sobre ética na comunicação. Estamos muito abalados com esta notícia. Descansa em paz, querido Mestre.',
      timestamp: 'Há 4 horas',
      likes: 38
    },
    {
      id: 'c-ta-8',
      authorName: 'Mariamo Amade',
      authorLocation: 'Ilha de Moçambique',
      authorRole: 'Antiga Aluna FEC',
      avatar: 'MA',
      content: 'Guardo com carinho os conselhos que me deu aquando da entrega do trabalho de fim de curso. Homem de fé, integridade e saber.',
      timestamp: 'Há 5 horas',
      likes: 29
    },
    {
      id: 'c-ta-9',
      authorName: 'Prof. Doutor Celso Banze',
      authorLocation: 'Beira',
      authorRole: 'Reitoria UCM',
      avatar: 'CB',
      content: 'A história da FEC em Nampula entrelaça-se com o esforço e a dedicação pioneira do Mestre Abibo. A Universidade Católica recordará sempre a sua generosidade humana e académica.',
      timestamp: 'Há 6 horas',
      likes: 53
    },
    {
      id: 'c-ta-10',
      authorName: 'Lucas Bambo',
      authorLocation: 'Nampula',
      authorRole: 'Colaborador Administrativo UCM',
      avatar: 'LB',
      content: 'Sempre com um sorriso amável ao passar pelos corredores da faculdade. A família UCM chora a partida de um grande homem.',
      timestamp: 'Há 7 horas',
      likes: 32
    }
  ],

  // 4. Reportagem em Vídeo: Grupo “15” invade residências em Muatala
  'video-reportagem-drogas-jovens-nampula': [
    {
      id: 'c-vd-1',
      authorName: 'Salimo Abdul',
      authorLocation: 'Nampula · Muatala',
      authorRole: 'Morador de Muatala',
      avatar: 'SA',
      content: 'A situação aqui em Muatala está insustentável. O grupo "15" age de madrugada com catanas sem qualquer receio. Precisamos urgentemente de um posto policial permanente para proteger as nossas famílias.',
      timestamp: 'Há 15 minutos',
      likes: 84
    },
    {
      id: 'c-vd-2',
      authorName: 'Fátima Cassamo',
      authorLocation: 'Nampula · Muatala',
      authorRole: 'Mãe de Família',
      avatar: 'FC',
      content: 'Na madrugada de quarta-feira ninguém conseguiu dormir. Eles entram nos quintais, arrombam portas e ameaçam matar se a pessoa não entregar o telefone e o pouco dinheiro que tem. É um terror autêntico.',
      timestamp: 'Há 30 minutos',
      likes: 67
    },
    {
      id: 'c-vd-3',
      authorName: 'Tomas Cossa',
      authorLocation: 'Nampula · Muatala',
      authorRole: 'Estudante Universitário',
      avatar: 'TC',
      content: 'Parabéns à equipa do Manhã Informativo por vir ao bairro e gravar o vídeo com os depoimentos dos vizinhos. A PRM tem de reforçar o patrulhamento apeado e motorizado durante a noite toda.',
      timestamp: 'Há 45 minutos',
      likes: 52
    },
    {
      id: 'c-vd-4',
      authorName: 'Américo Vuma',
      authorLocation: 'Nampula · Muhala',
      authorRole: 'Membro da Polícia Comunitária',
      avatar: 'AV',
      content: 'A polícia comunitária faz rondas com apitos, mas esses criminosos do grupo 15 andam em bandos armados com catanas longas. Sem apoio efetivo das forças de segurança pública com viaturas, não conseguimos travá-los.',
      timestamp: 'Há 1 hora',
      likes: 43
    },
    {
      id: 'c-vd-5',
      authorName: 'Zuraida Mussa',
      authorLocation: 'Nampula · Carrupeia',
      authorRole: 'Comerciante Local',
      avatar: 'ZM',
      content: 'Exigimos a instalação imediata do posto policial prometido pelo Município e pelo Comando Provincial. Não podemos esperar que haja mortes para que as autoridades tomem medidas enérgicas.',
      timestamp: 'Há 2 horas',
      likes: 59
    },
    {
      id: 'c-vd-6',
      authorName: 'Mouzinho Bila',
      authorLocation: 'Nampula · Natikiri',
      authorRole: 'Jovem Residente',
      avatar: 'MB',
      content: 'Estes grupos juvenis conhecidos por números atuam em vários bairros periféricos de Nampula. O Comando da PRM precisa de desmantelar os líderes que financiam e guardam o material roubado.',
      timestamp: 'Há 3 horas',
      likes: 38
    },
    {
      id: 'c-vd-7',
      authorName: 'Dra. Elsa Cândido',
      authorLocation: 'Nampula',
      authorRole: 'Socióloga',
      avatar: 'EC',
      content: 'A segurança comunitária é um direito fundamental. A falta de iluminação pública em muitas vielas de Muatala cria esconderijos perfeitos para estas emboscadas. É urgente iluminar as ruas e patrulhar.',
      timestamp: 'Há 4 horas',
      likes: 41
    },
    {
      id: 'c-vd-8',
      authorName: 'Gisela Tembe',
      authorLocation: 'Maputo',
      authorRole: 'Leitora Assídua',
      avatar: 'GT',
      content: 'Solidariedade total para com as famílias de Muatala. O jornalismo de proximidade a dar voz a quem sofre assaltos em direto no vídeo. Que o Ministério do Interior atue rapidamente.',
      timestamp: 'Há 5 horas',
      likes: 33
    },
    {
      id: 'c-vd-9',
      authorName: 'Armando Cuamba',
      authorLocation: 'Nampula · Marrere',
      authorRole: 'Professor do Secundário',
      avatar: 'AC',
      content: 'Muitos dos jovens envolvidos nestes assaltos são rapazes que abandonaram a escola e caíram na delinquência. Tem de haver repressão policial aos criminosos e centros de reabilitação.',
      timestamp: 'Há 6 horas',
      likes: 46
    },
    {
      id: 'c-vd-10',
      authorName: 'Helena Sambo',
      authorLocation: 'Nampula · Belenenses',
      authorRole: 'Educadora Comunitária',
      avatar: 'HS',
      content: 'Apoio a exigência do posto policial em Muatala! Se colocarem um posto fixo com agentes presentes 24 horas, a tranquilidade volta às residências.',
      timestamp: 'Há 7 horas',
      likes: 50
    }
  ],

  // 5. Investigação Drogas Belenenses
  'investigacao-drogas-belenenses': [
    {
      id: 'c-db-1',
      authorName: 'Secretário Manuel Chicuamba',
      authorLocation: 'Nampula · Belenenses',
      authorRole: 'Liderança Comunitária',
      avatar: 'MC',
      content: 'A reportagem retratou fielmente as dificuldades que enfrentamos diariamente no nosso bairro. Já encaminhámos ao comando da PRM os pontos críticos de venda e esperamos um reforço do patrulhamento.',
      timestamp: 'Há 30 minutos',
      likes: 55
    },
    {
      id: 'c-db-2',
      authorName: 'Gito Saíde',
      authorLocation: 'Nampula · Belenenses',
      authorRole: 'Ex-Consumidor & Monitor Social',
      avatar: 'GS',
      content: 'A minha recuperação foi graças ao apoio da minha mãe e à fé. Aos jovens que estão metidos nisto, digo que é possível sair, mas é preciso querer e procurar ajuda médica sem vergonha.',
      timestamp: 'Há 1 hora',
      likes: 82
    },
    {
      id: 'c-db-3',
      authorName: 'Lurdes Matola',
      authorLocation: 'Nampula',
      authorRole: 'Comerciante de Mercearia',
      avatar: 'LM',
      content: 'Os pequenos furtos de botijas de gás e fios elétricos para sustentar o vício têm tirado a tranquilidade aos moradores. Precisamos de iluminação pública urgente nas vielas do Belenenses.',
      timestamp: 'Há 2 horas',
      likes: 47
    },
    {
      id: 'c-db-4',
      authorName: 'Dr. Valigy Mussa',
      authorLocation: 'Nampula',
      authorRole: 'Advogado do IPAJ',
      avatar: 'VM',
      content: 'O enquadramento legal deve separar o grande traficante que enriquece às custas da destruição alheia do jovem consumidor dependente que necessita de desintoxicação e medida socioeducativa.',
      timestamp: 'Há 3 horas',
      likes: 39
    },
    {
      id: 'c-db-5',
      authorName: 'Esperança Mabote',
      authorLocation: 'Nampula',
      authorRole: 'Mãe de Família',
      avatar: 'EM',
      content: 'O sofrimento das mães que veem os filhos perderem o rumo da vida é indescritível. Que este artigo sirva de alarme para o município abrir um centro de reabilitação gratuito.',
      timestamp: 'Há 4 horas',
      likes: 61
    },
    {
      id: 'c-db-6',
      authorName: 'Constantino Guambe',
      authorLocation: 'Nampula · Napipine',
      authorRole: 'Residente',
      avatar: 'CG',
      content: 'Os bairros vizinhos de Napipine e Muhala solidarizam-se com os Belenenses. O crime não escolhe fronteira, temos de nos unir em policiamento comunitário solidário.',
      timestamp: 'Há 5 horas',
      likes: 28
    },
    {
      id: 'c-db-7',
      authorName: 'Raimundo Zandamela',
      authorLocation: 'Maputo',
      authorRole: 'Sociólogo Urbano',
      avatar: 'RZ',
      content: 'A urbanização rápida sem serviços de saúde mental e espaços de lazer cria este fosso social. Parabéns pela investigação aprofundada.',
      timestamp: 'Há 6 horas',
      likes: 22
    },
    {
      id: 'c-db-8',
      authorName: 'Zaida Manjate',
      authorLocation: 'Nampula',
      authorRole: 'Voluntária da Cruz Vermelha',
      avatar: 'ZM',
      content: 'Apoio psicológico de porta em porta é o que estamos a tentar fazer. Este testemunho partilhado no jornal dá-nos força para continuar.',
      timestamp: 'Há 7 horas',
      likes: 36
    },
    {
      id: 'c-db-9',
      authorName: 'Orlando Macamo',
      authorLocation: 'Ilha de Moçambique',
      authorRole: 'Professor',
      avatar: 'OM',
      content: 'O depoimento mostra a raiz do problema: carência de apoio familiar e desesperança. Educar é prevenir.',
      timestamp: 'Há 8 horas',
      likes: 19
    },
    {
      id: 'c-db-10',
      authorName: 'Alima Ibraimo',
      authorLocation: 'Nampula',
      authorRole: 'Enfermeira Chefe',
      avatar: 'AI',
      content: 'O Hospital Central de Nampula tem recebido dezenas de casos semanais. A sociedade não pode fechar os olhos. Jornalismo de serviço público exemplar.',
      timestamp: 'Há 9 horas',
      likes: 58
    }
  ],

  // 6. UCM Visita Penitenciário Regional Norte
  'ucm-visita-penitenciario-norte': [
    {
      id: 'c-ucm-1',
      authorName: 'Dra. Elsa Cândido',
      authorLocation: 'Nampula',
      authorRole: 'Coordenadora de Curso UCM',
      avatar: 'EC',
      content: 'Iniciativas como esta dignificam a formação académica da UCM. A teoria da comunicação organizacional ganha sentido prático ao contactar com a complexa realidade do sistema prisional.',
      timestamp: 'Há 18 minutos',
      likes: 47
    },
    {
      id: 'c-ucm-2',
      authorName: 'Nuno Banze',
      authorLocation: 'Nampula',
      authorRole: 'Estudante 3.º Ano RP UCM',
      avatar: 'NB',
      content: 'Foi uma experiência transformadora. Ver de perto a importância da comunicação institucional para a reinserção social dos reclusos abriu-nos os horizontes profissionais.',
      timestamp: 'Há 35 minutos',
      likes: 39
    },
    {
      id: 'c-ucm-3',
      authorName: 'Oficial Moisés Sitoe',
      authorLocation: 'Nampula',
      authorRole: 'SERNAP · Penitenciária Regional',
      avatar: 'MS',
      content: 'O Estabelecimento Penitenciário Regional Norte tem sempre as portas abertas para a universidade. Os futuros comunicadores podem ajudar a mudar a perceção pública sobre a reabilitação.',
      timestamp: 'Há 1 hora',
      likes: 52
    },
    {
      id: 'c-ucm-4',
      authorName: 'Catarina Tembe',
      authorLocation: 'Beira',
      authorRole: 'Docente de Relações Públicas',
      avatar: 'CT',
      content: 'Excelente articulação entre extensão universitária e responsabilidade social corporativa. Parabéns aos docentes e estudantes da FEC.',
      timestamp: 'Há 2 horas',
      likes: 29
    },
    {
      id: 'c-ucm-5',
      authorName: 'Júlio Nhaca',
      authorLocation: 'Nampula',
      authorRole: 'Estudante de Marketing Estratégico',
      avatar: 'JN',
      content: 'A fotografia dos colegas na entrada do estabelecimento com os coletes oficiais da faculdade reflete o orgulho e a seriedade com que a visita foi realizada.',
      timestamp: 'Há 3 horas',
      likes: 31
    },
    {
      id: 'c-ucm-6',
      authorName: 'Dr. Alberto Chongo',
      authorLocation: 'Maputo',
      authorRole: 'Advogado & Criminólogo',
      avatar: 'AC',
      content: 'A aproximação entre estudantes e reclusos é o melhor antídoto contra o preconceito social. Todos ganham com esta ponte institucional.',
      timestamp: 'Há 4 horas',
      likes: 34
    },
    {
      id: 'c-ucm-7',
      authorName: 'Ana Maria Da Conceição',
      authorLocation: 'Nampula',
      authorRole: 'Mãe de Estudante da UCM',
      avatar: 'AC',
      content: 'Orgulhosa de ver a minha filha a aprender a olhar para o ser humano com empatia e responsabilidade profissional. A UCM está de parabéns.',
      timestamp: 'Há 5 horas',
      likes: 43
    },
    {
      id: 'c-ucm-8',
      authorName: 'Sérgio Macuácua',
      authorLocation: 'Nacala',
      authorRole: 'Gestor de Comunicação',
      avatar: 'SM',
      content: 'A comunicação de crise e o relacionamento com a imprensa são áreas fundamentais para o SERNAP. Mais estudantes deveriam fazer estágios nestas instituições.',
      timestamp: 'Há 6 horas',
      likes: 22
    },
    {
      id: 'c-ucm-9',
      authorName: 'Ermelinda Novela',
      authorLocation: 'Quelimane',
      authorRole: 'Estudante Universitária',
      avatar: 'EN',
      content: 'Queremos ver mais iniciativas destas replicadas noutras províncias do país.',
      timestamp: 'Há 7 horas',
      likes: 18
    },
    {
      id: 'c-ucm-10',
      authorName: 'Bernardino Vuma',
      authorLocation: 'Nampula',
      authorRole: 'Jornalista de Direitos Humanos',
      avatar: 'BV',
      content: 'A transparência do sistema prisional e a abertura académica geram confiança na sociedade. Manhã Informativo faz bem em dar ampla cobertura.',
      timestamp: 'Há 8 horas',
      likes: 27
    }
  ],

  // 7. Saúde Penitenciária & Drogas (Detentos Arrependidos)
  'saude-penitenciaria-nampula-drogas': [
    {
      id: 'c-sp-1',
      authorName: 'Dra. Verónica Chissano',
      authorLocation: 'Nampula',
      authorRole: 'Técnica de Saúde ICAP',
      avatar: 'VC',
      content: 'Como profissional na linha de frente na Penitenciária Regional, agradeço a sensibilidade da entrevista. O sofrimento dos jovens com crises de abstinência e sequelas neurológicas é devastador.',
      timestamp: 'Há 22 minutos',
      likes: 71
    },
    {
      id: 'c-sp-2',
      authorName: 'Dr. Pascoal Macamo',
      authorLocation: 'Maputo',
      authorRole: 'Médico Cardiologista',
      avatar: 'PM',
      content: 'O alerta sobre problemas cardiovasculares e AVC em dependentes de Maka precisa de protocolo clínico unificado em todos os hospitais provinciais.',
      timestamp: 'Há 45 minutos',
      likes: 53
    },
    {
      id: 'c-sp-3',
      authorName: 'Jaime Mondlane',
      authorLocation: 'Nampula',
      authorRole: 'Recluso em Regime Semiaberto',
      avatar: 'JM',
      content: 'O arrependimento é sincero. Perdi a minha juventude por causa de más companhias e falsas promessas. Se este meu alerta salvar um jovem lá fora, já valeu a pena.',
      timestamp: 'Há 1 hora',
      likes: 89
    },
    {
      id: 'c-sp-4',
      authorName: 'Teresa Manjate',
      authorLocation: 'Beira',
      authorRole: 'Assistente Social',
      avatar: 'TM',
      content: 'O depoimento comprova que a dependência química é uma patologia com forte componente de vulnerabilidade emocional. Apoio psiquiátrico prisional é urgente.',
      timestamp: 'Há 2 horas',
      likes: 37
    },
    {
      id: 'c-sp-5',
      authorName: 'Artur Bila',
      authorLocation: 'Nampula',
      authorRole: 'Pastor Evangélico',
      avatar: 'AB',
      content: 'Trabalhamos na pastoral prisional e vemos milagres diários de homens que reencontram a dignidade através do arrependimento e do trabalho nas oficinas.',
      timestamp: 'Há 3 horas',
      likes: 41
    },
    {
      id: 'c-sp-6',
      authorName: 'Ivone Guambe',
      authorLocation: 'Matola',
      authorRole: 'Enfermeira de Toxicologia',
      avatar: 'IG',
      content: 'Parabéns ao Manhã Informativo pela entrevista completa na íntegra sem cortes sensacionalistas.',
      timestamp: 'Há 4 horas',
      likes: 25
    },
    {
      id: 'c-sp-7',
      authorName: 'Lucas Mabote',
      authorLocation: 'Nacala',
      authorRole: 'Sociólogo',
      avatar: 'LM',
      content: 'As causas apontadas pela técnica de saúde — frustração, más amizades e ausência de suporte familiar — devem ser debatidas em todas as escolas secundárias.',
      timestamp: 'Há 5 horas',
      likes: 33
    },
    {
      id: 'c-sp-8',
      authorName: 'Margarida Sitoe',
      authorLocation: 'Xai-Xai',
      authorRole: 'Mãe Solidária',
      avatar: 'MS',
      content: 'Chorei ao ler o desabafo dos reclusos arrependidos. Nenhuma mãe cria um filho para a prisão. Que Deus dê forças às equipas do ICAP.',
      timestamp: 'Há 6 horas',
      likes: 62
    },
    {
      id: 'c-sp-9',
      authorName: 'Cândido Tembe',
      authorLocation: 'Chimoio',
      authorRole: 'Advogado Pro Bono',
      avatar: 'CT',
      content: 'A reinserção social é o objetivo supremo da pena privativa de liberdade. O Estado tem de garantir capacitação profissional dentro das cadeias.',
      timestamp: 'Há 7 horas',
      likes: 28
    },
    {
      id: 'c-sp-10',
      authorName: 'Dra. Benilde Nhantumbo',
      authorLocation: 'Pemba',
      authorRole: 'Delegada de Saúde',
      avatar: 'BN',
      content: 'A integração de reclusos de Cabo Delgado, Nampula e Zambézia mostra a importância regional desta penitenciária. Matéria de extrema utilidade pública.',
      timestamp: 'Há 8 horas',
      likes: 31
    }
  ],

  // 8. Artigo de Opinião: João Nasseco (IA e o Vazio do Pensamento)
  'op-joao-nasseco-ia-universidade': [
    {
      id: 'c-jn-1',
      authorName: 'Prof. Doutor Alberto Nhaca',
      authorLocation: 'Maputo',
      authorRole: 'Catedrático UEM',
      avatar: 'AN',
      content: 'Excelente ensaio do colega João Nasseco. A terceirização do pensamento para a IA generativa está a gerar uma ilusão perigosa de produtividade nos nossos campus. A dor do erro é insubstituível na forja do espírito crítico.',
      timestamp: 'Há 30 minutos',
      likes: 64
    },
    {
      id: 'c-jn-2',
      authorName: 'Telma Cossa',
      authorLocation: 'Nampula',
      authorRole: 'Estudante de Mestrado UCM',
      avatar: 'TC',
      content: 'Concordo em parte, mas a IA quando usada como copiloto de pesquisa bibliográfica expande as nossas capacidades. O erro é usá-la para redigir o ensaio em vez de debater com ela.',
      timestamp: 'Há 45 minutos',
      likes: 42
    },
    {
      id: 'c-jn-3',
      authorName: 'Marcos Manhiça',
      authorLocation: 'Beira',
      authorRole: 'Engenheiro Informático',
      avatar: 'MM',
      content: 'O alerta sobre a perda da profundidade argumentativa é vital. Os estudantes entregam relatórios com vocabulário impecável mas quando chamados à defesa oral não conseguem sustentar as premissas.',
      timestamp: 'Há 1 hora',
      likes: 58
    },
    {
      id: 'c-jn-4',
      authorName: 'Dra. Nura Ali',
      authorLocation: 'Nampula',
      authorRole: 'Docente & Colunista',
      avatar: 'NA',
      content: 'Parabéns ao João Nasseco pelo texto lapidar. Temos de remodelar as formas de avaliação nas nossas faculdades: mais orais, debates ao vivo e resolução em tempo real.',
      timestamp: 'Há 2 horas',
      likes: 49
    },
    {
      id: 'c-jn-5',
      authorName: 'Bento Cuambe',
      authorLocation: 'Quelimane',
      authorRole: 'Estudante de Filosofia',
      avatar: 'BC',
      content: 'A frase sobre "o desconforto do erro e o esforço cognitivo" resume perfeitamente a pedagogia socrática. Sem atrito intelectual não há ciência.',
      timestamp: 'Há 3 horas',
      likes: 37
    },
    {
      id: 'c-jn-6',
      authorName: 'Helena Vilanculos',
      authorLocation: 'Matola',
      authorRole: 'Pedagoga',
      avatar: 'HV',
      content: 'Os próprios docentes universitários precisam de formação urgente para saber identificar plágio algorítmico e propor desafios que a máquina não consegue resolver.',
      timestamp: 'Há 4 horas',
      likes: 31
    },
    {
      id: 'c-jn-7',
      authorName: 'Cláudio Zandamela',
      authorLocation: 'Nampula',
      authorRole: 'Estudante de Direito',
      avatar: 'CZ',
      content: 'Texto provocador e necessário. A universidade não pode virar uma gráfica de diplomas gerados por inteligência artificial.',
      timestamp: 'Há 5 horas',
      likes: 44
    },
    {
      id: 'c-jn-8',
      authorName: 'Sara Tembe',
      authorLocation: 'Inhambane',
      authorRole: 'Bibliotecária',
      avatar: 'ST',
      content: 'Voltar aos livros físicos e aos arquivos de fontes primárias tornou-se um ato de resistência cognitiva. Obrigada por este brilhante artigo.',
      timestamp: 'Há 6 horas',
      likes: 29
    },
    {
      id: 'c-jn-9',
      authorName: 'Geraldo Bive',
      authorLocation: 'Maputo',
      authorRole: 'Arquiteto & Docente',
      avatar: 'GB',
      content: 'No desenho arquitetónico vemos o mesmo problema: renders automáticos sem compreensão estrutural das forças de sustentação do edifício. Aplica-se a todas as áreas.',
      timestamp: 'Há 7 horas',
      likes: 35
    },
    {
      id: 'c-jn-10',
      authorName: 'Delfina Langa',
      authorLocation: 'Chitengo',
      authorRole: 'Investigadora Científica',
      avatar: 'DL',
      content: 'A ciência exige olhar de campo e paciência biológica. A IA é instrumento estatístico, não é mente pensante.',
      timestamp: 'Há 8 horas',
      likes: 40
    }
  ],

  // 9. Artigo de Opinião: Marissa Alexandre (Sem Estágio, Sem Experiência)
  'op-marissa-alexandre-estagios-curriculares': [
    {
      id: 'c-ma-1',
      authorName: 'Afonso Macuácua',
      authorLocation: 'Nampula',
      authorRole: 'Recém-Licenciado em Gestão',
      avatar: 'AM',
      content: 'A Marissa tocou na ferida de milhares de universitários em Moçambique! Pedem-nos 3 a 5 anos de experiência para vagas júnior, mas as empresas recusam aceitar estagiários curriculares. Um círculo vicioso desumano.',
      timestamp: 'Há 25 minutos',
      likes: 88
    },
    {
      id: 'c-ma-2',
      authorName: 'Dra. Teresa Munguambe',
      authorLocation: 'Maputo',
      authorRole: 'Diretora de Recursos Humanos',
      avatar: 'TM',
      content: 'Como profissional de RH, admito que as empresas têm de criar pontes com as universidades. A UCM e a UEM deviam firmar protocolos vinculativos com a CTA.',
      timestamp: 'Há 40 minutos',
      likes: 54
    },
    {
      id: 'c-ma-3',
      authorName: 'Joaquim Sitoe',
      authorLocation: 'Beira',
      authorRole: 'Estudante de Engenharia',
      avatar: 'JS',
      content: 'No Corredor da Beira vemos navios e camiões a passar todos os dias, mas as empresas de logística preferem contratar no estrangeiro a formar estudantes locais.',
      timestamp: 'Há 1 hora',
      likes: 67
    },
    {
      id: 'c-ma-4',
      authorName: 'Valéria Chissano',
      authorLocation: 'Nampula',
      authorRole: 'Estudante UCM FEC',
      avatar: 'VC',
      content: 'Orgulho na nossa colega Marissa por defender os nossos direitos de forma tão articulada e corajosa. Precisamos de estágios remunerados ou com subsídio de transporte.',
      timestamp: 'Há 2 horas',
      likes: 72
    },
    {
      id: 'c-ma-5',
      authorName: 'Prof. Doutor Zacarias Tembe',
      authorLocation: 'Nampula',
      authorRole: 'Decano Universitário',
      avatar: 'ZT',
      content: 'A academia tem a obrigação de acompanhar o estudante até à inserção profissional. A proposta de dedução fiscal para empresas que acolham estagiários devia ir à Assembleia da República.',
      timestamp: 'Há 3 horas',
      likes: 61
    },
    {
      id: 'c-ma-6',
      authorName: 'Leonor Guambe',
      authorLocation: 'Matola',
      authorRole: 'Empreendedora',
      avatar: 'LG',
      content: 'Na minha pequena empresa já recebi 4 estagiárias da universidade. A dedicação e vontade de aprender superam qualquer falta de experiência inicial.',
      timestamp: 'Há 4 horas',
      likes: 45
    },
    {
      id: 'c-ma-7',
      authorName: 'Bruno Nhantumbo',
      authorLocation: 'Xai-Xai',
      authorRole: 'Economista Júnior',
      avatar: 'BN',
      content: 'O desemprego juvenil no país não é por falta de talento, é por falta de oportunidade de primeiro emprego e estágio estruturado.',
      timestamp: 'Há 5 horas',
      likes: 53
    },
    {
      id: 'c-ma-8',
      authorName: 'Filipa Cossa',
      authorLocation: 'Pemba',
      authorRole: 'Estudante de Contabilidade',
      avatar: 'FC',
      content: 'Em Cabo Delgado as petrolíferas deveriam ser obrigadas por lei a ter 30% de estagiários moçambicanos nas suas sedes administrativas.',
      timestamp: 'Há 6 horas',
      likes: 48
    },
    {
      id: 'c-ma-9',
      authorName: 'Simão Bila',
      authorLocation: 'Chimoio',
      authorRole: 'Presidente de Núcleo Estudantil',
      avatar: 'SB',
      content: 'Excelente ensaio! Vamos partilhar este artigo nos grupos de estudantes de todas as faculdades do Centro e Norte.',
      timestamp: 'Há 7 horas',
      likes: 39
    },
    {
      id: 'c-ma-10',
      authorName: 'Inácio Mondlane',
      authorLocation: 'Nacala-Porto',
      authorRole: 'Técnico de Logística',
      avatar: 'IM',
      content: 'A experiência ganha-se no chão de fábrica e no escritório. Parabéns à autora por dar voz à nossa angústia de cada formatura.',
      timestamp: 'Há 8 horas',
      likes: 57
    }
  ],

  // 10. Artigo de Opinião: Nura Ali (A Inteligência Artificial nos Debates Académicos)
  'op-nura-ali-ia-debates-academicos': [
    {
      id: 'c-na-1',
      authorName: 'Dra. Carla Mabote',
      authorLocation: 'Nampula',
      authorRole: 'Docente de Ética & Comunicação',
      avatar: 'CM',
      content: 'Excelente complemento ao artigo do colega Nasseco. A Dra. Nura Ali aponta com precisão o caminho: a IA deve ser objeto de escrutínio crítico, não de proibição ingénua.',
      timestamp: 'Há 15 minutos',
      likes: 41
    },
    {
      id: 'c-na-2',
      authorName: 'Manuel Chissano',
      authorLocation: 'Maputo',
      authorRole: 'Pesquisador em IA & Dados',
      avatar: 'MC',
      content: 'A soberania digital africana passa por treinar modelos de linguagem com autores moçambicanos como Craveirinha, Chiziane e Couto, evitando o viés cognitivo ocidental.',
      timestamp: 'Há 35 minutos',
      likes: 59
    },
    {
      id: 'c-na-3',
      authorName: 'Sandra Guambe',
      authorLocation: 'Beira',
      authorRole: 'Estudante de Ciências da Educação',
      avatar: 'SG',
      content: 'Nas defesas orais que a Dra. Nura propõe, aprende-se dez vezes mais do que a entregar trabalhos impressos que ninguém lê.',
      timestamp: 'Há 1 hora',
      likes: 33
    },
    {
      id: 'c-na-4',
      authorName: 'João Nasseco',
      authorLocation: 'Nampula',
      authorRole: 'Docente & Autor',
      avatar: 'JN',
      content: 'Subscrevo inteiramente as reflexões da colega Nura Ali. A universidade moçambicana tem o dever histórico de liderar esta discussão pedagógica com rigor e humanismo.',
      timestamp: 'Há 2 horas',
      likes: 74
    },
    {
      id: 'c-na-5',
      authorName: 'Eusébio Sitoe',
      authorLocation: 'Quelimane',
      authorRole: 'Sociólogo',
      avatar: 'ES',
      content: 'A criação de laboratórios de ética tecnológica nos campus é uma proposta urgente que as reitorias deveriam financiar com fundos de investigação.',
      timestamp: 'Há 3 horas',
      likes: 28
    },
    {
      id: 'c-na-6',
      authorName: 'Helena Da Silva',
      authorLocation: 'Nampula',
      authorRole: 'Estudante de Relações Públicas',
      avatar: 'HS',
      content: 'A professora Nura sempre nos desafia a pensar com a nossa própria cabeça nas aulas da FEC. Que orgulho ver o seu pensamento publicado no Manhã Informativo.',
      timestamp: 'Há 4 horas',
      likes: 46
    },
    {
      id: 'c-na-7',
      authorName: 'Patrício Macamo',
      authorLocation: 'Matola',
      authorRole: 'Engenheiro de Redes',
      avatar: 'PM',
      content: 'A máquina calcula probabilidades estatísticas de palavras; quem dá significado e responsabilidade moral é o ser humano. Texto brilhante.',
      timestamp: 'Há 5 horas',
      likes: 36
    },
    {
      id: 'c-na-8',
      authorName: 'Zulmira Tembe',
      authorLocation: 'Tete',
      authorRole: 'Professora de Língua Portuguesa',
      avatar: 'ZT',
      content: 'A perda da capacidade de redigir parágrafos coesos e expressar emoção autêntica é o grande drama da nova geração digital. Obrigada por este alerta.',
      timestamp: 'Há 6 horas',
      likes: 30
    },
    {
      id: 'c-na-9',
      authorName: 'Álvaro Nhantumbo',
      authorLocation: 'Inhambane',
      authorRole: 'Filósofo',
      avatar: 'AN',
      content: 'A sabedoria ubuntu não pode ser automatizada. O conhecimento constrói-se na comunidade e no diálogo interpessoal vivo.',
      timestamp: 'Há 7 horas',
      likes: 38
    },
    {
      id: 'c-na-10',
      authorName: 'Graça Vuma',
      authorLocation: 'Xai-Xai',
      authorRole: 'Mestre em Educação',
      avatar: 'GV',
      content: 'A secção de Artigos do jornal está de parabéns por promover este fórum intelectual de alto nível para todo o país.',
      timestamp: 'Há 8 horas',
      likes: 49
    }
  ],

  // 11. Grande Investigação Corredor de Nacala
  'lead-nacala-energia': [
    {
      id: 'c-ln-1',
      authorName: 'Eng. Zacarias Matusse',
      authorLocation: 'Nacala-Porto',
      authorRole: 'Operador Portuário Sénior',
      avatar: 'ZM',
      content: 'O dragamento profundo para 14 metros transformou radicalmente a nossa produtividade. Navios Post-Panamax que antes iam para Durban agora descarregam diretamente em Nacala.',
      timestamp: 'Há 25 minutos',
      likes: 52
    },
    {
      id: 'c-ln-2',
      authorName: 'Celso Banze',
      authorLocation: 'Nampula',
      authorRole: 'Especialista em Logística SADC',
      avatar: 'CB',
      content: 'A conexão ferroviária ao Malawi e Zâmbia reduz os custos de frete em mais de 35%. É a consolidação geoestratégica de Moçambique no Índico.',
      timestamp: 'Há 45 minutos',
      likes: 44
    },
    {
      id: 'c-ln-3',
      authorName: 'Mário Cuna',
      authorLocation: 'Nampula',
      authorRole: 'Presidente de Associação Comercial',
      avatar: 'MC',
      content: 'A retenção de 12% das receitas para capacitação profissional da juventude de Nampula foi uma decisão histórica da Assembleia Provincial.',
      timestamp: 'Há 1 hora',
      likes: 38
    },
    {
      id: 'c-ln-4',
      authorName: 'Dra. Samira Ibraimo',
      authorLocation: 'Pemba',
      authorRole: 'Economista de Energia',
      avatar: 'SI',
      content: 'A integração da energia solar de Metoro com Cahora Bassa garante energia firme para os parques industriais de processamento de castanha e grafite.',
      timestamp: 'Há 2 horas',
      likes: 29
    },
    {
      id: 'c-ln-5',
      authorName: 'Hilário Chongo',
      authorLocation: 'Cuamba',
      authorRole: 'Comerciante Agrícola',
      avatar: 'HC',
      content: 'Os agricultores do Niassa e Zambézia conseguem agora escoar soja e milho em vagões fechados sem perdas por humidade. Grande avanço!',
      timestamp: 'Há 3 horas',
      likes: 33
    },
    {
      id: 'c-ln-6',
      authorName: 'Beatriz Mondlane',
      authorLocation: 'Maputo',
      authorRole: 'Auditora de Infraestruturas',
      avatar: 'BM',
      content: 'Excelente reportagem fotográfica e de dados. A transparência nos números de investimento dá credibilidade internacional ao país.',
      timestamp: 'Há 4 horas',
      likes: 24
    },
    {
      id: 'c-ln-7',
      authorName: 'Américo Tembe',
      authorLocation: 'Nacala-a-Velha',
      authorRole: 'Pescador Artesanal',
      avatar: 'AT',
      content: 'Esperamos que os fundos comunitários também cheguem às comunidades de pescadores com novos cais e fábricas de gelo para conserva.',
      timestamp: 'Há 5 horas',
      likes: 41
    },
    {
      id: 'c-ln-8',
      authorName: 'Félix Guambe',
      authorLocation: 'Beira',
      authorRole: 'Gestor Ferroviário',
      avatar: 'FG',
      content: 'Os corredores da Beira e de Nacala complementam-se perfeitamente na captação da carga dos países vizinhos sem acesso ao mar.',
      timestamp: 'Há 6 horas',
      likes: 27
    },
    {
      id: 'c-ln-9',
      authorName: 'Leontina Sitoe',
      authorLocation: 'Matola',
      authorRole: 'Leitora Assídua',
      avatar: 'LS',
      content: 'Gostei muito da narração em áudio da reportagem. Ouvi no carro enquanto viajava. Parabéns pelo formato multimédia.',
      timestamp: 'Há 7 horas',
      likes: 31
    },
    {
      id: 'c-ln-10',
      authorName: 'Dr. Arlindo Muthemba',
      authorLocation: 'Nacala-Porto',
      authorRole: 'Editor de Economia',
      avatar: 'AM',
      content: 'Obrigado a todos os leitores pelos comentários construtivos. Continuaremos a acompanhar as etapas de operacionalização do cais Post-Panamax.',
      timestamp: 'Há 8 horas',
      likes: 65
    }
  ],

  // 12. Banco Central e Mecanismo Cambial
  'lead-banco-central-reservas': [
    {
      id: 'c-bc-1',
      authorName: 'Dra. Ivone Patel',
      authorLocation: 'Maputo',
      authorRole: 'Analista Financeira BVM',
      avatar: 'IP',
      content: 'A taxa bonificada de 7,5% para o Crédito Verde Agrário é uma lufada de ar fresco para as cooperativas de fruticultura e cereais.',
      timestamp: 'Há 20 minutos',
      likes: 45
    },
    {
      id: 'c-bc-2',
      authorName: 'Salomão Macamo',
      authorLocation: 'Chimoio',
      authorRole: 'Produtor de Macadâmia',
      avatar: 'SM',
      content: 'Se conseguirmos financiar sistemas de rega gota-a-gota com este mecanismo, a nossa produtividade por hectare vai duplicar até 2028.',
      timestamp: 'Há 40 minutos',
      likes: 38
    },
    {
      id: 'c-bc-3',
      authorName: 'Carlos Tembe',
      authorLocation: 'Nampula',
      authorRole: 'Exportador de Sésamo',
      avatar: 'CT',
      content: 'A cobertura de 5,2 meses de importações dá uma segurança enorme aos investidores contra desvalorizações súbitas do Metical.',
      timestamp: 'Há 1 hora',
      likes: 29
    },
    {
      id: 'c-bc-4',
      authorName: 'Graça Bila',
      authorLocation: 'Matola',
      authorRole: 'Gestora de PME',
      avatar: 'GB',
      content: 'O desafio agora é fazer com que a banca comercial simplifique as exigências de garantias reais para as micro e pequenas empresas.',
      timestamp: 'Há 2 horas',
      likes: 51
    },
    {
      id: 'c-bc-5',
      authorName: 'Dr. Bento Tamele',
      authorLocation: 'Maputo',
      authorRole: 'Colunista de Mercados',
      avatar: 'BT',
      content: 'A estabilidade cambial em torno dos 63,85 MT por Dólar tem sido o pilar do controlo da inflação abaixo de 6%. Excelente rigor técnico.',
      timestamp: 'Há 3 horas',
      likes: 34
    },
    {
      id: 'c-bc-6',
      authorName: 'Mateus Chissano',
      authorLocation: 'Beira',
      authorRole: 'Despachante Aduaneiro',
      avatar: 'MC',
      content: 'A liquidação de importações agrícolas em Meticais poupa divisas preciosas ao Tesouro Nacional. Política monetária acertada.',
      timestamp: 'Há 4 horas',
      likes: 26
    },
    {
      id: 'c-bc-7',
      authorName: 'Lina Guambe',
      authorLocation: 'Xai-Xai',
      authorRole: 'Líder Cooperativista',
      avatar: 'LG',
      content: 'Esperamos que as agências bancárias distritais em Gaza e Inhambane divulguem as fichas de candidatura a este crédito bonificado.',
      timestamp: 'Há 5 horas',
      likes: 37
    },
    {
      id: 'c-bc-8',
      authorName: 'Armindo Zandamela',
      authorLocation: 'Nacala',
      authorRole: 'Contabilista Certificado',
      avatar: 'AZ',
      content: 'Os gráficos e indicadores sintéticos facilitam muito a compreensão das medidas pelo público em geral. Parabéns à editoria económica.',
      timestamp: 'Há 6 horas',
      likes: 22
    },
    {
      id: 'c-bc-9',
      authorName: 'Fátima Novela',
      authorLocation: 'Quelimane',
      authorRole: 'Comerciante de Castanha',
      avatar: 'FN',
      content: 'O apoio à secagem e refrigeração evita que toneladas de castanha e milho se percam nos celeiros comunitários após a colheita.',
      timestamp: 'Há 7 horas',
      likes: 33
    },
    {
      id: 'c-bc-10',
      authorName: 'Inácio Cossa',
      authorLocation: 'Tete',
      authorRole: 'Professor de Economia',
      avatar: 'IC',
      content: 'A articulação entre a CTA e o Banco Central prova que o diálogo público-privado produz reformas estruturantes para o país.',
      timestamp: 'Há 8 horas',
      likes: 42
    }
  ]
};

// Fallback high-quality comments generator for any article not in the curated dictionary
export function getCommentsForArticle(articleId: string, articleTitle: string): CommentItem[] {
  if (ARTICLE_COMMENTS[articleId]) {
    return ARTICLE_COMMENTS[articleId];
  }

  // Generate 10 realistic, engaging Mozambican civic comments based on title context
  const defaultNames = [
    { name: 'Dr. Salvador Cossa', city: 'Maputo', role: 'Jurista & Docente' },
    { name: 'Vanilda Muando', city: 'Nampula', role: 'Estudante Universitária' },
    { name: 'Carlos Mabjaia', city: 'Beira', role: 'Analista Cívico' },
    { name: 'Fátima Cassamo', city: 'Nampula', role: 'Comunidade Local' },
    { name: 'Hermínio Mabote', city: 'Matola', role: 'Sociólogo' },
    { name: 'Dra. Elsa Cândido', city: 'Nampula', role: 'Professora do Ensino Superior' },
    { name: 'Mário Cuna', city: 'Chimoio', role: 'Comerciante' },
    { name: 'Inês Vilanculos', city: 'Inhambane', role: 'Leitora Assídua' },
    { name: 'Eng. Zacarias Matusse', city: 'Nacala-Porto', role: 'Técnico Especialista' },
    { name: 'Lurdes Matola', city: 'Quelimane', role: 'Educadora Cívica' }
  ];

  const commentTemplates = [
    `Uma reportagem de grande relevância sobre ${articleTitle.slice(0, 50)}... É fundamental que a sociedade acompanhe com rigor e espírito crítico estas matérias que moldam o nosso futuro coletivo.`,
    `A cobertura jornalística do Manhã Informativo prima pela clareza de factos e rigor documental. Parabéns pela profundidade com que abordam as questões do país.`,
    `Gostaria de destacar a pertinência dos pontos levantados. Em Nampula e nas províncias do Norte, estes debates tocam no coração das preocupações diárias dos cidadãos.`,
    `Muito importante a contextualização legal e histórica apresentada. Ajuda os jovens e os estudantes universitários a compreender os processos com maturidade.`,
    `Excelente iniciativa editorial. Partilhei com colegas de trabalho e familiares porque toca em questões centrais para o desenvolvimento humano e institucional em Moçambique.`,
    `Ouvir todas as partes com equilíbrio ético é a marca deste jornal. Que continuem a dar voz aos protagonistas do terreno e aos especialistas.`,
    `Este tipo de esclarecimento público evita a circulação de boatos e desinformação nas redes sociais. A credibilidade da imprensa de investigação é vital.`,
    `A perspectiva apresentada é muito lúcida. Precisamos de mais políticas públicas que traduzam estas investigações em melhorias concretas para a vida do povo.`,
    `Parabéns aos autores e à redação central pela dedicação no apuramento das fontes. Leitura obrigatória desta edição.`,
    `Subscrevo integralmente a análise. Acompanharei com atenção os próximos desdobramentos desta temática no jornal.`
  ];

  const initials = ['SC', 'VM', 'CM', 'FC', 'HM', 'EC', 'MC', 'IV', 'ZM', 'LM'];
  const times = ['Há 18 minutos', 'Há 32 minutos', 'Há 55 minutos', 'Há 1 hora', 'Há 2 horas', 'Há 3 horas', 'Há 4 horas', 'Há 5 horas', 'Há 6 horas', 'Há 7 horas'];
  const baseLikes = [45, 38, 29, 52, 21, 36, 19, 44, 27, 33];

  return defaultNames.map((person, idx) => ({
    id: `c-gen-${articleId}-${idx}`,
    authorName: person.name,
    authorLocation: person.city,
    authorRole: person.role,
    avatar: initials[idx] || 'MI',
    content: commentTemplates[idx],
    timestamp: times[idx] || 'Hoje',
    likes: baseLikes[idx] || 15
  }));
}
