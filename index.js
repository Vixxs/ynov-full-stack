document.addEventListener("DOMContentLoaded", () => {
  console.log("document is ready");
  /** */
  console.log(window);
  console.log(navigator);
  console.log(document);
  /** */
  console.log(window.location.href);
  console.log(navigator.language);
  console.log(document.getElementsByClassName("fade-in-image"));
  /** */

  const imgDoc = document.getElementsByClassName("fade-in-image")[0];
  console.log(imgDoc);
  console.log(imgDoc.children[0].src);
  imgDoc.classList = [];

  imgDoc.addEventListener("mouseenter", () => {
    imgDoc.classList.add("fade-in-image");
  });
  imgDoc.addEventListener("mouseleave", () => {
    imgDoc.classList.remove("fade-in-image");
  });

  const cookieAccepted = localStorage.getItem("cookie-accepted");
  const modal = document.getElementsByClassName("modal-cookie")[0];
  if (!cookieAccepted) {
    modal.classList.remove("hide");
  }
  const btnAcceptedCookie = document.getElementById("accept-cookie");
  btnAcceptedCookie.addEventListener("click", () => {
    modal.parentNode.removeChild(modal);
    localStorage.setItem("cookie-accepted", true);
  });
});
