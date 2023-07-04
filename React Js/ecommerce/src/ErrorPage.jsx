import React from 'react';
import { styled } from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className="container">
                <div>
                    <h2>404</h2>
                    <h3>UK OH! You Are Lost.</h3>
                    <p>The page you are looking for does not exist. how you got is a mystry.but you can click the button below to go back to home page.</p>
                    <NavLink to='/'>
                        <Button > Go back to home </Button>
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
.container{
    padding : 9rem 0;
    text-align: center;
}
h2 {
    font-size: 10rem;
}
h3{
    font-size:3.8rem;
}
p {
    margin: 2rem 0
}

`
export default ErrorPage;