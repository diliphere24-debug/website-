const projects = {
  academic: {
    label: 'Academic / Archive',
    title: 'Places for\ncuriosity.',
    intro: 'A collection of spaces designed to make learning feel physical, social and open-ended.',
    items: [
      ['The Common Room', '2024', 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85'],
      ['Archive for Tomorrow', '2023', 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85'],
      ['Open School', '2022', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85'],
      ['The Long Table', '2021', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85'],
      ['Study / Light', '2020', 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85']
    ]
  },
  architecture: {
    label: 'Architecture / Archive',
    title: 'Rooms for\nthe everyday.',
    intro: 'Homes and interiors shaped by material honesty, generous light and the rituals of daily life.',
    items: [
      ['House in the Pines', '2025', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'],
      ['Quiet House', '2024', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85'],
      ['North Sea Retreat', '2023', 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85'],
      ['Courtyard Apartment', '2022', 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85'],
      ['Concrete / Garden', '2021', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85']
    ]
  },
  product: {
    label: 'Product / Archive',
    title: 'Objects with\nafterlife.',
    intro: 'Small, durable things that become more useful and more personal with time.',
    items: [
      ['No. 04 / Chair', '2025', 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=85'],
      ['No. 07 / Table', '2024', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85'],
      ['No. 11 / Lamp', '2024', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85'],
      ['Tool for Rest', '2023', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85'],
      ['A Small Cabinet', '2022', 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85']
    ]
  },
  visuals: {
    label: 'Visual archive',
    title: 'Fragments in focus.',
    intro: 'Photographs, details and passing images collected by Studio D.g.',
    items: [
      ['Soft Geometry', '2025', 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1800&q=90'],
      ['After Rain', '2025', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90'],
      ['A Figure in Light', '2024', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=90'],
      ['Blue Hour', '2024', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90'],
      ['Surface Study', '2023', 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90'],
      ['Quiet Detail', '2023', 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=90'],
      ['The Long View', '2022', 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=90'],
      ['Still Life / 08', '2022', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1800&q=90'],
      ['Red Fold', '2021', 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1800&q=90'],
      ['Window Study', '2021', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90'],
      ['A Collected Room', '2020', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=90'],
      ['Late Afternoon', '2020', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=90']
    ]
  }
};

const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('[data-route]');
const cursor = document.querySelector('.cursor-dot');
let currentCategory = 'architecture';

function setView(name) {
  views.forEach((view) => view.classList.toggle('is-active', view.dataset.view === name));
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.route === name || (name === 'archive' && link.dataset.route === 'work') || (name === 'project' && link.dataset.route === 'work')));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function formatTitle(title) {
  const parts = title.split('\n');
  return parts.length > 1 ? `${parts[0]}<br><em>${parts[1]}</em>` : title;
}

function renderArchive(category) {
  currentCategory = category;
  const data = projects[category];
  document.querySelector('.archive-label').textContent = data.label;
  document.querySelector('.archive-heading h1').innerHTML = formatTitle(data.title);
  document.querySelector('.project-grid').innerHTML = data.items.map((item, index) => `<a class="project-card" href="#project/${category}/${index}" data-project="${index}"><div class="project-thumb" style="background-image:url('${item[2]}')"></div><div class="project-info"><span>${item[0]}</span><span>${item[1]} ↗</span></div></a>`).join('');
  document.querySelectorAll('[data-project]').forEach((card) => card.addEventListener('click', (event) => { event.preventDefault(); renderProject(category, Number(card.dataset.project)); setView('project'); history.pushState({}, '', card.href); }));
}

function renderVisuals() {
  const mosaic = document.querySelector('.visual-mosaic');
  mosaic.innerHTML = projects.visuals.items.map((item, index) => `<a class="mosaic-tile mosaic-tile-${index + 1}" href="#project/visuals/${index}" data-project="${index}" style="background-image:url('${item[2]}')"><span>${String(index + 1).padStart(2, '0')} / ${item[0]}</span></a>`).join('');
  mosaic.querySelectorAll('[data-project]').forEach((tile) => {
    tile.addEventListener('mouseenter', () => {
      const item = projects.visuals.items[Number(tile.dataset.project)];
      const preview = document.querySelector('.visual-preview');
      preview.querySelector('.visual-preview-image').style.backgroundImage = `url('${item[2]}')`;
      preview.querySelector('.visual-preview-caption span').textContent = item[0];
      preview.classList.add('is-visible');
    });
    tile.addEventListener('mousemove', (event) => {
      const preview = document.querySelector('.visual-preview');
      const offset = 18;
      const maxLeft = window.innerWidth - preview.offsetWidth - offset;
      const maxTop = window.innerHeight - preview.offsetHeight - offset;
      const left = Math.min(event.clientX + offset, maxLeft);
      const top = Math.min(event.clientY + offset, maxTop);
      preview.style.left = `${Math.max(offset, left)}px`;
      preview.style.top = `${Math.max(offset, top)}px`;
    });
    tile.addEventListener('mouseleave', () => document.querySelector('.visual-preview').classList.remove('is-visible'));
    tile.addEventListener('click', (event) => { event.preventDefault(); renderProject('visuals', Number(tile.dataset.project)); setView('project'); history.pushState({}, '', tile.href); });
  });
}

function renderProject(category, index) {
  const data = projects[category];
  const item = data.items[index];
  const projectTitle = item[0].includes(' / ') ? item[0].replace(' / ', '<br><em>/ ') + '</em>' : item[0];
  document.querySelector('.project-detail').innerHTML = `<div><p class="eyebrow">${data.label} / ${String(index + 1).padStart(2, '0')}</p><h1>${projectTitle}</h1><p class="detail-lead">${data.intro} This project studies the relationship between use, atmosphere and the marks that people leave behind.</p><div class="detail-meta"><span>Year / ${item[1]}</span><span>Scope / Design, direction, detail</span><span>Location / Northern Europe</span></div></div><div class="detail-images"><div style="background-image:url('${item[2]}')"></div><div style="background-image:url('${data.items[(index + 1) % data.items.length][2]}')"></div></div>`;
}

function route() {
  const parts = location.hash.slice(1).split('/');
  if (parts[0] === 'work' && parts[1] && projects[parts[1]]) { renderArchive(parts[1]); setView('archive'); return; }
  if (parts[0] === 'project' && projects[parts[1]]) { renderProject(parts[1], Number(parts[2]) || 0); setView('project'); return; }
  if (parts[0] === 'visuals') { renderVisuals(); setView('visuals'); return; }
  setView(['home', 'work', 'visuals', 'about', 'contact'].includes(parts[0]) ? parts[0] : 'home');
}

document.querySelectorAll('[data-work]').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  if (link.dataset.work === 'visuals') { renderVisuals(); setView('visuals'); history.pushState({}, '', link.href); return; }
  renderArchive(link.dataset.work);
  setView('archive');
  history.pushState({}, '', link.href);
}));
window.addEventListener('hashchange', route);
window.addEventListener('popstate', route);

if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (event) => { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; });
  document.querySelectorAll('a, button').forEach((element) => { element.addEventListener('mouseenter', () => cursor.classList.add('is-large')); element.addEventListener('mouseleave', () => cursor.classList.remove('is-large')); });
}

const slides = document.querySelectorAll('.hero-image');
let slideIndex = 0;
function changeSlide(next = true) { slides[slideIndex].style.opacity = '0'; slideIndex = (slideIndex + (next ? 1 : slides.length - 1)) % slides.length; slides[slideIndex].style.opacity = '1'; document.querySelector('.slide-count').textContent = `0${slideIndex + 1} — 03`; }
document.querySelector('.slide-next').addEventListener('click', () => changeSlide(true));
document.querySelector('.slide-prev').addEventListener('click', () => changeSlide(false));
let hoverSlideTimer;
document.querySelector('.hero-stage').addEventListener('mousemove', (event) => {
  const bounds = event.currentTarget.getBoundingClientRect();
  const position = (event.clientX - bounds.left) / bounds.width;
  if (position > .7 || position < .3) {
    clearTimeout(hoverSlideTimer);
    hoverSlideTimer = setTimeout(() => changeSlide(position > .7), 500);
  }
});
setInterval(() => { if (document.querySelector('.view-home').classList.contains('is-active')) changeSlide(true); }, 4500);
route();
