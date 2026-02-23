// Language configuration with native names
const langConfig = {
  zh: {
    code: 'zh',
    flag: '🇨🇳',
    label: '中文',
    nativeLabel: '中文',
    fontClass: 'lang-zh'
  },
  ja: {
    code: 'ja',
    flag: '🇯🇵',
    label: '日本語',
    nativeLabel: '日本語',
    fontClass: 'lang-ja'
  },
  en: {
    code: 'en',
    flag: '🇬🇧',
    label: 'English',
    nativeLabel: 'English',
    fontClass: 'lang-en'
  }
};

let currentLang = 'zh';

function setLang(lang) {
  if (!langConfig[lang]) return;
  
  currentLang = lang;
  const config = langConfig[lang];
  
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'zh' ? 'zh-CN' : 'en';
  
  // Update all data-lang elements
  document.querySelectorAll('[data-lang]').forEach(el => {
    const elLang = el.getAttribute('data-lang');
    if (elLang === lang) {
      el.style.display = 'block';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.position = 'relative';
    } else {
      el.style.display = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      el.style.position = 'absolute';
    }
  });
  
  // Update language switcher UI
  updateLangSwitcher(lang);
  
  // Update navigation text
  updateNavigation(lang);
  
  // Update page title
  updatePageTitle(lang);
  
  // Save preference
  localStorage.setItem('preferred-lang', lang);
}

function updateLangSwitcher(lang) {
  const config = langConfig[lang];
  const currentBtn = document.querySelector('.lang-current');
  const options = document.querySelectorAll('.lang-option');
  
  if (currentBtn) {
    currentBtn.innerHTML = `
      <span class="lang-flag">${config.flag}</span>
      <span class="lang-code">${config.code.toUpperCase()}</span>
      <span class="arrow">▼</span>
    `;
  }
  
  options.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-code');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateNavigation(lang) {
  const navTexts = {
    zh: {
      home: '首页',
      nonfiction: '非虚构',
      fiction: '虚构创作',
      policy: '政策',
      research: '研究'
    },
    ja: {
      home: 'ホーム',
      nonfiction: 'ノンフィクション',
      fiction: '創作',
      policy: '政策',
      research: '研究'
    },
    en: {
      home: 'Home',
      nonfiction: 'Non-Fiction',
      fiction: 'Fiction',
      policy: 'Policy',
      research: 'Research'
    }
  };
  
  const texts = navTexts[lang];
  
  // Update nav links
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === 'index.html') link.textContent = texts.home;
    else if (href === 'nonfiction.html') link.textContent = texts.nonfiction;
    else if (href === 'fiction.html') link.textContent = texts.fiction;
    else if (href === 'policy.html') link.textContent = texts.policy;
    else if (href === 'research.html') link.textContent = texts.research;
  });
  
  // Update dropdown button
  const dropbtn = document.querySelector('.dropbtn');
  if (dropbtn && dropbtn.getAttribute('href') === 'nonfiction.html') {
    dropbtn.textContent = texts.nonfiction;
  }
}

function updatePageTitle(lang) {
  const titles = {
    zh: {
      index: '水無月紫苑 / Shion Minazuki',
      nonfiction: '非虚构｜水無月紫苑',
      fiction: '虚构创作｜水無月紫苑',
      policy: '政策｜水無月紫苑',
      research: '研究｜水無月紫苑'
    },
    ja: {
      index: '水無月 紫苑 / Shion Minazuki',
      nonfiction: 'ノンフィクション｜水無月紫苑',
      fiction: '創作｜水無月紫苑',
      policy: '政策｜水無月紫苑',
      research: '研究｜水無月紫苑'
    },
    en: {
      index: 'Shion Minazuki',
      nonfiction: 'Non-Fiction｜Shion Minazuki',
      fiction: 'Fiction｜Shion Minazuki',
      policy: 'Policy｜Shion Minazuki',
      research: 'Research｜Shion Minazuki'
    }
  };
  
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const newTitle = titles[lang][page] || titles[lang].index;
  document.title = newTitle;
}

// Initialize language switcher UI
function initLangSwitcher() {
  const switcher = document.querySelector('.lang-switcher');
  if (!switcher) return;
  
  const current = switcher.querySelector('.lang-current');
  const dropdown = switcher.querySelector('.lang-dropdown');
  
  // Toggle dropdown
  current.addEventListener('click', (e) => {
    e.stopPropagation();
    switcher.classList.toggle('active');
  });
  
  // Close when clicking outside
  document.addEventListener('click', () => {
    switcher.classList.remove('active');
  });
  
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Language option clicks
  switcher.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-code');
      setLang(lang);
      switcher.classList.remove('active');
    });
  });
}

// Initialize on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  // Check for saved preference or default to zh
  const savedLang = localStorage.getItem('preferred-lang') || 'zh';
  setLang(savedLang);
  initLangSwitcher();
});

// Expose to global scope for onclick handlers
window.setLang = setLang;
