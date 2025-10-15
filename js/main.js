window.addEventListener("scroll", function() {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
$(document).ready(function () {
  const tabs = document.querySelectorAll(".hero-tab");
  const videos = document.querySelectorAll(".hero-video");
  const btn = document.getElementById("soundToggle");
  let isMuted = true; // trạng thái mặc định tắt tiếng

  // Hiển thị video đầu tiên
  videos.forEach((video, index) => {
    if (index === 0) {
      video.classList.add("active");
      video.muted = isMuted;
      video.currentTime = 0;
      video.play();
    } else {
      video.pause();
      video.classList.remove("active");
    }
  });

  // Khi click tab
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.target;

      videos.forEach(video => {
        if (video.dataset.video === target) {
          video.classList.add("active");
          video.muted = isMuted;
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
          video.classList.remove("active");
        }
      });
    });
  });

  // Khi click nút âm thanh
  btn.addEventListener("click", () => {
    isMuted = !isMuted;
    btn.classList.toggle("active", !isMuted);

    // Chỉ áp dụng cho video đang hiển thị
    const activeVideo = document.querySelector(".hero-video.active");
    if (activeVideo) activeVideo.muted = isMuted;
  });

  /* ================= BESTSELLING CAROUSEL ================= */
  $(".bestselling-slider").owlCarousel({
    items: 3,
    center: true,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 600,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  });

  /* ================= LOGIN MODAL ================= */
  const modal = $("#loginModal");
  $(".header-icons .icon-link[title='Tài khoản']").on("click", function (e) {
    e.preventDefault();
    modal.fadeIn(200).css("display", "flex");
  });
  $(".modal .close").on("click", function () {
    modal.fadeOut(200);
  });
  $(window).on("click", function (e) {
    if ($(e.target).is(modal)) {
      modal.fadeOut(200);
    }
  });
});
