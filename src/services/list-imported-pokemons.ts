import { httpClient } from "../api/http-client";

export const listImportedPokemons = async () => {
  const response = await httpClient.get("/imported-pokemons",{
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  });
  return response.data;
};
