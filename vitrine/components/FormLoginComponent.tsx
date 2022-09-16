import { InputComponent } from "my-lib-ui";

const FormLoginComponent: React.FC = () => {
  return (
    <form>
      <label>Email</label>
      <InputComponent type="email" />
      <label>Mot de passe</label>
      <InputComponent type="password" />
      <InputComponent type="submit" value="Valider" />
      <InputComponent type="reset" value="Reset" />
    </form>
  );
};

export default FormLoginComponent;
