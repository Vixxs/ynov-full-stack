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
        <section className="home-form">
          <h1>Inscription</h1>
          <div className="inscription-confirmation-box">
            <p className="home-form-p">Votre demande d’inscription a bien été prise en compte.
              <br/>
              Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.
            </p>
            <div className="app-box">
              <img src="/app-store.png" alt="app store" />
              <img src="/google-play.png" alt="google play" />
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
