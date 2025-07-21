let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('box-x');
  navlist.classList.toggle('open');
}