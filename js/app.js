/**
 * Renderizador dinâmico do mapa mental da Rede Intersetorial.
 * Calcula posições automaticamente conforme quantidade de categorias e instituições.
 */
(function () {
  'use strict';

  const TIPO_ICONES = {
    procura: '🏠',
    encaminhamento: '➡️',
    rede: '💚'
  };

  const TIPO_ROTULOS = {
    procura: 'Procura direta',
    encaminhamento: 'Encaminhamento',
    rede: 'Rede parceira'
  };

  const BREAKPOINT_MOBILE = 768;
  const isMobile = () => window.innerWidth <= BREAKPOINT_MOBILE;

  let instituicoesIndex = [];

  /* ── Utilitários ── */
  function polarParaCartesiano(cx, cy, raio, anguloRad) {
    return {
      x: cx + raio * Math.cos(anguloRad),
      y: cy + raio * Math.sin(anguloRad)
    };
  }

  function gerarLinhaOrganica(x1, y1, x2, y2, cor, espessura, seed) {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const perpX = -dy;
    const perpY = dx;
    const len = Math.sqrt(perpX * perpX + perpY * perpY) || 1;
    const curvatura = (seed % 3 === 0 ? 1 : -1) * (20 + (seed % 15));
    const cx1 = mx + (perpX / len) * curvatura;
    const cy1 = my + (perpY / len) * curvatura;
    const wobble = 1.5 + (seed % 4) * 0.5;
    return `<path d="M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2}" stroke="${cor}" stroke-width="${espessura + wobble}" opacity="0.75"/>`;
  }

  function formatarNomeCategoria(nome) {
    return nome
      .split(', ')
      .map((parte, i, arr) => i < arr.length - 1 ? parte + ',' : parte)
      .join('<br>');
  }

  function temContato(contato) {
    return !!(contato && (contato.telefone || contato.telefone2 || contato.telefone3 || contato.email || contato.email2 || contato.site));
  }

  function linkTelefone(numero, bloco) {
    const tel = String(numero).replace(/\D/g, '');
    const href = tel.startsWith('0800') ? `tel:${tel}` : `tel:+55${tel}`;
    return `<a href="${href}">${bloco ? '📞 ' : ''}Tel. ${numero}</a>`;
  }

  function formatarContato(contato, bloco) {
    if (!contato) return '';
    const itens = [];
    if (contato.telefone) itens.push(linkTelefone(contato.telefone, bloco));
    if (contato.telefone2) itens.push(linkTelefone(contato.telefone2, bloco));
    if (contato.telefone3) itens.push(linkTelefone(contato.telefone3, bloco));
    if (contato.email) {
      itens.push(`<a href="mailto:${contato.email}">${bloco ? '✉️ ' : ''}${contato.email}</a>`);
    }
    if (contato.email2) {
      itens.push(`<a href="mailto:${contato.email2}">${bloco ? '✉️ ' : ''}${contato.email2}</a>`);
    }
    if (contato.site) {
      const url = contato.site.startsWith('http') ? contato.site : `https://${contato.site}`;
      const label = contato.site.replace(/^https?:\/\//, '');
      itens.push(`<a href="${url}" target="_blank" rel="noopener">${bloco ? '🌐 ' : ''}${label}</a>`);
    }
    return bloco ? itens.map(i => `<p class="modal-contato-item">${i}</p>`).join('') : itens.join('');
  }

  function criarBolhaCategoria(cat) {
    return `
      <div class="categoria-bolha" style="border-color: ${cat.cor}; background: ${cat.corClara || '#fff'}">
        <div class="categoria-topo">
          <span class="categoria-numero" style="color: ${cat.cor}">${cat.id}</span>
          <span class="categoria-icone">${cat.icone}</span>
        </div>
        <span class="categoria-nome" style="color: ${cat.cor}">${formatarNomeCategoria(cat.nome)}</span>
      </div>`;
  }

  function criarCardHTML(inst, cor, catNome, instId) {
    const contatoHtml = temContato(inst.contato)
      ? `<div class="card-contato" style="color: ${cor}">${formatarContato(inst.contato, false)}</div>`
      : '';

    return `
      <div class="instituicao-card" data-inst-id="${instId}" role="button" tabindex="0" aria-label="Ver detalhes de ${inst.nome}">
        <div class="card-inner" style="border-color: ${cor}; background: linear-gradient(135deg, #fff 60%, ${cor}08)">
          <span class="card-icone-inst">${inst.icone || '📍'}</span>
          <h4 class="card-titulo" style="color: ${cor}">${inst.nome}</h4>
          <ul class="card-topicos">
            ${inst.topicos.map(t => `<li>${t}</li>`).join('')}
          </ul>
          ${contatoHtml}
          <span class="card-tipo-badge tipo-${inst.tipo}" title="${inst.tipo}">
            ${TIPO_ICONES[inst.tipo] || '📍'}
          </span>
          <span class="card-ver-mais">Toque para mais info →</span>
        </div>
      </div>`;
  }

  /* ── Modal ── */
  function abrirModal(inst, cat) {
    const overlay = document.getElementById('modal-overlay');
    const conteudo = document.getElementById('modal-conteudo');
    const det = inst.detalhes || {};
    const contatoHtml = formatarContato(inst.contato, true);

    conteudo.innerHTML = `
      <div class="modal-header" style="--modal-cor: ${cat.cor}">
        <span class="modal-icone">${inst.icone || '📍'}</span>
        <div>
          <span class="modal-categoria" style="color: ${cat.cor}">${cat.nome}</span>
          <h2 id="modal-titulo">${inst.nome}</h2>
        </div>
        <span class="modal-tipo-badge tipo-${inst.tipo}">${TIPO_ICONES[inst.tipo]} ${TIPO_ROTULOS[inst.tipo]}</span>
      </div>

      ${det.descricao ? `<p class="modal-descricao">${det.descricao}</p>` : ''}

      <div class="modal-secao">
        <h3>Serviços oferecidos</h3>
        <ul class="modal-lista">
          ${(det.servicos || inst.topicos).map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-grid">
        ${det.publicoAlvo ? `
          <div class="modal-info-item">
            <span class="modal-info-icone">👥</span>
            <div>
              <strong>Público-alvo</strong>
              <p>${det.publicoAlvo}</p>
            </div>
          </div>` : ''}
        ${det.endereco ? `
          <div class="modal-info-item">
            <span class="modal-info-icone">📍</span>
            <div>
              <strong>Endereço</strong>
              <p>${det.endereco}</p>
            </div>
          </div>` : ''}
        ${det.horario ? `
          <div class="modal-info-item">
            <span class="modal-info-icone">🕐</span>
            <div>
              <strong>Horário</strong>
              <p>${det.horario}</p>
            </div>
          </div>` : ''}
        ${det.acesso ? `
          <div class="modal-info-item">
            <span class="modal-info-icone">🚪</span>
            <div>
              <strong>Como acessar</strong>
              <p>${det.acesso}</p>
            </div>
          </div>` : ''}
        ${det.articulacao ? `
          <div class="modal-info-item">
            <span class="modal-info-icone">🔗</span>
            <div>
              <strong>Articulação com a rede</strong>
              <p>${det.articulacao}</p>
            </div>
          </div>` : ''}
        ${det.responsaveis ? `
          <div class="modal-info-item">
            <span class="modal-info-icone">👤</span>
            <div>
              <strong>Responsáveis</strong>
              <p>${det.responsaveis}</p>
            </div>
          </div>` : ''}
        ${det.observacao ? `
          <div class="modal-info-item">
            <span class="modal-info-icone">ℹ️</span>
            <div>
              <strong>Observação</strong>
              <p>${det.observacao}</p>
            </div>
          </div>` : ''}
      </div>

      ${contatoHtml ? `
      <div class="modal-secao modal-contatos">
        <h3>Contato</h3>
        <div class="modal-contatos-lista">
          ${contatoHtml}
        </div>
      </div>` : ''}
    `;

    overlay.classList.add('ativo');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-aberto');
    document.getElementById('modal-fechar').focus();
  }

  function fecharModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('ativo');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-aberto');
  }

  function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const fechar = document.getElementById('modal-fechar');

    fechar.addEventListener('click', fecharModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) fecharModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('ativo')) fecharModal();
    });
  }

  function vincularCards() {
    document.querySelectorAll('.instituicao-card').forEach(card => {
      const id = parseInt(card.dataset.instId, 10);
      const dados = instituicoesIndex[id];
      if (!dados) return;

      const abrir = (e) => {
        if (e.target.closest('a')) return;
        abrirModal(dados.inst, dados.cat);
      };

      card.addEventListener('click', abrir);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          abrir(e);
        }
      });
    });
  }

  function buildInstituicoesIndex() {
    instituicoesIndex = [];
    let id = 0;
    REDE_DATA.categorias.forEach(cat => {
      cat.instituicoes.forEach(inst => {
        instituicoesIndex.push({ inst, cat, id });
        id++;
      });
    });
  }

  /* ── Renderização do cabeçalho ── */
  function renderizarHeader() {
    const header = document.querySelector('.page-header');
    const totalInst = REDE_DATA.categorias.reduce((s, c) => s + c.instituicoes.length, 0);
    header.innerHTML = `
      <svg class="raios-sol" viewBox="0 0 120 40" aria-hidden="true">
        ${Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
          const x2 = 60 + Math.cos(a) * 50;
          const y2 = 35 + Math.sin(a) * 25;
          return `<line x1="60" y1="35" x2="${x2}" y2="${y2}" stroke="#f4a261" stroke-width="2" stroke-linecap="round" opacity="0.6"/>`;
        }).join('')}
      </svg>
      <h1>${REDE_DATA.titulo}</h1>
      <p class="subtitulo">${totalInst} órgãos e instituições – guia rápido de atendimento</p>
    `;
  }

  /* ── Navegação rápida mobile ── */
  function renderizarNavMobile() {
    let nav = document.getElementById('nav-categorias');
    if (!isMobile()) {
      if (nav) nav.remove();
      return;
    }

    if (!nav) {
      nav = document.createElement('nav');
      nav.id = 'nav-categorias';
      nav.className = 'nav-categorias';
      nav.setAttribute('aria-label', 'Ir para categoria');
      document.querySelector('.page-header').after(nav);
    }

    nav.innerHTML = `
      <div class="nav-categorias-inner">
        ${REDE_DATA.categorias.map(cat => `
          <a href="#cat-${cat.id}" class="nav-cat-chip" data-cat-id="${cat.id}" style="--chip-cor: ${cat.cor}">
            <span>${cat.icone}</span> ${cat.id}
          </a>
        `).join('')}
      </div>
    `;

    nav.querySelectorAll('.nav-cat-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const catId = chip.dataset.catId;
        const secao = document.getElementById(`cat-${catId}`);
        if (!secao) return;

        const btn = secao.querySelector('.categoria-acordeao-btn');
        const painel = secao.querySelector('.categoria-instituicoes');
        if (btn && !btn.classList.contains('aberto')) {
          e.preventDefault();
          document.querySelectorAll('.categoria-acordeao-btn').forEach(b => {
            b.classList.remove('aberto');
            b.setAttribute('aria-expanded', 'false');
          });
          document.querySelectorAll('.categoria-instituicoes').forEach(p => p.classList.remove('aberto'));
          btn.classList.add('aberto');
          btn.setAttribute('aria-expanded', 'true');
          painel.classList.add('aberto');
          setTimeout(() => secao.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
      });
    });
  }

  /* ── Renderização dos painéis informativos ── */
  function renderizarPainéis() {
    const container = document.getElementById('info-panels');
    container.innerHTML = `
      <div class="info-box">
        <h3>📌 Legenda</h3>
        <ul class="legenda-lista">
          ${REDE_DATA.legenda.map(l => `
            <li>
              <span class="legenda-icone tipo-${l.tipo}">${TIPO_ICONES[l.tipo]}</span>
              <span><em>${l.rotulo}</em></span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="info-box">
        <h3>🏙️ Como usar</h3>
        <ol class="como-usar-lista">
          ${REDE_DATA.comoUsar.map(p => `<li>${p}</li>`).join('')}
        </ol>
        <div class="info-box-ilustracao">🏘️🌳🏢</div>
      </div>
    `;
  }

  /* ── Layout desktop (radial) ── */
  function renderizarMapaDesktop() {
    const container = document.getElementById('mapa-container');
    const conteudo = document.getElementById('mapa-conteudo');
    const svg = document.getElementById('mapa-linhas');
    const hub = document.getElementById('hub-central');

    const categorias = REDE_DATA.categorias;
    const numCat = categorias.length;

    const largura = container.clientWidth || window.innerWidth;
    const alturaBase = Math.max(960, largura * 0.88);
    container.style.height = alturaBase + 'px';
    conteudo.style.height = alturaBase + 'px';
    svg.setAttribute('viewBox', `0 0 ${largura} ${alturaBase}`);

    const margemTopo = 130;
    const margemLateral = 140;
    const cx = largura / 2;
    const cy = alturaBase / 2 + 40;

    const raioCategoria = Math.min(largura, alturaBase) * 0.22;
    const raioInstituicao = Math.min(largura, alturaBase) * 0.40;

    function limitarPosicao(x, y, halfW, halfH) {
      return {
        x: Math.min(largura - halfW, Math.max(halfW, x)),
        y: Math.min(alturaBase - halfH, Math.max(margemTopo, y))
      };
    }

    hub.style.left = cx + 'px';
    hub.style.top = cy + 'px';
    hub.innerHTML = `
      <h2>${REDE_DATA.centro.titulo}</h2>
      <p>${REDE_DATA.centro.subtitulo}</p>
      <span class="coracao">❤️</span>
    `;

    conteudo.querySelectorAll('.categoria-no, .instituicao-card, .decoracao-estrela').forEach(el => el.remove());

    let svgPaths = '';
    let seed = 0;
    let instId = 0;

    const anguloInicio = -Math.PI / 2;
    const anguloPasso = (2 * Math.PI) / numCat;

    categorias.forEach((cat, catIndex) => {
      const anguloCat = anguloInicio + catIndex * anguloPasso;
      let posCat = polarParaCartesiano(cx, cy, raioCategoria, anguloCat);
      posCat = limitarPosicao(posCat.x, posCat.y, margemLateral * 0.7, 80);

      const noCat = document.createElement('div');
      noCat.className = 'categoria-no';
      noCat.style.left = posCat.x + 'px';
      noCat.style.top = posCat.y + 'px';
      noCat.innerHTML = criarBolhaCategoria(cat);
      conteudo.appendChild(noCat);

      svgPaths += gerarLinhaOrganica(cx, cy, posCat.x, posCat.y, cat.cor, 4, seed++);

      const numInst = cat.instituicoes.length;
      const spreadAngulo = Math.min(0.5, 0.14 * numInst + 0.08);

      cat.instituicoes.forEach((inst, instIndex) => {
        let anguloInst;
        if (numInst === 1) {
          anguloInst = anguloCat;
        } else {
          const offset = (instIndex - (numInst - 1) / 2) * (spreadAngulo / Math.max(numInst - 1, 1));
          anguloInst = anguloCat + offset;
        }

        // No hemisfério superior, evita empurrar o card ainda mais para cima
        const noTopo = Math.sin(anguloInst) < -0.35;
        const extraRaio = noTopo ? 0 : (instIndex % 2) * 24;
        const raioInst = raioInstituicao + extraRaio;
        let posInst = polarParaCartesiano(cx, cy, raioInst, anguloInst);
        posInst = limitarPosicao(posInst.x, posInst.y, margemLateral, margemTopo);

        const cardWrapper = document.createElement('div');
        cardWrapper.innerHTML = criarCardHTML(inst, cat.cor, cat.nome, instId);
        const card = cardWrapper.firstElementChild;
        card.style.left = posInst.x + 'px';
        card.style.top = posInst.y + 'px';
        conteudo.appendChild(card);

        svgPaths += gerarLinhaOrganica(posCat.x, posCat.y, posInst.x, posInst.y, cat.cor, 2.5, seed++);
        instId++;
      });
    });

    svg.innerHTML = svgPaths;
    decorarEstrelas(conteudo, largura, alturaBase);
    vincularCards();
  }

  function decorarEstrelas(container, w, h) {
    container.querySelectorAll('.decoracao-estrela').forEach(e => e.remove());
    const posicoes = [
      [w * 0.08, h * 0.12], [w * 0.92, h * 0.08], [w * 0.05, h * 0.55],
      [w * 0.95, h * 0.5], [w * 0.15, h * 0.88], [w * 0.85, h * 0.85]
    ];
    posicoes.forEach(([x, y], i) => {
      const el = document.createElement('span');
      el.className = 'decoracao-estrela';
      el.textContent = i % 2 === 0 ? '✦' : '♥';
      el.style.cssText = `
        position:absolute; left:${x}px; top:${y}px;
        font-size:${0.8 + (i % 3) * 0.3}rem;
        color:${i % 2 === 0 ? '#f4a261' : '#e76f51'};
        opacity:0.45; pointer-events:none; z-index:0;
        animation: twinkle ${2 + i * 0.3}s ease-in-out infinite alternate;
      `;
      container.appendChild(el);
    });
  }

  /* ── Layout mobile (acordeão) ── */
  function renderizarMapaMobile() {
    const container = document.getElementById('mapa-container');
    const conteudo = document.getElementById('mapa-conteudo');
    const svg = document.getElementById('mapa-linhas');
    const hub = document.getElementById('hub-central');

    container.style.height = 'auto';
    conteudo.style.height = 'auto';
    svg.innerHTML = '';

    hub.innerHTML = `
      <h2>${REDE_DATA.centro.titulo}</h2>
      <p>${REDE_DATA.centro.subtitulo}</p>
      <span class="coracao">❤️</span>
    `;

    conteudo.querySelectorAll('.categoria-no, .instituicao-card, .decoracao-estrela').forEach(el => el.remove());

    let instId = 0;

    REDE_DATA.categorias.forEach((cat, index) => {
      const noCat = document.createElement('div');
      noCat.className = 'categoria-no categoria-acordeao';
      noCat.id = `cat-${cat.id}`;

      const aberto = index === 0 ? ' aberto' : '';
      noCat.innerHTML = `
        <button class="categoria-acordeao-btn${aberto}" type="button" aria-expanded="${index === 0}" style="--cat-cor: ${cat.cor}; --cat-cor-clara: ${cat.corClara}">
          ${criarBolhaCategoria(cat)}
          <span class="acordeao-seta" aria-hidden="true">▼</span>
        </button>
        <div class="categoria-instituicoes${aberto}" style="--cat-cor: ${cat.cor}">
          ${cat.instituicoes.map(inst => criarCardHTML(inst, cat.cor, cat.nome, instId++)).join('')}
        </div>
      `;

      const btn = noCat.querySelector('.categoria-acordeao-btn');
      const painel = noCat.querySelector('.categoria-instituicoes');

      btn.addEventListener('click', () => {
        const estaAberto = btn.classList.contains('aberto');
        document.querySelectorAll('.categoria-acordeao-btn').forEach(b => {
          b.classList.remove('aberto');
          b.setAttribute('aria-expanded', 'false');
        });
        document.querySelectorAll('.categoria-instituicoes').forEach(p => p.classList.remove('aberto'));

        if (!estaAberto) {
          btn.classList.add('aberto');
          btn.setAttribute('aria-expanded', 'true');
          painel.classList.add('aberto');
        }
      });

      conteudo.appendChild(noCat);
    });

    vincularCards();
  }

  function renderizar() {
    buildInstituicoesIndex();
    renderizarHeader();
    renderizarNavMobile();
    renderizarPainéis();
    if (isMobile()) {
      renderizarMapaMobile();
    } else {
      renderizarMapaDesktop();
    }
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderizar, 250);
  });

  initModal();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderizar);
  } else {
    renderizar();
  }
})();
