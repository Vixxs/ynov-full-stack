import type { NextPage } from "next";
import Datatable from "my-lib-ui";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";

const data = [
  {
  status: true,
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
  status: true,
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
  status: false,
  firstName: "Sophie",
  lastName: "Jones",
  email: "sophiejones@gmail.com",
  phone: "555-555-5560",
  nationality: "French"
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
  status: false,
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
  ]

const Admin: NextPage = () => {
  const router = useRouter();
  return (
    <div id="login">
      <HeadComponent />
      <HeaderComponent />
      <div className="login-page">
          <main>
            <div className="login-box">
              <a className="button-goback" href="javascript:history.back()">
                ← retour
              </a>
              <Datatable data={data}/>
            </div>
          </main>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Admin;
