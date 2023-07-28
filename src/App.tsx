import React from 'react';
import styled from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Interface from './Components/App/Interface';
import LoginRegistro from  './Components/App/LoginRegistro'

function App() {
  const [user, setUser] = React.useState({
    displayName: 'loading',
    photo: 'loading'
  });

  const [tela, setTela] = React.useState(false);

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        setUser({ 
          displayName: `${currentUser.displayName}`, 
          photo: `${currentUser.photoURL}` 
        });

        setTela(true);
      } else {
        setTela(false);
      }
    });
  }, []); 

  console.log(user);

  return (
    <Global>
     {tela ? <Interface nome={user.displayName} photo={user.photo} /> : <LoginRegistro />}
    </Global>
  );
}

const Global = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

export default App;
