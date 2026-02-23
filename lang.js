const langConfig = {
  zh: { code: 'zh', label: '中文', nav: { home: '首页', nonfiction: '非虚构', fiction: '虚构', policy: '政策', research: '研究' } },
  ja: { code: 'ja', label: '日本語', nav: { home: 'ホーム', nonfiction: 'ノンフィクション', fiction: '創作', policy: '政策', research: '研究' } },
  en: { code: 'en', label: 'EN', nav: { home: 'Home', nonfiction: 'Non-Fiction', fiction: 'Fiction', policy: 'Policy', research: 'Research' } }
};

let currentLang = 'zh';

function setLang(lang) {
  if (!langConfig[lang]) return;
  currentLang = lang;
  
  document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'zh' ? 'zh-CN' : 'en';
  
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
  });
  
  updateLangSwitcher();
  updateNav();
  updateTitle();
  
  localStorage.setItem('lang', lang);
}

function updateLangSwitcher() {
  const config = langConfig[currentLang];
  const btn = document.querySelector('.lang-current');
  if (btn) {
    const text = btn.querySelector('.lang-text') || btn;
    text.childNodes[0].textContent = config.label + ' ';
  }
  
  document.querySelectorAll('.lang-option').forEach(opt => {
    const isActive = opt.dataset.langCode === currentLang;
    opt.classList.toggle('active', isActive);
    opt.innerHTML = isActive 
      ? `${langConfig[opt.dataset.langCode].label} <span class="check">✓</span>`
      : langConfig[opt.dataset.langCode].label;
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
  const title = titles[currentLang][page];
  document.title = title + (page === 'index' ? '' : '｜' + titles[currentLang].index);
}

// Click outside to close dropdowns
document.addEventListener('click', (e) => {
  // Language switcher
  const langSwitcher = document.querySelector('.lang-switcher');
  if (langSwitcher) {
    if (e.target.closest('.lang-switcher')) {
      if (e.target.closest('.lang-current')) {
        langSwitcher.classList.toggle('active');
      }
    } else {
      langSwitcher.classList.remove('active');
    }
  }
  
  // Nav dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    if (e.target.closest('.dropdown') === drop) {
      if (e.target.closest('.dropbtn')) {
        // Close others
        dropdowns.forEach(d => {
          if (d !== drop) d.classList.remove('active');
        });
        drop.classList.toggle('active');
      }
    } else {
      drop.classList.remove('active');
    }
  });
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'zh';
  setLang(saved);
});

window.setLang = setLang;
