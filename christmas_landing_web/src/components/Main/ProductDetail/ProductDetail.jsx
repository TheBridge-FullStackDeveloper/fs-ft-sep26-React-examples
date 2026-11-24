import { useParams, useLocation } from 'react-router-dom';

const ProductDetail = () => {

  const { id } = useParams();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');
  const sort = searchParams.get('sort');

  return <div> 
      <h1>Detalle del Producto</h1>
      <p>ID: {id}</p>
      <p>Página: {page}</p>
      <p>Orden: {sort}</p>

  </div>;
};

export default ProductDetail;
