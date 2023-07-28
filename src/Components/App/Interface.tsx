import React from 'react';
import styled from 'styled-components';
import IconeUsuario from '../Interface/IconeUsuario';
import AppGestaoFinanceira from '../Interface/AppGestaoFinanceira';

type Props = {
  nome: string,
  photo: string
}

const Interface: React.FC<Props> = ({ nome, photo }) => {

  return (
    <div>
        <div className="App">

         <IconeUsuario
            nome={nome}
            photo={photo}
          />
            {/*  

            <Modulos>
            <AppGestaoFinanceira />
          </Modulos> */}
        </div>
      </div>
  );
};

const Modulos = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  justify-content: space-between;
`;

export default Interface;
