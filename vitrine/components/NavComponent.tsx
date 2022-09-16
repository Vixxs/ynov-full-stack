import { useRouter } from "next/router";

const NavComponent: React.FC = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("login");
  };
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">L'équipe</a>
        </li>
        <li>
          <a href="#">Projets</a>
        </li>
        <li>
          <a href="#" onClick={handleClick}>
            Login
          </a>
        </li>
      </ul>
      <form method="get">
        <input type="search" name="q" placeholder="Rechercher" />
        <input type="submit" value="Lancer !" />
      </form>
    </nav>
  );
};

export default NavComponent;
