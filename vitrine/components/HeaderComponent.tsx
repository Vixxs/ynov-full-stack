import {ButtonComponent} from "my-lib-ui";
import Link from 'next/link';

const onClick = () => {
  window.location.assign('/login');
}

const HeaderComponent: React.FC = () => {
  return (
    <header>
      <Link className="logo-box" href="/">
        <img src="/logo-header.png" alt="Logo"/>
        <span>RIDE</span>
      </Link>
      <ButtonComponent label="Connexion admin" onClick={onClick}/>
    </header>
  );
};

export default HeaderComponent;
