// ===== 1. Countdown to the opening ceremony (1 July 2027, 19:00 Astana time) =====
const target = new Date('2027-07-01T19:00:00+05:00');
function tick() {
  const box = document.getElementById('countdown');
  if (!box) return;
  const diff = Math.max(0, target - new Date());
  const values = [Math.floor(diff / 864e5), Math.floor(diff / 36e5) % 24, Math.floor(diff / 6e4) % 60, Math.floor(diff / 1e3) % 60];
  box.querySelectorAll('b').forEach((el, i) => el.textContent = String(values[i]).padStart(2, '0'));
}
tick(); setInterval(tick, 1000);

// ===== 2. Show blocks when they appear on screen (and count up numbers) =====
const seen = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    e.target.querySelectorAll('[data-count]').forEach(countUp);
    seen.unobserve(e.target);
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => seen.observe(el));

function countUp(el) {
  const end = +el.dataset.count; let n = 0;
  const step = Math.ceil(end / 60);
  const id = setInterval(() => { n = Math.min(end, n + step); el.textContent = n; if (n === end) clearInterval(id); }, 25);
}

// ===== 3. Parallax: mountain layers move at different speeds when scrolling =====
const layers = document.querySelectorAll('.layer');
window.addEventListener('scroll', () => {
  layers.forEach(l => l.style.transform = 'translateY(' + (-window.scrollY * l.dataset.speed) + 'px)');
});

// ===== 4. Schedule filter by city =====
document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('#rows tr').forEach(row => {
    row.hidden = btn.dataset.filter !== 'all' && row.dataset.city !== btn.dataset.filter;
  });
}));

// ===== 5. Ticket total price =====
const ev = document.getElementById('event'), cnt = document.getElementById('count'), total = document.getElementById('total');
function price() {
  if (!ev) return;
  total.textContent = 'Total: ' + ev.selectedOptions[0].dataset.price * cnt.value + ' $';
}
if (ev) { ev.addEventListener('change', price); cnt.addEventListener('input', price); price(); }
document.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => { ev.value = b.dataset.pick; price(); }));
