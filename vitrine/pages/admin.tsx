import type {NextPage} from "next";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import {UserTableComponent} from "../.yalc/my-lib-ui";


const Admin: NextPage = () => {
  const data = [
    {
      status: false,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phone: "555-555-5555",
      nationality: "American"
    },
    {
      status: false,
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@gmail.com",
      phone: "555-555-5556",
      nationality: "Canadian"
    },
    {
      status: false,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bobjohnson@gmail.com",
      phone: "555-555-5557",
      nationality: "British"
    },
    {
      status: false,
      firstName: "Emma",
      lastName: "Williams",
      email: "emmawilliams@gmail.com",
      phone: "555-555-5558",
      nationality: "Australian"
    },
    {
      status: true,
      firstName: "Michael",
      lastName: "Brown",
      email: "michaelbrown@gmail.com",
      phone: "555-555-5559",
      nationality: "German"
    },
    {
      status: true,
      firstName: "Jacob",
      lastName: "Garcia",
      email: "jacobgarcia@gmail.com",
      phone: "555-555-5561",
      nationality: "Spanish"
    },
    {
      status: true,
      firstName: "Isabella",
      lastName: "Miller",
      email: "isabellamiller@gmail.com",
      phone: "555-555-5562",
      nationality: "Italian"
    },
    {
      status: true,
      firstName: "Ethan",
      lastName: "Davis",
      email: "ethandavis@gmail.com",
      phone: "555-555-5563",
      nationality: "Dutch"
    }
  ];

  return (
    <>
      <HeadComponent/>
      <HeaderComponent/>
      <main id="admin">
        <h1>GESTION BACK-OFFICE</h1>
        <div>
          <div>
            <span>Liste des utilisateur inscrits</span>
            <span>Liste des véhicules</span>
          </div>
        </div>
        <UserTableComponent data={data} />
      </main>
      <FooterComponent/>
    </>
  );
};

export default Admin;
