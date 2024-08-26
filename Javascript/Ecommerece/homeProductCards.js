const producatContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate')

export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((data) => {
        const {id,name,brand,category,description,image,price,stock} = data;
        
        const productClone = document.importNode(productTemplate.content,true);
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.productDescription').textContent = description;


        producatContainer.append(productClone)
    
    });

}