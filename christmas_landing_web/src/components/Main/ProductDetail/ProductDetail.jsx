import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { InfinitySpin } from "react-loader-spinner";


// TODOS los productos
// http://localhost:5173/product
// http://localhost:5173/product?sort=asc&limit=5
// http://localhost:5173/product?sort=desc&limit=10

// UN Producto
//http://localhost:5173/product/2
//http://localhost:5173/product/8


// LLamada a la API a realizar
// https://fakestoreapi.com/products?limit=5&sort=desc&page=2
// https://fakestoreapi.com/products/3

const ProductDetail = () => {

  const { id } = useParams();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const sort = searchParams.get('sort');
  const limit = searchParams.get('limit');

  const [product,setProduct] = useState(null);// {} o []

  useEffect(()=>{
    async function fetchData() {
      try{
          const url = id?
                      `https://fakestoreapi.com/products/${id}`:
                      `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`;

          const res = await axios.get(url);
          const data = res.data;
          console.log(data);
          setProduct(data);
      }catch(e){
        console.log(e);
      }
    }
    fetchData();
  },[id,limit,sort])

  const renderOneProduct = () => {
    // Renderiza un único producto
    if (!product) return <InfinitySpin width="200" color="#4fa94d" />;

    return (
      <>
        <h1>Detalle del Producto</h1>
        <p>ID: {product.id}</p>
        <p>Nombre: {product.title}</p>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
        <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      </>
    );
  };

  const renderAllProducts = () => {
    // Renderiza todos los productos
    if (!product) return <InfinitySpin width="200" color="#4fa94d" />;

    return (
      <>
        <h1>Todos los Productos</h1>
        <ul>
          {product.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  };

  return <div> 
      <h1>Detalle del Producto</h1>
      <p>ID: {id}</p>
      <p>Orden: {sort}</p>
      <p>Límite: {limit}</p>

      {id?renderOneProduct():renderAllProducts()}

  </div>;
};

export default ProductDetail;
