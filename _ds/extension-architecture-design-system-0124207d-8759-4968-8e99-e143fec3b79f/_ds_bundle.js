/* @ds-bundle: {"format":4,"namespace":"ExtensionArchitectureDesignSystem_012420","components":[{"name":"Blog","sourcePath":"ui_kits/website/Blog.jsx"},{"name":"Button","sourcePath":"ui_kits/website/Button.jsx"},{"name":"Contact","sourcePath":"ui_kits/website/Contact.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"IconCircle","sourcePath":"ui_kits/website/IconCircle.jsx"},{"name":"Nav","sourcePath":"ui_kits/website/Nav.jsx"},{"name":"Portfolio","sourcePath":"ui_kits/website/Portfolio.jsx"},{"name":"Process","sourcePath":"ui_kits/website/Process.jsx"},{"name":"ReadMore","sourcePath":"ui_kits/website/ReadMore.jsx"},{"name":"Section","sourcePath":"ui_kits/website/Section.jsx"},{"name":"Services","sourcePath":"ui_kits/website/Services.jsx"},{"name":"Stats","sourcePath":"ui_kits/website/Stats.jsx"},{"name":"Testimonials","sourcePath":"ui_kits/website/Testimonials.jsx"}],"sourceHashes":{"portal/tracker.js":"81e826df35d7","ui_kits/website/Blog.jsx":"ec491cb2e3a8","ui_kits/website/Button.jsx":"79cba1341e03","ui_kits/website/Contact.jsx":"00c0d9d26803","ui_kits/website/Footer.jsx":"d262f0e3fd54","ui_kits/website/Hero.jsx":"6ea442ef5cdd","ui_kits/website/IconCircle.jsx":"f09f4344d9ba","ui_kits/website/Nav.jsx":"ec05bb207302","ui_kits/website/Portfolio.jsx":"9490377bdfc6","ui_kits/website/Process.jsx":"29e16f66e4fb","ui_kits/website/ReadMore.jsx":"31b09e35b76d","ui_kits/website/Section.jsx":"403c7e0a8763","ui_kits/website/Services.jsx":"f250fa65e148","ui_kits/website/Stats.jsx":"00ef105d315f","ui_kits/website/Testimonials.jsx":"82f9295f9cb5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ExtensionArchitectureDesignSystem_012420 = window.ExtensionArchitectureDesignSystem_012420 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// portal/tracker.js
try { (() => {
/* ============================================================
   EA PORTAL — Active Project Tracker · data + render
   ============================================================ */

/* ─── STAGES (Lucide icons, brand stage colours) ─── */
const STAGES = [{
  id: 'concept',
  name: 'Concept & Planning',
  short: 'Concept',
  icon: 'ruler',
  color: 'var(--st-concept)'
}, {
  id: 'structural',
  name: 'Structural Eng.',
  short: 'Structural',
  icon: 'hard-hat',
  color: 'var(--st-structural)'
}, {
  id: 'buildingregs',
  name: 'Building Regs',
  short: 'Building Regs',
  icon: 'clipboard-check',
  color: 'var(--st-buildingregs)'
}, {
  id: 'contract',
  name: 'Contract Admin',
  short: 'Contract',
  icon: 'scroll-text',
  color: 'var(--st-contract)'
}, {
  id: 'interiors',
  name: 'Interiors',
  short: 'Interiors',
  icon: 'sofa',
  color: 'var(--st-interiors)'
}, {
  id: 'pm',
  name: 'Project Mgmt',
  short: 'Project Mgmt',
  icon: 'bar-chart-3',
  color: 'var(--st-pm)'
}];

/* ─── CLIENT DATA — 15 active projects (from the reference tracker) ─── */
let clients = [{
  id: 1,
  name: 'Mr & Mrs Thompson',
  ref: 'EA-2026-031',
  addr: '22 Onslow Gardens, Chelsea, SW7',
  type: 'Rear Ground Floor Extension',
  startDate: '2026-01-08',
  stage: 'concept',
  progress: 85,
  status: 'on',
  sentiment: 'happy',
  review: 'sent',
  notes: 'Planning drawings approved. Ready to move to structural phase.'
}, {
  id: 2,
  name: 'Dr Ananya Sharma',
  ref: 'EA-2026-032',
  addr: "8 Blenheim Terrace, St John's Wood, NW8",
  type: 'Loft Conversion & Rear Extension',
  startDate: '2026-01-15',
  stage: 'structural',
  progress: 60,
  status: 'risk',
  sentiment: 'ok',
  review: 'not',
  notes: 'SE calculations delayed — chased twice. Expected by end of week.'
}, {
  id: 3,
  name: 'The Okonkwo Family',
  ref: 'EA-2026-033',
  addr: '5 Elm Walk, Highgate, N6',
  type: 'Side Return & Roof Terrace',
  startDate: '2025-12-03',
  stage: 'interiors',
  progress: 40,
  status: 'on',
  sentiment: 'happy',
  review: 'left',
  notes: 'Interiors mood boards approved. FF&E schedule in progress.'
}, {
  id: 4,
  name: 'Mr James Whitmore',
  ref: 'EA-2026-034',
  addr: '18 Ladbroke Grove, Notting Hill, W11',
  type: 'Rear & Side Extension',
  startDate: '2026-02-01',
  stage: 'concept',
  progress: 50,
  status: 'on',
  sentiment: 'happy',
  review: 'not',
  notes: 'Planning application submitted 12 Feb. Decision due 12 Apr.'
}, {
  id: 5,
  name: 'Ms Fatima Al-Rashidi',
  ref: 'EA-2026-035',
  addr: '42 Thornton Ave, Streatham, SW2',
  type: 'Single Storey Rear Extension',
  startDate: '2026-01-22',
  stage: 'buildingregs',
  progress: 70,
  status: 'risk',
  sentiment: 'ok',
  review: 'not',
  notes: 'BCO raised query on drainage layout. Revised drawing issued.'
}, {
  id: 6,
  name: 'The Patel Family',
  ref: 'EA-2026-036',
  addr: '14 Elm Grove, Islington, N1',
  type: 'Kitchen Extension & Loft',
  startDate: '2026-02-10',
  stage: 'concept',
  progress: 30,
  status: 'on',
  sentiment: 'happy',
  review: 'not',
  notes: 'Survey complete. Concept options being drawn up for presentation.'
}, {
  id: 7,
  name: 'Mr & Mrs Dubois',
  ref: 'EA-2026-037',
  addr: '6 Belsize Park Gardens, Hampstead, NW3',
  type: 'Basement & Rear Extension',
  startDate: '2025-11-18',
  stage: 'contract',
  progress: 55,
  status: 'off',
  sentiment: 'unhappy',
  review: 'not',
  notes: 'Contractor dispute on prelim costs. CA meeting required ASAP.'
}, {
  id: 8,
  name: 'Dr Marcus Chen',
  ref: 'EA-2026-038',
  addr: '31 Victoria Park Rd, Hackney, E9',
  type: 'Rear Extension & Green Roof',
  startDate: '2026-03-01',
  stage: 'concept',
  progress: 20,
  status: 'on',
  sentiment: 'happy',
  review: 'not',
  notes: 'First concept options presented. Client reviewing options 1 & 2.'
}, {
  id: 9,
  name: 'Ms Priya Nair',
  ref: 'EA-2026-039',
  addr: '9 Pembridge Villas, Notting Hill, W11',
  type: 'First Floor Side Extension',
  startDate: '2026-01-28',
  stage: 'structural',
  progress: 80,
  status: 'on',
  sentiment: 'happy',
  review: 'sent',
  notes: 'Structural calcs received. Coordinated drawing set being finalised.'
}, {
  id: 10,
  name: 'Mr & Mrs Goldstein',
  ref: 'EA-2026-040',
  addr: '77 Cantelowes Rd, Camden, NW1',
  type: 'Wrap-Around Extension',
  startDate: '2025-10-14',
  stage: 'pm',
  progress: 65,
  status: 'risk',
  sentiment: 'ok',
  review: 'left',
  notes: 'Contractor behind programme by 2 weeks. Monitoring closely.'
}, {
  id: 11,
  name: 'Ms Claire Beaumont',
  ref: 'EA-2026-041',
  addr: '3 Manor House Drive, Brondesbury, NW6',
  type: 'Rear Extension & Roof Terrace',
  startDate: '2026-02-20',
  stage: 'buildingregs',
  progress: 45,
  status: 'on',
  sentiment: 'happy',
  review: 'not',
  notes: 'Full plans submitted. BCO acknowledgement received. On schedule.'
}, {
  id: 12,
  name: 'Mr Tobi Adeyemi',
  ref: 'EA-2026-042',
  addr: '55 Coldharbour Lane, Brixton, SW9',
  type: 'Ground Floor Rear Extension',
  startDate: '2026-03-10',
  stage: 'concept',
  progress: 15,
  status: 'on',
  sentiment: 'happy',
  review: 'not',
  notes: 'Measured survey booked for next Thursday. Brief confirmed.'
}, {
  id: 13,
  name: 'The Williams Family',
  ref: 'EA-2026-043',
  addr: '12 Clapham Common North, SW4',
  type: 'Double Storey Rear Extension',
  startDate: '2025-12-20',
  stage: 'contract',
  progress: 30,
  status: 'off',
  sentiment: 'unhappy',
  review: 'not',
  notes: 'Planning condition not discharged before contractor started. Urgent action needed.'
}, {
  id: 14,
  name: 'Dr & Dr Kapoor',
  ref: 'EA-2026-044',
  addr: '28 Harley Street, Marylebone, W1G',
  type: 'Lower Ground Extension',
  startDate: '2026-01-05',
  stage: 'interiors',
  progress: 80,
  status: 'on',
  sentiment: 'happy',
  review: 'left',
  notes: 'Joinery drawings approved. Supplier procurement underway.'
}, {
  id: 15,
  name: 'Mr Roberto Ferretti',
  ref: 'EA-2026-045',
  addr: '19 Chepstow Crescent, Notting Hill, W11',
  type: 'Loft Conversion',
  startDate: '2026-02-14',
  stage: 'structural',
  progress: 30,
  status: 'risk',
  sentiment: 'ok',
  review: 'not',
  notes: 'Ground investigation report awaited. 1-week delay expected.'
}];

/* ─── STATE ─── */
let activeFilter = 'all';
let editingId = null;
let tempSent = null,
  tempReview = null,
  tempStage = null;

/* ─── HELPERS ─── */
const NOW = new Date('2026-04-02'); /* fixed "today" so day-counts are stable */
function daysActive(dateStr) {
  return Math.max(0, Math.floor((NOW - new Date(dateStr)) / 86400000));
}
function stage(sid) {
  return STAGES.find(s => s.id === sid) || STAGES[0];
}
function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}
function statusHTML(s) {
  const map = {
    on: ['sb-on', 'On Track'],
    risk: ['sb-risk', 'Risk of Delay'],
    off: ['sb-off', 'Off Track']
  };
  const [cls, label] = map[s] || map.on;
  return `<span class="status-badge ${cls}"><span class="sb-dot"></span>${label}</span>`;
}
function sentimentHTML(s) {
  const map = {
    happy: {
      ic: 'smile',
      label: 'Happy',
      cls: 'sl-happy'
    },
    ok: {
      ic: 'meh',
      label: 'Neutral',
      cls: 'sl-ok'
    },
    unhappy: {
      ic: 'frown',
      label: 'Unhappy',
      cls: 'sl-unhappy'
    }
  };
  const m = map[s] || map.ok;
  return `<div class="sentiment-cell ${m.cls}"><span class="sent-ic">${icon(m.ic)}</span><span class="sent-label">${m.label}</span></div>`;
}
function reviewHTML(r) {
  const map = {
    left: {
      ic: 'star',
      label: 'Review Left',
      cls: 'rv-left'
    },
    sent: {
      ic: 'send',
      label: 'Requested',
      cls: 'rv-sent'
    },
    not: {
      ic: 'minus',
      label: 'Not Yet',
      cls: 'rv-not'
    }
  };
  const m = map[r] || map.not;
  return `<div class="review-badge ${m.cls}">${icon(m.ic)}<span>${m.label}</span></div>`;
}
function journeyHTML(c) {
  const idx = STAGES.findIndex(s => s.id === c.stage);
  const segs = STAGES.map((s, i) => {
    let pct = 0;
    if (i < idx) pct = 100;else if (i === idx) pct = c.progress;
    const track = i <= idx ? `color-mix(in srgb, ${s.color} 16%, transparent)` : 'rgba(0,0,0,0.06)';
    return `<div class="journey-seg" style="background:${track}"><div class="journey-fill" style="width:${pct}%;background:${s.color}"></div></div>`;
  }).join('');
  const cur = stage(c.stage);
  return `<div class="journey">${segs}</div>
    <div class="journey-meta">
      <span class="jm-pip" style="background:${cur.color}"></span>
      <span class="jm-name" style="color:${cur.color}">${cur.name}</span>
      <span class="jm-pct">${c.progress}%</span>
    </div>`;
}

/* ─── FILTER ─── */
function getFiltered() {
  const search = (document.getElementById('searchBox')?.value || '').toLowerCase();
  return clients.filter(c => {
    const matchSearch = !search || c.name.toLowerCase().includes(search) || c.addr.toLowerCase().includes(search) || c.ref.toLowerCase().includes(search);
    let matchFilter = true;
    if (activeFilter === 'on') matchFilter = c.status === 'on';
    if (activeFilter === 'risk') matchFilter = c.status === 'risk';
    if (activeFilter === 'off') matchFilter = c.status === 'off';
    if (activeFilter === 'unhappy') matchFilter = c.sentiment === 'unhappy';
    if (activeFilter === 'review') matchFilter = c.review === 'sent' || c.review === 'left';
    return matchSearch && matchFilter;
  });
}
function setFilter(f, el) {
  activeFilter = f;
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderTable();
}

/* ─── RENDER ─── */
function renderSummary() {
  const total = clients.length;
  const on = clients.filter(c => c.status === 'on').length;
  const risk = clients.filter(c => c.status === 'risk').length;
  const off = clients.filter(c => c.status === 'off').length;
  document.getElementById('summaryStats').innerHTML = `
    <div class="hdr-stat hs-total"><div class="hdr-stat-val">${total}</div><div class="hdr-stat-lbl">Total Active</div></div>
    <div class="hdr-stat hs-on"><div class="hdr-stat-val">${on}</div><div class="hdr-stat-lbl">On Track</div></div>
    <div class="hdr-stat hs-risk"><div class="hdr-stat-val">${risk}</div><div class="hdr-stat-lbl">At Risk</div></div>
    <div class="hdr-stat hs-off"><div class="hdr-stat-val">${off}</div><div class="hdr-stat-lbl">Off Track</div></div>`;
}
function renderTable() {
  const data = getFiltered();
  const tbody = document.getElementById('tableBody');
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" style="text-align:center;padding:48px;color:var(--fg-3);font-size:15.5px">No projects match your filter.</td></tr>`;
    document.getElementById('footerCount').textContent = '0 projects shown';
    refreshIcons();
    return;
  }
  tbody.innerHTML = data.map((c, i) => {
    const cur = stage(c.stage);
    return `
    <tr onclick="openEdit(${c.id})" style="animation-delay:${i * 0.03}s">
      <td><span class="row-num">${String(i + 1).padStart(2, '0')}</span></td>
      <td>
        <div class="cc-name">${c.name}</div>
        <div class="cc-addr">${c.addr}</div>
        <div class="cc-ref">${c.ref}</div>
      </td>
      <td><div class="proj-type">${c.type}</div></td>
      <td><div class="stage-col">${journeyHTML(c)}</div></td>
      <td>
        <span class="current-stage" style="background:color-mix(in srgb, ${cur.color} 11%, transparent);color:${cur.color};">
          ${icon(cur.icon)} ${cur.short}
        </span>
      </td>
      <td>${statusHTML(c.status)}</td>
      <td><div class="days-cell"><div class="days-num">${daysActive(c.startDate)}</div><div class="days-lbl">Days</div></div></td>
      <td>${sentimentHTML(c.sentiment)}</td>
      <td>${reviewHTML(c.review)}</td>
      <td><div class="notes-text">${c.notes}</div></td>
      <td onclick="event.stopPropagation()"><button class="edit-btn" onclick="openEdit(${c.id})">Edit</button></td>
    </tr>`;
  }).join('');
  document.getElementById('footerCount').textContent = `${data.length} of ${clients.length} projects shown`;
  refreshIcons();
}

/* ─── EDIT MODAL ─── */
function openEdit(id) {
  const c = clients.find(x => x.id === id);
  if (!c) return;
  editingId = id;
  tempSent = c.sentiment;
  tempReview = c.review;
  tempStage = c.stage;
  document.getElementById('modalClientName').textContent = c.name;
  document.getElementById('modalRef').textContent = `${c.ref} · ${c.addr}`;
  document.getElementById('fStatus').value = c.status;
  document.getElementById('fProgress').value = c.progress;
  document.getElementById('fProgressVal').textContent = c.progress + '%';
  document.getElementById('fNotes').value = c.notes;
  renderModalStages(c);
  renderPickers();
  document.getElementById('editModal').classList.add('open');
  document.body.classList.add('modal-open');
  refreshIcons();
}
function renderModalStages(c) {
  const curIdx = STAGES.findIndex(s => s.id === (tempStage || c.stage));
  document.getElementById('msTrack').innerHTML = STAGES.map((s, i) => {
    const state = i < curIdx ? 'done' : i === curIdx ? 'current' : 'upcoming';
    const pct = i < curIdx ? '100%' : i === curIdx ? c.progress + '%' : '—';
    return `<div class="ms-stage ${state}" onclick="setModalStage('${s.id}',${c.id})" title="Set to ${s.name}">
      <div class="ms-stage-ic">${icon(s.icon)}</div>
      <div class="ms-stage-name">${s.name}</div>
      <div class="ms-stage-pct">${pct}</div>
    </div>`;
  }).join('');
  refreshIcons();
}
function setModalStage(sid, cid) {
  tempStage = sid;
  renderModalStages(clients.find(x => x.id === cid));
  toast(`Stage set to ${stage(sid).name}`);
}
function renderPickers() {
  const sentOpts = [['happy', 'smile', 'Happy'], ['ok', 'meh', 'Neutral'], ['unhappy', 'frown', 'Unhappy']];
  document.getElementById('sentPicker').innerHTML = sentOpts.map(([v, ic, l]) => `<div class="pick-opt ${v === tempSent ? 'selected' : ''}" onclick="selectSent('${v}',this)">${icon(ic)}<span>${l}</span></div>`).join('');
  const revOpts = [['not', 'minus', 'Not Yet'], ['sent', 'send', 'Requested'], ['left', 'star', 'Review Left']];
  document.getElementById('reviewPicker').innerHTML = revOpts.map(([v, ic, l]) => `<div class="pick-opt ${v === tempReview ? 'selected' : ''}" onclick="selectReview('${v}',this)">${icon(ic)}<span>${l}</span></div>`).join('');
  refreshIcons();
}
function selectSent(s, el) {
  tempSent = s;
  el.parentElement.querySelectorAll('.pick-opt').forEach(x => x.classList.remove('selected'));
  el.classList.add('selected');
}
function selectReview(r, el) {
  tempReview = r;
  el.parentElement.querySelectorAll('.pick-opt').forEach(x => x.classList.remove('selected'));
  el.classList.add('selected');
}
function saveModal() {
  const c = clients.find(x => x.id === editingId);
  if (!c) return;
  c.status = document.getElementById('fStatus').value;
  c.progress = parseInt(document.getElementById('fProgress').value, 10);
  c.notes = document.getElementById('fNotes').value;
  c.sentiment = tempSent || c.sentiment;
  c.review = tempReview || c.review;
  c.stage = tempStage || c.stage;
  closeModalBtn();
  renderSummary();
  renderTable();
  toast(`${c.name} — project updated`);
}
function closeModal(e) {
  if (e.target === document.getElementById('editModal')) closeModalBtn();
}
function closeModalBtn() {
  document.getElementById('editModal').classList.remove('open');
  document.body.classList.remove('modal-open');
  editingId = null;
}
function openAddModal() {
  toast('Opens the Add Client form (stub)');
}

/* ─── TOAST ─── */
function toast(msg) {
  const c = document.getElementById('tc');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `${icon('check')}<span>${msg}</span>`;
  c.appendChild(t);
  refreshIcons();
  setTimeout(() => t.remove(), 3000);
}

/* ─── LUCIDE ─── */
function refreshIcons() {
  if (window.lucide?.createIcons) window.lucide.createIcons({
    attrs: {
      'stroke-width': 1.5
    }
  });
}

/* ─── INIT ─── */
function init() {
  renderSummary();
  renderTable();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalBtn();
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "portal/tracker.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
// Blog.jsx — three recent posts.

const EA_POSTS = [{
  date: '18 Mar 2026',
  cat: 'Planning',
  title: 'Permitted Development: What you can do without planning in 2026.'
}, {
  date: '04 Mar 2026',
  cat: 'Extensions',
  title: 'Side-return kitchens: a guide to costs, timelines and planning.'
}, {
  date: '22 Feb 2026',
  cat: 'Loft',
  title: 'Dormer vs mansard: choosing the right loft for your London home.'
}];
function Blog() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "blog",
    surface: "light",
    eyebrow: "Journal",
    title: "Plain-English guides from our architects.",
    intro: "No jargon. Just what London homeowners actually need to know."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 28
    }
  }, EA_POSTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      borderRadius: 8,
      backgroundImage: `linear-gradient(rgba(25,25,25,0.15),rgba(25,25,25,0.35)), url(${i % 2 === 0 ? '../../assets/hero-facade.png' : '../../assets/photo-carousel.jpg'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#8E1B18',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#D1D1D1'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.cat)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      margin: 0,
      color: '#191919'
    }
  }, p.title), /*#__PURE__*/React.createElement(ReadMore, {
    arrow: true,
    style: {
      alignSelf: 'flex-start'
    }
  })))));
}
window.Blog = Blog;
Object.assign(__ds_scope, { Blog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Button.jsx — canonical EA pill button
// variants: "fill-red" | "fill-dark" | "outline-dark" | "outline-red" | "outline-inverse" | "glass" | "text"

const buttonBase = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: 17,
  letterSpacing: '0.016em',
  padding: '12px 32px',
  borderRadius: 100,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  border: 'none',
  transition: 'background 150ms cubic-bezier(0.2,0.7,0.2,1), color 150ms, border-color 150ms, transform 120ms',
  whiteSpace: 'nowrap',
  lineHeight: 1.4
};
const buttonVariants = {
  'fill-red': {
    background: '#8E1B18',
    color: '#FEFEFE'
  },
  'fill-dark': {
    background: '#191919',
    color: '#FEFEFE'
  },
  'fill-white': {
    background: '#FEFEFE',
    color: '#8E1B18'
  },
  'outline-dark': {
    background: 'transparent',
    color: '#191919',
    border: '1px solid #191919'
  },
  'outline-red': {
    background: 'transparent',
    color: '#8E1B18',
    border: '1px solid #8E1B18'
  },
  'outline-inverse': {
    background: 'transparent',
    color: '#FEFEFE',
    border: '1.5px solid #FEFEFE'
  },
  'glass': {
    background: 'rgba(255,255,255,0.12)',
    color: '#FEFEFE',
    border: '1.5px solid #FEFEFE',
    backdropFilter: 'blur(4px)'
  },
  'text': {
    background: 'transparent',
    color: '#191919',
    padding: '6px 0',
    borderBottom: '1.5px solid #191919',
    borderRadius: 0
  }
};
function Button({
  variant = 'fill-red',
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const base = {
    ...buttonBase,
    ...(buttonVariants[variant] || buttonVariants['fill-red'])
  };
  const hoverStyle = hover ? hoverFor(variant) : {};
  const pressStyle = pressed ? {
    transform: 'scale(0.98)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...base,
      ...hoverStyle,
      ...pressStyle,
      ...style
    }
  }, rest), children);
}
function hoverFor(v) {
  // All fills invert on hover: red↔white, dark↔white, etc.
  switch (v) {
    case 'fill-red':
      return {
        background: '#FEFEFE',
        color: '#8E1B18',
        border: '1px solid #8E1B18'
      };
    case 'fill-dark':
      return {
        background: '#FEFEFE',
        color: '#191919',
        border: '1px solid #191919'
      };
    case 'fill-white':
      return {
        background: '#8E1B18',
        color: '#FEFEFE',
        border: '1px solid #8E1B18'
      };
    case 'outline-dark':
      return {
        background: '#191919',
        color: '#FEFEFE'
      };
    case 'outline-red':
      return {
        background: '#8E1B18',
        color: '#FEFEFE'
      };
    case 'outline-inverse':
      return {
        background: '#FEFEFE',
        color: '#8E1B18'
      };
    case 'glass':
      return {
        background: 'rgba(255,255,255,0.22)'
      };
    case 'text':
      return {
        paddingBottom: 8
      };
    default:
      return {};
  }
}
window.Button = Button;
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// Contact.jsx — conversion form on crimson surface.

function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    id: "contact",
    surface: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#EBC6A3',
      marginBottom: 16
    }
  }, "Get A Quote"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 'clamp(36px, 4.5vw, 56px)',
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
      margin: 0,
      color: '#FEFEFE'
    }
  }, "Ready to start your project? Tell us about it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'rgba(254,254,254,0.85)',
      marginTop: 18
    }
  }, "Share a few details and we'll come back within one working day with a feasibility call and a fixed-fee proposal.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: '#FEFEFE',
      borderRadius: 8,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 12px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 28,
      color: '#191919',
      letterSpacing: '-0.01em'
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: '#474747',
      marginTop: 12
    }
  }, "We'll be in touch within one working day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-red",
    onClick: () => setSent(false),
    style: {
      marginTop: 16
    }
  }, "Send another")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Postcode"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    type: "tel"
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: "Service"
  }, ['Single Storey Extension', 'Double Storey Extension', 'Loft Conversion', 'Basement', 'Flat Conversion', 'New Build', 'Change of Use', 'Commercial', 'Not sure yet'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement(Field, {
    label: "Tell us about your project",
    textarea: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "fill-red",
    style: {
      marginTop: 10,
      alignSelf: 'flex-start'
    }
  }, "Send Enquiry"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#8C8C8C',
      lineHeight: 1.6
    }
  }, "By sending, you agree to our privacy policy. We'll only use this to reply to your enquiry.")))));
}
function Field({
  label,
  type = 'text',
  textarea
}) {
  const [focused, setFocused] = React.useState(false);
  const Comp = textarea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#474747'
    }
  }, label), /*#__PURE__*/React.createElement(Comp, {
    type: type,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    rows: textarea ? 4 : undefined,
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 5,
      border: focused ? '1.5px solid #8E1B18' : '1px solid #D1D1D1',
      outline: 'none',
      background: '#fff',
      color: '#191919',
      resize: 'vertical'
    }
  }));
}
function SelectField({
  label,
  children
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#474747'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 5,
      border: focused ? '1.5px solid #8E1B18' : '1px solid #D1D1D1',
      outline: 'none',
      background: '#fff',
      color: '#191919'
    }
  }, children));
}
window.Contact = Contact;
Object.assign(__ds_scope, { Contact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx — dark footer.

function Footer() {
  const cols = [{
    title: 'Services',
    items: ['Single Storey', 'Double Storey', 'Loft Conversions', 'Basement', 'Commercial']
  }, {
    title: 'Studio',
    items: ['About', 'Team', 'Careers', 'Journal']
  }, {
    title: 'Contact',
    items: ['London SW1 · UK', '020 XXXX XXXX', 'hello@extensionarchitecture.co.uk']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#191919',
      color: '#FEFEFE',
      padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 64px) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 48,
      paddingBottom: 48,
      borderBottom: '1px solid rgba(254,254,254,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Extension Architecture",
    style: {
      height: 36,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontSize: 14,
      lineHeight: 1.65,
      color: 'rgba(254,254,254,0.7)',
      maxWidth: 280
    }
  }, "London's Trusted Architects. RIBA Chartered. Design & Build from feasibility to delivery.")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#EBC6A3',
      marginBottom: 18
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontFamily: 'Montserrat',
      fontSize: 14,
      color: 'rgba(254,254,254,0.85)'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 28,
      fontSize: 12,
      color: 'rgba(254,254,254,0.5)',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Extension Architecture Ltd. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookies"))));
}
window.Footer = Footer;
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — full-bleed photograph, protection gradient, H1 + dual-CTA.

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: 'url(../../assets/hero-facade.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: '0 clamp(20px, 4vw, 64px)',
      color: '#FEFEFE',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'url(../../assets/overlay-desktop.png)',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 860,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#EBC6A3',
      marginBottom: 20
    }
  }, "RIBA Chartered Architects \xB7 London"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 'clamp(40px, 6vw, 76px)',
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
      margin: 0,
      color: '#FEFEFE',
      textWrap: 'balance'
    }
  }, "London's Trusted Architects for House Extensions & Loft Conversions."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 19,
      lineHeight: 1.65,
      color: '#EAEAEA',
      maxWidth: 640,
      marginTop: 24
    }
  }, "From feasibility to delivery \u2014 a seamless Design & Build process. On time. On budget. Over 1,800 planning approvals in 16 years."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "fill-red",
    onClick: () => document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Get A Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "glass",
    onClick: () => document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Our Services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#FEFEFE',
      fontFamily: 'Montserrat',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "Scroll"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 40,
      background: 'rgba(255,255,255,0.6)'
    }
  })));
}
window.Hero = Hero;
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IconCircle.jsx
try { (() => {
// IconCircle.jsx — 64×64 circular arrow button
// direction: "up-right" (default, read-more) | "left" | "right"

function IconCircle({
  direction = 'up-right',
  variant = 'default',
  size = 64,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const filled = variant === 'filled' || hover;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": "next",
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '1.5px solid #8E1B18',
      background: filled ? '#8E1B18' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background 150ms cubic-bezier(0.2,0.7,0.2,1)',
      padding: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(ArrowSvg, {
    stroke: filled ? '#FEFEFE' : '#8E1B18',
    direction: direction,
    size: size * 0.38
  }));
}
function ArrowSvg({
  stroke = '#8E1B18',
  direction = 'up-right',
  size = 24
}) {
  // Lucide icon paths — https://lucide.dev
  const shape = {
    // move-up-right
    'up-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M13 5H19V11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 5L5 19"
    })),
    // arrow-right
    'right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12H19"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 5L19 12L12 19"
    })),
    // arrow-left
    'left': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M19 12H5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 19L5 12L12 5"
    })),
    // arrow-down
    'down': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5V19"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12L12 19L19 12"
    }))
  }[direction];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: stroke,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, shape);
}
window.IconCircle = IconCircle;
window.ArrowSvg = ArrowSvg;
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IconCircle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Nav.jsx — Fixed transparent nav over hero. On scroll: stays transparent
// (logo + links + CTA stay white) and gains a subtle backdrop blur.

function Nav({
  forceSolid = false
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMobile, setOpenMobile] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Nav never becomes solid white — even when scrolled, it's a subtle
  // translucent wash + backdrop blur, so the imagery beneath stays visible.
  const blurred = forceSolid || scrolled;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px clamp(20px, 4vw, 64px)',
      background: blurred ? 'rgba(25,25,25,0.22)' : 'transparent',
      backdropFilter: blurred ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: blurred ? 'blur(14px)' : 'none',
      borderBottom: blurred ? '1px solid rgba(255,255,255,0.18)' : '1px solid transparent',
      transition: 'background 220ms ease, backdrop-filter 220ms ease, -webkit-backdrop-filter 220ms ease, border-color 220ms ease'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Extension Architecture",
    style: {
      height: 32
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ea-nav-links",
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, ['Services', 'Portfolio', 'About', 'Blog', 'Contact'].map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: `#${item.toLowerCase()}`,
    className: "ea-nav-link",
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 15,
      color: '#FEFEFE',
      border: 'none',
      padding: '4px 0 3px',
      position: 'relative',
      textDecoration: 'none'
    }
  }, item, /*#__PURE__*/React.createElement("span", {
    className: "ea-nav-link-underline",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 1.5,
      width: 0,
      background: '#FEFEFE',
      transition: 'width 260ms cubic-bezier(0.2,0.7,0.2,1)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-inverse",
    style: {
      padding: '10px 24px',
      fontSize: 15
    },
    onClick: () => document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Get A Quote"), /*#__PURE__*/React.createElement("button", {
    className: "ea-burger",
    onClick: () => setOpenMobile(v => !v),
    "aria-label": "menu",
    style: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 8,
      flexDirection: 'column',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 23,
      height: 1.5,
      background: '#FEFEFE',
      display: 'block'
    }
  })))), openMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'rgba(25,25,25,0.92)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(255,255,255,0.18)',
      padding: '20px clamp(20px, 4vw, 64px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, ['Services', 'Portfolio', 'About', 'Blog', 'Contact'].map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: `#${item.toLowerCase()}`,
    onClick: () => setOpenMobile(false),
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 17,
      color: '#FEFEFE',
      border: 'none',
      padding: 0,
      textDecoration: 'none'
    }
  }, item))), /*#__PURE__*/React.createElement("style", null, `
        nav .ea-nav-link:hover .ea-nav-link-underline { width: 100%; }
      `));
}
window.Nav = Nav;
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Portfolio.jsx
try { (() => {
// Portfolio.jsx — Before / after image carousel with icon-arrow controls.

const EA_PROJECTS = [{
  title: 'Victorian Terrace, Clapham',
  cat: 'Rear extension + loft',
  src: '../../assets/hero-facade.png'
}, {
  title: 'Edwardian Semi, Hampstead',
  cat: 'Side-return kitchen',
  src: '../../assets/photo-carousel.jpg'
}, {
  title: 'Converted Mews, Belgravia',
  cat: 'Change of use',
  src: '../../assets/hero-facade.png'
}, {
  title: 'Post-War Detached, Richmond',
  cat: 'Double storey',
  src: '../../assets/photo-carousel.jpg'
}];
function Portfolio() {
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx(i => (i - 1 + EA_PROJECTS.length) % EA_PROJECTS.length);
  const next = () => setIdx(i => (i + 1) % EA_PROJECTS.length);
  const p = EA_PROJECTS[idx];
  return /*#__PURE__*/React.createElement(Section, {
    id: "portfolio",
    surface: "light",
    eyebrow: "Recent work",
    title: "Homes we've helped transform.",
    intro: "Four of over two hundred projects approved and delivered across Greater London."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 32,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url(${p.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 8,
      minHeight: 480,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      right: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(25,25,25,0.6)',
      padding: '14px 20px',
      borderRadius: 5,
      backdropFilter: 'blur(6px)',
      color: '#FEFEFE'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#EBC6A3'
    }
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontSize: 20,
      fontWeight: 600,
      marginTop: 6
    }
  }, p.title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 64,
      color: '#D1D1D1',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, String(idx + 1).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#191919'
    }
  }, " / ", String(EA_PROJECTS.length).padStart(2, '0'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.65,
      color: '#474747',
      marginTop: 32,
      maxWidth: 420
    }
  }, "A Victorian family home opened up with a glass-box rear extension and a full loft conversion. Planning approved first submission; delivered in 24 weeks.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    direction: "left",
    onClick: prev
  }), /*#__PURE__*/React.createElement(IconCircle, {
    direction: "right",
    onClick: next
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-dark",
    style: {
      marginLeft: 14
    }
  }, "View Portfolio")))));
}
window.Portfolio = Portfolio;
Object.assign(__ds_scope, { Portfolio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
// Process.jsx — four-step roadmap.

const EA_PROCESS = [{
  n: '01',
  title: 'Feasibility',
  body: 'Site visit, brief, planning context. We tell you honestly what is possible.'
}, {
  n: '02',
  title: 'Design',
  body: 'Concept, iteration, 3D visuals. You stay in the loop at every step.'
}, {
  n: '03',
  title: 'Planning',
  body: 'Drawings submitted, objections handled. 1,800+ approvals of experience.'
}, {
  n: '04',
  title: 'Build',
  body: 'Tender, tradesperson selection, site management. On time, on budget.'
}];
function Process() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "process",
    surface: "light",
    eyebrow: "Our process",
    title: "A seamless journey, from feasibility to delivery.",
    intro: "One studio. One team. End-to-end Design & Build \u2014 no handoffs, no surprises."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 32,
      position: 'relative'
    }
  }, EA_PROCESS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: '1.5px solid #8E1B18',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 18,
      color: '#8E1B18'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 26,
      letterSpacing: '-0.01em',
      margin: 0,
      color: '#191919'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.7,
      color: '#474747',
      margin: 0
    }
  }, s.body)))));
}
window.Process = Process;
Object.assign(__ds_scope, { Process });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReadMore.jsx
try { (() => {
// ReadMore.jsx — tertiary text CTA with animated underline (0 → 100% on hover).
// The underline is driven by a sibling <span> whose width transitions on parent hover.
// arrow: true shows a small up-right arrow that nudges on hover.

function ReadMore({
  children = 'Read More',
  arrow = false,
  onClick,
  style,
  inverse = false
}) {
  const [hover, setHover] = React.useState(false);
  const color = inverse ? '#FEFEFE' : '#191919';
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: 14,
      color,
      cursor: 'pointer',
      paddingBottom: 4,
      ...style
    }
  }, children, arrow && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transition: 'transform 220ms cubic-bezier(0.2, 0.7, 0.2, 1)',
      transform: hover ? 'translate(3px, -3px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 5H19V11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 5L5 19"
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 1.5,
      width: hover ? '100%' : 0,
      background: color,
      transition: 'width 260ms cubic-bezier(0.2, 0.7, 0.2, 1)'
    }
  }));
}
window.ReadMore = ReadMore;
Object.assign(__ds_scope, { ReadMore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReadMore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Section.jsx
try { (() => {
// Section.jsx — layout wrapper. surface = "light" | "paper" | "dark" | "brand"

function Section({
  id,
  surface = 'light',
  eyebrow,
  title,
  intro,
  children,
  style
}) {
  const bg = {
    light: '#FFFFFF',
    paper: '#FBFBFB',
    bone: '#F3F3F3',
    dark: '#191919',
    brand: '#8E1B18'
  }[surface] || '#FFFFFF';
  const fg = surface === 'dark' || surface === 'brand' ? '#FEFEFE' : '#191919';
  const dimFg = surface === 'dark' || surface === 'brand' ? 'rgba(254,254,254,0.75)' : '#474747';
  const eyebrowColor = surface === 'dark' || surface === 'brand' ? '#EBC6A3' : '#8E1B18';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      color: fg,
      padding: 'clamp(64px, 10vw, 128px) clamp(20px, 4vw, 64px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, (eyebrow || title || intro) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48,
      maxWidth: 760
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: eyebrowColor,
      marginBottom: 16
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 'clamp(32px, 4.5vw, 52px)',
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      margin: 0,
      color: fg,
      textWrap: 'balance'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.7,
      color: dimFg,
      marginTop: 16,
      marginBottom: 0
    }
  }, intro)), children));
}
window.Section = Section;
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Services.jsx — 8 service cards.

const EA_SERVICES = [{
  title: 'Single Storey Extensions',
  body: 'Rear, side-return and wrap-arounds. Open your ground floor.'
}, {
  title: 'Double Storey Extensions',
  body: 'Maximise footprint across two levels with planning certainty.'
}, {
  title: 'Loft Conversions',
  body: 'Dormer, mansard, hip-to-gable. A new bedroom in weeks.'
}, {
  title: 'Basement Extensions',
  body: 'Lightwells, waterproofing, subterranean living areas.'
}, {
  title: 'Flat Conversions',
  body: 'Reconfigure terraces, houses and HMOs into self-contained flats.'
}, {
  title: 'New Build',
  body: 'From infill plots to full homes. RIBA Chartered from start.'
}, {
  title: 'Change of Use',
  body: 'Commercial → residential, offices, and mixed-use conversions.'
}, {
  title: 'Commercial',
  body: 'Retail fit-outs, restaurants, workspace. Fast-track planning.'
}];
function Services() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "services",
    surface: "bone",
    eyebrow: "Services",
    title: "Everything from feasibility to final sign-off.",
    intro: "Eight core services \u2014 one London studio. Whichever route best fits your property."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 20
    }
  }, EA_SERVICES.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: i
  }, s)))));
}
function ServiceCard({
  title,
  body
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      border: '1px solid #EAEAEA',
      borderRadius: 8,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      transition: 'box-shadow 200ms, transform 200ms',
      boxShadow: hover ? '0 12px 32px rgba(25,25,25,0.08)' : '0 0 0 transparent',
      transform: hover ? 'translateY(-2px)' : 'none',
      cursor: 'pointer',
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 22,
      margin: 0,
      color: '#191919',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.65,
      color: '#474747',
      marginTop: 10,
      marginBottom: 0
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement(ReadMore, null), /*#__PURE__*/React.createElement(IconCircle, {
    size: 44,
    variant: hover ? 'filled' : 'default'
  })));
}
window.Services = Services;
Object.assign(__ds_scope, { Services });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Stats.jsx
try { (() => {
// Stats.jsx — four-up credentials row.

const EA_STATS = [{
  value: '16',
  suffix: '+',
  label: 'Years in London'
}, {
  value: '1,800',
  suffix: '+',
  label: 'Planning approvals'
}, {
  value: '98',
  suffix: '%',
  label: 'Approval rate'
}, {
  value: '200',
  suffix: '+',
  label: 'Active builds'
}];
function Stats() {
  return /*#__PURE__*/React.createElement(Section, {
    surface: "paper",
    style: {
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 40
    }
  }, EA_STATS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: '1px solid #D1D1D1',
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 'clamp(44px, 5vw, 64px)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: '#191919'
    }
  }, s.value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#8E1B18'
    }
  }, s.suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 14,
      color: '#474747',
      marginTop: 10,
      letterSpacing: '0.02em'
    }
  }, s.label)))));
}
window.Stats = Stats;
Object.assign(__ds_scope, { Stats });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Stats.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
// Testimonials.jsx — quote cards on dark surface.

const EA_QUOTES = [{
  quote: "They took the fear out of planning. Feasibility on day one was honest — and they delivered exactly what they said they would.",
  name: 'Hannah & Tom',
  meta: 'Clapham · Rear extension'
}, {
  quote: "A small team, but they answered every email. Our loft conversion came in on budget and the build was handled end-to-end.",
  name: 'Priya S.',
  meta: 'Hampstead · Loft conversion'
}, {
  quote: "Sixteen years of London planning experience genuinely shows. They anticipated every objection before the council raised it.",
  name: 'Michael R.',
  meta: 'Richmond · Double storey'
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement(Section, {
    surface: "dark",
    eyebrow: "Homeowners",
    title: "Reassurance from the clients we've worked with.",
    intro: "Real London projects. Real feedback."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 20
    }
  }, EA_QUOTES.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#2D2D2D',
      borderRadius: 8,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 0.6,
      color: '#8E1B18'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 17,
      lineHeight: 1.65,
      color: '#FEFEFE',
      margin: 0,
      flex: 1
    }
  }, t.quote), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      borderTop: '1px solid rgba(254,254,254,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 15,
      color: '#FEFEFE'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      letterSpacing: '0.08em',
      color: '#EBC6A3',
      marginTop: 4,
      textTransform: 'uppercase'
    }
  }, t.meta))))));
}
window.Testimonials = Testimonials;
Object.assign(__ds_scope, { Testimonials });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Blog = __ds_scope.Blog;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Contact = __ds_scope.Contact;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Portfolio = __ds_scope.Portfolio;

__ds_ns.Process = __ds_scope.Process;

__ds_ns.ReadMore = __ds_scope.ReadMore;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Services = __ds_scope.Services;

__ds_ns.Stats = __ds_scope.Stats;

__ds_ns.Testimonials = __ds_scope.Testimonials;

})();
