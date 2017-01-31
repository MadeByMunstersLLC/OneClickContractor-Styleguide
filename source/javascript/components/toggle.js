// Toggle Component Interaction

var $toggleHeader = $('.toggle__header'),
    $toggleTrigger = $('.toggle__trigger'),
    $toggleBody = $('.toggle__body'),
    activeClass = 'is-active';

$toggleTrigger.on('click', function(e) {
  e.preventDefault();

  $(this).parent().siblings().toggleClass(activeClass);
  $(this).toggleClass(activeClass);

});