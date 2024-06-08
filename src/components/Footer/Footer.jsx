import Container from "../Container/Container";
import logo from "../../assets/logo.svg";
import style from "./Footer.module.css";

function Footer() {
  return (
    <Container>
      <footer className={style.footer}>
        <p className={style.logo}>
          Mini <strong>Blog</strong>
        </p>
        <p className={style.copy}>
          Copyright © 2023 -
          <a href="https://jprestes.vercel.app" target="_blank">
            jprestes.com
          </a>{" "}
          | Todos os direitos reservados.
        </p>

        <div className={style.divPowered}>
          <p className={style.powered}>Powered by </p>
          <a href="">
            <img src={logo} alt="Logo - João Prestes" />
          </a>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
