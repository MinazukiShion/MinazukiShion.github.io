const langConfig = {
  zh: { label: '中文', nav: { home: '首页', nonfiction: '非虚构', fiction: '虚构', policy: '政策', research: '研究' }},
  ja: { label: '日本語', nav: { home: 'ホーム', nonfiction: 'ノンフィクション', fiction: '創作', policy: '政策', research: '研究' }},
  en: { label: 'EN', nav: { home: 'Home', nonfiction: 'Non-Fiction', fiction: 'Fiction', policy: 'Policy', research: 'Research' }}
};

let currentLang = 'zh';

function setLang(lang) {
  if (!langConfig[lang]) return;
  currentLang = lang;
  
  // Update HTML lang
  document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'zh' ? 'zh-CN' : 'en';
  
  // Update content visibility using class
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
  
  // Update UI
  updateLangSwitcher();
  updateNav();
  updateTitle();
  
  localStorage.setItem('lang', lang);
}

function updateLangSwitcher() {
  const config = langConfig[currentLang];
  const btn = document.querySelector('.lang-current');
  if (btn) {
    // Keep arrow, update text only
    const arrow = btn.querySelector('.arrow');
    btn.innerHTML = `${config.label} ${arrow ? arrow.outerHTML : '<span class="arrow">▼</span>'}`;
  }
  
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
    zh: { index: '水無月紫苑', nonfiction: '非虚构', fiction: '虚构创作', policy: '政策', research: '研究' },
    ja: { index: '水無月紫苑', nonfiction: 'ノンフィクション', fiction: '創作', policy: '政策', research: '研究' },
    en: { index: 'Shion Minazuki', nonfiction: 'Non-Fiction', fiction: 'Fiction', policy: 'Policy', research: 'Research' }
  };
  
  const page = location.pathname.split('/').pop().replace('.html', '') || 'index';
  const t = titles[currentLang];
  document.title = t[page] + (page === 'index' ? '' : '｜' + t.index);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'zh';
  setLang(saved);
});

window.setLang = setLang;
