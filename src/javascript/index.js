import 'babel-polyfill/dist/polyfill';
import '../scss/index.scss';
import initApp from './app/initApp';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(CONFIG, null, 2));
  initApp();
});
