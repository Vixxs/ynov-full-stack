import { InputComponent, ButtonComponent } from "my-lib-ui";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div id="login">
      <HeadComponent />
      <HeaderComponent />
      <div className="login-page">
          <main>
            <div className="login-box">
              <a className="button-goback" href="javascript:history.back()">
                retour
              </a>
              <form className="login-form" action="">
                <p className="label-login">Connexion</p>
                <div className="login-input-box">
                  <InputComponent label="Identifiant" type="text"/>
                  <InputComponent label="Mot de passe" type="password"/>
                </div>      
                <ButtonComponent label="Connexion" className="login-button"/>
              </form>
            </div>
          </main>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Login;
