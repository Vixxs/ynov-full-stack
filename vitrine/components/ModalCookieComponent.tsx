import { useEffect, useState } from "react";

const ModalCookieComponent: React.FC = () => {
  const [hide, setHide] = useState<boolean>(true);

  const saveCookie = () => {
    localStorage.setItem("cookie-accepted", "true");
    setHide(true);
  };

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookie-accepted");
    if (!cookieAccepted) {
      setHide(false);
    }
  }, []);

  return (
    <div className={`modal-cookie  ${hide ? "hide" : ""}`}>
      <div className="body">
        <h1>Les cookies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem,
          fuga eveniet debitis cum velit iure consequuntur culpa reiciendis
          nesciunt esse? Commodi, doloribus eum fugit ab enim aut quasi iusto
          natus tempore beatae dolores, ipsa tempora quae maxime. Consequuntur
          minus corrupti quo ducimus earum iste molestias repudiandae
          consequatur beatae quis, iusto necessitatibus ad. Repellendus, nihil
          dolor necessitatibus minima a neque ex delectus quibusdam dolore
          voluptas enim vitae magnam quisquam modi quos esse at sapiente ut
          blanditiis, ad, optio officia? Natus sunt quo labore quis nulla eius
          nisi expedita dicta corrupti inventore, incidunt ipsam sit doloremque
          tempora? Quaerat modi tempore eos?
        </p>
        <button id="accept-cookie" onClick={() => saveCookie()}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ModalCookieComponent;
