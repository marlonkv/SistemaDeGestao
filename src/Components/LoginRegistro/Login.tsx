import React from 'react';
import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithCredential,
  signInWithRedirect,
} from 'firebase/auth';
import { auth, provider } from '../../firebase';
import styled from 'styled-components';

type Props = {
  estado: boolean
}

const Login = () => {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  let estado = true

  //decoration
  const [erro, setErro] = useState(false);
  const [span, setSpan] = useState({ top: 13, left: 120 });

  //logic
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      console.log(user);
    } catch (error) {
      console.log(error);
      setErro(true);
    }
  };

  return (
    <Bg>
     <Base>
        <EmailSenha>
            <div>
              <Decoration>Email</Decoration>
              <input
                onChange={({ target }) => {
                  setLoginEmail(target.value);
                }}
                />
            </div>

            <div>
              <Decoration>Senha</Decoration>
              <input
                onChange={({ target }) => {
                  setLoginPassword(target.value);
                }}
              />
            </div>
        </EmailSenha>

        <NaoEncontrado>
          {erro && <p>Usuário não encontrado</p>}
        </NaoEncontrado>
        
        <Btns>
          <button onClick={login}>Iniciar sessão</button>
        </Btns>
    </Base>
  </Bg>
  )
};

const NaoEncontrado = styled.div`
  position: absolute;
`;
const Decoration = styled.span`
  background: white;
  position: absolute;
  padding: 0 0.3rem;
  font-size: 0.9rem;
  top: -9px;
  left: 12px;
  color: gray;
`;
const EmailSenha = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 3.8rem;
  justify-items: center;

  & > div {
    width: 280px;
    position: relative;
  }

  input {
    border: none;
    text-align: center;
    font-size: 1.1rem;
    margin: 0 auto;
    width: 100%;
    border-radius: 7px;
    border: 2px solid gainsboro;
    height: 46px;
  }

  input:focus {
    outline: none;
  }
`;
const Btns = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;

  button {
    border-radius: 100px;
    bottom: 80px;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    width: 160px;
    height: 35px;
    font-size: 1rem;
    transition: 0.3s;
    position: absolute;
    bottom: 0px;
    left: 145px;
  }
`;
const CriarConta = styled.button`
  text-align: center;
  cursor: pointer;
  padding: 0 1rem;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  position: absolute;
  bottom: -90px;
  right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
const Base = styled.div`
  display: grid;
  position: relative;
  gap: 10px;
  margin: 0 auto;
  padding: 4rem 3rem;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 0px;
  }
`;
const Bg = styled.div`
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  padding: 0rem;
  max-width: 450px;
  height: 430px;
  margin: 140px auto 0 auto;
  animation: start 0.6s;
  position: relative;

  @keyframes start {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Login;
