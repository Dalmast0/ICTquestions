/* ════════════════════════════════════════════════════════════════════
   ██████████████████████████████████████████████████████████████████
   ██                                                              ██
   ██   CONTENT — EDIT THIS SECTION TO ADD UNITS AND LESSONS      ██
   ██                                                              ██
   ██████████████████████████████████████████████████████████████████
   ════════════════════════════════════════════════════════════════════

   ╔══════════════════════════════════════════════════════════════╗
   ║  HOW TO ADD A NEW UNIT (a topic group)                       ║
   ╠══════════════════════════════════════════════════════════════╣
   ║  1. Copy one of the blocks below starting with {             ║
   ║  2. Change the id to something unique  →  id: "u4"          ║
   ║  3. Change name, description, icon                           ║
   ║  4. Make sure the last item in the list has NO trailing ,    ║
   ║                                                              ║
   ║  ICON: any emoji works — 💡 🔒 🎨 🧪 📐 🖥️ 🌍              ║
   ╚══════════════════════════════════════════════════════════════╝

   ╔══════════════════════════════════════════════════════════════╗
   ║  HOW TO ADD A NEW LESSON / TOPIC                             ║
   ╠══════════════════════════════════════════════════════════════╣
   ║  1. Copy one of the topic blocks below                       ║
   ║  2. Change id to something unique  →  id: "t10"             ║
   ║  3. Set unit_id to match the unit it belongs to              ║
   ║  4. Write the lesson in the content field using Markdown     ║
   ║  5. order controls the position in the unit list (0, 1, 2…) ║
   ╚══════════════════════════════════════════════════════════════╝

   ╔══════════════════════════════════════════════════════════════╗
   ║  MARKDOWN QUICK REFERENCE                                    ║
   ╠══════════════════════════════════════════════════════════════╣
   ║  # Big heading     ## Smaller heading     ### Smallest       ║
   ║  **bold**          *italic*               `code`             ║
   ║  - bullet          1. numbered            > blockquote       ║
   ║  | Col | Col |     | --- | --- |  (table rows)               ║
   ║  ```python  ...code...  ```  (code block with syntax hint)   ║
   ╚══════════════════════════════════════════════════════════════╝
*/

const UNITS = [
  /* ── UNIT 1 ──────────────────────────────────────────────────── */
  {
    id:          "u1",
    name:        "Digital Systems & Networks",
    description: "How computers, hardware, and networks work together.",
    icon:        "💻",
    order:       0,
  },

  /* ── UNIT 2 ──────────────────────────────────────────────────── */
  {
    id:          "u2",
    name:        "Web & Programming",
    description: "Building websites and the fundamentals of coding.",
    icon:        "🌐",
    order:       1,
  },

  /* ── UNIT 3 ──────────────────────────────────────────────────── */
  {
    id:          "u3",
    name:        "Data & Information",
    description: "How data is stored, processed, and presented.",
    icon:        "📊",
    order:       2,
  },

  /* ── ADD MORE UNITS BELOW THIS LINE ──────────────────────────── */
  /*
  {
    id:          "u4",
    name:        "Cybersecurity",
    description: "Protecting systems, data, and privacy online.",
    icon:        "🔒",
    order:       3,
  },
  */
]


const TOPICS = [
  /* ── TOPIC 1 (belongs to Unit 1) ────────────────────────────── */
  {
    id:      "t1",
    unit_id: "u1",
    title:   "What is a LAN?",
    tags:    ["networking", "hardware"],
    order:   0,
    editor:  "Ms. Johnson",
    edited:  "2025-01-10",
    content: `
# What is a LAN?

A **Local Area Network (LAN)** connects computers and devices within a small geographic area,
such as a school, home, or office building.

## Key Features

- Covers a limited area (usually one building)
- High data transfer speeds
- Privately owned and managed

## Common Components

| Component             | Purpose                              |
|-----------------------|--------------------------------------|
| Router                | Connects the LAN to the internet     |
| Switch                | Connects devices within the LAN      |
| Network cable / Wi-Fi | The physical or wireless link        |

## Example

Your school computer lab is likely a LAN — all machines connect to a central switch
sharing a single internet connection.

> **Key Term:** A WAN (Wide Area Network) is the same idea but over a large geographic area.
> The internet itself is the world's largest WAN.
`,
  },

  /* ── TOPIC 2 (belongs to Unit 1) ────────────────────────────── */
  {
    id:      "t2",
    unit_id: "u1",
    title:   "Binary & Data Representation",
    tags:    ["binary", "data", "theory"],
    order:   1,
    editor:  "Ms. Johnson",
    edited:  "2025-01-15",
    content: `
# Binary & Data Representation

All data inside a computer is stored as **binary** — a sequence of 0s and 1s called **bits**.

## Why Binary?

Computers use electronic circuits that can be either **on** (1) or **off** (0).
Using two states makes circuits simple, fast, and reliable.

## Units of Data

| Unit      | Size                          |
|-----------|-------------------------------|
| 1 Bit     | A single 0 or 1               |
| 1 Byte    | 8 bits                        |
| 1 Kilobyte (KB) | 1,024 bytes             |
| 1 Megabyte (MB) | 1,024 KB                |
| 1 Gigabyte (GB) | 1,024 MB                |

## Converting Binary to Decimal

Binary is base-2. Each digit represents a power of 2.

\`\`\`
Binary:   1  0  1  1
Power:    8  4  2  1
Value:    8  0  2  1  =  11 (decimal)
\`\`\`

So **1011** in binary = **11** in decimal.
`,
  },

  /* ── TOPIC 3 (belongs to Unit 2) ────────────────────────────── */
  {
    id:      "t3",
    unit_id: "u2",
    title:   "HTML Basics",
    tags:    ["html", "web"],
    order:   0,
    editor:  "Ms. Johnson",
    edited:  "2025-01-12",
    content: `
# HTML Basics

**HTML** (HyperText Markup Language) is the standard language for creating web pages.

## Structure of an HTML Document

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
\`\`\`

## Common Tags

| Tag | Purpose |
|-----|---------|
| \`<h1>\` – \`<h6>\` | Headings (largest to smallest) |
| \`<p>\` | Paragraph |
| \`<a href="...">\` | Hyperlink |
| \`<img src="...">\` | Image |
| \`<ul>\` / \`<ol>\` | Unordered / ordered list |
| \`<li>\` | List item |
| \`<div>\` | Generic container block |

> **Tip:** Every opening tag like \`<p>\` needs a matching closing tag \`</p>\`.
`,
  },

  /* ── TOPIC 4 (belongs to Unit 2) ────────────────────────────── */
  {
    id:      "t4",
    unit_id: "u2",
    title:   "Introduction to CSS",
    tags:    ["css", "styling", "web"],
    order:   1,
    editor:  "Ms. Johnson",
    edited:  "2025-01-18",
    content: `
# Introduction to CSS

**CSS** (Cascading Style Sheets) controls how HTML elements look on screen.

## Linking CSS to HTML

\`\`\`html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
\`\`\`

## Basic Syntax

\`\`\`css
selector {
  property: value;
}
\`\`\`

## Common Properties

\`\`\`css
p {
  color: #333333;        /* text colour */
  font-size: 16px;       /* text size */
  font-family: Arial;    /* font */
  background: #f0f0f0;   /* background colour */
  margin: 12px;          /* space outside element */
  padding: 8px;          /* space inside element */
}
\`\`\`

## Selectors

| Selector | Targets |
|----------|---------|
| \`p\` | All \`<p>\` elements |
| \`.highlight\` | All elements with class="highlight" |
| \`#header\` | The element with id="header" |
`,
  },

  /* ── TOPIC 5 (belongs to Unit 3) ────────────────────────────── */
  {
    id:      "t5",
    unit_id: "u3",
    title:   "Databases & Spreadsheets",
    tags:    ["data", "databases", "spreadsheets"],
    order:   0,
    editor:  "Ms. Johnson",
    edited:  "2025-01-20",
    content: `
# Databases & Spreadsheets

Both databases and spreadsheets store **structured data** — but they serve different purposes.

## Spreadsheets

A **spreadsheet** (e.g. Excel, Google Sheets) is best for:
- Calculations and formulas
- Charts and quick visualisations
- Small to medium datasets
- One user at a time

## Databases

A **database** (e.g. MySQL, Access) is best for:
- Large amounts of data
- Multiple users at once
- Avoiding repeated data (normalisation)
- Complex queries and relationships between tables

## Key Database Terms

| Term | Meaning |
|------|---------|
| Table | A grid of rows and columns (like a spreadsheet tab) |
| Record | One row — a single entry |
| Field | One column — a single data category |
| Primary Key | A unique ID for each record |
| Query | A question asked of the database (using SQL) |

## Simple SQL Example

\`\`\`sql
SELECT name, grade
FROM students
WHERE grade > 80
ORDER BY grade DESC;
\`\`\`
`,
  },

  /* ── ADD MORE TOPICS BELOW THIS LINE ─────────────────────────── */
  /*
  {
    id:      "t6",
    unit_id: "u1",          // ← which unit this belongs to
    title:   "My New Lesson",
    tags:    ["theory"],
    order:   2,             // ← position in the unit (0, 1, 2…)
    editor:  "Your Name",
    edited:  "2025-02-01",
    content: `
# My New Lesson

Write your lesson here using Markdown.
    `,
  },
  */
]


/* ════════════════════════════════════════════════════════════════════
   ██ CONFIGURATION — change these if needed                       ██
   ════════════════════════════════════════════════════════════════════ */

const ADMIN_PASSCODE = 'ictadmin2025'   // ← change this!


/* ════════════════════════════════════════════════════════════════════
   ██ APP — you don't need to edit anything below this line        ██
   ════════════════════════════════════════════════════════════════════ */

/* ── localStorage helpers ─────────────────────────────────────── */
const LS = {
  get: (k, def) => { try { const s = localStorage.getItem(k); return s ? JSON.parse(s) : def } catch { return def } },
  set: (k, v)   => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} },
}
const loadUnits  = () => LS.get('ict_units',  UNITS)
const loadTopics = () => LS.get('ict_topics', TOPICS)
const saveUnits  = u  => LS.set('ict_units',  u)
const saveTopics = t  => LS.set('ict_topics', t)
const getVisited = () => LS.get('ict_visited', {})
const markVisited = id => { const v = getVisited(); v[id] = true; LS.set('ict_visited', v) }
const genId = () => Math.random().toString(36).slice(2, 9)
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

/* ── Dark mode ────────────────────────────────────────────────── */
let dark = LS.get('ict_theme', 'light') === 'dark'
const applyDark = on => {
  document.documentElement.classList.toggle('dark', on)
  document.getElementById('dark-btn').textContent = on ? '○' : '◐'
}
applyDark(dark)
function toggleDark() { dark = !dark; LS.set('ict_theme', dark ? 'dark' : 'light'); applyDark(dark) }

/* ── State ────────────────────────────────────────────────────── */
let currentTopic = null
let adminAuthed  = sessionStorage.getItem('ict_admin') === '1'
let sbExpanded   = {}

/* ── DOM helpers ──────────────────────────────────────────────── */
const $ = id => document.getElementById(id)
const html = (el, content) => { if (el) el.innerHTML = content }

/* ── Show / hide pages ────────────────────────────────────────── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
  const el = $('page-' + id)
  if (el) el.classList.add('active')
  window.scrollTo(0, 0)
  closeSidebar()
}

/* ── Main router ──────────────────────────────────────────────── */
function navigate(target, id) {
  if (target === 'home')       { renderHome();        showPage('home') }
  else if (target === 'unit')  { renderUnit(id);      showPage('unit') }
  else if (target === 'topic') { renderTopic(id);     showPage('topic') }
  else if (target === 'search'){ showPage('search');  setTimeout(() => $('search-input')?.focus(), 80) }
  else if (target === 'about') { showPage('about') }
  else if (target === 'admin') { renderAdmin();       showPage('admin') }
  else if (target === 'admin-units')      { renderManageUnits();         showPage('admin') }
  else if (target === 'admin-new-topic')  { renderTopicForm(null, id);  showPage('admin') }
  else if (target === 'admin-edit-topic') { renderTopicForm(id);         showPage('admin') }
}

/* ── Sidebar ──────────────────────────────────────────────────── */
function renderSidebar() {
  const units  = loadUnits().sort((a, b) => a.order - b.order)
  const topics = loadTopics().sort((a, b) => a.order - b.order)
  const v = getVisited()

  if (!units.length) {
    html($('sidebar-list'), `<p style="padding:20px 14px;font-size:.78rem;color:var(--text-3);text-align:center">
      No units yet.<br><a href="#" onclick="navigate('admin');return false;">Admin →</a></p>`)
    return
  }

  html($('sidebar-list'), units.map(u => {
    const ut = topics.filter(t => t.unit_id === u.id)
    const open = !!sbExpanded[u.id]
    return `
      <div class="unit-item">
        <button class="unit-btn ${open ? 'open' : ''}" onclick="toggleSbUnit('${u.id}')">
          <span class="unit-icon">${u.icon || '📘'}</span>
          <span class="unit-name">${u.name}</span>
          <span class="chevron">▼</span>
        </button>
        ${open ? `<div class="topic-list">${
          ut.length
            ? ut.map(t => `
              <div class="topic-link ${currentTopic === t.id ? 'active' : ''}" onclick="navigate('topic','${t.id}')">
                ${v[t.id] && currentTopic !== t.id ? '<span class="topic-check">✓</span>' : ''}
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.title}</span>
              </div>`).join('')
            : '<div class="no-topics">No topics yet</div>'
        }</div>` : ''}
      </div>`
  }).join(''))
}

function toggleSbUnit(id) { sbExpanded[id] = !sbExpanded[id]; renderSidebar() }
function sidebarExpandAll()   { loadUnits().forEach(u => sbExpanded[u.id] = true); renderSidebar() }
function sidebarCollapseAll() { sbExpanded = {}; renderSidebar() }

function toggleSidebar() {
  $('sidebar').classList.toggle('open')
  $('sidebar-overlay').classList.toggle('open')
}
function closeSidebar() {
  $('sidebar').classList.remove('open')
  $('sidebar-overlay').classList.remove('open')
}

/* ── Home ─────────────────────────────────────────────────────── */
function renderHome() {
  const units  = loadUnits().sort((a, b) => a.order - b.order)
  const topics = loadTopics()

  html($('unit-grid'), units.length
    ? units.map(u => {
        const count = topics.filter(t => t.unit_id === u.id).length
        return `
          <div class="unit-card" onclick="navigate('unit','${u.id}')">
            <span class="card-icon">${u.icon || '📘'}</span>
            <h3>${u.name}</h3>
            <p>${u.description || ''}</p>
            <div class="card-count">${count} lesson${count !== 1 ? 's' : ''}</div>
          </div>`
      }).join('')
    : `<div class="empty-state">
        <span class="empty-icon">⚙️</span>
        <p>No units yet. <a href="#" onclick="navigate('admin');return false;">Create one →</a></p>
       </div>`)
}

/* ── Unit overview ────────────────────────────────────────────── */
function renderUnit(id) {
  const units  = loadUnits()
  const topics = loadTopics()
  const u = units.find(u => u.id === id)
  if (!u) { navigate('home'); return }

  const v  = getVisited()
  const ut = topics.filter(t => t.unit_id === id).sort((a, b) => a.order - b.order)

  html($('unit-breadcrumb'), `
    <span class="bc-link" onclick="navigate('home')">Home</span>
    <span class="bc-sep">›</span>
    <span class="bc-current">${u.name}</span>`)

  html($('unit-header'), `
    <div class="unit-hero">
      <span class="big-icon">${u.icon || '📘'}</span>
      <div>
        <h1>${u.name}</h1>
        ${u.description ? `<p>${u.description}</p>` : ''}
        <p class="unit-meta"><strong>${ut.length}</strong> lesson${ut.length !== 1 ? 's' : ''} in this unit</p>
      </div>
    </div>`)

  html($('unit-topics'), ut.length
    ? ut.map((t, i) => `
        <div class="topic-list-item" onclick="navigate('topic','${t.id}')">
          <div class="topic-num ${v[t.id] ? 'done' : ''}">${v[t.id] ? '✓' : i + 1}</div>
          <div class="topic-info">
            <h3>${t.title}</h3>
            ${t.tags?.length ? `<div class="tags-row" style="margin:3px 0 0">${t.tags.slice(0, 4).map(g => `<span class="tag">${g}</span>`).join('')}</div>` : ''}
          </div>
          <span class="topic-arrow">›</span>
        </div>`).join('')
    : `<div class="empty-state">
        <span class="empty-icon">📄</span>
        <p>No lessons yet. <a href="#" onclick="navigate('admin');return false;">Add one →</a></p>
       </div>`)

  // Wrap in page-inner
  const pg = $('page-unit')
  if (!pg.querySelector('.page-inner')) {
    pg.innerHTML = `<div class="page-inner">${pg.innerHTML}</div>`
  }
}

/* ── Topic page ───────────────────────────────────────────────── */
function renderTopic(id) {
  const topics = loadTopics()
  const units  = loadUnits()
  const t = topics.find(t => t.id === id)
  if (!t) { navigate('home'); return }

  currentTopic = id
  markVisited(id)
  renderSidebar()

  const u = units.find(u => u.id === t.unit_id)
  const siblings = topics.filter(s => s.unit_id === t.unit_id).sort((a, b) => a.order - b.order)
  const idx  = siblings.findIndex(s => s.id === id)
  const prev = idx > 0 ? siblings[idx - 1] : null
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : null

  const wc = (t.content || '').split(/\s+/).length
  const readTime = Math.max(1, Math.ceil(wc / 200))

  html($('topic-breadcrumb'), `
    <span class="bc-link" onclick="navigate('home')">Home</span>
    <span class="bc-sep">›</span>
    ${u ? `<span class="bc-link" onclick="navigate('unit','${u.id}')">${u.name}</span><span class="bc-sep">›</span>` : ''}
    <span class="bc-current">${t.title}</span>`)

  html($('topic-header'), `
    <div class="topic-title-section">
      <h1>${t.title}</h1>
      <div class="topic-meta">
        ${t.editor ? `<span class="meta-item">✏️ ${t.editor}</span>` : ''}
        ${t.edited  ? `<span class="meta-item">📅 ${t.edited}</span>` : ''}
        <span class="meta-item">~${readTime} min read</span>
        <span class="meta-btn no-print" onclick="navigate('admin-edit-topic','${t.id}')">✏️ Edit</span>
        <span class="meta-btn no-print" onclick="window.print()">🖨️ Print</span>
      </div>
    </div>`)

  html($('topic-tags'), (t.tags || []).map(g => `<span class="tag">${g}</span>`).join(''))

  html($('topic-content'), t.content
    ? marked.parse(t.content)
    : '<p style="color:var(--text-3);font-style:italic">No content yet.</p>')

  html($('topic-nav'), `
    ${prev ? `<button class="tnav-btn" onclick="navigate('topic','${prev.id}')">
      <span class="tnav-label">← Previous</span>
      <span class="tnav-title">${prev.title}</span>
    </button>` : '<div></div>'}
    ${next ? `<button class="tnav-btn right" onclick="navigate('topic','${next.id}')">
      <span class="tnav-label">Next →</span>
      <span class="tnav-title">${next.title}</span>
    </button>` : '<div></div>'}`)

  // Wrap in page-inner
  wrapPageInner('page-topic')
}

function wrapPageInner(pageId) {
  const pg = $(pageId)
  if (pg && !pg.querySelector('.page-inner')) {
    pg.innerHTML = `<div class="page-inner">${pg.innerHTML}</div>`
  }
}

/* ── Search ───────────────────────────────────────────────────── */
function doSearch(q) {
  navigate('search')
  const syncInputs = v => ['search-input', 'nav-search-input', 'home-search'].forEach(id => { if ($(id)) $(id).value = v })
  syncInputs(q)

  if (!q.trim()) {
    html($('search-results'), `<div class="search-empty"><span class="e-icon">🔍</span><p>Enter a search term above</p></div>`)
    return
  }

  const topics  = loadTopics()
  const units   = loadUnits()
  const unitMap = Object.fromEntries(units.map(u => [u.id, u]))
  const ql      = q.toLowerCase()

  const results = topics.filter(t =>
    t.title?.toLowerCase().includes(ql) ||
    t.content?.toLowerCase().includes(ql) ||
    t.tags?.some(g => g.toLowerCase().includes(ql))
  )

  if (!results.length) {
    html($('search-results'), `<div class="search-empty"><span class="e-icon">🔍</span><p>No results for "<strong>${q}</strong>"</p><p style="font-size:.8rem;margin-top:6px">Try different keywords.</p></div>`)
    return
  }

  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const hl  = text => text?.replace(new RegExp(`(${esc(q)})`, 'gi'), '<mark>$1</mark>') || ''
  const snip = text => {
    const clean = (text || '').replace(/[#*`>\-_\[\]()!]/g, ' ')
    const idx   = clean.toLowerCase().indexOf(ql)
    if (idx === -1) return clean.slice(0, 180) + '…'
    const s = Math.max(0, idx - 60)
    return (s > 0 ? '…' : '') + clean.slice(s, s + 200) + '…'
  }

  html($('search-results'), `
    <p class="search-count">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong>${q}</strong>"</p>` +
    results.map(t => {
      const u = unitMap[t.unit_id]
      return `
        <div class="search-result-item" onclick="navigate('topic','${t.id}')">
          <span class="search-result-icon">📄</span>
          <div>
            <h3>${hl(t.title)}</h3>
            ${u ? `<p class="result-unit">${u.icon} ${u.name}</p>` : ''}
            <p class="result-snip">${hl(snip(t.content))}</p>
            ${t.tags?.length ? `<div class="tags-row" style="margin-top:8px">${t.tags.map(g => `<span class="tag">${g}</span>`).join('')}</div>` : ''}
          </div>
        </div>`
    }).join('')
  )
}

/* ── Admin gate ───────────────────────────────────────────────── */
function renderAdmin(sub, subId) {
  const el = $('page-admin')
  if (!adminAuthed) { renderGate(el); return }
  if (sub === 'units')     { renderManageUnits(el); return }
  if (sub === 'new-topic') { renderTopicForm(null, subId, el); return }
  if (sub === 'edit-topic'){ renderTopicForm(subId, null, el); return }
  renderDashboard(el)
}

function renderGate(el) {
  el.innerHTML = `
    <div class="admin-gate">
      <div class="gate-card">
        <span class="gate-icon">🔒</span>
        <h2>Admin Panel</h2>
        <p>Enter the team passcode to continue</p>
        <input type="password" id="pc-input" placeholder="Passcode"
               onkeydown="if(event.key==='Enter')checkPasscode()" autofocus />
        <div id="pc-error" class="gate-error"></div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:4px" onclick="checkPasscode()">Enter</button>
        <p class="gate-hint">Default: <code>ictadmin2025</code> · Change in app.js</p>
      </div>
    </div>`
}

function checkPasscode() {
  if ($('pc-input')?.value === ADMIN_PASSCODE) {
    adminAuthed = true
    sessionStorage.setItem('ict_admin', '1')
    renderAdmin()
  } else {
    const e = $('pc-error')
    e.textContent = 'Incorrect passcode. Try again.'
    e.style.display = 'block'
    if ($('pc-input')) $('pc-input').value = ''
  }
}

/* ── Admin dashboard ──────────────────────────────────────────── */
function renderDashboard(el) {
  el = el || $('page-admin')
  const units  = loadUnits().sort((a, b) => a.order - b.order)
  const topics = loadTopics().sort((a, b) => new Date(b.edited || 0) - new Date(a.edited || 0))
  const unitMap = Object.fromEntries(units.map(u => [u.id, u]))

  const contribs = {}
  topics.forEach(t => { const n = t.editor || 'Unknown'; contribs[n] = (contribs[n] || 0) + 1 })
  const board = Object.entries(contribs).sort((a, b) => b[1] - a[1]).slice(0, 5)

  el.innerHTML = `
    <div class="admin-wrap">
      <div class="admin-header">
        <div>
          <h1>Dashboard</h1>
          <p>Manage curriculum units and lessons</p>
        </div>
        <div class="admin-actions">
          <button class="btn btn-outline btn-sm" onclick="navigate('admin-units')">⚙️ Units</button>
          <button class="btn btn-primary btn-sm" onclick="navigate('admin-new-topic')">+ New Lesson</button>
        </div>
      </div>

      <div class="stats-row">
        ${[
          ['Units',        units.length],
          ['Lessons',      topics.length],
          ['Contributors', board.length],
          ['Edited Today', topics.filter(t => t.edited === new Date().toISOString().slice(0,10)).length],
        ].map(([l, v]) => `
          <div class="stat-box">
            <div class="s-label">${l}</div>
            <div class="s-val">${v}</div>
          </div>`).join('')}
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px">
        <div class="admin-panel">
          <h2>Recent Edits</h2>
          ${topics.slice(0, 5).map(t => `
            <div class="a-row" onclick="navigate('admin-edit-topic','${t.id}')">
              <div class="a-main">
                <div class="a-title">${t.title}</div>
                <div class="a-sub">${unitMap[t.unit_id]?.name || '?'} · ${t.editor || '—'}</div>
              </div>
              <div class="a-date">${t.edited || ''}</div>
            </div>`).join('') || '<p style="font-size:.8rem;color:var(--text-3)">No edits yet.</p>'}
        </div>
        <div class="admin-panel">
          <h2>🏆 Top Contributors</h2>
          ${board.map(([name, count], i) => `
            <div class="a-row">
              <span style="font-weight:700;font-size:.82rem;width:22px;color:${['#eab308','#9ca3af','#d97706','var(--text-3)','var(--text-3)'][i]}">#${i+1}</span>
              <div class="a-main"><div class="a-title">${name}</div></div>
              <span style="font-size:.7rem;background:var(--surface-2);color:var(--text-3);padding:2px 8px;border-radius:20px">${count} edit${count!==1?'s':''}</span>
            </div>`).join('') || '<p style="font-size:.8rem;color:var(--text-3)">None yet.</p>'}
        </div>
      </div>

      <div class="admin-panel">
        <h2>All Units <a href="#" onclick="navigate('admin-units');return false;">Manage →</a></h2>
        ${units.map(u => {
          const count = topics.filter(t => t.unit_id === u.id).length
          return `
            <div class="a-row">
              <span style="font-size:1.2rem">${u.icon||'📘'}</span>
              <div class="a-main"><div class="a-title">${u.name}</div></div>
              <span style="font-size:.75rem;color:var(--text-3)">${count} lesson${count!==1?'s':''}</span>
              <button class="btn btn-ghost btn-sm" onclick="navigate('admin-new-topic','${u.id}')">+ Add lesson</button>
            </div>`
        }).join('') || '<p style="font-size:.8rem;color:var(--text-3)">No units yet.</p>'}
      </div>
    </div>`
}

/* ── Manage units ─────────────────────────────────────────────── */
function renderManageUnits(el) {
  el = el || $('page-admin')
  const EMOJIS = ['📘','💻','🌐','🔒','🎨','🧠','📊','⚙️','🔬','📱','🗄️','🧩','🔧','📐','🖥️','🌍','⚡','🔗']
  const units = loadUnits().sort((a, b) => a.order - b.order)

  el.innerHTML = `
    <div class="admin-wrap">
      <div class="admin-header">
        <div style="display:flex;align-items:center;gap:10px">
          <button class="btn btn-ghost btn-sm" onclick="navigate('admin')">← Back</button>
          <h1>Manage Units</h1>
        </div>
        <button class="btn btn-outline btn-sm" onclick="showUnitForm()">+ New Unit</button>
      </div>

      <div id="unit-form-area" style="display:none;margin-bottom:20px"></div>

      <div id="unit-list-area">
        ${units.length
          ? units.map(u => `
            <div class="admin-panel" style="display:flex;align-items:center;gap:14px;padding:16px 20px;margin-bottom:10px">
              <span style="font-size:1.5rem">${u.icon||'📘'}</span>
              <div style="flex:1;min-width:0">
                <div style="font-weight:700;font-size:.875rem">${u.name}</div>
                ${u.description?`<div style="font-size:.75rem;color:var(--text-3)">${u.description}</div>`:''}
              </div>
              <button class="btn btn-outline btn-sm" onclick="editUnit('${u.id}')">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="deleteUnit('${u.id}')">🗑</button>
            </div>`).join('')
          : `<p style="color:var(--text-3);font-size:.875rem">No units yet. Create the first one above.</p>`}
      </div>
    </div>`

  // Store emoji list for form use
  el._emojis = EMOJIS
}

function showUnitForm(u) {
  const area = $('unit-form-area')
  if (!area) return
  const EMOJIS = ['📘','💻','🌐','🔒','🎨','🧠','📊','⚙️','🔬','📱','🗄️','🧩','🔧','📐','🖥️','🌍','⚡','🔗']
  area.style.display = 'block'
  area.innerHTML = `
    <div class="admin-panel">
      <h2 id="uf-title">${u ? 'Edit Unit' : 'New Unit'}</h2>
      <input type="hidden" id="uf-id" value="${u?.id||''}" />
      <div class="form-section">
        <label class="form-label">Icon</label>
        <div class="emoji-grid">
          ${EMOJIS.map(e => `<button class="e-btn ${(u?.icon||'📘')===e?'on':''}" onclick="selectEmoji(this,'${e}')">${e}</button>`).join('')}
        </div>
        <input type="hidden" id="uf-icon" value="${u?.icon||'📘'}" />
      </div>
      <div class="form-section">
        <label class="form-label">Unit Name *</label>
        <input type="text" id="uf-name" value="${u?.name||''}" placeholder="e.g. Digital Systems & Networks" />
      </div>
      <div class="form-section">
        <label class="form-label">Description</label>
        <input type="text" id="uf-desc" value="${u?.description||''}" placeholder="One sentence about this unit" />
      </div>
      <div class="form-row">
        <button class="btn btn-ghost btn-sm" onclick="hideUnitForm()">Cancel</button>
        <button class="btn btn-primary btn-sm" onclick="saveUnit()">Save Unit</button>
      </div>
    </div>`
}

function hideUnitForm() { const a = $('unit-form-area'); if (a) a.style.display = 'none' }

function selectEmoji(btn, e) {
  document.querySelectorAll('.e-btn').forEach(b => b.classList.remove('on'))
  btn.classList.add('on')
  const el = $('uf-icon'); if (el) el.value = e
}

function editUnit(id) {
  const u = loadUnits().find(u => u.id === id)
  showUnitForm(u)
}

function saveUnit() {
  const id   = $('uf-id')?.value
  const name = $('uf-name')?.value.trim()
  if (!name) { alert('Unit name is required.'); return }
  const data = { name, description: $('uf-desc')?.value.trim() || '', icon: $('uf-icon')?.value || '📘' }
  let units = loadUnits()
  if (id) {
    units = units.map(u => u.id === id ? { ...u, ...data } : u)
  } else {
    units.push({ id: genId(), order: units.length, ...data })
  }
  saveUnits(units)
  renderSidebar()
  navigate('admin-units')
}

function deleteUnit(id) {
  const u = loadUnits().find(u => u.id === id)
  if (!confirm(`Delete unit "${u?.name}"? Lessons in it will become orphaned.`)) return
  saveUnits(loadUnits().filter(u => u.id !== id))
  renderSidebar()
  navigate('admin-units')
}

/* ── Topic form (new + edit) ──────────────────────────────────── */
function renderTopicForm(topicId, preUnitId, el) {
  el = el || $('page-admin')
  const units  = loadUnits().sort((a, b) => a.order - b.order)
  const t      = topicId ? loadTopics().find(t => t.id === topicId) : null
  let preview  = false

  el.innerHTML = `
    <div class="admin-wrap">
      <div class="admin-header">
        <div style="display:flex;align-items:center;gap:10px">
          <button class="btn btn-ghost btn-sm" onclick="navigate('admin')">← Dashboard</button>
          <h1>${t ? 'Edit Lesson' : 'New Lesson'}</h1>
        </div>
        ${t ? `<button class="btn btn-danger btn-sm" onclick="deleteTopic('${t.id}')">🗑 Delete</button>` : ''}
      </div>

      <div class="admin-panel">
        <div class="form-section">
          <label class="form-label">Lesson Title *</label>
          <input type="text" id="tf-title" value="${t?.title||''}" placeholder="e.g. What is a LAN?" style="font-size:1rem;font-weight:600" />
        </div>
        <div class="form-section">
          <label class="form-label">Unit *</label>
          <select id="tf-unit">
            <option value="">— select a unit —</option>
            ${units.map(u => `<option value="${u.id}" ${(t?.unit_id===u.id||(preUnitId===u.id))?'selected':''}>${u.icon} ${u.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-section">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:7px">
            <label class="form-label" style="margin:0">Content (Markdown)</label>
            <button class="btn btn-ghost btn-sm" id="prev-btn" onclick="toggleTopicPreview()">👁 Preview</button>
          </div>
          <textarea id="tf-content" placeholder="Write your lesson in Markdown…">${t?.content||''}</textarea>
          <div class="preview-pane prose" id="tf-preview" style="display:none"></div>
        </div>
        <div class="form-section">
          <label class="form-label">Tags (comma-separated)</label>
          <input type="text" id="tf-tags" value="${(t?.tags||[]).join(', ')}" placeholder="e.g. networking, hardware, theory" />
        </div>
        <div class="form-section">
          <label class="form-label">Your Name (contributor)</label>
          <input type="text" id="tf-editor" placeholder="e.g. Ms. Johnson" />
        </div>
        <div class="form-row">
          <button class="btn btn-primary" onclick="saveTopic('${topicId||''}')">💾 Save Lesson</button>
        </div>
      </div>
      ${t ? `<p style="text-align:center;font-size:.72rem;color:var(--text-3);margin-top:14px">
        Public URL: lesson id <code>${t.id}</code></p>` : ''}
    </div>`
}

function toggleTopicPreview() {
  const ta   = $('tf-content')
  const pv   = $('tf-preview')
  const btn  = $('prev-btn')
  const show = pv?.style.display !== 'none'
  if (show) { pv.style.display='none'; ta.style.display='block'; if(btn) btn.textContent='👁 Preview' }
  else { pv.innerHTML=marked.parse(ta?.value||''); pv.style.display='block'; ta.style.display='none'; if(btn) btn.textContent='✏️ Edit' }
}

function saveTopic(id) {
  const title  = $('tf-title')?.value.trim()
  const unitId = $('tf-unit')?.value
  if (!title)  { alert('Title is required.'); return }
  if (!unitId) { alert('Please select a unit.'); return }
  const tags   = ($('tf-tags')?.value||'').split(',').map(s=>s.trim()).filter(Boolean)
  const editor = $('tf-editor')?.value.trim()
  const today  = new Date().toISOString().slice(0, 10)
  let topics   = loadTopics()

  if (id) {
    const old = topics.find(t => t.id === id)
    topics = topics.map(t => t.id === id
      ? { ...t, title, unit_id: unitId, tags, content: $('tf-content')?.value || '', editor: editor || old?.editor || 'Anonymous', edited: today }
      : t)
  } else {
    topics.push({ id: genId(), title, unit_id: unitId, tags, content: $('tf-content')?.value || '', order: 999, editor: editor || 'Anonymous', edited: today })
  }

  saveTopics(topics)
  renderSidebar()
  navigate('admin')
}

function deleteTopic(id) {
  const t = loadTopics().find(t => t.id === id)
  if (!confirm(`Delete "${t?.title}"? This cannot be undone.`)) return
  saveTopics(loadTopics().filter(t => t.id !== id))
  renderSidebar()
  navigate('admin')
}

/* ── Init ─────────────────────────────────────────────────────── */
renderSidebar()
renderHome()
