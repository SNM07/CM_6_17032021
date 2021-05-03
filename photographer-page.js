// Import JS modules
import contactFormModule from "./JS/PhotographerPage/contactForm.js";
import showProfilePP from "./JS/PhotographerPage/showProfilePP.js";
import * as showGallery from "./JS/PhotographerPage/showGallery.js";
import * as priceGlobalLikes from "./JS/PhotographerPage/priceGlobalLikes.js";
import emailJSParam from "./JS/PhotographerPage/emailJSParam.js";
import setAriaContactButton from "./JS/PhotographerPage/ariaContactButton.js";
import changePageTitle from "./JS/PhotographerPage/changePageTitle.js";
import * as sortAndFilterParam from "./JS/PhotographerPage/lgSortFilterParam.js";
import * as scrollTop from "./JS/PhotographerPage/scrollTop.js";

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
    sortAndFilterParam.creatBR();
    //sortAndFilterParam.sortOut();
    sortAndFilterParam.setTabIndex();
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
