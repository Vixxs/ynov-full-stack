import { InputComponent, ButtonComponent } from "my-lib-ui";
import type { NextPage } from "next";
import jwt_decode from 'jwt-decode';
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import {API} from "./api";

const Login: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = (event : Event) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const username = data.get("username");
    const password = data.get("password");
    axios.post(API.LOGIN, { username, password }).then((response) => {
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        const decoded = jwt_decode(token);
        if (decoded.roles.includes("ROLE_ADMIN")) {
          router.push("/admin");
        }
        else {
          setError("Vous n'avez pas les droits d'accès");
        }
      }
    }).catch(() => {
      setError("Identifiant ou mot de passe incorrect");
    });
  }

  return (
    <div id="login">
      <HeadComponent />
      <HeaderComponent />
      <div className="login-page">
          <main>
            <div className="login-box">
              <a className="button-goback" href="javascript:history.back()">
                ← retour
              </a>
              <form onSubmit={handleSubmit} className="login-form" action="">
                <p className="label-login">CONNEXION</p>
                <div>
                  {error && <p className="error">{error}</p>}
                  <InputComponent label="identifiant" name="username" type="text"/>
                  <InputComponent label="mot de passe" name="password" type="password"/>
                  <ButtonComponent label="Connexion" className="login-button"/>
                </div>            
              </form>
            </div>
          </main>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Login;
