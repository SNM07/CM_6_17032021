// Import JS modules
import contactFormModule from "./JS/contactForm.js";
import showProfilePP from "./JS/showProfilePP.js";
import * as showGallery from "./JS/showGallery.js";
import priceGlobalLikes from "./JS/priceGlobalLikes.js";
import emailJSParam from "./JS/emailJSParam.js";
import setAriaContactButton from "./JS/ariaContactButton.js";
import changePageTitle from "./JS/changePageTitle.js";
import * as sortAndFilterParam from "./JS/lgSortFilterParam.js";
import * as scrollTop from "./JS/scrollTop.js";

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
    sortAndFilterParam.sortAndFilterParam();
    sortAndFilterParam.creatBR();
    sortAndFilterParam.sortOut();
    //Change page title
    changePageTitle();
    //Scroll top features for header
    window.onscroll = function () {
      scrollTop.scrollFunction();
    };
    window.addEventListener("scroll", function () {
      scrollTop.scrollUpDown();
    });

    $(".checkHeart").change(function () {
      let globalLikesString = $(".globLikes").html();
      let globalLikes = parseInt(globalLikesString);
      let myGlobLikes = $(".globLikes");

      let plusLikes = globalLikes + 1;
      let moinsLikes = globalLikes - 1;

      if (this.checked) {
        myGlobLikes.text(plusLikes);
      } else {
        myGlobLikes.text(moinsLikes);
      }
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
//Custom selectbox init
customSelect("select");
