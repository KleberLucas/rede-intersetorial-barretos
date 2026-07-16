/**
 * Dados da Rede Intersetorial de Barretos.
 * Edite este objeto para adicionar, remover ou alterar categorias e instituições.
 * Fonte: materiais do Encontro da Rede Intersetorial.
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
    "Em caso de dúvida, entre em contato com o serviço indicado ou com a rede."
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
          nome: "APAE Barretos",
          topicos: [
            "pessoas com deficiência de 12 a 70 anos",
            "proteção social especial e educação",
            "atendimento ambulatorial especializado"
          ],
          contato: {
            telefone: "(17) 3321-7810",
            telefone2: "(17) 3321-7811",
            email: "apae.barretos@hotmail.com"
          },
          tipo: "encaminhamento",
          icone: "🧡",
          detalhes: {
            descricao: "A Associação de Pais e Amigos dos Excepcionais de Barretos é uma organização da sociedade civil articulada com as Secretarias Municipais de Assistência Social e Desenvolvimento Humano, Educação e Saúde, além da Secretaria de Estado da Educação. Executa o Serviço de Proteção Social Especial para Pessoas com Deficiência, Pessoas Idosas e suas Famílias, somado a ações educacionais e atendimento ambulatorial especializado.",
            endereco: "Avenida Dr. Roberto Rios, nº 999, Jockey Club, Barretos/SP — CEP 14787-170",
            horario: "",
            publicoAlvo: "Pessoas de 12 a 70 anos com deficiência intelectual, física ou ambas, e suas famílias — atendimento em todo o município de Barretos",
            servicos: [
              "Projeto Ser e Crescer — adolescentes de 12 a 18 anos incompletos",
              "Projeto Bem Querer — proteção social especial para pessoas com deficiência, pessoas idosas e suas famílias",
              "Projeto Oportunidade Gera Possibilidade — proteção social especial de média complexidade",
              "Educação de Jovens e Adultos — EJA",
              "Educação especializada",
              "Atendimento ambulatorial para pessoas com deficiência"
            ],
            acesso: "Por encaminhamento da Secretaria Municipal de Assistência Social e Desenvolvimento Humano (CRAS e CREAS) ou pela Secretaria Municipal de Saúde.",
            articulacao: "CRAS, CREAS, Secretaria Municipal de Saúde, Secretaria Municipal de Educação e Secretaria de Estado da Educação."
          }
        },
        {
          nome: "ABAVIN — Associação Barretense Vida Nova",
          topicos: [
            "inclusão social e suporte biopsicossocial",
            "pessoas com deficiência, idosos e famílias",
            "crianças e adolescentes com deficiência"
          ],
          contato: {
            telefone: "(17) 3322-9608",
            telefone2: "(17) 98154-9118",
            telefone3: "(17) 3322-3322",
            email: "abavin@hotmail.com"
          },
          tipo: "procura",
          icone: "🌈",
          detalhes: {
            descricao: "A ABAVIN atua em parceria com a Secretaria de Assistência Social e Desenvolvimento Humano e com a Secretaria Municipal de Educação. Promove a inclusão social de pessoas com deficiência, pessoas idosas e suas famílias, bem como de crianças e adolescentes com deficiência ou transtornos de aprendizagem, com suporte de equipe multidisciplinar.",
            endereco: "Unidade I: Rua 20, nº 1140, Centro, Barretos/SP — CEP 14780-070 | Unidade II: Avenida 25, nº 1300, Centro, Barretos/SP",
            horario: "",
            publicoAlvo: "Crianças e adolescentes com deficiência intelectual; pessoas com deficiência, pessoas idosas e suas famílias; crianças da rede municipal com transtornos ou dificuldades de aprendizagem",
            servicos: [
              "Arco-Íris Social — atendimento a pessoas com deficiência, pessoas idosas e familiares",
              "Despertando Talentos — crianças e adolescentes com deficiência intelectual",
              "Dedinho de Prosa — atendimento e convivência para pessoas idosas",
              "Redescobrindo o Aprender — crianças da rede municipal com dificuldades de aprendizagem"
            ],
            acesso: "Por encaminhamento do CRAS, CREAS ou Fórum, além de busca espontânea.",
            articulacao: "Secretaria da Cultura, Conselho Tutelar, Secretaria da Saúde, organizações não governamentais e outros serviços municipais.",
            observacao: "Unidade I: (17) 3322-9608 / (17) 98154-9118. Unidade II: (17) 3322-3322. Confirme em qual unidade funciona o serviço procurado."
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
          nome: "Senac Barretos",
          topicos: [
            "educação profissional e bolsas de estudo",
            "aprendizagem e empregabilidade",
            "cultura, bem-estar e inclusão"
          ],
          contato: {
            telefone: "(17) 3312-3050",
            telefone2: "0800 883 2000",
            email: "barretos@sp.senac.br",
            site: "www.sp.senac.br/senac-barretos"
          },
          tipo: "procura",
          icone: "🎓",
          detalhes: {
            descricao: "O Senac Barretos atua nas áreas de educação profissional, inclusão, cultura, bem-estar, empregabilidade e atendimento à comunidade e às empresas. Oferece cursos, serviços, eventos e parcerias institucionais abertas à população.",
            endereco: "Avenida 21, nº 087, Centro, Barretos/SP — CEP 14781-344",
            horario: "",
            publicoAlvo: "Estudantes, jovens aprendizes, trabalhadores, comunidade em geral, empresas, órgãos públicos e organizações sociais",
            servicos: [
              "Bolsas de estudo 100% gratuitas para cursos técnicos e cursos livres",
              "Agendamento de serviços de bem-estar e beleza",
              "Programa de Aprendizagem gratuito",
              "Atendimento corporativo com soluções educacionais customizadas",
              "Biblioteca aberta à população",
              "Cessão de espaços e professores para palestras",
              "Ações de acessibilidade (totem de Libras, equipamentos e intérprete)",
              "Eventos como Semana Geek, Casa Aberta e Jornada de Inclusão e Diversidade"
            ],
            acesso: "Inscrição em cursos e bolsas, agendamento de serviços, participação em eventos ou formalização de parcerias institucionais.",
            articulacao: "Parcerias com Fundação CASA e CREAS; participação em comitês de Convivência Escolar, Cultura de Paz, Ecos, Empreendedorismo, Inovação e Voluntariado."
          }
        },
        {
          nome: "Setor de Inclusão — SME",
          topicos: [
            "educação inclusiva na rede municipal",
            "alunos de 0 a 16 anos e famílias",
            "AEE, Braille e intérpretes de Libras"
          ],
          contato: {
            telefone: "(17) 3612-2221",
            telefone2: "(17) 99124-8630"
          },
          tipo: "procura",
          icone: "♿",
          detalhes: {
            descricao: "O Setor de Inclusão da Secretaria Municipal de Educação coordena e acompanha as ações de educação inclusiva na rede municipal de ensino. Monitora alunos do público-alvo da Educação Especial Inclusiva, forma profissionais especializados e articula convênios e encaminhamentos com a rede.",
            endereco: "",
            horario: "",
            publicoAlvo: "Alunos de 0 a 16 anos matriculados na rede municipal; escolas e profissionais da educação; familiares de alunos com deficiência, transtornos ou dificuldades de aprendizagem — município e zona rural",
            servicos: [
              "Coordenação da educação inclusiva nas escolas municipais",
              "Monitoramento de alunos da Educação Especial Inclusiva",
              "Formação e acompanhamento de profissionais especializados",
              "Monitoramento de convênios com organizações de terapias",
              "Acompanhamento de psicodiagnósticos",
              "Disponibilização de apoio, Braille, AEE e intérpretes de Libras",
              "Encaminhamentos para saúde, neurologia, psiquiatria, fono e psicologia",
              "Articulação com serviços conveniados como ABAVIN e AMA"
            ],
            acesso: "Encaminhamento pelas escolas municipais, procura direta das famílias ou encaminhamento por profissionais da saúde.",
            articulacao: "Secretarias de Saúde e Assistência Social, CRAS, CREAS, conselhos de direitos, Conselho Tutelar, entidades sociais, Defensoria Pública, Promotoria e equipe técnica do Fórum.",
            observacao: "Contatos informados pela apresentação institucional: (17) 3612-2221 e Kelly (17) 99124-8630."
          }
        },
        {
          nome: "Projeto Conviva SP — Barretos",
          topicos: [
            "convivência e proteção escolar",
            "escolas estaduais e famílias",
            "cultura de paz e prevenção"
          ],
          contato: {
            telefone: "(17) 3321-0110",
            telefone2: "(17) 3321-1165",
            email: "debat@educacao.sp.gov.br",
            email2: "bat.eec@educacao.sp.gov.br"
          },
          tipo: "procura",
          icone: "🕊️",
          detalhes: {
            descricao: "O Conviva SP (Programa de Melhoria da Convivência e Proteção Escolar) é uma iniciativa da Secretaria da Educação do Estado de São Paulo, criada em 2019. Busca transformar as escolas estaduais em ambientes mais solidários, colaborativos, acolhedores e seguros, entendendo que a qualidade da convivência influencia a permanência, o bem-estar e a aprendizagem dos estudantes.",
            endereco: "Unidade Regional de Ensino de Barretos — Avenida Coronel Silvestre de Lima, 475, bairro Nogueira, Barretos/SP — CEP 14783-282",
            horario: "",
            publicoAlvo: "Comunidade das escolas estaduais: estudantes do Ensino Fundamental e Médio, familiares, professores, servidores, equipes gestoras, grêmios estudantis e profissionais da rede de proteção. Em Barretos, ligado às escolas da Unidade Regional de Ensino e municípios da abrangência regional.",
            servicos: [
              "Ações de clima e convivência escolar — rodas de conversa, práticas restaurativas, mediação de conflitos e cultura de paz",
              "Professor Orientador de Convivência (POC) — identificação de estudantes, mediação, busca ativa e articulação com a rede",
              "Apoio psicológico e psicossocial preventivo (Programa Psicólogos nas Escolas)",
              "Orientação em proteção e segurança escolar — violência, bullying, cyberbullying, discriminação e violação de direitos",
              "Registro e acompanhamento de ocorrências na Plataforma Conviva",
              "Prevenção de abandono, ausência prolongada e dificuldades de permanência",
              "Aproximação das famílias da vida escolar"
            ],
            acesso: "Para situações de um estudante específico, a porta de entrada é a equipe gestora da escola estadual em que o aluno está matriculado (direção, vice-direção, Coordenador de Organização Escolar, POC, professor ou coordenador pedagógico). A escola acolhe e define encaminhamentos, podendo acionar a Unidade Regional de Ensino ou a rede protetiva. O Conviva SP não substitui Conselho Tutelar, CAPS, CRAS, CREAS, polícia ou atendimento médico.",
            articulacao: "Conselho Tutelar; UBS e saúde mental; CRAS e CREAS; Polícia Militar e Civil; Ministério Público e Poder Judiciário; organizações sociais; famílias, comunidade e grêmios estudantis.",
            responsaveis: "Emerson Lemes da Costa — Professor Especialista em Currículo do Conviva (área regional)",
            observacao: "Contatos regionais: URE (17) 3321-0110 / debat@educacao.sp.gov.br; Equipe de Especialistas (17) 3321-1165 / bat.eec@educacao.sp.gov.br. Contato estadual: convivasp@educacao.sp.gov.br. Use os canais regionais para orientação institucional; para o aluno, procure primeiro a escola."
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
          nome: "Centro Municipal de Reabilitação",
          topicos: [
            "reabilitação física em todas as idades",
            "fisioterapia, fono, TO e psicologia",
            "ambulatórios e programas especiais"
          ],
          contato: {
            telefone: "(17) 3612-2510",
            telefone2: "(17) 3322-1575"
          },
          tipo: "encaminhamento",
          icone: "🏥",
          detalhes: {
            descricao: "O Centro Municipal de Reabilitação Solange Lana de Ávila, vinculado à Secretaria Municipal de Saúde, oferece reabilitação física e atendimentos especializados. Atende demandas de reabilitação física; não contempla, nesse fluxo, deficiência intelectual, TEA, transtorno de aprendizagem ou múltiplas deficiências como condição principal.",
            endereco: "Via Conselheiro Antônio Prado, nº 1365, Barretos/SP",
            horario: "Segunda a sexta-feira, das 7h às 20h",
            publicoAlvo: "Pessoas de todas as idades com necessidades de reabilitação física",
            servicos: [
              "Fisioterapia — ortopedia, neurologia, cardiorrespiratória, vestibular, desenvolvimento infantil e acupuntura",
              "Fonoaudiologia — fala, linguagem, voz, audição, sucção, mastigação e deglutição",
              "Psicologia — suporte a pacientes em reabilitação e cuidadores",
              "Terapia ocupacional — terapia de mão, desenvolvimento neuromotor e processamento sensorial",
              "Ambulatório de Curativos Especiais",
              "Ambulatório de Alto Risco (0 a 2 anos)",
              "Ambulatório de Dor Crônica (maiores de 18 anos)",
              "Programa Melhor em Casa (AD2 e AD3)",
              "Programa Sorrindo para o Futuro (CEMEIs)",
              "Hidroginástica — população em geral, sem encaminhamento médico"
            ],
            acesso: "Reabilitação por encaminhamento médico pelo Sistema Assessor Público. Hidroginástica dispensa encaminhamento.",
            observacao: "Telefone principal (CNES): (17) 3612-2510. Alternativa amplamente divulgada: (17) 3322-1575."
          }
        },
        {
          nome: "CAPS III",
          topicos: [
            "transtornos mentais graves e persistentes",
            "acolhimento 24 horas",
            "reabilitação psicossocial"
          ],
          contato: {
            telefone: "(17) 3612-2481"
          },
          tipo: "procura",
          icone: "🌙",
          detalhes: {
            descricao: "O CAPS III integra a Secretaria Municipal de Saúde e realiza atendimento psiquiátrico e psicossocial a pessoas com transtornos mentais graves e persistentes que necessitam de cuidado intensivo, reabilitação psicossocial e apoio para reintegração comunitária. Possui atuação regional.",
            endereco: "Rua 14, nº 140, entre as avenidas 27 e 29, Centro, Barretos/SP",
            horario: "Funcionamento 24 horas — acolhimento e escuta qualificada",
            publicoAlvo: "Pessoas com transtornos mentais graves e persistentes",
            servicos: [
              "Acolhimento e escuta qualificada 24 horas",
              "Acompanhamento terapêutico contínuo por Projeto Terapêutico Singular",
              "Oficinas terapêuticas",
              "Articulações com Cultura, Educação e Assistência Social"
            ],
            acesso: "Demanda espontânea por escuta qualificada ou encaminhamento pela Rede de Atenção Psicossocial — RAPS.",
            articulacao: "Rede de Atenção Psicossocial; oficinas de teatro e música com Cultura, Educação e Assistência Social.",
            responsaveis: "Ronaldo Araújo e Helena Cipriano"
          }
        },
        {
          nome: "Ambulatório de Saúde Mental",
          topicos: [
            "transtornos leves a moderados",
            "psiquiatria e psicoterapia",
            "atendimento infantil e dependência química"
          ],
          contato: {
            telefone: "(17) 3325-7038"
          },
          tipo: "encaminhamento",
          icone: "🧠",
          detalhes: {
            descricao: "Integra a Secretaria Municipal de Saúde e atende pessoas com transtornos mentais de intensidade leve a moderada, incluindo ansiedade, depressão moderada, luto persistente e dificuldades emocionais específicas, além de atendimento infantil e relacionados à dependência química.",
            endereco: "Avenida 17, nº 221, Centro, Barretos/SP",
            horario: "Das 7h às 17h",
            publicoAlvo: "Pessoas com transtornos mentais leves a moderados; crianças; pessoas em situação de dependência química — abrangência municipal",
            servicos: [
              "Consulta médica psiquiátrica",
              "Atendimento psicoterapêutico",
              "Grupos terapêuticos",
              "Matriciamento de psiquiatria na Atenção Primária",
              "Atendimento de psicólogos nas unidades de saúde"
            ],
            acesso: "Adultos e crianças: encaminhamento pela Atenção Primária à Saúde ou pelo CAPS. Dependência química: demanda espontânea, conforme o fluxo do serviço.",
            articulacao: "Atenção Primária à Saúde e CAPS.",
            responsaveis: "Camila Ávila — Ambulatório; Elissandra Araújo — interlocução de Saúde Mental",
            observacao: "Telefone e endereço encontrados em fonte pública mais antiga. Para confirmação, contate a Secretaria Municipal de Saúde: (17) 3612-2000."
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
          nome: "Delegacia de Defesa da Mulher",
          topicos: [
            "mulheres vítimas de violência",
            "crianças e adolescentes",
            "boletim de ocorrência e medidas protetivas"
          ],
          contato: {
            telefone: "(17) 3612-2845",
            telefone2: "(17) 3612-2846"
          },
          tipo: "procura",
          icone: "🛡️",
          detalhes: {
            descricao: "A DDM Barretos integra a Polícia Civil do Estado de São Paulo, vinculada à Secretaria de Segurança Pública, ao Deinter 3 — Ribeirão Preto e à Seccional de Barretos. Apura crimes, identifica autoria e esclarece as circunstâncias dos fatos envolvendo violência doméstica, familiar e sexual.",
            endereco: "Rua 18, nº 137, entre as avenidas 29 e 31, Centro, Barretos/SP",
            horario: "Dias úteis, das 8h às 18h",
            publicoAlvo: "Mulheres vítimas de violência; crianças e adolescentes vítimas de crimes abrangidos pela unidade; casos de violência doméstica e crimes sexuais",
            servicos: [
              "Triagem e orientação inicial de competência",
              "Atendimento acolhedor",
              "Registro de boletim de ocorrência",
              "Solicitação de medidas protetivas de urgência",
              "Oitiva de investigados e testemunhas",
              "Demais procedimentos policiais de investigação"
            ],
            acesso: "Por procura direta ou encaminhamento.",
            articulacao: "Secretaria de Assistência Social (especialmente o CRAM), Secretaria Municipal de Saúde e empresas privadas."
          }
        },
        {
          nome: "Casa dos Conselhos",
          topicos: [
            "controle social e participação democrática",
            "oito conselhos municipais",
            "articulação intersetorial"
          ],
          contato: {
            telefone: "(17) 3612-2650",
            email: "assistenciasocial@barretos.sp.gov.br",
            email2: "contato.assistenciasocial@barretos.sp.gov.br"
          },
          tipo: "rede",
          icone: "🏛️",
          detalhes: {
            descricao: "Vinculada à Secretaria Municipal de Assistência Social e Desenvolvimento Humano, a Casa dos Conselhos funciona como polo estratégico da rede socioassistencial. Oferece estrutura institucional para a articulação intersetorial, a participação democrática e o fortalecimento do controle social das políticas públicas.",
            endereco: "Avenida Almirante Gago Coutinho, nº 500, Bairro Rios, Barretos/SP — CEP 14783-200",
            horario: "Segunda a sexta-feira, das 8h às 14h",
            publicoAlvo: "Conselhos, sociedade civil, usuários, trabalhadores e poder público",
            servicos: [
              "CMAS — Conselho Municipal de Assistência Social",
              "CMDCA — Conselho Municipal dos Direitos da Criança e do Adolescente",
              "CMI — Conselho Municipal do Idoso",
              "COMDIM — Conselho Municipal dos Direitos da Mulher",
              "COMIR — Conselho Municipal de Igualdade Racial",
              "CMJ — Conselho Municipal da Juventude",
              "CMAPD — Conselho Municipal dos Direitos da Pessoa com Deficiência",
              "COMAD — Conselho Municipal de Políticas sobre Drogas",
              "Acompanhamento, monitoramento e fiscalização de políticas públicas",
              "Articulação entre poder público, usuários e organizações sociais"
            ],
            acesso: "Participação por meio das reuniões, representações institucionais, processos de composição dos conselhos e contato com a Casa dos Conselhos.",
            articulacao: "Poder público, sociedade civil e políticas públicas municipais.",
            observacao: "Contato da Secretaria Municipal de Assistência Social e Desenvolvimento Humano, responsável pelo equipamento."
          }
        },
        {
          nome: "Conselho Tutelar de Barretos",
          topicos: [
            "crianças e adolescentes de 0 a 17 anos",
            "proteção e denúncias de violações",
            "plantão 24 horas"
          ],
          contato: {
            telefone: "(17) 98217-5999"
          },
          tipo: "procura",
          icone: "🛡️",
          detalhes: {
            descricao: "O Conselho Tutelar de Barretos é um órgão público municipal, permanente, autônomo e não jurisdicional. Sua finalidade é zelar pelo cumprimento dos direitos das crianças e dos adolescentes sempre que houver ameaça ou violação desses direitos. Não integra o Poder Judiciário e não exerce função policial, mas pode aplicar medidas de proteção e requisitar serviços públicos para garantir o atendimento necessário.",
            endereco: "",
            horario: "Plantão 24 horas, inclusive em feriados e finais de semana",
            publicoAlvo: "Crianças e adolescentes de 0 a 17 anos; pais, responsáveis e familiares; casos no município de Barretos — negligência, abandono, violência física, psicológica ou sexual, exploração, evasão escolar, ausência de atendimento de saúde e outras ameaças ou violações de direitos",
            servicos: [
              "Receber denúncias e comunicações sobre possíveis violações de direitos",
              "Acolher, escutar, orientar e acompanhar crianças, adolescentes e responsáveis",
              "Aplicar medidas de proteção previstas no Estatuto da Criança e do Adolescente",
              "Orientar e aconselhar pais ou responsáveis",
              "Requisitar atendimento em saúde, educação, assistência social, previdência, trabalho e segurança",
              "Encaminhar situações ao Ministério Público ou à autoridade judiciária quando necessário",
              "Expedir notificações e acompanhar o cumprimento das medidas aplicadas"
            ],
            acesso: "Pode ser procurado diretamente pela criança, adolescente, familiar ou qualquer pessoa que tenha conhecimento de possível violação de direitos. Também recebe encaminhamentos de escolas, unidades de saúde, CRAS, CREAS, assistência social, polícia, Ministério Público, Poder Judiciário e demais integrantes da rede de proteção. A denúncia não precisa ser feita apenas pela família.",
            articulacao: "Escolas e Secretaria Municipal de Educação; unidades de saúde, hospitais e saúde mental; CRAS, CREAS e serviços socioassistenciais; Delegacia de Defesa da Mulher e outras unidades policiais; Ministério Público, Defensoria Pública e Poder Judiciário; CMDCA e organizações que atendem crianças, adolescentes e famílias.",
            observacao: "Plantão WhatsApp/telefone: (17) 98217-5999 (divulgado pela Prefeitura). Outros canais: Disque 100 (direitos humanos) e, em perigo imediato, Polícia Militar 190. Endereço e telefone fixo da sede não foram confirmados em fonte oficial recente."
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
          nome: "PEI Barretos — Empregabilidade Inclusiva",
          topicos: [
            "pessoas com deficiência a partir de 16 anos",
            "emprego apoiado e empresas",
            "capacitação e acompanhamento"
          ],
          contato: {
            telefone: "(11) 97266-9135",
            telefone2: "(17) 99748-0670",
            email: "pei.barretos@itsbrasil.org.br"
          },
          tipo: "procura",
          icone: "💼",
          detalhes: {
            descricao: "O Polo de Empregabilidade Inclusiva de Barretos integra o Programa Meu Emprego Inclusivo, executado regionalmente pelo ITS Brasil, com metodologia de Emprego Apoiado. Promove inclusão, permanência e desenvolvimento profissional de pessoas com deficiência, atuando com candidatos e empregadores.",
            endereco: "Poupatempo — North Shopping, Via Conselheiro Antônio Prado, nº 1400, Pedro Cavalini, Barretos/SP",
            horario: "Segunda a sexta-feira, das 9h às 12h e das 13h às 17h",
            publicoAlvo: "Pessoas com deficiência a partir de 16 anos e empresas interessadas em contratação inclusiva — região de Barretos e cidades vizinhas",
            servicos: [
              "Mapeamento do perfil profissional, vocacional e de interesses",
              "Capacitação e preparação para o mercado",
              "Indicação de vagas compatíveis com o perfil",
              "Acompanhamento antes, durante e depois da contratação",
              "Suporte técnico a empresas nos processos de contratação",
              "Preparação e ambientação da equipe",
              "Oficinas e orientações de enfrentamento ao capacitismo"
            ],
            acesso: "Atendimento presencial ou on-line mediante agendamento pelo telefone ou e-mail."
          }
        }
      ]
    }
  ]
};
