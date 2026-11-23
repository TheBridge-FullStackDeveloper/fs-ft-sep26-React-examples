import { useState } from "react";
import ChristmasItem from "./ChristmasItem";

const ChristmasList = () => {
  const products = [
    {
      title: "Santa Hat",
      description: "A festive red and white Santa hat.",
      price: 9.99,
      img_url:
        "https://cdn.thewirecutter.com/wp-content/media/2022/11/santahats-2048px-8559-2x1-1.jpg",
    },
    {
      title: "Christmas Tree",
      description: "A small decorative Christmas tree.",
      price: 29.99,
      img_url: "https://thumbs.dreamstime.com/b/christmas-tree-22033911.jpg",
    },
    {
      title: "Snow Globe",
      description: "A beautiful snow globe with a winter scene.",
      price: 14.99,
      img_url:
        "https://t4.ftcdn.net/jpg/02/95/66/81/360_F_295668104_5PkXfp94Ym3qk9D81T939Jd9VBmAOpCK.jpg",
    },
    {
      title: "Holiday Lights",
      description: "String lights to brighten up your holidays.",
      price: 19.99,
      img_url:
        "https://static.vecteezy.com/system/resources/thumbnails/047/195/608/small/christmas-winter-blurred-background-with-wooden-table-and-garland-lights-with-golden-bokeh-photo.jpg",
    },
    {
      title: "Reindeer Plush",
      description: "A soft and cuddly reindeer plush toy.",
      price: 12.99,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYX3nKIyv-z9uzyCQo89yHNMMIvKJmt9n8g&shttps://plushhorse.co.uk/wp-content/uploads/2018/10/REINDEER-LYING.jpg",
    },
  ];
  // Items guardados en el estado
  const [items, setItems] = useState(products); // [] de products

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: 0,
    img_url: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(e.target.title.value);
    console.log(e.target.price.value);

    // Añadir objeto al array items
    setItems([...items, values]);
  };

  // Renderizar los datos
  const paintData = () => items.map((item) => <ChristmasItem data={item} />);

  // Objetivo: cargar con el array "products" el estado items
  const loadData = () => setItems(products);

  //Objetivo: Vaciar el array de items
  const removeData = () => setItems([]);

  return (
    <div>
      ChristmasList

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Título</label>
        <br />
        <input type="text" name="title" onChange={handleChange} />
        <br />

        <label htmlFor="description">Description</label>
        <br />
        <input type="text" name="description" onChange={handleChange} />
        <br />

        <label htmlFor="price">Precio</label>
        <br />
        <input type="number" name="price" onChange={handleChange} />
        <br />

        <label htmlFor="url">URL imagen</label>
        <br />
        <input type="url" name="img_url" onChange={handleChange} />
        <br />

        {values.title &&
        values.description &&
        values.price &&
        values.img_url ? (
          <button type="submit">Crear</button>
        ) : (
          <b>Completa los campos</b>
        )}
      </form>

      <button onClick={removeData}>Borrar todo</button>
      <button onClick={loadData}>Recargar</button>

      {paintData()}
      {/* <h2>A mano:</h2>
        <ChristmasItem data={products[0]}/>
        <ChristmasItem data={products[1]}/>
        <ChristmasItem data={products[2]}/>
        <ChristmasItem data={products[3]}/>
        <ChristmasItem data={products[4]}/> */}
    </div>
  );
};

export default ChristmasList;
