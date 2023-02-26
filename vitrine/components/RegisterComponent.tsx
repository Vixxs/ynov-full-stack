const FooterComponent: React.FC = () => {
  return (
    <div id="register-container">
      <p>Votre demande d’inscription a bien été prise en compte.<br/>
        Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.</p>
      <a download={true} href="/setup/Ride%20Setup%204.6.0.exe">
        <img src="/app-store.png" alt="App Store"/>
        <img src="/play-store.png" alt="Google Play"/>
      </a>
    </div>
  );
};

export default FooterComponent;
