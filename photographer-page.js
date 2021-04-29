// Import JS modules
import contactFormModule from "./JS/contactForm.js";
import showProfilePP from "./JS/showProfilePP.js";
import * as showGallery from "./JS/showGallery.js";
import priceGlobalLikes from "./JS/priceGlobalLikes.js";
import emailJSParam from "./JS/emailJSParam.js";
import setAriaContactButton from "./JS/ariaContactButton.js";
import changePageTitle from "./JS/changePageTitle.js";
import sortAndFilterParam from "./JS/lgSortFilterParam.js";
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
  const br = document.createElement("br");
  let sec = document.getElementById('photoGallery');
  sec.appendChild(br);
  ////////////////////////////////
  /* let $foc = $(".is-checked");
  $foc.onmouseup = function() {
    console.log(foc);
    
  } */
  //$foc.one('focusin', function () { console.log("foc"); $(this).css({ 'background-color': '#901C1C !important', "color": "white !important" });});
  
  //$foc.one('mousedown', function () { console.log("foc"); $(this).css({ 'background-color': 'white', "color": "#901C1C" });});

  //$foc.one('mouseup', function () { blur() });

  //let $foc = $(".filtButtonPP");
  /* $foc.onfocusin = function () {
    console.log(foc);
    $foc.toggleClass("not-checked");
  } */
  /* let $check = $(".filtButtonPP");
  if ($check.hasClass("is-checked")) {
    $check.css({ 'background-color': '#901C1C', "color": "white" });
  } else {
    $check.css({ 'color': '#901C1C', "background-color": "white" });
  } */
  //$check.one('focusout', function () { console.log("foc"); $(this).css({ 'background-color': 'white', "color": "#901C1C" });});


  ////////////////
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
