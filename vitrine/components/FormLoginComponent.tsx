const FormLoginComponent: React.FC = () => {
  return (
    <form>
      <label>Email</label>
      <input type="email" />
      <label>Mot de passe</label>
      <input type="password" />
      <input type="submit" value="Valider" />
      <input type="reset" value="Reset" />
    </form>
  );
};

export default FormLoginComponent;
