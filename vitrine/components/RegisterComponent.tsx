const FooterComponent: React.FC = () => {
  return (
    <div id="register-container">
      <p>Votre demande d’inscription a bien été prise en compte.<br/>
        Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.</p>
      <div>
        <img src="/app-store.png" alt="App Store"/>
        <img src="/play-store.png" alt="Google Play"/>
      </div>
    </div>
  );
};

export default FooterComponent;
