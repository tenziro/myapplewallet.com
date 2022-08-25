// 전체 메뉴 열고 닫기
function menuControl() {
  const menu = document.querySelector("#menu");
  if (!menu.classList.contains("actived")) {
    menu.classList.add("actived");
  } else {
    menu.classList.remove("actived");
  }
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
  if (scroll >= 0) {
    setTimeout(function() {
      document.querySelector("#intro").classList.add("start-animate");
    }, 1000);
  }
});

// 페이지 로딩 컨트롤
$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "main.html",
    dataType: "html",
    async: true,
    error: function() {
      $(".page-loading").show();
    },
    success: function(result) {
      $(".page-loading").delay(0).queue(function() {
        $(this).stop().animate({
          textIndent: 0
        }, {
          step: function() {
            $(".page-loading").addClass("loaded");
            $(".page-loading-icon").delay(200).fadeOut(200);
          },
          duration: 1300,
          complete: function() {
            $(".page-loading").hide();
          }
        });
      });
      $("#page").html(result);
    },
    complete: function() {
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

      // lottie animation
      let lottiePyro = bodymovin.loadAnimation({
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
      setTimeout(function() {
        lottiePyro.stop();
      }, 4000);
    }
  });
});
