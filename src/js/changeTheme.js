import refs from './refs';
import Theme from './theme';

function switchTheme() {
  refs.switcher.checked ? changeToDark() : changeToLight();
}

function changeToDark() {
  refs.Body.classList.remove(Theme.LIGHT);
  refs.Body.classList.add(Theme.DARK);
  localStorage.setItem('Theme', Theme.DARK);
}

function changeToLight() {
  refs.Body.classList.remove(Theme.DARK);
  refs.Body.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
}

export default switchTheme;
