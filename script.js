const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-mode';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const darkModeImg = document.querySelector('#dark-mode .home-img img');

darkModeImg.src = 'img/imgDark.png';
