var cart = [];
function addToCart(item) {
  const itemObject = {
    itemName: item,
    price: Math.random() * 100 + 1
  };
 cart.push(itemObject);
 return `${item} has been added to your cart.`;
}


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
