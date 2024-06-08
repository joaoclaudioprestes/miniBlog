import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Login.module.css";

function Login() {
  return (
    <>
      <Header />
      <Container>
        <section className={style.section}>
          <h1>Login</h1>
          <p>Acesse sua conta para compartilhar suas histórias</p>
          <form action="" className={style.form}>
            <label htmlFor="email">
              <span>E-mail:</span>
              <input type="email" id="email" name="email" required />
            </label>
            <label htmlFor="password">
              <span>Senha:</span>
              <input type="password" id="password" name="password" required />
            </label>
            <button type="submit">Login</button>
            <span>
              Não possui cadastro? <a href="/register">Ir para cadastro</a>
            </span>
            <span className={style.message}></span>
          </form>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
