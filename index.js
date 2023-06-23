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
  mainImg.src = smallImg[1].src;
}
smallImg[2].onClick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onClick = function () {
  mainImg.src = smallImg[3].src;
};


const addToCartItem = document.getElementsByClassName('best');
const itemName = document.getElementsByClassName("itemName");
const itemPrice = document.getElementsByClassName('itemPrice');
// const itemImage = document.getElementsByClassName('itemImage').getAttribute('src');

// Sample item data
  var items = [
  { name: itemName , price: itemPrice },
];


// Function to generate cart item elements
function generateCartItem(item) {
  var cartItem = document.createElement("div");
  cartItem.innerHTML = item.name + '$' + item.price;
  return cartItem;
}

// Function to display cart items on the page
function displayCartItems() {
  var cartItemsDiv = document.getElementById("cartItem");
  cartItemsDiv.innerHTML = ""; // Clear existing items
  
  items.forEach(function(item) {
    var cartItem = generateCartItem(item);
    cartItemsDiv.appendChild(cartItem);
  });
}

// Call the displayCartItems function to initially populate the cart page
displayCartItems();