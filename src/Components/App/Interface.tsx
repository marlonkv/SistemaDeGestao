import React from 'react';
import styled from 'styled-components';
import IconeUsuario from '../Interface/IconeUsuario';
import AppGestaoFinanceira from '../Interface/AppGestaoFinanceira';

type Props = {
  user: object
}

const Interface: React.FC<Props> = ({ user }) => {
  return (
    user
    ? 
      <div>
        <div className="App">
         {/*  <IconeUsuario
            nome={user ? user.displayName}
            id={user?.uid}
            imgPerfil={user?.photoURL}
          />
          <Modulos>
            <AppGestaoFinanceira />
          </Modulos> */}
        </div>
      </div>
    : 
      null
  );
};

const Modulos = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  justify-content: space-between;
`;

export default Interface;
