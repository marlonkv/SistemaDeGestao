import React from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

type Props = {
  nome: string,
  id: number,
  imgPerfil: string
}

const IconeUsuario: React.FC<Props> = ({ nome, id, imgPerfil }) => {
/*   const [config, setConfig] = React.useState(0);

  const logout = async () => {
    await signOut(auth);
  };

  function mouseBg({ currentTarget }) {
    setConfig(73);
  }
  function mouseBgBg({ target }) {
    console.log(target);
    if (target.className.includes('bg')) {
      setConfig(0);
    }
  } */

  return (
/*     <Posicao className="bg" onMouseOver={mouseBgBg}>
      <Base>
        <Bg onMouseOver={mouseBg}>
          <div>
            <img src={imgPerfil} alt="perfil" />
          </div>
          <div>
            <h1>{nome}</h1>
            <p>{id}</p> 
          </div>
        </Bg>

        <Config style={{ height: `${config}px` }}>
          <ul>
            <li>
              <button onClick={logout}>Personalizar Página</button>
              <button onClick={logout}>Sair</button>
            </li>
          </ul>
        </Config>
      </Base>
    </Posicao> */
    null
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
const Bg = styled.div`
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
