$(document).ready(function(){

  // === Banner chính (slide ảnh lớn) ===
  $("#home-slide .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    nav: false
  });

  // === Phần Bestselling Books có thể kéo chọn ===
  $(".bestselling-slider").owlCarousel({
    items: 3,                // hiển thị 3 card cùng lúc
    center: true,            // card giữa được phóng to
    loop: true,              // lặp vô tận
    margin: 0,              // khoảng cách giữa các card
    autoplay: true,          // tự trượt
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,         //cho phép kéo bằng chuột
    touchDrag: true,         //cho phép lướt bằng cảm ứng
    smartSpeed: 600,
    responsive:{
      0:{ items:1 },
      768:{ items:2 },
      1024:{ items:3 }
    }
  });
});

var modal = $('#loginModal');

  // Khi click icon tài khoản
  $('.header-icons .icon-link[title="Tài khoản"]').on('click', function(e) {
    e.preventDefault();
    modal.fadeIn(200).css('display', 'flex');
  });

  // Khi click nút X
  $('.modal .close').on('click', function() {
    modal.fadeOut(200);
  });

  // Khi click ra ngoài modal
  $(window).on('click', function(e) {
    if ($(e.target).is(modal)) {
      modal.fadeOut(200);
    }
  });

