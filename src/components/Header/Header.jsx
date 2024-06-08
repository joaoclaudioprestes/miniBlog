import Container from "../Container/Container";
import style from "./Header.module.css";

function Header() {
  return (
    <Container>
      <header className={style.header}>
        <p className={style.logo}>
          {"Mini "}
          <strong>Blog</strong>
        </p>

        <nav className={style.nav}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Novo post</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="#">Sair</a></li>
          </ul>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
