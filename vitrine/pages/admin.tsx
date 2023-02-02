import type {NextPage} from "next";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import axios from "axios";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import {ButtonComponent, UserTableComponent} from "../.yalc/my-lib-ui";
import useAuth from "../hook/useAuth";
import {API} from "./api";

const Admin: NextPage = () => {
  const {isAdmin, isLoading, token} = useAuth();
  const [futureUsers, setFutureUsers] = useState([]);
  const router = useRouter();

  const fetchFutureUsers = () => {
    axios.get(API.FUTURE_USERS,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
          setFutureUsers(response.data);
        }
      );
  }

  useEffect(() => {
    if (!token) return;
    fetchFutureUsers();
  }, [token]);

  const handleValidate = (data) => {
    if (!token) return;
    axios.get(API.VALIDATION +`/${data.id}`
      , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(() => {
        fetchFutureUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <HeadComponent/>
      <HeaderComponent/>
      <main id="admin">
        {
          isLoading ? (
            <p>Chargement...</p>
          ) : (
            <>
              {
                isAdmin ? (
                  <>
                    <div className="admin-container">
                      <h1>GESTION BACK-OFFICE</h1>
                      <div className="admin-menu">
                        <span className="admin-line"> </span>
                        <span className="active">Liste des utilisateur inscrits</span>
                        <span>Liste des véhicules</span>
                      </div>
                      <UserTableComponent onValidate={handleValidate} data={futureUsers}/>
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
