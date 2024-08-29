import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCart } from "./updateCart";


export const removeProductFromCart = (id) => {

    let cartProducts = getCartProductFromLocalStorage()

    cartProducts = cartProducts.filter((product)=>{
        if (product.id !== id) {
            return product
        }

    })
    
    
    localStorage.setItem('cartProductsLocalStorage',JSON.stringify(cartProducts));

    let removeDiv = document.querySelector(`#card${id}`);

    if (removeDiv) {
        removeDiv.remove()
    }
    updateCart(cartProducts)
}