//Import JS modules
import showProfileHome from "./showProfileHome.js";
import * as boutonPac from "./boutonPaC.js";
import filterHome from "./filterHome.js";

getHomeData();
function getHomeData() {
  //Fetch JSON & construct page
  fetch("./DATA/FishEyeDataFR.json")
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
}
