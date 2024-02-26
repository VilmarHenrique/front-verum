import { useState } from "react";
import "./login-styles.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/login";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) return alert("Preencha todos os campos");

    await login({ email, password }).then((response) => {
      const token = response.token;
      localStorage.setItem("token", token);
      navigate("/pokemons");
    });
  };

  return (
    <div className="wrapper">
      <h1>Faça login para acessar a lista de pokemons</h1>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type='button' onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
};
