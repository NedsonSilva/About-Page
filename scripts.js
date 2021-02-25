const hamburguerToggle = document.querySelector('span.hamburguer');
const menuToggle = document.querySelector('ul.menu');

function menu () {
  hamburguerToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('wrapper');
    hamburguerToggle.classList.toggle('active')
  })
}

menu()