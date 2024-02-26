import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "./pages/pokemons";
import { LoginPage } from "./pages/login";
import { ImportedPokemons } from "./pages/imported-pokemons";
import { ProtectedRoute } from "./protected-route";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/pokemons"
          element={
            <ProtectedRoute>
              <Pokemons />
            </ProtectedRoute>
          }
        />
        <Route
          path="/imported-pokemons"
          element={
            <ProtectedRoute>
              <ImportedPokemons />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
