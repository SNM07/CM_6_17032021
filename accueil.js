//Import JS modules
import showProfileHome from "./JS/showProfileHome.js";
import * as profileFilter from "./JS/profileFilter.js";
import * as boutonPac from "./JS/boutonPaC.js";

//Fetch JSON & construct page
fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })
  .then((object) => {
    //Construct photographers profiles
    showProfileHome(object);
    //Filter features
    profileFilter.filterSelection("all");
    profileFilter.filterTagsButtons();
    profileFilter.filterTagsButtonsPP();
    //Scroll top features
    boutonPac.buttonPaC();
  });

//Filter features bis
profileFilter.filterSelection("all");
profileFilter.listener();
profileFilter.filterSelection();
