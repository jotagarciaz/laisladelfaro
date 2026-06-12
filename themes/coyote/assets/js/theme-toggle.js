// Theme Toggle Script
(function() {
  const THEME_KEY = 'theme-preference';
  const LIGHT_THEME = 'light';
  const DARK_THEME = 'dark';
  const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';
  const prefersDarkQuery = window.matchMedia(COLOR_SCHEME_QUERY);
  
  function getPreferredTheme() {
    return prefersDarkQuery.matches ? DARK_THEME : LIGHT_THEME;
  }
  
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const theme = savedTheme || getPreferredTheme();
    applyTheme(theme, false);
  }
  
  function applyTheme(theme, savePreference = false) {
    const html = document.documentElement;
    
    if (theme === DARK_THEME) {
      html.setAttribute('data-theme', 'dark');
      updateToggleButton(DARK_THEME);
    } else {
      html.removeAttribute('data-theme');
      updateToggleButton(LIGHT_THEME);
    }
    
    if (savePreference) {
      localStorage.setItem(THEME_KEY, theme);
    }
  }
  
  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? LIGHT_THEME : DARK_THEME;
    
    html.classList.add('theme-transition');
    applyTheme(newTheme, true);
    
    setTimeout(() => {
      html.classList.remove('theme-transition');
    }, 300);
  }
  
  function updateToggleButton(theme) {
    const button = document.getElementById('theme-toggle-btn');
    if (!button) {
      return;
    }
    
    button.setAttribute('aria-label',
      theme === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode'
    );
    
    const svg = button.querySelector('svg');
    if (!svg) {
      return;
    }
    
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
    
    if (theme === DARK_THEME) {
      svg.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    } else {
      svg.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    }
  }
  
  prefersDarkQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? DARK_THEME : LIGHT_THEME, false);
    }
  });
  
  window.toggleTheme = toggleTheme;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
