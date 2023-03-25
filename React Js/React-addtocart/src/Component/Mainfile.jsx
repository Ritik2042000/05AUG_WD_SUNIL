import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './items';
import { CartContex } from './Cart';

// import {products} from './products'


const Mainfile = () => {
    const {item,clearCart} = useContext(CartContex)
    // const [item, setItem] = useState(products)

    if (item.length === 0) {
        return(
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Countinue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="carticon" />
                    <p>0</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>Shopping cart</h1>
                <p className='total-items'>You Have <span className="total-items-cart">0</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars >
                            {
                                item.map((curItem) => {
                                    return <Items key={curItem.id} {...curItem} />
                                })
                            }
                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total : <span>222000rs</span></h3>
                    <button>CHECKOUT</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
        </>
        )
    }
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Countinue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="carticon" />
                    <p>7</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>Shopping cart</h1>
                <p className='total-items'>You Have <span className="total-items-cart">4</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {
                                item.map((curItem) => {
                                    return <Items key={curItem.id} {...curItem} />
                                })
                            }
                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total : <span>222000rs</span></h3>
                    <button>CHECKOUT</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
        </>
    );
};

export default Mainfile;