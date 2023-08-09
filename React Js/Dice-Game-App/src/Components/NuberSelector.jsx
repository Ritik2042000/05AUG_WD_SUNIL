import React, { useState } from 'react';
import { styled } from 'styled-components';

const NuberSelector = ({selectedNumber,setSelectedNumber,error,setEroor}) => {

    const arrayofbox = [1, 2, 3, 4, 5, 6]

    const numberSelected = (value) => {
        setSelectedNumber(value);
        setEroor('');
    }


    return (
        <NuberSelectorContainer>
                <p className='error'>{error}</p>
            <div className='flex'>

                {
                    arrayofbox.map((curElem, i) => {
                        return <Box
                            isSelected={curElem === selectedNumber}
                            onClick={() => numberSelected(curElem)} key={i}>{curElem}</Box>
                    })
                }

            </div>
            <p>Selected Number</p>
        </NuberSelectorContainer>
    );
};

export default NuberSelector;

const NuberSelectorContainer = styled.div`

display:flex;
flex-direction: column;
align-items: end;

.error{
    color:red
}

.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:500;
    margin:5px 0;
}
`
const Box = styled.div`
width:72px;
height:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color: ${props => props.isSelected ? 'black' : 'white'};
color: ${props => props.isSelected ? 'white' : 'black'};
cursor:pointer;
` 