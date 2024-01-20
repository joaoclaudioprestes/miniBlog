import styles from "./Register.module.css";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentications";

const Register = () => {
  const [dislayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { creatUser, error: authError, loading } = useAuthentication();

  const handleSubmite = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      dislayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("A senhas são diferentes!");
    }

    const res = await creatUser(user);

    console.log(error);
    console.log(user);
  };

  return (
    <>
      <NavBar />
      <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usário e compartilhe suas histórias.</p>
        <form onSubmit={handleSubmite}>
          <label>
            <span>Name:</span>
            <input
              type="text"
              name="name"
              placeholder="Insira seu nome"
              value={dislayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type="password"
              name="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Corfime sua senha:</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha digitada anteriormente"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button className={styles.btn}>Cadastrar</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
