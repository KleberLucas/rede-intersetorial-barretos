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

  const isMobile = () => window.innerWidth <= 900;

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

  function formatarContato(contato) {
    const itens = [];
    if (contato.telefone) {
      const tel = contato.telefone.replace(/\D/g, '');
      itens.push(`<a href="tel:+55${tel}">Tel. ${contato.telefone}</a>`);
    }
    if (contato.email) {
      itens.push(`<a href="mailto:${contato.email}">${contato.email}</a>`);
    }
    if (contato.site) {
      const url = contato.site.startsWith('http') ? contato.site : `https://${contato.site}`;
      const label = contato.site.replace(/^https?:\/\//, '');
      itens.push(`<a href="${url}" target="_blank" rel="noopener">${label}</a>`);
    }
    return itens.join('');
  }

  function criarCardHTML(inst, cor) {
    return `
      <div class="instituicao-card" data-categoria-cor="${cor}">
        <div class="card-inner" style="border-color: ${cor}; background: linear-gradient(135deg, #fff 60%, ${cor}08)">
          <span class="card-icone-inst">${inst.icone || '📍'}</span>
          <h4 class="card-titulo" style="color: ${cor}">${inst.nome}</h4>
          <ul class="card-topicos">
            ${inst.topicos.map(t => `<li>${t}</li>`).join('')}
          </ul>
          <div class="card-contato" style="color: ${cor}">
            ${formatarContato(inst.contato)}
          </div>
          <span class="card-tipo-badge tipo-${inst.tipo}" title="${inst.tipo}">
            ${TIPO_ICONES[inst.tipo] || '📍'}
          </span>
        </div>
      </div>`;
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
    const alturaBase = Math.max(700, largura * 0.75);
    container.style.height = alturaBase + 'px';
    conteudo.style.height = alturaBase + 'px';
    svg.setAttribute('viewBox', `0 0 ${largura} ${alturaBase}`);

    const cx = largura / 2;
    const cy = alturaBase / 2;

    const raioCategoria = Math.min(largura, alturaBase) * 0.22;
    const raioInstituicao = Math.min(largura, alturaBase) * 0.42;

    hub.style.left = cx + 'px';
    hub.style.top = cy + 'px';
    hub.innerHTML = `
      <h2>${REDE_DATA.centro.titulo}</h2>
      <p>${REDE_DATA.centro.subtitulo}</p>
      <span class="coracao">❤️</span>
    `;

    conteudo.querySelectorAll('.categoria-no, .instituicao-card').forEach(el => el.remove());

    let svgPaths = '';
    let seed = 0;

    const anguloInicio = -Math.PI / 2;
    const anguloPasso = (2 * Math.PI) / numCat;

    categorias.forEach((cat, catIndex) => {
      const anguloCat = anguloInicio + catIndex * anguloPasso;
      const posCat = polarParaCartesiano(cx, cy, raioCategoria, anguloCat);

      const noCat = document.createElement('div');
      noCat.className = 'categoria-no';
      noCat.style.left = posCat.x + 'px';
      noCat.style.top = posCat.y + 'px';
      noCat.innerHTML = `
        <div class="categoria-bolha" style="border-color: ${cat.cor}; background: ${cat.corClara || '#fff'}">
          <span class="categoria-numero" style="color: ${cat.cor}">${cat.id}</span>
          <span class="categoria-icone">${cat.icone}</span>
          <span class="categoria-nome" style="color: ${cat.cor}">${cat.nome}</span>
        </div>
      `;
      conteudo.appendChild(noCat);

      svgPaths += gerarLinhaOrganica(cx, cy, posCat.x, posCat.y, cat.cor, 4, seed++);

      const numInst = cat.instituicoes.length;
      const spreadAngulo = Math.min(0.55, 0.15 * numInst + 0.1);
      const anguloBaseInst = anguloCat;

      cat.instituicoes.forEach((inst, instIndex) => {
        let anguloInst;
        if (numInst === 1) {
          anguloInst = anguloBaseInst;
        } else {
          const offset = (instIndex - (numInst - 1) / 2) * (spreadAngulo / Math.max(numInst - 1, 1));
          anguloInst = anguloBaseInst + offset;
        }

        const raioInst = raioInstituicao + (instIndex % 2) * 25;
        const posInst = polarParaCartesiano(cx, cy, raioInst, anguloInst);

        const cardWrapper = document.createElement('div');
        cardWrapper.innerHTML = criarCardHTML(inst, cat.cor);
        const card = cardWrapper.firstElementChild;
        card.style.left = posInst.x + 'px';
        card.style.top = posInst.y + 'px';
        conteudo.appendChild(card);

        svgPaths += gerarLinhaOrganica(posCat.x, posCat.y, posInst.x, posInst.y, cat.cor, 2.5, seed++);
      });
    });

    svg.innerHTML = svgPaths;

    decorarEstrelas(conteudo, largura, alturaBase);
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

  /* ── Layout mobile (empilhado) ── */
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

    REDE_DATA.categorias.forEach(cat => {
      const noCat = document.createElement('div');
      noCat.className = 'categoria-no';
      noCat.innerHTML = `
        <div class="categoria-bolha" style="border-color: ${cat.cor}; background: ${cat.corClara || '#fff'}">
          <span class="categoria-numero" style="color: ${cat.cor}">${cat.id}</span>
          <span class="categoria-icone">${cat.icone}</span>
          <span class="categoria-nome" style="color: ${cat.cor}">${cat.nome}</span>
        </div>
        <div class="categoria-instituicoes" style="border-color: ${cat.cor}">
          ${cat.instituicoes.map(inst => criarCardHTML(inst, cat.cor)).join('')}
        </div>
      `;
      conteudo.appendChild(noCat);
    });
  }

  function renderizar() {
    renderizarHeader();
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
    resizeTimer = setTimeout(renderizar, 200);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderizar);
  } else {
    renderizar();
  }
})();
