import { useEffect, useState } from "react";
import StaffCard from "./StaffCard/StaffCard";
import { InfinitySpin } from "react-loader-spinner"

const Staff = () => {

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        setPokemons(data);
      } catch (error) {
        throw new Error("Falló la carga de pokemon");
      }
    }

    getPokemons();

  }, [])

  useEffect(() => {
    console.log("Han llegado los pokemon")

  }, [pokemons])

  const renderPokemons = () => pokemons.results.map((pokemon, i) => <StaffCard data={pokemon} key={i} />)

  return <div>
    <h4>Pokemons encontrados: {pokemons.count || "Buscando..."}</h4>
    <section>
      {pokemons.results ? (renderPokemons()) : <InfinitySpin width="200" color="#aa3bff" />}
    </section>


  </div>;
};

export default Staff;
