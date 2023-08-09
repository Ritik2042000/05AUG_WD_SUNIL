import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from '../styled/Button';

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
