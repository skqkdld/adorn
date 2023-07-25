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

  $('.color_category_title').click(function() {
    var icon = $(this).find('img'); // 클릭된 요소의 자식 img 요소를 찾음
    var expandedIconSrc = 'img/expand_less.svg';
    var collapsedIconSrc = 'img/expand_more.svg';

    // 이미지 소스를 변경하여 아이콘을 바꿈
    if (icon.attr('src') === expandedIconSrc) {
      icon.attr('src', collapsedIconSrc);
    } else {
      icon.attr('src', expandedIconSrc);
    }

  });

  $("#filterselect").select2({
    templateResult: function(option) {
      // 옵션 요소의 스타일을 변경합니다.
      if (!option.id) return option.text; // 기본 옵션은 스타일을 변경하지 않음
      var style = 'font-size: 12px; line-height: 16px; padding: 2px;';
      return $("<span style='" + style + "'>").text(option.text);
    }
    
  });

      // .select2-container를 클릭하면 클릭 이벤트를 감지합니다.
      $(".select2-container").on("click", function() {
        // 클릭한 컨테이너 내부의 .select2-selection__arrow 요소를 가져옵니다.
        var arrowElement = $(this).find(".select2-selection__arrow");
  
        // 현재 배경 이미지 URL이 기본 이미지인지 확인합니다.
        if (arrowElement.css("background-image").includes("expand_less_s.svg")) {
          // 배경 이미지 URL을 원하는 이미지로 변경합니다.
          arrowElement.css("background-image", "url(../img/expand_more_s.svg)");
        } else {
          // 배경 이미지 URL을 다시 기본 이미지로 변경합니다.
          arrowElement.css("background-image", "url(../img/expand_less_s.svg)");
        }
      });
  
});
