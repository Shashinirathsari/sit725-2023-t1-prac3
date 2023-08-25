// script.js

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
    
    const cartItem = {
        name: productName,
        price: productPrice,
    };
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(cartItem);
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Item added to cart!');
}

function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");
    
    products.forEach(product => {
        const productName = product.querySelector("h2").textContent.toLowerCase();
        
        if (productName.includes(searchInput)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
