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
          <h1 className={style.title}>Cadastre-se para acessar o Blog</h1>
          <p className={style.subtitle}>Entre para compartilhar suas histórias</p>
          <form action="" className={style.form}>
            <label htmlFor="nome">
              <span className={style.label}>Nome:</span>
              <input type="text" id="nome" name="nome" required className={style.input} />
            </label>
            <label htmlFor="email">
              <span className={style.label}>E-mail:</span>
              <input type="email" id="email" name="email" required className={style.input} />
            </label>
            <label htmlFor="password">
              <span className={style.label}>Senha:</span>
              <input type="password" id="password" name="password" required className={style.input} />
            </label>
            <button type="submit" className={style.button}>Cadastrar</button>
            <span>
              Já possui cadastro? <a href="/login" className={style.link}>Ir para Login</a>
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
