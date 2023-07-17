import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatePrice from '../Helper/FormatePrice';

const Product = (CurElm) => {

    const { id, image, name, price, category } = CurElm;
    console.log('price of card ',CurElm.price);

    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className="card">
                <figure >
                    <img src={image} alt="" />
                    <figcaption className='caption'>{category}</figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">
                            <FormatePrice price={price}/>
                        </p>
                    </div>
                </div>
            </div>

        </NavLink >

    );
};

export default Product;