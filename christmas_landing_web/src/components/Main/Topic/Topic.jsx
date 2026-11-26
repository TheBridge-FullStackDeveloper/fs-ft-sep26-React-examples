import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Card from './Card'

const Topic = () => {

  const [value, setValue] = useState("holidays"); // Para guardar el dato a buscar
  const [books, setBooks] = useState([]); // Para guardar los books
  
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        // Descargar libros
        const res = await axios.get(`https://openlibrary.org/search.json?q=${value}`);
        const json = res.data;
        console.log(json.docs); // [] de objetos
        
        // Guarda en el array de estado con todos los libros encontrados
        setBooks(json.docs);
      }catch(e){
        setBooks([]) // No pintes nada 
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };

  const paintBooks = () => 
                  books.map(book => <Card data={book}/>)


  return    <section className="topic">
              <h1>Búsqueda de libros!</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic"/>
                <button>Buscar</button>
              </form>

              {books.length!==0?
                                <ul className='topics'>
                                  {paintBooks()}
                                </ul>
                                :""
              }
            </section>
};

export default Topic;
