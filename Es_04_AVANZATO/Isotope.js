$(document).ready(function(){
    console.log("eureka");

    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'

        // init Isotope
var $grid = $('.grid').isotope({
    // options
  });

// filter .metal items
$grid.isotope({ filter: '.metal' });

// filter .alkali OR .alkaline-earth items
$grid.isotope({ filter: '.alkali, .alkaline-earth' });

// filter .metal AND .transition items
$grid.isotope({ filter: '.metal.transition' });

// show all items
$grid.isotope({ filter: '*' });

  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $grid.isotope({
    // filter element with numbers greater than 50
    filter: function() {
      // _this_ is the item element. Get text of element's .number
      var number = $(this).find('.number').text();
      // return true to show, false to hide
      return parseInt( number, 10 ) > 50;
    }
  })


  // jQuery
// hash of functions that match data-filter values
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      // use $(this) to get item element
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filter function if value matches
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

      });
})