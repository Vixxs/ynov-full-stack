import type {NextPage} from "next";
import {useRouter} from "next/router";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import {ButtonComponent} from "../.yalc/my-lib-ui";
import useAuth from "../hook/useAuth";
import AdminTableComponent from "../components/AdminTableComponent";

const Admin: NextPage = () => {
  const {isAdmin, isLoading} = useAuth();
  const router = useRouter();

  return (
    <>
      <HeadComponent/>
      <HeaderComponent/>
      <main id="admin">
        {
          isLoading ? (
            <p>Chargement...</p>
          ) : (<>{
            isAdmin ? (
              <AdminTableComponent/>
            ) : (
              <div className="admin-container">
                <h1>ACCES INTERDIT</h1>
                <p>Vous n'avez pas les droits d'accès à cette page</p>
                <ButtonComponent
                  label="Se connecter"
                  onClick={() => router.push('/login')}
                />
              </div>
            )}
          </>)}
      </main>
      <FooterComponent/>
    </>
  );
};

export default Admin;
