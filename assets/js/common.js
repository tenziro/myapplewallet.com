// 전체 메뉴 열고 닫기
function menuControl() {
  let menu = document.querySelector("#menu");
  let body = document.body;
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

// (function() {
//   let httpRequest = new XMLHttpRequest();
//
//   httpRequest.open('GET', 'main.html');
//   httpRequest.send();
//
//   httpRequest.onload = function() {
//     document.querySelector('#page').innerHTML = httpRequest.response;
//   }
//   httpRequest.onreadystatechange = function() {
//     if (httpRequest.status === 200) {
//       // 성공
//     } else {
//       // 실패
//     }
//   };
// })();

// 페이지 로딩 컨트롤
$(document).ready(function() {
  let loadingWrap = document.querySelector(".page-loading");
  let loadingIcon = document.querySelector(".page-loading-icon");
  $.ajax({
    type: "GET",
    url: "main.html",
    dataType: "html",
    async: true,
    error: function() {
      loadingWrap.style.display = "block";
    },
    success: function(result) {
      $(".page-loading").queue(function() {
        setTimeout(function() {
          loadingIcon.style.display = "none";
        }, 400);
        $(this).stop().animate({
          scrollTop: 0
        }, {
          step: function() {
            this.classList.add('loaded');
          },
          duration: 1300,
          complete: function() {
            this.style.display = "none";
          }
        });
      });
      $("#page").html(result);
    },
    complete: function() {
      // Animation 텍스트
      setTimeout(function() {
        document.querySelector("#intro").classList.add("start-animate");
      }, 1000);
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
