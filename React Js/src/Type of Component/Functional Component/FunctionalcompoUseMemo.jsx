// import React from 'react';
import React, { useState } from 'react';

const FunctionalcompoUseMemo = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>
            <div>
                <button onClick={handleClick}>Toggle</button>
                {isVisible && <p>Visible content</p>}
                {!isVisible && <p style={{ display: 'none' }}>Hidden content</p>}
            </div>
        </>
    );
};
export default FunctionalcompoUseMemo;

