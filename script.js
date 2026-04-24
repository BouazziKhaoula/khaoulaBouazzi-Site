const btn = document.getElementById('langToggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
let lang = localStorage.getItem('portfolio-lang') || 'en';
function applyLang(next){
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr][data-en]').forEach(el => { el.textContent = el.dataset[lang]; });
  btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  localStorage.setItem('portfolio-lang', lang);
}
btn.addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
applyLang(lang);
