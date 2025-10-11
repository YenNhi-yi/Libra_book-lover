// js/login.js
$(document).ready(function() {
  $('a[title="Tài khoản"]').on('click', function(e) {
    e.preventDefault();

    if ($('#loginContainer').length === 0) {
      $('body').append('<div id="loginContainer"></div>');

      // Load nội dung popup và CSS
      $('#loginContainer').load('../html/login.html', function() {
        // Gắn CSS riêng cho popup
        $('head').append('<link rel="stylesheet" href="../css/login.css" id="loginCSS">');

        // Khi click vào nút đóng
        $('.close').on('click', function() {
          $('#loginContainer').remove();
          $('#loginCSS').remove();
        });

        // Khi click ra ngoài popup
        $(window).on('click', function(e) {
          if ($(e.target).hasClass('login-popup')) {
            $('#loginContainer').remove();
            $('#loginCSS').remove();
          }
        });
      });
    }
  });
});
