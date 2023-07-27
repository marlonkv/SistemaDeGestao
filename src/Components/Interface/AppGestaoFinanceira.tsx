import styled from 'styled-components';
import React from 'react';
/* import AppSistema from '../compSistemas/gestaoFinanceira/AppSistema';
import AppDesing from '../compSistemas/gestaoFinanceira/AppDesing'; */

const GestãoFinanceira = () => {
  const [t, setT] = React.useState(false);

  return (
/*     <Base
      onClick={!t ? () => setT(true) : null}
      style={
        t
          ? { height: '100vh', width: '100vw' }
          : { top: '240px', left: '600px', cursor: 'pointer' }
      }
    >
{t ? <AppSistema sair={() => setT(false)} /> : <AppDesing />} 
    </Base> */
    null
  );
};

const Base = styled.div`
  height: 300px;
  width: 300px;
  background-color: #e2e2d7;
  border-radius: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: 0.3s;
  color: #8a8a7d;
  z-index: 1;

  &:hover {
    box-shadow: 1px 1px 30px 3px rgba(0, 0, 0, 0.15);
    color: gray;
  }

  h1 {
    font-size: 14rem;
    font-weight: 200;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0px;
    margin-left: 80px;
    margin-top: 14px;
    animation: anima 0.3s;

    @keyframes anima {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  div > button {
    background-color: transparent;
    border: none;
    margin-top: 35px;
    margin-left: 30px;
    cursor: pointer;
    img {
      color: grey;
      transform: rotate(-90deg);
      height: 35px;
    }
  }
`;

export default GestãoFinanceira;
