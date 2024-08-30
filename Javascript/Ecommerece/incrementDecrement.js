import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);

    const productQuantity = currentCardElement.querySelector('.productQuantity');
    const productPrice = currentCardElement.querySelector('.productPrice');

    const cartProducts = getCartProductFromLocalStorage()

    let quantity = 1;
    let localStoragePrice = 0;


    let existingProduct = cartProducts.find((product) => product.id === id)

    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price
    } else {
        localStoragePrice = price;
        price = price
    }

    if (event.target.className === 'cartIncrement') {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity == stock;
            localStoragePrice = price * stock
        }
    }
    if (event.target.className === 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        } 
    }

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2))

    let updateCart = { id, quantity, price : localStoragePrice };
    updateCart = cartProducts.map((currElem) => currElem.id === id ? updateCart : currElem)

    localStorage.setItem('cartProductsLocalStorage', JSON.stringify(updateCart));
    
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice; 
    updateCartProductTotal()

}