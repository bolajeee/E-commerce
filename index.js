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


const wrapper = document.querySelector('.wrapper')
const LoginLink = document.querySelector('.login-link')
const registerationLink = document.querySelector('.register-link')

registerationLink.addEventListener('click',() => {
  wrapper.classList.add('active')
})

LoginLink.addEventListener('click', () => {
  wrapper.classList.remove('active')
})


var mainImg = document.getElementById('main-img')
var smallImg = document.getElementsByClassName('small-img')

smallImg.onClick = function(){
  mainImg.src === smallImg[0].src;
}
smallImg[1].onClick = function(){
  mainImg.src = smallImg[1].src;
}
smallImg[2].onClick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onClick = function () {
  mainImg.src = smallImg[3].src;
};
