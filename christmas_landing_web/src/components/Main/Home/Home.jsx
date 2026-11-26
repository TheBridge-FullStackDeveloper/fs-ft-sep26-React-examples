import { Link } from "react-router-dom"

const Home = () => {
  return <div>
    Home
    <ul>
      <li>
        <Link to="/product">Busca todos los productos /product </Link>
      </li>
      <li>
        <Link to="/product?sort=asc&limit=5">Prueba de: product?sort=asc&limit=5</Link>
      </li>
      <li>
        <Link to="/product/2">Prueba de: product/2</Link>
      </li>
      <li>
        <Link to="/product?sort=asc">Prueba de: product?sort=asc</Link>
      </li>
    </ul>


  </div>;
};

export default Home;
