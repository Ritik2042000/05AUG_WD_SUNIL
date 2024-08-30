import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { showToast } from "./showToast";
import { updateCart } from "./updateCart";
import { updateCartProductTotal } from "./updateCartProductTotal";


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
        removeDiv.remove();
        showToast('delete',id)
    }
    updateCart(cartProducts)
    updateCartProductTotal()
}