/* ── STATE ── */
let currentBB = 1;
let currentQ  = 0;
let recActive = 0;
let fotoCount = 0;

/* ── HELPERS ── */
function q() { return BBS[currentBB].questions[currentQ]; }

function totalQuestions() {
  return BBS.reduce((a, bb) => a + bb.questions.length, 0);
}

function globalQIndex() {
  let idx = 0;
  for (let i = 0; i < currentBB; i++) idx += BBS[i].questions.length;
  return idx + currentQ + 1;
}

/* ── RENDER ── */
function render() {
  renderBBNav();
  renderQHeader();
  renderSections();
  renderNormSidebar();
  renderTopProg();
  renderNavPos();
  document.getElementById('content-scroll').scrollTop = 0;
}

function renderBBNav() {
  const nav = document.getElementById('bb-nav');
  nav.innerHTML = BBS.map((bb, i) => {
    const done = bb.questions.every(q => q.a1 || q.a2);
    const active = i === currentBB;
    const cls = active ? 'bb-pill-active' : done ? 'bb-pill-done' : 'bb-pill-open';
    return `<button class="bb-pill ${cls}" onclick="setBB(${i})">${bb.label}: ${bb.title}</button>`;
  }).join('<span class="bb-sep">·</span>');
}

function renderQHeader() {
  const data = q();
  const bb = BBS[currentBB];
  let html = `
    <div class="q-eyebrow">Beweisbeschluss ${bb.id} · Frage ${data.id}</div>
    <div class="q-title">${data.text}</div>
  `;
  if (data.subs && data.subs.length) {
    html += `<div class="q-subs">${data.subs.join('<br>')}</div>`;
  }
  html += `<div class="norm-badges">${data.norms.map(n =>
    `<span class="norm-badge">${n}</span>`
  ).join('')}</div>`;
  document.getElementById('q-header').innerHTML = html;
}

function renderSections() {
  const data = q();
  [1, 2, 3].forEach(i => {
    const val = i === 1 ? data.a1 : i === 2 ? data.a2 : data.a3;
    document.getElementById('snum' + i).textContent = data.id + '.' + i;
    document.getElementById('ta' + i).value = val || '';
    document.getElementById('ta' + i).className = 'ta' + (val ? ' filled' : '');
    setStatus(i, val);
    document.getElementById('ai' + i).classList.remove('visible');
    document.getElementById('vl' + i).textContent = 'Diktieren';
    document.getElementById('vb' + i).classList.remove('rec');
  });
  // fotos
  const strip = document.getElementById('foto-strip');
  strip.innerHTML = '';
  fotoCount = 0;
}

function setStatus(section, val) {
  const el = document.getElementById('sst' + section);
  if (val) {
    el.textContent = '✓ Ausgefüllt';
    el.className = 'section-status st-done';
  } else {
    el.textContent = 'Offen';
    el.className = 'section-status st-open';
  }
}

function renderNormSidebar() {
  const data = q();
  document.getElementById('ns-sub').textContent =
    data.normCards.length + ' passende Stellen gefunden';

  document.getElementById('ns-body').innerHTML = data.normCards.map((nc, i) => `
    <div class="norm-card" id="nc${i}" onclick="applyNorm(${i})">
      <div class="nc-norm">${nc.n}</div>
      <div class="nc-text">${nc.t}</div>
      <div class="nc-rel">Relevanz: ${nc.r}%</div>
      <div class="nc-action">+ In Beurteilung übernehmen</div>
    </div>
  `).join('');
}

function renderTopProg() {
  const bb = BBS[currentBB];
  document.getElementById('top-prog').textContent =
    `${bb.label} · Frage ${q().id}`;
}

function renderNavPos() {
  document.getElementById('nav-pos').textContent =
    `${globalQIndex()} / ${totalQuestions()}`;
}

/* ── NAVIGATION ── */
function setBB(i) {
  currentBB = i;
  currentQ = 0;
  render();
}

function nextQ() {
  const bb = BBS[currentBB];
  if (currentQ < bb.questions.length - 1) {
    currentQ++;
  } else if (currentBB < BBS.length - 1) {
    currentBB++;
    currentQ = 0;
  }
  render();
}

function prevQ() {
  if (currentQ > 0) {
    currentQ--;
  } else if (currentBB > 0) {
    currentBB--;
    currentQ = BBS[currentBB].questions.length - 1;
  }
  render();
}

/* ── VOICE ── */
function startVoice(section) {
  if (recActive === section) {
    stopVoice(section);
    return;
  }
  if (recActive) stopVoice(recActive);

  recActive = section;
  const btn = document.getElementById('vb' + section);
  const lbl = document.getElementById('vl' + section);
  btn.classList.add('rec');
  lbl.textContent = 'Aufnahme läuft…';

  setTimeout(() => {
    btn.classList.remove('rec');
    lbl.textContent = 'Diktieren';
    recActive = 0;

    const ai = document.getElementById('ai' + section);
    ai.classList.add('visible');

    setTimeout(() => {
      ai.classList.remove('visible');
      const data = q();
      const pool = VOICE_TEXTS[section];
      const text = pool[(currentBB * 2 + currentQ) % pool.length];
      const ta = document.getElementById('ta' + section);
      ta.value = text;
      ta.className = 'ta filled';
      if (section === 1) data.a1 = text;
      else if (section === 2) data.a2 = text;
      else data.a3 = text;
      setStatus(section, text);
    }, 1400);
  }, 2200);
}

function stopVoice(section) {
  recActive = 0;
  document.getElementById('vb' + section).classList.remove('rec');
  document.getElementById('vl' + section).textContent = 'Diktieren';
}

/* ── FOTO ── */
function addFoto() {
  fotoCount++;
  const strip = document.getElementById('foto-strip');
  const thumb = document.createElement('div');
  thumb.className = 'foto-thumb';
  thumb.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="11" rx="2" stroke="#9a9a94" stroke-width="1.2"/>
      <circle cx="10" cy="10" r="3" stroke="#9a9a94" stroke-width="1.2"/>
    </svg>
    <div class="foto-ai-label">KI erkannt</div>
  `;
  strip.appendChild(thumb);
}

/* ── NORM APPLY ── */
function applyNorm(i) {
  const data = q();
  const nc = data.normCards[i];
  const ta = document.getElementById('ta3');
  const addition = (ta.value ? '\n\n' : '') +
    `[${nc.n}]: ${nc.t}`;
  ta.value = (ta.value + addition).trim();
  ta.className = 'ta filled';
  data.a3 = ta.value;
  setStatus(3, data.a3);
  document.getElementById('nc' + i).classList.add('applied');
}

/* ── TEXTAREA LISTENERS ── */
function bindTextareas() {
  [1, 2, 3].forEach(i => {
    document.getElementById('ta' + i).addEventListener('input', () => {
      const val = document.getElementById('ta' + i).value;
      const data = q();
      if (i === 1) data.a1 = val;
      else if (i === 2) data.a2 = val;
      else data.a3 = val;
      setStatus(i, val);
    });
  });
}

/* ── TOAST ── */
function showSaveToast() {
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

/* ── KEYBOARD NAV ── */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight') nextQ();
  if (e.key === 'ArrowLeft') prevQ();
});

/* ── INIT ── */
bindTextareas();
render();
