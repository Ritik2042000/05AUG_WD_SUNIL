import React from 'react';
import { styled } from 'styled-components';
import NuberSelector from './Components/NuberSelector';

const TotalScore = () => {
    return (

        <Container>
            <h2>0</h2>
            <p>Total Score</p>
            <NuberSelector/>
        </Container>

    );
};

const Container = styled.div`
    max-width:200px;
    text-align:center;
h2{
    font-size:100px;
}
p{
    font-size:20px;
    font-weight :500;

}

`
export default TotalScore;