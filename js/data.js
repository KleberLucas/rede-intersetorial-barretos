/**
 * Dados da Rede Intersetorial de Barretos.
 * Edite este objeto para adicionar, remover ou alterar categorias e instituições.
 */
const REDE_DATA = {
  titulo: "Rede Intersetorial de Barretos",
  subtitulo: "Guia rápido de atendimento e encaminhamentos",
  centro: {
    titulo: "Rede Intersetorial",
    subtitulo: "Juntos, conectamos cuidado e oportunidades!"
  },
  legenda: [
    { tipo: "procura", rotulo: "procura direta" },
    { tipo: "encaminhamento", rotulo: "encaminhamento" },
    { tipo: "rede", rotulo: "rede parceira" }
  ],
  comoUsar: [
    "Identifique a categoria que melhor se encaixa na sua necessidade.",
    "Toque ou clique em um órgão para ver informações completas.",
    "Em caso de dúvida, ligue para qualquer instituição da rede."
  ],
  categorias: [
    {
      id: 1,
      nome: "Assistência e Proteção Social",
      cor: "#e85d04",
      corClara: "#fff3e6",
      icone: "🤝",
      instituicoes: [
        {
          nome: "Casa Abrigo Acolher Mais",
          topicos: [
            "famílias em situação de vulnerabilidade",
            "crianças e adolescentes",
            "encaminhamento para rede"
          ],
          contato: {
            telefone: "(17) 3310-4101",
            email: "acolhermais@barretos.sp.gov.br",
            site: "www.acolhermais-barretos.org.br"
          },
          tipo: "encaminhamento",
          icone: "🏠",
          detalhes: {
            descricao: "Serviço de acolhimento institucional voltado a famílias e crianças em situação de risco social, com acompanhamento integral e articulação com a rede municipal.",
            endereco: "Rua das Acácias, 245 – Centro, Barretos/SP",
            horario: "Segunda a sexta, das 8h às 17h",
            publicoAlvo: "Famílias, crianças e adolescentes em vulnerabilidade social",
            servicos: [
              "Acolhimento temporário",
              "Acompanhamento familiar",
              "Encaminhamento para CRAS e CREAS",
              "Orientação sobre benefícios sociais"
            ]
          }
        },
        {
          nome: "Centro Dia Esperança",
          topicos: [
            "idosos em vulnerabilidade",
            "acompanhamento social",
            "atividades coletivas"
          ],
          contato: {
            telefone: "(17) 3310-4102",
            email: "esperanca@barretos.sp.gov.br"
          },
          tipo: "procura",
          icone: "👴",
          detalhes: {
            descricao: "Espaço de convivência e cuidado diurno para idosos, promovendo autonomia, saúde e integração social por meio de atividades culturais e de lazer.",
            endereco: "Av. 43, 1120 – Herculano Candeia, Barretos/SP",
            horario: "Segunda a sexta, das 7h30 às 16h30",
            publicoAlvo: "Idosos a partir de 60 anos em situação de vulnerabilidade",
            servicos: [
              "Atividades físicas e recreativas",
              "Refeições balanceadas",
              "Acompanhamento social e de saúde",
              "Oficinas de artesanato e memória"
            ]
          }
        },
        {
          nome: "Núcleo Acolher Família",
          topicos: [
            "orientação social",
            "benefícios e cadastros",
            "acompanhamento familiar"
          ],
          contato: {
            telefone: "(17) 3310-4103",
            site: "www.nucleoacolher.org.br"
          },
          tipo: "procura",
          icone: "👨‍👩‍👧",
          detalhes: {
            descricao: "Núcleo de referência para orientação social, cadastramento em programas públicos e acompanhamento de famílias em busca de proteção social.",
            endereco: "Rua 24, 380 – América, Barretos/SP",
            horario: "Segunda a sexta, das 8h às 18h | Sábado, das 8h às 12h",
            publicoAlvo: "Famílias da comunidade em geral",
            servicos: [
              "Cadastro Único e Bolsa Família",
              "Orientação sobre direitos sociais",
              "Visitas domiciliares",
              "Grupos de apoio a pais e mães"
            ]
          }
        }
      ]
    },
    {
      id: 2,
      nome: "Juventude, Educação e Desenvolvimento",
      cor: "#1d4e89",
      corClara: "#e8f0fa",
      icone: "📚",
      instituicoes: [
        {
          nome: "Projeto Futuro Jovem",
          topicos: [
            "orientação profissional",
            "cursos e oficinas",
            "parcerias com empresas"
          ],
          contato: {
            telefone: "(17) 3310-4201",
            email: "futurojovem@barretos.sp.gov.br",
            site: "www.futurojovem-barretos.org.br"
          },
          tipo: "rede",
          icone: "🎓",
          detalhes: {
            descricao: "Projeto de qualificação profissional e inserção no mercado de trabalho para jovens, com cursos, estágios e parcerias com o setor produtivo local.",
            endereco: "Rua 15, 890 – Centro, Barretos/SP",
            horario: "Segunda a sexta, das 9h às 18h",
            publicoAlvo: "Jovens de 16 a 29 anos",
            servicos: [
              "Cursos de informática e comunicação",
              "Oficinas de empreendedorismo",
              "Feiras de emprego",
              "Mentoria profissional"
            ]
          }
        },
        {
          nome: "Espaço Crescer e Aprender",
          topicos: [
            "alfabetização de jovens e adultos",
            "reforço escolar",
            "atividades educativas"
          ],
          contato: {
            telefone: "(17) 3310-4202",
            email: "crescer@barretos.sp.gov.br"
          },
          tipo: "procura",
          icone: "✏️",
          detalhes: {
            descricao: "Centro educacional comunitário que oferece alfabetização, reforço escolar e atividades culturais para crianças, jovens e adultos.",
            endereco: "Rua 7, 456 – Exposição, Barretos/SP",
            horario: "Segunda a sexta, das 13h às 21h",
            publicoAlvo: "Crianças, jovens e adultos em busca de educação",
            servicos: [
              "Alfabetização de jovens e adultos",
              "Reforço escolar gratuito",
              "Biblioteca comunitária",
              "Oficinas de leitura e artes"
            ]
          }
        },
        {
          nome: "Centro Esportivo Comunidade",
          topicos: [
            "esportes e lazer",
            "integração social",
            "atividades para crianças e jovens"
          ],
          contato: {
            telefone: "(17) 3310-4203",
            site: "www.centroesportivo-barretos.org.br"
          },
          tipo: "rede",
          icone: "⚽",
          detalhes: {
            descricao: "Espaço esportivo aberto à comunidade com modalidades variadas, promovendo saúde, lazer e integração social entre crianças e jovens.",
            endereco: "Av. Eng. Necker Câmara, 1500 – Zequinha Amêndola, Barretos/SP",
            horario: "Terça a domingo, das 8h às 20h",
            publicoAlvo: "Crianças, adolescentes e jovens de 6 a 24 anos",
            servicos: [
              "Futebol, vôlei e basquete",
              "Natação e hidroginástica",
              "Judô e capoeira",
              "Eventos esportivos comunitários"
            ]
          }
        }
      ]
    },
    {
      id: 3,
      nome: "Saúde e Cuidados",
      cor: "#2d6a4f",
      corClara: "#e8f5ee",
      icone: "💚",
      instituicoes: [
        {
          nome: "Núcleo Viver Livre",
          topicos: [
            "adolescentes, adultos e famílias",
            "prevenção e apoio",
            "grupos de apoio"
          ],
          contato: {
            telefone: "(17) 3310-4301",
            email: "viverlivre@barretos.sp.gov.br"
          },
          tipo: "procura",
          icone: "🌿",
          detalhes: {
            descricao: "Núcleo de prevenção e apoio em saúde mental e dependências, com grupos terapêuticos e acompanhamento para adolescentes, adultos e famílias.",
            endereco: "Rua 18, 670 – Centro, Barretos/SP",
            horario: "Segunda a sexta, das 8h às 17h",
            publicoAlvo: "Adolescentes, adultos e familiares",
            servicos: [
              "Grupos de apoio e prevenção",
              "Acolhimento psicossocial",
              "Palestras educativas",
              "Encaminhamento para tratamento especializado"
            ]
          }
        },
        {
          nome: "Casa de Acolhimento Renascer",
          topicos: [
            "mulheres em situação de risco",
            "apoio psicossocial",
            "acolhimento temporário"
          ],
          contato: {
            telefone: "(17) 3310-4302",
            email: "renascer@barretos.sp.gov.br",
            site: "www.casarrenascer.org.br"
          },
          tipo: "encaminhamento",
          icone: "🌸",
          detalhes: {
            descricao: "Casa de acolhimento para mulheres em situação de violência doméstica, oferecendo proteção, apoio jurídico e reintegração social.",
            endereco: "Endereço sigiloso – Barretos/SP",
            horario: "Atendimento 24 horas via telefone",
            publicoAlvo: "Mulheres vítimas de violência e seus filhos",
            servicos: [
              "Acolhimento temporário seguro",
              "Apoio psicológico e jurídico",
              "Grupos de autoestima",
              "Encaminhamento para rede de proteção"
            ]
          }
        },
        {
          nome: "Equipe Cuidar em Casa",
          topicos: [
            "visitas domiciliares",
            "cuidados básicos de saúde",
            "orientação familiar"
          ],
          contato: {
            telefone: "(17) 3310-4303"
          },
          tipo: "rede",
          icone: "🏡",
          detalhes: {
            descricao: "Equipe multiprofissional que realiza visitas domiciliares para cuidados básicos de saúde e orientação a famílias com membros em vulnerabilidade.",
            endereco: "Base: UBS Central – Rua 20, 500 – Centro, Barretos/SP",
            horario: "Segunda a sexta, das 7h às 16h",
            publicoAlvo: "Famílias com idosos, gestantes ou pessoas acamadas",
            servicos: [
              "Visitas domiciliares regulares",
              "Curativos e medicação",
              "Orientação a cuidadores",
              "Articulação com UBS e hospitais"
            ]
          }
        }
      ]
    },
    {
      id: 4,
      nome: "Direitos, Inclusão e Proteção Especial",
      cor: "#7b2cbf",
      corClara: "#f3e8ff",
      icone: "⚖️",
      instituicoes: [
        {
          nome: "Núcleo Direitos para Todos",
          topicos: [
            "orientação jurídica social",
            "encaminhamentos",
            "defesa de direitos"
          ],
          contato: {
            telefone: "(17) 3310-4401",
            email: "direitos@barretos.sp.gov.br",
            site: "www.direitosparatodos.org.br"
          },
          tipo: "encaminhamento",
          icone: "📋",
          detalhes: {
            descricao: "Núcleo de assistência jurídica gratuita para população em situação de vulnerabilidade, com orientação e encaminhamento para defensoria e promotoria.",
            endereco: "Rua 22, 330 – Centro, Barretos/SP",
            horario: "Segunda a sexta, das 9h às 16h",
            publicoAlvo: "População de baixa renda e em situação de vulnerabilidade",
            servicos: [
              "Orientação jurídica gratuita",
              "Auxílio em documentação",
              "Encaminhamento à Defensoria Pública",
              "Mediação de conflitos"
            ]
          }
        },
        {
          nome: "Centro de Inclusão Acessível",
          topicos: [
            "pessoas com deficiência",
            "inclusão social e digital",
            "adaptações e orientação"
          ],
          contato: {
            telefone: "(17) 3310-4402",
            email: "inclusao@barretos.sp.gov.br"
          },
          tipo: "procura",
          icone: "♿",
          detalhes: {
            descricao: "Centro dedicado à inclusão de pessoas com deficiência, oferecendo adaptações, tecnologia assistiva e atividades de integração social.",
            endereco: "Av. 45, 780 – Cristiano de Carvalho, Barretos/SP",
            horario: "Segunda a sexta, das 8h às 17h",
            publicoAlvo: "Pessoas com deficiência e suas famílias",
            servicos: [
              "Avaliação e adaptação de equipamentos",
              "Cursos de informática acessível",
              "Oficinas de arte e esporte adaptado",
              "Orientação sobre benefícios (BPC/LOAS)"
            ]
          }
        },
        {
          nome: "Espaço Proteger Infância",
          topicos: [
            "crianças e adolescentes",
            "denúncias e apoio",
            "proteção especial"
          ],
          contato: {
            telefone: "(17) 3310-4403",
            site: "www.protegerinfancia.org.br"
          },
          tipo: "encaminhamento",
          icone: "🛡️",
          detalhes: {
            descricao: "Serviço especializado em proteção de crianças e adolescentes, com canal de denúncias, acolhimento e articulação com conselho tutelar e justiça.",
            endereco: "Rua 16, 210 – Centro, Barretos/SP",
            horario: "Segunda a sexta, das 8h às 18h | Plantão: (17) 3310-4499",
            publicoAlvo: "Crianças, adolescentes e responsáveis",
            servicos: [
              "Recebimento de denúncias",
              "Acolhimento psicossocial",
              "Encaminhamento ao Conselho Tutelar",
              "Grupos de prevenção à violência"
            ]
          }
        }
      ]
    },
    {
      id: 5,
      nome: "Trabalho, Cidadania e Segurança Alimentar",
      cor: "#0d9488",
      corClara: "#e6faf8",
      icone: "💼",
      instituicoes: [
        {
          nome: "Banco de Talentos Cidade",
          topicos: [
            "emprego e renda",
            "cursos profissionalizantes",
            "encaminhamento para trabalho"
          ],
          contato: {
            telefone: "(17) 3310-4501",
            email: "talentos@barretos.sp.gov.br",
            site: "www.bancotalentos-barretos.org.br"
          },
          tipo: "procura",
          icone: "💼",
          detalhes: {
            descricao: "Agência de empregos e qualificação profissional que conecta trabalhadores a oportunidades no mercado formal e informal da região.",
            endereco: "Rua 19, 550 – Centro, Barretos/SP",
            horario: "Segunda a sexta, das 8h às 17h",
            publicoAlvo: "Trabalhadores em busca de emprego ou recolocação",
            servicos: [
              "Cadastro e encaminhamento para vagas",
              "Cursos de qualificação profissional",
              "Elaboração de currículo",
              "Feiras de emprego mensais"
            ]
          }
        },
        {
          nome: "Cozinha Solidária Barretos",
          topicos: [
            "refeições gratuitas",
            "apoio alimentar",
            "doações e voluntariado"
          ],
          contato: {
            telefone: "(17) 3310-4502",
            email: "cozinha@barretos.sp.gov.br"
          },
          tipo: "rede",
          icone: "🍲",
          detalhes: {
            descricao: "Projeto de segurança alimentar que prepara e distribui refeições gratuitas diariamente para famílias em situação de insegurança alimentar.",
            endereco: "Rua 11, 120 – Oriente, Barretos/SP",
            horario: "Segunda a sábado, das 10h às 14h (distribuição de refeições)",
            publicoAlvo: "Famílias em situação de vulnerabilidade alimentar",
            servicos: [
              "Refeições gratuitas diárias",
              "Cestas básicas mensais",
              "Oficinas de culinária saudável",
              "Recebimento de doações"
            ]
          }
        },
        {
          nome: "Núcleo Cidadania Ativa",
          topicos: [
            "documentação civil",
            "orientação sobre direitos",
            "cidadania e participação"
          ],
          contato: {
            telefone: "(17) 3310-4503",
            site: "www.cidadaniaativa.org.br"
          },
          tipo: "procura",
          icone: "📄",
          detalhes: {
            descricao: "Núcleo de cidadania que auxilia na obtenção de documentos civis, orientação sobre direitos e incentivo à participação social comunitária.",
            endereco: "Rua 13, 400 – América, Barretos/SP",
            horario: "Segunda a sexta, das 8h às 16h",
            publicoAlvo: "Cidadãos em busca de documentação e orientação",
            servicos: [
              "Emissão de RG e CPF gratuitos",
              "Certidões de nascimento e casamento",
              "Orientação sobre direitos do cidadão",
              "Mutirões de documentação"
            ]
          }
        }
      ]
    }
  ]
};
