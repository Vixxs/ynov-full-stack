import { InputTextComponent } from "my-lib-ui";
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
      <main>
        <form className="home-form" action="">
            <p>CONNEXION</p>
            <div>
              <InputTextComponent label="identifiant" type="text"/>
              <InputTextComponent label="mot de passe" type="password"/>
            </div>            
          </form>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
