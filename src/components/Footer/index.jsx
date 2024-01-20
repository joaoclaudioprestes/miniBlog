import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>Mini Blog &copy; 2024 - Powerd by <span className={styles.autor}>João Prestes</span></p>
    </footer>
  );
};

export default Footer;
