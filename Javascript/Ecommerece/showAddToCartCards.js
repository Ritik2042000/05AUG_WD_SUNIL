import products from './api/products.json';
import { fetchQuantityFromCart } from './fetchQuantityFromCart';
import { getCartProductFromLocalStorage } from './getCartProductFromLocalStorage';
import { incrementDecrement } from './incrementDecrement';
import { removeProductFromCart } from './removeProductFromCart';


let cartProductsLS = getCartProductFromLocalStorage()
// console.log(cartProductsLS,'inside addToCart LS');

let filterProducts = products.filter((currElem) => {
    return cartProductsLS.some((product) => product.id === currElem.id)
})

const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () => {
    filterProducts.forEach((product) => {

        const { id, category, price, image, name, stock } = product

        let productClone = document.importNode(templateContainer.content, true);


        let LSActulData = fetchQuantityFromCart(id, price);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productQuantity').textContent = LSActulData.quantity;
        productClone.querySelector('.productPrice').textContent = `₹${LSActulData.price}`;

        productClone.querySelector('.stockElement').addEventListener(('click'), (event) => {
            incrementDecrement(event, id, stock, price)
        });

        productClone.querySelector('.remove-to-cart-button').addEventListener(('click'), () => removeProductFromCart(id))
        cartElement.append(productClone);
    })

}

showCartProduct()

// console.log(filterProducts,'inside addToCart ');