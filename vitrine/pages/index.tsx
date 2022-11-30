import { InputTextComponent, RadioButtonComponent, SelectComponent } from "my-lib-ui";
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
          <p>Je suis :</p>
          <div>
            <RadioButtonComponent label="une entreprise" id="radio-entreprise"/>
            <RadioButtonComponent label="une particulier" id="radio-particulier"/>
          </div>
          <InputTextComponent label="Email" placeholder="Votre email" />
          
        </form>

      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
