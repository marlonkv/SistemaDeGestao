import React from 'react';
import Login from '../LoginRegistro/Login';
import Registro from '../LoginRegistro/Registro'

const LoginRegistro = () => {
  const [tela, setTela] = React.useState(false);

  return (
    <>
      {tela ? (
        <Registro  />
      ) : (
        <Login />
      )}
    </>
  );
};

export default LoginRegistro;
