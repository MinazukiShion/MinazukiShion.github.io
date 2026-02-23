const langConfig = {
  zh: { label: '中文', nav: { home: '首页', nonfiction: '非虚构', fiction: '虚构', policy: '政策', research: '研究' }},
  ja: { label: '日本語', nav: { home: 'ホーム', nonfiction: 'ノンフィクション', fiction: '創作', policy: '政策', research: '研究' }},
  en: { label: 'EN', nav: { home: 'Home', nonfiction: 'Non-Fiction', fiction: 'Fiction', policy: 'Policy', research: 'Research' }}
};

let currentLang = 'zh';

function setLang(lang) {
  if (!langConfig[lang]) return;
  currentLang = lang;

  document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  updateLangSwitcher();
  updateNav();
  updateTitle();

  localStorage.setItem('lang', lang);

  if (typeof renderContent === 'function') renderContent(lang);
}

function updateLangSwitcher() {
  const config = langConfig[currentLang];
  const textEl = document.querySelector('.lang-current .lang-text');
  if (textEl) textEl.textContent = config.label;

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.langCode === currentLang);
  });
}

function updateNav() {
  const texts = langConfig[currentLang].nav;
  document.querySelectorAll('[data-nav]').forEach(el => {
    const key = el.dataset.nav;
    if (texts[key]) el.textContent = texts[key];
  });
}

function updateTitle() {
  const titles = {
    zh: { index: '水無月紫苑', nonfiction: '非虚构', fiction: '虚构', policy: '政策', research: '研究', article: '文章' },
    ja: { index: '水無月紫苑', nonfiction: 'ノンフィクション', fiction: '創作', policy: '政策', research: '研究', article: '記事' },
    en: { index: 'Shion Minazuki', nonfiction: 'Non-Fiction', fiction: 'Fiction', policy: 'Policy', research: 'Research', article: 'Article' }
  };

  const page = location.pathname.split('/').pop().replace('.html', '') || 'index';
  const t = titles[currentLang];
  if (page !== 'article') {
    const key = t[page] ? page : 'index';
    document.title = t[key] + (key === 'index' ? '' : '｜' + t.index);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'zh';
  setLang(saved);
});

window.setLang = setLang;
