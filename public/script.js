const search = document.querySelector('.search');
const btnSearch = document.querySelector('.btn-search');
const input = document.querySelector('.input');
const btnMenu = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');
const menuAnchor = document.querySelectorAll('.menu a');
const slider = document.querySelector('.slider');
const controlLis = document.querySelectorAll('.control li');

console.log(menuAnchor);

// Search Button
btnSearch.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

//Menu toggle
btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

menuAnchor.forEach((a) => {
  a.addEventListener('click', () => {
    btnMenu.classList.remove('active');
    menu.classList.remove('active');
  });
});

// section carousel functionality
let sectionIndex = 0;

controlLis.forEach((li, index) => {
  li.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    slider.style.transform = `translate(${index * -25}%)`;
    li.classList.add('selected');
    sectionIndex = index;
    if (index === 3) {
      sectionIndex = -1;
    }
  });
});

setInterval(() => {
  sectionIndex++;
  document.querySelector('.control .selected').classList.remove('selected');
  slider.style.transform = `translate(${sectionIndex * -25}%)`;
  controlLis[sectionIndex].classList.add('selected');
  if (sectionIndex + 1 === controlLis.length) {
    sectionIndex = -1;
  }
}, 4000);
