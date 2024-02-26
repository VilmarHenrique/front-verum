import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { useEffect, useState } from "react";
import { listPokemons } from "../services/list-pokemons";

export const Pokemons = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await listPokemons();
      setPokemons(pokemons);
    };

    fetchPokemons();
  }, []);

  const handleSignOut = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  const handleGoToImportedPokemons = () => {
    navigate("/imported-pokemons");
  };

  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={handleSignOut}>Sair</button>
        <button onClick={handleGoToImportedPokemons}>
          Ver pokemons importados
        </button>
      </div>
      <h1>Pokemons</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
    </>
  );
};
