import type {NextPage} from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import {UserTableComponent} from "../.yalc/my-lib-ui";
import {API} from "./api";
import useAuth from "../hook/useAuth";


const Admin: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });
 // redirect if not admin
  return (
    <>
      <main id="admin">
        <h1>GESTION BACK-OFFICE</h1>
        <div>
          <div>
            <span>Liste des utilisateur inscrits</span>
            <span>Liste des véhicules</span>
          </div>
        </div>
        {/*<UserTableComponent data={data} />*/}
      </main>
      <FooterComponent/>
    </>
  );
};

export default Admin;
