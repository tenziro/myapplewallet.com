
// 전체 메뉴 컨트롤
function menuControl() {
  const menu = document.querySelector('#menu');
  if (!menu.classList.contains('actived')) {
    menu.classList.add('actived');
  } else {
    menu.classList.remove('actived');
  }
}

// 헤더 컨트롤
window.addEventListener("scroll", (event) => {
  let header = document.querySelector('#header');
  let scroll = this.scrollY;
  if (scroll > 10 ) {
    header.classList.add('blur');
  } else {
    header.classList.remove('blur');
  }
});

// 슬라이더
$(document).ready(function(){
  $(".review-contents").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 10000,
    // autoplaySpeed: 10000,
    autoplayHoverPause: false,
    // mouseDrag: false,
    smartSpeed: 0,
  });
});
