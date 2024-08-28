let cartValue = document.querySelector('#cartValue');
export const updateCart = (cartProduct) => {

    // let totalCartValue = cartProduct.length
    // console.log(totalCartValue);
    console.log(cartProduct.length);
    return   cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProduct.length}</i>` ;
    // cartValu
        
}