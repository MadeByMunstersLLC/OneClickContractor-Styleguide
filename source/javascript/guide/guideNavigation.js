// Guide Navigation Interaction

var $navigationTrigger = $('.guide__navigation__menu-button'),
    $navigationIcon = $('.guide__navigation__menu-icon'),
    $navigation = $('.guide__navigation'),
    $navigationOverlay = ('.guide__navigation__modal--overlay'),
    $navigationModal = ('.guide__navigation__modal'),
    navigationActive = 'is-active';


// Toggle Modal
$navigationTrigger.on('click', function() {

  // Add active to elements
  $navigationIcon.toggleClass(navigationActive);
  $(this).parents().find($navigation).toggleClass(navigationActive);
  $(this).parents($navigation).find($navigationOverlay).toggleClass(navigationActive);
  $(this).parents($navigation).find($navigationModal).toggleClass(navigationActive);
  $('body').toggleClass(navigationActive);

});