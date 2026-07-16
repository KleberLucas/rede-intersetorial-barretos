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
    "Localize o serviço desejado e faça o primeiro contato.",
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
          icone: "🏠"
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
          icone: "👴"
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
          icone: "👨‍👩‍👧"
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
          icone: "🎓"
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
          icone: "✏️"
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
          icone: "⚽"
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
          icone: "🌿"
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
          icone: "🌸"
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
          icone: "🏡"
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
          icone: "📋"
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
          icone: "♿"
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
          icone: "🛡️"
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
          icone: "💼"
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
          icone: "🍲"
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
          icone: "📄"
        }
      ]
    }
  ]
};
