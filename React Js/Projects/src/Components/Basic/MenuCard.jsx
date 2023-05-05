import React from 'react';
import Menu from './menuApi';

const MenuCard = ({ data }) => {
    // console.log(data);
    // const [data,setData] = useState(Menu)
    return (
        <>
            <section className="main-card--cointainer">
                {
                    data.map((curelement) => {
                       const {id,category,name,description,image,price} =curelement
                        return (
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="" className='card-media' />
                                    <p className="card">Price:{price}</p>
                                    <span className="card-tag subtle"> Order Now</span>
                                </div>
                            </div>
                        )

                    })
                }
            </section>
        </>
    );
};

export default MenuCard;