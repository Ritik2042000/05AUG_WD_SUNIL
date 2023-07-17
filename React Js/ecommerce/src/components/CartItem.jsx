import React from 'react';
import FormatePrice from '../Helper/FormatePrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../Context/cartContext';

const CartItem = ({ id, color, amount, stock, price, image, name }) => {

    const { removeItem, setIncrease , setDecrease } = useCartContext();

    // const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
        // console.log('called dec');
    // };
    // const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
        // console.log('called Iec');
    // };


    return (
        <>
            <div className="cart_heading grid grid-five-column">
                <div className="cart-image--name">
                    <div>
                        <figure>
                            <img src={image} alt={id} />
                        </figure>
                    </div>
                    <div>
                        <p>{name}</p>
                        <div className="color-div">
                            <p>color:</p>
                            <div
                                className="color-style"
                                style={{ backgroundColor: color, color: color }}></div>
                        </div>
                    </div>
                </div>
                {/* price   */}
                <div className="cart-hide">
                    <p>
                        <FormatePrice price={price} />
                    </p>
                </div>

                {/* Quantity  */}
                <CartAmountToggle
                    amount={amount}
                    setDecrease={() => setDecrease(id)}
                    setIncrease={() => setIncrease(id)}
                />

                {/* //Subtotal */}
                <div className="cart-hide">
                    <p>
                        <FormatePrice price={price * amount} />
                    </p>
                </div>

                <div>
                    <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
                </div>
            </div>
            <hr/>
        </>
    );

};

export default CartItem;