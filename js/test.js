  $(document).ready(function () {

      $(".Topscroll a").on("click", function (event) {
          event.preventDefault(); /*XÓA MỌI LIÊN KẾT từ <a>*/
          $("body").animate({
              scrollTop: 0,
              offset: 0
          }, 1000, "easeInOutQuart");

      });
      $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 3
              },
              1000: {
                  items: 5
              }
          }
      });

      function FullScreen() {
          var heightA = $(window).height();

          $(".phanAnhTo").css({
              "height": heightA + "px"
          });
      }
      FullScreen();

      $(window).resize(function () {
          FullScreen();
      });



  });
