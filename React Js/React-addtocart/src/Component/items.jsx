import React from 'react';
import Mainfile from './Mainfile'
import { useContext } from 'react';
import { CartContex } from './Cart'

const Items = ({id,description, title, img, price, quantity}) => {
    const {deleteItem,increment,decrement} = useContext(CartContex)

    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                    <i className="fa fa-minus minus" onClick={() => decrement (id)}></i>
                    <input type="text" placeholder={quantity} />
                    <i className="fa fa-plus add" onClick={() => increment(id) }></i>
                </div>
                <div className="price">
                    <h3>{price}</h3>
                </div>
                <div className="remove-item">
                    <i className="fa fa-trash-alt remove" onClick={() => deleteItem(id)}></i>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Items;






