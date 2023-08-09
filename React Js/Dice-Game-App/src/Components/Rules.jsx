import React from 'react';
import { styled } from 'styled-components';

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How To play Dice Game?</h2>
            <div className='text'>
                <p>select Any Number.</p>
                <p>Click on Dice Image.</p>
                <p>After Click on dice if selected Number is Equal to dice number you will get point(score) of that number selected </p>
                <p>if you got  wrong guess then 2 point will be dedcuted.</p>
            </div>
        </RulesContainer>
    );
};

export default Rules;

const RulesContainer = styled.div`
width:800px;
background-color:#fbf1f1;
margin:20px auto;
padding:0 30px;

.text{
    padding:15px 0;
    p{
        font-size:17px;
    }
}

`