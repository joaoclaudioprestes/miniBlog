import { useState } from "react";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Register.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não conferem");
      return;
    } else {
      const user = {
        name,
        email,
        password,
      };

      const response = await createUser(user);

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <section className={style.section}>
          <h1 className={style.title}>Cadastre-se para acessar o Blog</h1>
          <p className={style.subtitle}>
            Entre para compartilhar suas histórias
          </p>
          <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="nome">
              <span className={style.label}>Nome:</span>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className={style.input}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label htmlFor="email">
              <span className={style.label}>E-mail:</span>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={style.input}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label htmlFor="password">
              <span className={style.label}>Senha:</span>
              <input
                type="password"
                id="password"
                name="password"
                required
                className={style.input}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <label htmlFor="confirmPassword">
              <span className={style.label}>Confirme sua senha:</span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className={style.input}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </label>
            <button type="submit" className={style.button} name="submit">
              Cadastrar
            </button>
            <span>
              Já possui cadastro?{" "}
              <a href="/login" className={style.link}>
                Ir para Login
              </a>
            </span>
            {error && <span className={style.error}>{error}</span>}
          </form>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
