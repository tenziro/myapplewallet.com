// 전체 메뉴 열고 닫기
function menuControl() {
  let menu = document.querySelector("#menu");
  let menuOpenBtn = document.querySelector(".btn-menu");
  let body = document.body;
  let header = document.querySelector("#header");
  menuOpenBtn.classList.toggle("actived");
  menu.classList.toggle("actived");
  body.classList.toggle("disabled-scroll");
}

// 헤더 컨트롤
window.addEventListener("scroll", (event) => {
  let header = document.querySelector("#header");
  let scroll = this.scrollY;
  if (scroll > 10) {
    header.classList.add("blur");
  } else {
    header.classList.remove("blur");
  }
});

// 페이지 로딩 컨트롤
$(document).ready(function() {
  const loadingWrap = $(".page-loading");
  const loadingIcon = $(".page-loading-icon");

  $.ajax({
    type: "GET",
    url: "main.html",
    dataType: "html",
    async: true,
    error: function() {
      loadingWrap.show();
    },
    success: function(result) {
      $("#page").html(result);
    },
    complete: function() {
      // lottie animation
      const lottiePyro = bodymovin.loadAnimation({
        container: document.querySelector('.lottie'),
        path: '/assets/js/vendor/lottie.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
          progressiveLoad: false,
          hideOnTransparent: true
        }
      });

      loadingIcon.delay(1000).fadeOut(500, function() {
        $(".page-loading").addClass('loaded').delay(1300).fadeOut(0, function() {
          $("#intro").addClass("start-animate");
          setTimeout(function() {
            lottiePyro.play();
          }, 3000);
        });
      });
      // review 컨텐츠 1
      $(".review-contents.first").infiniteslide({
        'speed': 20,
        'direction': 'left',
        'pauseonhover': false,
        'responsive': false,
        'clone': 1
      });
      // review 컨텐츠 2
      $(".review-contents.second").infiniteslide({
        'speed': 20,
        'direction': 'right',
        'pauseonhover': false,
        'responsive': false,
        'clone': 1
      });
    }
  });
});
