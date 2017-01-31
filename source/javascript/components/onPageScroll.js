$(document).ready(function () {
$(document).on("scroll", onScroll);

//smoothscroll
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  $(document).off("scroll");

  $('a').each(function () {
    $(this).removeClass('is-active');
  });

  $(this).addClass('is-active');
    var target = this.hash,
        menu = target;

    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();

  $('.page-article__nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.page-article__nav ul li a').removeClass("is-active");
      currLink.addClass("is-active");
    }
    else{
      currLink.removeClass("is-active");
    }
  });
};