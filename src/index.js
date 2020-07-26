import './css/styles.scss';
import menu from './json/menu.json';
import listCreation from './templates/hadlebars.hbs';
import refs from './js/refs';
import Theme from './js/theme';
import switchTheme from './js/changeTheme';
import './js/load';

const markup = listCreation(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);
refs.switcher.addEventListener('click', switchTheme);
