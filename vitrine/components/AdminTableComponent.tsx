import React from "react";
import UserTable from "./UserTable";
import CarTable from "./CarTable";

const AdminTableComponent = () => {
  const [active, setActive] = React.useState("user");

  return (<>
    <div className="admin-container">
      <h1>GESTION BACK-OFFICE</h1>
      <div className="admin-menu">
        <span  className={active === "user" ? "active" : ""}  onClick={() => setActive("user")}>Liste des utilisateur inscrits</span>
        <span className={active === "car" ? "active" : ""} onClick={() => setActive("car")}>Liste des voitures</span>
      </div>
      {active === "user" && <UserTable />}
      {active === "car" && <CarTable />}
    </div>
  </>);
}

export default AdminTableComponent;