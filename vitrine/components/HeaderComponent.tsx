import {ButtonComponent} from "my-lib-ui";

const onClick = () => {
  window.location.assign('/login');
}

const HeaderComponent: React.FC = () => {
  return (
    <header>
      <a className="logo-box" href="/">
        <img src="/logo-header.png" alt="Logo"/>
        <span>RIDE</span>
      </a>
      <ButtonComponent label="Connexion admin" onClick={onClick}/>
    </header>
  );
};

export default HeaderComponent;
