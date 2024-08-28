import { updateCart } from "./updateCart";

export const getCartProductFromLocalStorage = () => {
    let cartProducts = localStorage.getItem('cartProductsLocalStorage');
    if (!cartProducts) {
        return [];
    }
    
    cartProducts = JSON.parse(cartProducts);
    updateCart(cartProducts)
    return cartProducts;

}