
function menuControl() {
  const menu = document.querySelector('#menu');
  if (!menu.classList.contains('actived')) {
    menu.classList.add('actived');
  } else {
    menu.classList.remove('actived');
  }
}
