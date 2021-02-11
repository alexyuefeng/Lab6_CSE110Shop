// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  var items;
  var products = document.getElementById("product-list");
  var myLocalStorage = window.localStorage;
  var cartCount = document.getElementById('cart-count');
  var count = myLocalStorage.getItem('count');
  if (count == null){
    count = 0;
    myLocalStorage.setItem('count',0);
  }
  cartCount.textContent = count;
  if(myLocalStorage.getItem('items') == null){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data=>{
      myLocalStorage.setItem('items', JSON.stringify(data));
      items = JSON.parse(localStorage.getItem('items'));
      for(var i =0; i< items.length; i++){
        products.appendChild(new ProductItem(items[i]));
      }
    });
  }
  else{
    items = JSON.parse(localStorage.getItem('items'));
    for(var i =0; i< items.length; i++){
      products.appendChild(new ProductItem(items[i]));
    }
  }
});