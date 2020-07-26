import refs from './refs';
import Theme from './theme';

(function loadTheme() {
  try {
    const currentTheme = localStorage.getItem('Theme');
    refs.Body.classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
      refs.switcher.checked = true;
    }
  } catch (error) {
    console.log(error);
  }
})();
