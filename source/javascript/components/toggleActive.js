// Toggle Active Class

// Variables
var $toggleElement = $('.toggle-element'),
    $toggleParent = $('.toggle-parent'),
    activeClass = 'is-active';


// Click To Add Active
$toggleElement.on('click', function(e) {
  e.preventDefault();

  $(this).toggleClass(activeClass);
});


// Click To Add Active To Toggle Parent
$toggleElement.on('click', function(e) {
  e.preventDefault();

  $(this).parents().closest($toggleParent).toggleClass(activeClass);
});