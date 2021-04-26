// Import JS modules
import contactFormModule from "./JS/contactForm.js";
import showProfilePP from "./JS/showProfilePP.js";
import * as showGallery from "./JS/showGallery.js";
import priceGlobalLikes from "./JS/priceGlobalLikes.js";
import emailJSParam from "./JS/emailJSParam.js";
import setAriaContactButton from "./JS/ariaContactButton.js";
import changePageTitle from "./JS/changePageTitle.js";
import sortAndFilterParam from "./JS/sortAndFilterParam.js";
import * as scrollTop from "./JS/scrollTop.js";

//Custom selectbox init
const mySelects = customSelect("select");

// Fetch JSON and construct page
fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })
  .then((object) => {
    //Construct photographer profile
    showProfilePP(object);
    //Construct photographer gallery
    showGallery.showGallery(object);
    //Construct contact form
    contactFormModule();
    //Set aria-label of contact button
    setAriaContactButton();
    //Construct fixed popup with photographer fees and global likes
    priceGlobalLikes();
    //Configuration of sorting and filtering features
    sortAndFilterParam();
    //Change page title
    changePageTitle();
    //Scroll top features for header
    window.onscroll = function () {
      scrollTop.scrollFunction();
    };
    window.addEventListener("scroll", function () {
      scrollTop.scrollUpDown();
    });
  });

//Scroll to the top of the document
document
  .getElementById("contentButton2")
  .addEventListener("click", function () {
    scrollTop.topFunction2();
  });
//EmailJS parameters
window.onload = emailJSParam();
