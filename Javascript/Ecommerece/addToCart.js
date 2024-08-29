import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCart } from "./updateCart";

getCartProductFromLocalStorage()

export const addToCart = (event, id, stock) => {

    let arrLocalStorgeProduct = getCartProductFromLocalStorage();

    const currentProductElement = document.querySelector(`#card${id}`);
    let quantity = currentProductElement.querySelector('.productQuantity').innerText;
    let price = currentProductElement.querySelector('.productPrice').innerText;

    price = price.replace('₹', '');

    let existingProduct = arrLocalStorgeProduct.find((currElem) => currElem.id === id);

    if (existingProduct && quantity > 1 && existingProduct.quantity < stock) {
        
        quantity = Number(existingProduct.quantity) + Number(quantity)
        price = Number(price * quantity)
        // return quantity
        let updateCart = { id, quantity, price };
        updateCart = arrLocalStorgeProduct.map((currElem) => currElem.id === id ? updateCart : currElem)

        localStorage.setItem('cartProductsLocalStorage', JSON.stringify(updateCart));
    }

    if (existingProduct) {
        return existingProduct
    }
    price = Number(price * quantity);
    quantity = Number(quantity)
    // let updateCart = {id,quantity,price};

    arrLocalStorgeProduct.push({ id, quantity, price });
    localStorage.setItem('cartProductsLocalStorage', JSON.stringify(arrLocalStorgeProduct));

    // update cartbutton value
    updateCart(arrLocalStorgeProduct);
}