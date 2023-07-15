import React from 'react';
import FormatePrice from '../Helper/FormatePrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ id, color, amount, stock, price, image, name }) => {
   
    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
        // console.log('called dec');
      };
      const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
        // console.log('called Iec');
      };
   
   
    return (
        <>
            <div className="cart_heading-grid-grid-five-column">
                <div className="cart-image-name">
                    <div>
                        <figure>
                            <img src={image} alt={id} />
                        </figure>
                    </div>
                    <dir>
                        <p>{name}</p>
                        <div className="color-div">
                            <p>color:</p>
                            <div className="color-style" style={{ background: color, color: color }}></div>
                        </div>
                    </dir>
                </div>

                <div className="cart-hide">
                    <p><FormatePrice price={price} /></p>
                </div>

                <div>
                    <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
                </div>

                <div className="cart-hide">
                    <p><FormatePrice price={price * amount} /></p>
                </div>

                <div>
                    <FaTrash className='remove-icon' />
                </div>
            </div>
        </>
    );
};

export default CartItem;