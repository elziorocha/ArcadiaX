import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../fisebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
        console.log("sign out successful");
      }).catch((error) => console.log(error));
  };

  return (
    <div className="texto_bemvindo">
      {authUser ? (<><p>{`Bem-vindo(a) de volta ${authUser.email}`}</p>
        <button className="botao_desvincular" onClick={userSignOut}>Desvincular conta</button></>) : (
        <p className="botao_desvincular">Conta desvinculada</p>)}
    </div>
  );
};

export default AuthDetails;