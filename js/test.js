  $(document).ready(function () {
      $(".Topscroll a").on("click", function (event) {

          event.preventDefault(); /*XÓA MỌI LIÊN KẾT từ <a>*/
          $("body").animate({
              scrollTop: 0,
              offset: 0
          }, 2000, "easeOutCubic");
      });
      $(".Topscroll a").click(function (e) {
          e.preventDefault();
          $("body").animate({
              scrollTop: 0,
              offset: 0
          }, 2000, );


      });


      /* });
       $(window).scroll(function () {
           var VitriWindows = $('body').scrollTop();
           var viTrinhanHieu = $(".PhanShowCacHinhAnhPast1 ").offset().top;
           var dem = 0;
           if (VitriWindows >= viTrinhanHieu) {
               $(".container-fluid").addClass("nav-barsHienRa");
               $(".navbar").addClass("Trangs");
           } else {
               $(".container-fluid").removeClass("nav-barsHienRa");
               $(".navbar").css({})
           }
       });*/
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
      })






  });
