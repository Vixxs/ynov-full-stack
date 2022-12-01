import { InputTextComponent, ButtonComponent } from "my-lib-ui";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <div className="login-page">
        <div className="login-box">
            <main>
              <form className="login-form" action="">
                <p>CONNEXION</p>
                <div>
                  <InputTextComponent label="identifiant" type="text"/>
                  <InputTextComponent label="mot de passe" type="password"/>
                  <ButtonComponent label="Connexion" customClass="login-button"/>
                </div>            
              </form>
            </main>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Login;
