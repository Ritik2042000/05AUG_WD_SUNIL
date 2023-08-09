import React, { useState } from 'react';
import { styled } from 'styled-components';

const RoleDice = ({currentDice,setCurrentDice,generateRandomNumber}) => {

    return (
        <DiceContainer>
            <div className='dice'>
                <figure>
                    <img src={`/images/dice/dice_${currentDice}.png`} alt="" onClick={() => generateRandomNumber(1, 7)} />
                    <figcaption>Click On Dice To Roll</figcaption>
                </figure>
            </div>
            
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
margin-top:48px;
display:flex;
align-items: center;
justify-content:center;
.dice{
    cursor:pointer;
   
figcaption{
    text-align:center;
    font-size:24px;
}
}
`