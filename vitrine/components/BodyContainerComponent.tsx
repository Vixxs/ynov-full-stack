import { InputComponent } from "my-lib-ui";

const BodyContainerComponent: React.FC = () => {
  return (
    <div id="body-container">
      <article>
        <h2>En-tête d'article</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>Sous-section</h3>
        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>
        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Autre sous-section</h3>
        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>
        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>
      <article>
        <h2>Prise de contacte</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error
          rem amet sint porro facilis obcaecati beatae voluptates ad, laudantium
          laborum est quam, dolor nihil aliquid temporibus nulla unde aliquam!
        </p>
        <form method="post">
          <label htmlFor="email">E-mail</label>
          <InputComponent
            id="email"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <InputComponent
            type="password"
            id="password"
            name="password"
            pattern="[0-9a-zA-Z]{6,}$"
            required
          />
          <InputComponent type="submit" value="Valider" />
          <InputComponent type="reset" value="Annler" />
        </form>
      </article>
    </div>
  );
};

export default BodyContainerComponent;
