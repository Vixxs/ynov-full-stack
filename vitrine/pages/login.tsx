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
                ← retour
              </a>
              <form className="login-form" action="">
                <p className="label-login">CONNEXION</p>
                <div>
                  <InputComponent label="identifiant" type="text"/>
                  <InputComponent label="mot de passe" type="password"/>
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
