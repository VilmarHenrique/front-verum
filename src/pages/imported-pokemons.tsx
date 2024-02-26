import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { useEffect, useState } from "react";
import { listImportedPokemons } from "../services/list-imported-pokemons";

export const ImportedPokemons = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  const handleGoToPokemons = () => {
    navigate("/pokemons");
  };

  const [importedPokemons, setImportedPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await listImportedPokemons();
      setImportedPokemons(pokemons);
    };

    fetchPokemons();
  }, []);

  console.log(importedPokemons);

  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={handleSignOut}>Sair</button>
        <button onClick={handleGoToPokemons}>Ver todos os pokemons</button>
      </div>
      <h1>Pokemons Importados</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {importedPokemons?.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} removeImportButton />
        ))}
      </div>
    </>
  );
};
