import React from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { setInterval } from 'timers/promises';

type Props = {
  nome: string,
  photo: string
}

const IconeUsuario: React.FC<Props> = ({ nome, photo }) => {
  const [altura, setAltura] = React.useState(0);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Posicao className="bg" >
      <Base 
        onMouseOver={() => setAltura(75)}
        onMouseOut={() => setAltura(0)}
      >
        <Icone>
          <div>
            <img src={photo} alt="perfil" />
          </div>
          <div>
            <h1>{nome}</h1>
          </div>
        </Icone>

        <Config style={{ height: `${altura}px` }}>
          <ul>
            <li>
              <button onClick={logout}>Personalizar Página</button>
              <button onClick={logout}>Sair</button>
            </li>
          </ul>
        </Config>
      </Base>
    </Posicao> 
  );
};

const Config = styled.div`
  display: grid;
  gap: 1rem;
  transition: 0.3s;
  animation: anima 0.3s;
  overflow: hidden;

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    width: 100%;
    text-align: start;
    color: gray;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.6rem 0 0.6rem 1rem;
    border-radius: 10px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      transition: 0.2s;
    }
  }
`;
const Base = styled.div`
  width: max-content;
  box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.15);
  padding: 0.4rem;
  border-radius: 15px;
  position: absolute;
  display: grid;
  z-index: 1;
`;
const Icone = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  place-content: center;
  place-items: center;
  width: max-content;
  gap: 0 0.8rem;
  cursor: pointer;
  padding: 0.2rem 1rem 0.2rem 0.2rem;
  border-radius: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: 0.2s;
  }

  & > div {
    grid-row: 1/3;
  }
  img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 50px;
  }

  h1 {
    font-size: 1.2rem;
  }

  p {
    grid-column: 2;
    font-size: 0.7rem;
  }

  * {
    margin: 0px;
  }
`;
const Posicao = styled.div`
  padding: 2rem;
  background: tranparent;
  position: absolute;
  right: 0px;
  width: 280px;
  height: 150px;
`;

export default IconeUsuario;
