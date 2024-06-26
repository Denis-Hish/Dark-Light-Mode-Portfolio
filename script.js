const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-mode';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkMode = document.querySelector('#dark-mode');
const darkModeImg = document.querySelector('#dark-mode .home-img img');

darkModeImg.src = 'img/imgDark.png';

toggleIcons.forEach(toggle => {
   toggle.addEventListener('click', () => {
      toggle.classList.add('disabled');
      setTimeout(() => {
         toggle.classList.remove('disabled');
      }, 1500);

      icons.forEach(icon => {
         icon.classList.toggle('bx-sun');
      });

      container.classList.toggle('active');
      darkMode.classList.toggle('active');
   });
});
