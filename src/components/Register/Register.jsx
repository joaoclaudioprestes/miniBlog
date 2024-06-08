import { useState } from "react";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Register.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const user = {
      name,
      email,
      password,
    };

    console.log(user);
    setError("Usuário cadastrado com sucesso!");
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
