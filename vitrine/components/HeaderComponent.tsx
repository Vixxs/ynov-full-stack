import Head from "next/head";
import { ButtonComponent } from "my-lib-ui";

const HeaderComponent: React.FC = () => {
  return (
    <header>
      <div onClick={() => window.location.assign('/')} className="logo-box">
        <img src="/logo-header.png" alt="Logo" />
        <span>RIDE</span>
      </div>
      <ButtonComponent label="Connexion admin" onClick={() => window.location.assign('/admin')} />
    </header>
  );
};

export default HeaderComponent;
