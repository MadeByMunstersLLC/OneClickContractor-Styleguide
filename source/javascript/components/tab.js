// Tabs Component Interaction
$(document).ready(function(){

  $('.tabs ul li').on('click', function(e) {
    e.preventDefault();
    var tabID = $(this).attr('data-tab'),
        $tabContent = $('.tab__content');
        $tabLink = $('.tab__item');
        activeClass = 'is-active';

    $tabLink.removeClass(activeClass);
    $tabContent.removeClass(activeClass);

    $(this).addClass(activeClass);
    $("#" + tabID).addClass(activeClass);
  });
});