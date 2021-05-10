// Import JS modules
import contactFormModule from "./contactForm.js";
import showProfilePP from "./showProfilePP.js";
import * as showGallery from "./showGallery.js";
import * as priceGlobalLikes from "./priceGlobalLikes.js";
import emailJSParam from "./emailJSParam.js";
import setAriaContactButton from "./ariaContactButton.js";
import changePageTitle from "./changePageTitle.js";
import * as sortAndFilterParam from "./lgSortFilterParam.js";
import * as scrollTop from "./scrollTop.js";

getPPData();
function getPPData() {
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
      priceGlobalLikes.priceGlobalLikes();
      //Configuration of sorting and filtering features
      sortAndFilterParam.sortAndFilterParam();
      //Change page title
      changePageTitle();
      //Scroll top features for header
      window.onscroll = function () {
        scrollTop.scrollFunction();
      };
      window.addEventListener("scroll", function () {
        scrollTop.scrollUpDown();
      });
      //Add photo likes to global likes popup
      priceGlobalLikes.addLikeToGlobalLikes();
    });
}

//Scroll to the top of the document
document
  .getElementById("contentButton2")
  .addEventListener("click", function () {
    scrollTop.topFunction2();
  });
//EmailJS parameters
window.onload = emailJSParam();
//Custom selectbox init
customSelect("select");
