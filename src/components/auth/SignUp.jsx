import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../fisebase";
import "./style.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-container">
      <form onSubmit={signUp}>
        <h2>Cadastro</h2>

        <div className="camposLogin">
          <input className="camposInput mb-20" type="email" placeholder="Digite seu e-mail" value={email} 
          onChange={(e) => setEmail(e.target.value)}></input>

          <input className="camposInput" type="password" placeholder="Criar senha" value={password}
            onChange={(e) => setPassword(e.target.value)}></input>

          <input className="camposInput" type="password" placeholder="Confirmar senha"></input>
        </div>
        
        <button className="botao" type="submit">Criar</button>
        <p className="possuiConta">Possui uma conta?<Link className="registrar" to="/login/">Ir para login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;