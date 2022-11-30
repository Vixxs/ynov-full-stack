import Head from "next/head";
import { ButtonComponent } from "my-lib-ui";

const onClick = (e: any) => {
  window.location.assign('/admin');
}

const HeaderComponent: React.FC = () => {
  return (
    <header>
      <div className="logo-box">
        <img src="/logo-header.png" alt="Logo" />
        <span>RIDE</span>
      </div>
      <ButtonComponent label="Connexion admin" onClick={onClick} />
    </header>
  );
};

export default HeaderComponent;
