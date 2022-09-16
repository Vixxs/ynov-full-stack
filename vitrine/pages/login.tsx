import type { NextPage } from "next";
import { useRouter } from "next/router";
import FormLoginComponent from "../components/FormLoginComponent";
import HeadComponent from "../components/HeadComponent";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <main>
        <FormLoginComponent />
      </main>
      <footer>
        <button onClick={() => router.push("/")}>
          Retour à la page d'acceuil
        </button>
      </footer>
    </div>
  );
};

export default Login;
