import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const Home = () => {
  // Consumir el contexto -> useContext
  const { updateUsername } = useContext(UserContext);
  const [newUsername, setNewUsername] = useState("");

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     // Actualizar el contexto con el texto que hayas puesto en el input del formulario
    updateUsername(newUsername);
    setNewUsername("");
  };

  return (
    <div>
      Home
      <h2>Update Username</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newUsername} onChange={handleInputChange} />
        <button type="submit">Update</button>
      </form>

      <ul>
        <li>
          <Link to="/product">Busca todos los productos /product </Link>
        </li>
        <li>
          <Link to="/product?sort=asc&limit=5">
            Prueba de: product?sort=asc&limit=5
          </Link>
        </li>
        <li>
          <Link to="/product/2">Prueba de: product/2</Link>
        </li>
        <li>
          <Link to="/product?sort=asc">Prueba de: product?sort=asc</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
