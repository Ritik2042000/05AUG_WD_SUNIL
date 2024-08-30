import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage"

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector('.productSubTotal');
    let productFinalTotal = document.querySelector('.productFinalTotal');


    let cartProducts = getCartProductFromLocalStorage()
    if (cartProducts) {
        let totalProductPrice = cartProducts.reduce((accum, curElem) => {
            let productPrice = parseInt(curElem.price) || 0
            return accum + productPrice
        }, 0)

        productSubTotal.textContent = `₹${totalProductPrice}`;
        totalProductPrice > 0 ?
            productFinalTotal.textContent = `₹${totalProductPrice + 50}` :
            productFinalTotal.textContent = 0

    }



}