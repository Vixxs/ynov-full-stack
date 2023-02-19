import React from "react";
import { ButtonComponent, InputComponent } from 'my-lib-ui';
import background from '../../../assets/bg.png';
import logo from '../../../assets/logo.png';
import Menu from "../components/menu";
import Card from "../components/card";

const List: React.FC = () => {
  return (
    <div className="h-screen p-4">
      <header className="mb-4">
        <Menu />
      </header>
      <h1 className="font-[800] text-[36px] tracking-wide">Nos véhicules</h1>
      <p className="text-sm leading-1">Choisissez un véhicule pour consulter les détails du modèle et les tarifs.</p>
      <div className="flex flex-row gap-4 mt-6">
        <Card name="Renault Clio" price={12} image="https://usine-a-sites.s3-eu-west-1.amazonaws.com/apfr/Images/LP/haut11.jpg">
          <ButtonComponent className="w-full" label="Voir le véhicule" />
        </Card>
      </div>
    </div>
  );
};

export default List;
