$(window).on("load", function() {
  var topfixElements = $(".topfix");
  var topfix = topfixElements.eq(0).offset().top;

  $(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();

    if (topfix <= scrollTop) {
      topfixElements.eq(0).addClass("fixed");
    } else {
      topfixElements.eq(0).removeClass("fixed");
    }
  });

  $('.top_search').click(function() {
    var dropdownSearch = $(".dropdown_search");
    
    if (dropdownSearch.is(":hidden")) {
      dropdownSearch.show();
    } else {
      dropdownSearch.hide();
    }
  });

  $('.consulting_btn').click(function() {
    var hiddenConsulting = $(".hidden_consulting");
    
    if (hiddenConsulting.is(":hidden")) {
      hiddenConsulting.show();
    } else {
      hiddenConsulting.hide();
    }
  });
});

$(document).ready(function() {
  var swiper1 = new Swiper(".swiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        var pageNumber = index + 1;
        if (pageNumber < 10) {
          pageNumber = "0" + pageNumber;
        }
        return '<span class="' + className + '">' + pageNumber + "</span>";
      },
    },
  });

  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,
    loop: true,
  });

  $(window).on("load", function() {
    var swiper3 = new Swiper(".swiper3", {
      slidesPerView: "auto",
      spaceBetween: 32,
      freeMode: true,
    });
  });
});


