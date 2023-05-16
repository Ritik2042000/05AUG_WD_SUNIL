import React, { useEffect, useState } from 'react';
import './style.css';

const Todo = () => {

    // getting LocalStroge Data Functions
    const getLocalStrogeData = () => {
        const lists = localStorage.getItem('mylistitems')
        if (lists) {
            return JSON.parse(lists);
            console.log(lists)
        }
        else {
            return [];
        }
    };

    const [inputdata, setInputData] = useState('');
    const [items, setItems] = useState(getLocalStrogeData());
    const [editedItems, setEditedItems] = useState('');
    const [toggleButton, setToggleButton] = useState(false);

    // Functions
    const addItem = () => {
        if (!inputdata) {
            alert('Fill the data')
        }
        else if (inputdata && toggleButton) {
            setItems(
                items.map((currElem) => {
                    if (currElem.id === editedItems) {
                        return { ...currElem, name: inputdata };
                    }
                    return currElem;
                })
            );
            setInputData([]);
            setEditedItems(null);
            setToggleButton(false);

        }
        else {
            const myNewId = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewId])
            setInputData('')
            // console.log(myNewId);
        }
    }

    // delete item function
    const deleteItem = (index) => {
        const updatedItem = items.filter((currElem) => {
            return currElem.id !== index;
        });
        setItems(updatedItem)
    }

    // remove All the items functions
    const removeAll = () => {
        setItems([])
    }

    //Edit the items Function
    const editItems = (index) => {
        const item_todo_edited = items.find((currElem) => {
            return currElem.id === index;
        });
        // console.log('editedfn called');
        setInputData(item_todo_edited.name);
        setEditedItems(index);
        setToggleButton(true);

    };

    // Adding Local Stroge
    useEffect(() => {
        localStorage.setItem('mylistitems', JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/To do list.png" alt="" />
                        <figcaption>Add Your List(Data) Here ✌ </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='📝 Add Item' className='form-control' value={inputdata} onChange={(e) => setInputData(e.target.value)} />
                        {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) : (<i className="fa fa-plus add-btn" onClick={addItem}></i>)}

                        {/* Show List Item */}
                        <div className="showItems">
                            {items.map((currElem) => {
                                return (
                                    <div className="eachItem" key={currElem.id}>
                                        <h3 >{currElem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" onClick={() => editItems(currElem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(currElem.id)}></i>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Remove All List Item  */}
                    </div>
                    <div className="showItem">
                        <button className="btn effect04" data-sm-link-text='Remove All' onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;