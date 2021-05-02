export default function setAriaContactButton() {
    const ariaContact = document.getElementsByClassName("contactFormButton");
    const thisPhotographerName = document.getElementsByClassName(
      "profileName"
    );
    let u = thisPhotographerName[0].innerHTML;
    ariaContact[0].setAttribute("aria-label", "Contact me " + u);
  }