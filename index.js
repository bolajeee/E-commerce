// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtn = $('.filter-button-group').find('button');
function resetFilterBtns(){
    filterBtn.each(function(){
        $(this).removeClass('active-filter-btn');
    })
}

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar").addClass("active");
        } else {
           $(".navbar").removeClass("active");
        }
    });
});


const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
})

const sr2 = ScrollReveal({
  distance: '85px',
  duration: 2600,
  delay: 450,
  reset: true
})

const sr3 = ScrollReveal({
  distance: '90px',
  duration: 2600,
  delay: 450,
  reset: true
})

sr.reveal('.carousel-item', { delay: 300, origin: 'top' })

sr2.reveal('.title', { delay: 200, origin: 'top' })
sr2.reveal('.about', { delay: 400, origin: 'right' })
sr2.reveal('.collection-img', { delay: 400, origin: 'top' })
sr2.reveal('.footer', { delay: 600, origin: 'bottom' })


sr3.reveal('.filter-button-group', { delay: 400, origin: 'top' })
sr3.reveal('.special-items', { delay: 300, origin: 'bottom' })
sr3.reveal('.offers-content', { delay: 300, origin: 'bottom' })





