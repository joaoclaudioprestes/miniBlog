import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Register.module.css";

function Register() {
  return (
    <>
      <Header />
      <Container>
        <section className={style.section}>
          <h1>Cadastre-se para acessar o Blog</h1>
          <p>Entre para compartilhar suas histórias</p>
          <form action="" className={style.form}>
            <label htmlFor="nome">
              <span>Nome:</span>
              <input type="text" id="nome" name="nome" required />
            </label>
            <label htmlFor="email">
              <span>E-mail:</span>
              <input type="email" id="email" name="email" required />
            </label>
            <label htmlFor="password">
              <span>Senha:</span>
              <input type="password" id="password" name="password" required />
            </label>
            <button type="submit">Cadastrar</button>
            <span>
              Já possui cadastro? <a href="/login">Ir para Login</a>
            </span>
            <span className={style.message}></span>
          </form>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
