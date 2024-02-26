import { httpClient } from "../api/http-client";
import { PokemonModel } from "../models/pokemon-model";

export const importPokemon = async (pokemon: PokemonModel) => {
  const response = await httpClient.post("/import-pokemon", pokemon, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  });
  return response.data;
};
