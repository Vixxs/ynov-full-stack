import type {NextPage} from "next";
import React, {useState} from "react";
import axios from "axios";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import {ButtonComponent, CheckboxComponent, InputComponent, RadioButtonComponent, SelectComponent} from "my-lib-ui";
import {API} from "../utils/api";
import RegisterComponent from "../components/RegisterComponent";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [register, setRegister] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data = new FormData(e.target);
    axios
      .post(
        API.INSCRIPTION,
        {
          lastname: data.get("lastname"),
          firstname: data.get("firstname"),
          email: data.get("email"),
          phoneNumber: data.get("phoneNumber"),
          nationality: data.get("nationality"),
        }
      ).then((res) => {
      setMessage(res.data.message);
      if (res.data.created === true) {
        setRegister(true);
      }
    })
  };

  const checkForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(!e.target.checked);
  };


  return (
    <>
      <HeadComponent/>
      <HeaderComponent/>
      <main>
        <div className="home-banner">
          <img src="/bg.png" className="home-bg" alt="Background"/>
          <p className="info-box">
            Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris,
            Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour
            répondre à toutes vos demandes
          </p>
        </div>
        <form className="home-form" onSubmit={handleSubmit}>
          <h1>Inscription</h1>
          {
            register ? (
              <RegisterComponent/>
            ) : (
              <>
                <div className="message">{message}</div>
                <p>Je suis :</p>
                <div className="radio-box">
                  <RadioButtonComponent name="situation" label="une entreprise" id="radio-entreprise"/>
                  <RadioButtonComponent name="situation" label="un particulier" id="radio-particulier"/>
                </div>
                <div className="input-box">
                  <InputComponent name="lastname" label="Nom" type={"text"} placeholder="Votre nom"/>
                  <InputComponent name="firstname" label="Prénom" type={"text"} placeholder="Votre prénom"/>
                  <InputComponent name="email" label="Email" type={"text"} placeholder="Votre email"/>
                  <InputComponent name="phoneNumber" label="Numéro de téléphone" type={"tel"}
                                  placeholder="Votre numéro de téléphone"/>
                  <SelectComponent name="nationality" label="Nationnalité">
                    <option value="">Selectionner une valeur</option>
                    <option value="france">France</option>
                    <option value="belgique">Belgique</option>
                    <option value="suisse">Suisse</option>
                  </SelectComponent>
                </div>
                <CheckboxComponent onClick={checkForm} className="permis-checkbox" id="permis-checkbox"
                                   label="J'atteste que je possède le permis de conduire valide."/>
                <ButtonComponent name="submit" className="home-form-submit" type="submit"
                                 label="Demander mon inscription" disabled={disabled}/>
              </>
            )
          }
        </form>
      </main>
      <FooterComponent/>
    </>
  );
};

export default Home;
