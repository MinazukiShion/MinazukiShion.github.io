function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display =
      el.getAttribute('data-lang') === lang ? 'block' : 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setLang('zh');
});
