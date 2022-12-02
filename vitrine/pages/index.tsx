import { ButtonComponent, CheckboxComponent, InputComponent, RadioButtonComponent, SelectComponent } from "my-lib-ui";
import type { NextPage } from "next";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <main>
        <div className="home-banner">
          <img src="/bg.png" className="home-bg" alt="Background" />
          <p className="info-box">
            Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour répondre à toutes vos demandes
          </p>
        </div>
        <form className="home-form" action="">
          <h1>Inscription</h1>
          <p>Je suis :</p>
          <div className="radio-box">
            <RadioButtonComponent label="une entreprise" id="radio-entreprise"/>
            <RadioButtonComponent label="une particulier" id="radio-particulier"/>
          </div>
          <div className="input-box">
            <InputComponent label="Nom" type={"text"} placeholder="Votre nom" />
            <InputComponent label="Prénom" type={"text"} placeholder="Votre prénom" />
            <InputComponent label="Email" type={"text"} placeholder="Votre email" />
            <InputComponent label="Numéro de téléphone" type={"tel"} placeholder="Votre email" />
            <SelectComponent label="Nationnalité">
              <option value="">Selectionner une valeur</option>
            </SelectComponent>
          </div>
          <CheckboxComponent className="permis-checkbox" id="permis-checkbox" label="J'atteste que je possède le permis de conduire valide." />
          <ButtonComponent className="home-form-submit" type="submit" label="Demander mon inscription"/>
        </form>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
