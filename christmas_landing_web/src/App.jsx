import { useState } from 'react';
import { UserContext } from './context/UserContext';

import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [username, setUsername] = useState('');

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };
  // Datos para Alimentar el contexto que vamos a proveer
  // Datos para lanzar el Provider
  const userData = { username, updateUsername };

  return (
    <>
      <UserContext.Provider value={userData}>
        <Header/>
        <Main/>
      </UserContext.Provider>
        <Footer/>
    </>
  )
}

export default App
