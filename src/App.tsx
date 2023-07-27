import React from 'react';
import styled from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = React.useState({});
  const [tela, setTela] = React.useState(false);

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        setUser(currentUser);
        setTela(true);
        } else {
          setTela(false);
        }
    });

  return (
    <div>
      foi
    </div>
  );
}

export default App;
