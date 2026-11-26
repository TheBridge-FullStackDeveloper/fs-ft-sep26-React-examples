import { useEffect, useState } from "react";
import StaffCard from "./StaffCard/StaffCard";
import { InfinitySpin } from "react-loader-spinner"

const Staff = () => {

  const [pokemons, setPokemons] = useState([]);

// Se ejecuta cuando se crea el componente (1 sola vez) --> []
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        setPokemons(data.results);
      } catch (error) {
        throw new Error("Falló la carga de pokemon");
      }
    }

    getPokemons();

  }, []) 

  // Se ejecuta cada vez que cambia la variable "pokemons" --> [pokemons]
  useEffect(() => {
    console.log("Han llegado los pokemon")

  }, [pokemons])

  const renderPokemons = () => pokemons.map((pokemon, i) => <StaffCard data={pokemon} key={i} />)

  return <div>
    <h4>Pokemons encontrados: {pokemons.length || "Buscando..."}</h4>
    <section>
      {pokemons.length>0? renderPokemons() : <InfinitySpin width="200" color="#aa3bff" />}
    </section>


  </div>;
};

export default Staff;
