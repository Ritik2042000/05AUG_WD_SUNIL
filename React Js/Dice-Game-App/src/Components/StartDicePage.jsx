import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StartDicePage = ({toggle}) => {
    return (
        <Container>
            <figure>
                <img src="/images/dices.png" alt="" />
            </figure>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartDicePage;
const Container = styled.div`
max-width:1180px;
display:flex;
align-items:center;
height:100vh;
margin:0 auto;

.content {
    h1{
        font-size : 96px;
        white-space : nowrap;
    }

}

`
const Button = styled.button`
min-width: 220px;
margin:0 0 0 100px;
padding: 10px 18px;
color:#fff;
border-radius: 5px;
background: #000;
border : 1px solid transparent ;
font-size: 16px;
cursor: pointer;
transition: all 0.3s ease-in;     
&:hover{
    background-color: #fff;
    color:#000;
    border : 1px solid black ;
    
}
`