import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = () => {
    
    const spin = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `;
    const Loader = styled.div`
    border-radius: 50%;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    `;


  return <Loader />;
}

export default Spinner
