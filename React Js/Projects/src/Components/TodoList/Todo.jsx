import React, { useState } from 'react';
import './style.css';

const Todo = () => {

    const [inputdata, setInputData] = useState('')
    const [items, setItems] = useState([])

    // Functions
    const addItem = () => {
        if (!inputdata) {
            alert('Fill the data')
        } else {
            setItems([...items, inputdata])
            setInputData('')
        }
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/" alt="" />
                        <figcaption>Add Your List(Data) Here ✌ </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='📝 Add Item' className='form-control' value={inputdata} onChange={(e) => setInputData(e.target.value)} />
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                        {/* Show List Item */}
                        <div className="showItems">
                            {items.map((currElem,index) => {
                                return (
                                    <div className="eachItem" key={index}>
                                        <h3 >{currElem}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn"></i>
                                            <i className="far fa-trash-alt add-btn"></i>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        {/* Remove All List Item  */}
                    </div>
                    <div className="showItem">
                        <button className="btn effect04" data-sm-link-text='Remove All'>
                            <span>CHECK LIST</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Todo;