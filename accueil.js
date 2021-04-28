//Import JS modules
import showProfileHome from "./JS/showProfileHome.js";
import * as boutonPac from "./JS/boutonPaC.js";
import filterHome from "./JS/filterHome.js";

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

