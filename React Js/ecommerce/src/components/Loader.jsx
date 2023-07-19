import React from 'react';
import { styled } from 'styled-components';

const Loader = () => {
    return (
        <Wrapper>
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
@keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spinner-container{
    width:100%;
    margin : 0 auto;
    display:flex;
    justify-content: center;
    align-itenms: center;

  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    text-align: center;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }


`
export default Loader;