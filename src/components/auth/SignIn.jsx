import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../fisebase";
import "./style.css";
import { Link } from "react-router-dom";
import AuthDetails from "../AuthDetails";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-container">
      <form onSubmit={signIn}>
        <div>
          <h2>Login</h2>
        </div>
        <div className="camposLogin">
          <input className="camposInput" type="email" placeholder="Digite seu e-mail" value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          <input className="camposInput" type="password" placeholder="Digite sua senha" value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button className="botao" type="submit">Entrar</button>
        <p>Não possui conta? <Link className="registrar" to="/registrar/">Registre-se</Link></p>
      </form>
      <div>
        {/* <AuthDetails></AuthDetails> */}
      </div>
    </div>
  );
};

export default SignIn;