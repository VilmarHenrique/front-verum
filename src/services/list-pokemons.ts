import { httpClient } from "../api/http-client";

export const listPokemons = async () => {
  const response = await httpClient.get("/pokemons", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  });
  return response.data.results;
};
