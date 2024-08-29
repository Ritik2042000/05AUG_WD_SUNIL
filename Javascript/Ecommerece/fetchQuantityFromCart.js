import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage"

export const fetchQuantityFromCart = (id, price) => {
    let cartProducts = getCartProductFromLocalStorage();

    let existingProduct = cartProducts.find((product) => product.id === id);

    let quantity = 1;

    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price
    }

    return { quantity, price };
}