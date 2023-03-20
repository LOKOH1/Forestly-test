document.querySelector('html').classList.add('js');

const linkElement = document.createElement('link');
linkElement.href = 'https://media.tiierisch.de/css/style.20230130.1.min.css';
linkElement.rel = 'stylesheet';
document.head.append(linkElement);

window.addEventListener('load', () => {
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://media.tiierisch.de/js/scripts.20230301.1.min.js';
  document.body.append(scriptElement);
});