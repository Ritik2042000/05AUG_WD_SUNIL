import React from 'react';

const Navbar = ({filteritem , navdata}) => {
    return (
        <>
             <nav className="navbar" >
                <div className="btn-group">
                    {
                        navdata.map((curElem)=>{
                            return(
                         <button className="btn-group__item" onClick={() => filteritem(curElem)}>{curElem}</button>
                            )
                        })
                    }
                    
                    {/* <button className="btn-group__item" onClick={() => setData(Menu)}>All</button> */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;