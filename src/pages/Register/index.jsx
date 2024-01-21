import styles from "./Register.module.css";

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

    // Cria um objeto com os dados de login do usuário
    const user = {
      dislayName,
      email,
      password,
    };

    // Verifica se as senhas são iguais...
    if (password !== confirmPassword) {
      setError("A senhas são diferentes!");
    }

    // Passa os dados para função de criar usuário
    const res = await creatUser(user);

    console.log(error);
    console.log(user);
  };

  // Verifica a existência de erros vindos do firebase, e atualiza o setError()
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
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
              required
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
              required
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
              required
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
              required
            />
          </label>
          {!loading && <button className={styles.btn}>Cadastrar</button>}
          {loading && (
            <button className={styles.btnLoading}>Carregando...</button>
          )}
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Register;
