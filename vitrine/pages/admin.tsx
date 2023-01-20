import type {NextPage} from "next";
import {useRouter} from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";

const Admin: NextPage = () => {
  return (
    <>
      <HeadComponent/>
      <HeaderComponent/>
      <main>
        <h1>GESTION BACK-OFFICE</h1>
        <div>
        </div>
      </main>
      <FooterComponent/>
    </>
  );
};

export default Admin;
