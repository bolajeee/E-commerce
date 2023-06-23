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


// const wrapper = document.querySelector('.wrapper')
// const LoginLink = document.querySelector('.login-link')
// const registerationLink = document.querySelector('.register-link')

// registerationLink.addEventListener('click',() => {
//   wrapper.classList.add('active')
// })

// LoginLink.addEventListener('click', () => {
//   wrapper.classList.remove('active')
// })


var mainImg = document.getElementById('main-img');
var smallImg = document.getElementsByClassName('small-img')

smallImg.onClick = function(){
  mainImg.getAttribute('src') = smallImg[0].getAttribute('src');
}
smallImg[1].onClick = function(){
  mainImg.getAttribute('src') = smallImg[1].getAttribute('src');
}
smallImg[2].onClick = function () {
  mainImg.getAttribute('src') = smallImg[2].srcgetAttribute('src');
};
smallImg[3].onClick = function () {
  mainImg.getAttribute('src') = smallImg[3].getAttribute('src');
};


const addToCartItem = document.getElementsByClassName('example');
const itemNameElements = document.getElementsByClassName("itemName");
const itemName = [...itemNameElements].map(element => element.textContent);

const itemPriceElements = document.getElementsByClassName("itemPrice");
const itemPrice = [...itemPriceElements].map(element => element.textContent);

// const itemImage = document.getElementsByClassName('itemImage').getAttribute('src');

// Sample array of items
var items = [
  {
    name : itemName , price : itemPrice
  }
];

// Function to display items on the cart page
function displayItems() {
  var cartItems = document.getElementById('cart-items');

  // Clear existing content
  cartItems.innerHTML = '';

  // Loop through items array and create HTML elements for each item
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemElement = document.createElement('div');
    itemElement.textContent = item.name +' '+ item.price;
    cartItems.appendChild(itemElement);
  }
}

// Call the displayItems function to initially populate the cart page
addToCartItem.addEventListener('click',displayItems)
