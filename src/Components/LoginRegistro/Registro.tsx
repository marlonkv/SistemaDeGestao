import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getApp } from 'firebase/app';
import { auth } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const Registro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [uid, setUid] = useState();

  return <h1>Registro</h1>
};

const Lapis = styled.svg`
  color: gray;
  position: absolute;
  left: 170px;
  top: -1px;
  width: 20px;
  height: 20px;
`;
const EmailSenha = styled.div`
  display: grid;
  gap: 0.4rem;
  margin-top: 15px;
  align-items: center;
  align-content: center;
  gap: 1.5rem;

  input {
    background-color: gainsboro;
    height: 45px;
    border-radius: 12px;
    text-align: center;
  }
`;
const Usuario = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  gap: 0.3rem;

  input[placeholder='Seu Nome'] {
    font-size: 1.55rem;
  }
  input[placeholder='ID'] {
  }

  div input {
    width: 180px;
    cursor: pointer;
    padding: 0.2rem 1rem;
  }
`;
const BtnRegister = styled.button`
  position: absolute;
  height: 34px;
  width: 200px;
  left: 38%;
  border-radius: 100px;
  bottom: 80px;
  border: none;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
`;
const ImgProfile = styled.div`
  position: relative;
  margin-bottom: 0.5rem;

  div {
    height: 120px;
    max-width: 120px;
    margin: 0 auto;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 100px;
    }
  }
  label {
    background-color: rgba(0, 0, 0, 0.2);
    width: 35px;
    height: 35px;
    border-radius: 20px;
    position: absolute;
    left: 130px;
    top: 80px;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    &::before {
      content: '+';
      position: relative;
      left: 9.7px;
      top: -1px;
      font-weight: bold;
      color: gainsboro;
    }
  }
  input {
    display: none;
  }
`;
const Voltar = styled.div`
  position: absolute;
  left: 25px;
  top: 25px;
  color: gray;
  cursor: pointer;
`;
const Base = styled.div`
  display: grid;
  gap: 3rem;
  padding: 4rem 5rem;
  max-width: max-content;
  position: relative;
  margin: 0px auto;
  grid-template-columns: 1fr 1fr;

  input {
    border: none;
    font-size: 1.1rem;
    text-align: center;
  }

  input:focus {
    outline: none;
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: center;
  }

  button {
    height: 40px;
    border: none;
    border-radius: 8px;
    margin-top: 2rem;
  }
`;
const Bg = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid gainsboro;
  padding: 5rem 2rem 8rem 1rem;
  border-radius: 45px;
  box-shadow: 5px 5px 60px rgba(0, 0, 0, 0.2);
  margin-top: 90px;
  animation: start 0.6s;

  @keyframes start {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Registro;