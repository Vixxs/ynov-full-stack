import type {NextPage} from "next";
import {useRouter} from "next/router";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import {ButtonComponent} from "../.yalc/my-lib-ui";
import useAuth from "../hook/useAuth";

const Admin: NextPage = () => {
  const {isAdmin, loading} = useAuth();
  const router = useRouter();

  return (
    <>
      <HeadComponent/>
      <HeaderComponent/>
      <main id="admin">
        {
          loading ? (
            <p>Chargement...</p>
          ) : (
            <>
              {
                isAdmin ? (
                  <>
                    <div className="admin-container">
                      <h1>GESTION BACK-OFFICE</h1>
                      <div>
                        <div className="admin-menu">
                          <div>
                            <span className="admin-line"> </span>
                            <span className="active">Liste des utilisateur inscrits</span>
                            <span>Liste des véhicules</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="admin-container">
                    <h1>ACCES INTERDIT</h1>
                    <p>Vous n'avez pas les droits d'accès à cette page</p>
                    <ButtonComponent
                      label="Se connecter"
                      onClick={() => router.push('/login')}
                    />
                  </div>
                )
              }
            </>
          )
        }
      </main>
      <FooterComponent/>
    </>
  );
};

export default Admin;
