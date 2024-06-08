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
          <h1 className={style.title}>Login</h1>
          <p className={style.description}>Acesse sua conta para compartilhar suas histórias</p>
          <form action="" className={style.form}>
            <label htmlFor="email" className={style.label}>
              <span>E-mail:</span>
              <input type="email" id="email" name="email" required className={style.input} />
            </label>
            <label htmlFor="password" className={style.label}>
              <span>Senha:</span>
              <input type="password" id="password" name="password" required className={style.input} />
            </label>
            <button type="submit" className={style.button}>Login</button>
            <span className={style.register}>
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
