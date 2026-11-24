import { useState } from "react";

const Form = ({ add }) => {

  const [values, setValues] = useState({
    title: "",
    description: ""
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    add(values)
  }



  return <div>
    <h3>Introduce un deseo</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Título</label><br />
      <input type="text" name="title" onChange={handleChange} /><br />
      <label htmlFor="description" >Descripción</label><br />
      <input type="text" name="description" onChange={handleChange} /><br />

      <button >Crear destino</button>

    </form>
  </div>;
};

export default Form;
