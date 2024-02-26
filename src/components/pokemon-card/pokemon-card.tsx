import { PokemonModel } from "../../models/pokemon-model";
import { importPokemon } from "../../services/import-pokemon";

type Props = {
  pokemon: PokemonModel;
  removeImportButton?: boolean;
};

export const PokemonCard = ({ pokemon, removeImportButton }: Props) => {
  const handleImport = async () => {
    await importPokemon(pokemon)
      .then((r) => alert(r.name + " importado com sucesso"))
      .catch(() => {
        alert("Falha, pokemon ja importado");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/*   <img src={pokemon.image} alt={pokemon.name} height={130} width={130} /> */}

      <h2>{pokemon.name}</h2>
      {/* <span>
        Força: <strong>{pokemon.strength}</strong>
      </span>
      <span>
        Defesa: <strong>{pokemon.defense}</strong>
      </span> */}
      {!removeImportButton && <button onClick={handleImport}>Importar</button>}
    </div>
  );
};
