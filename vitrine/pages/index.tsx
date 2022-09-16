import { ExampleComponent } from "my-lib-ui";
import type { NextPage } from "next";
import AsideComponent from "../components/AsideComponent";
import BodyContainerComponent from "../components/BodyContainerComponent";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import ModalCookieComponent from "../components/ModalCookieComponent";
import NavComponent from "../components/NavComponent";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <NavComponent />
      <main>
        <BodyContainerComponent />
        <AsideComponent />
      </main>
      <FooterComponent />
      <ModalCookieComponent />
      <ExampleComponent text="Hello world" />
    </div>
  );
};

export default Home;
