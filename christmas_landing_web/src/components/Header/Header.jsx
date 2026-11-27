import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import NavBar from "./NavBar/NavBar"

const Header = () => {
  // Consumidor -> useContext
  // Consume el contexto con el nombre de usuario
  const { username } = useContext(UserContext);


  return <header>
    <span>Hola, {username} !!</span>
    <NavBar/>
  </header>;
};

export default Header;
