import React from 'react';

import { Link } from "react-router-dom";

const Examples = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <h2>
                        <Link to="classcompo">class Component</Link>
                    </h2>

                </div>
            </div>
        </div>
    );
};

export default Examples;