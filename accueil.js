//Import JS modules
import showProfileHome from "./JS/HomePage/showProfileHome.js";
import * as boutonPac from "./JS/HomePage/boutonPaC.js";
import filterHome from "./JS/HomePage/filterHome.js";

//Fetch JSON & construct page
fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })
  .then((object) => {
    //Construct photographers profiles
    showProfileHome(object);
    //Filter features
    filterHome();
    //Scroll top features
    boutonPac.buttonPaC();
  });

