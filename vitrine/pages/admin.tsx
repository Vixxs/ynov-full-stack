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
            </div>
          </main>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Login;
