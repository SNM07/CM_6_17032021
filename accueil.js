import showProfileHome from "./JS/showProfileHome.js";
import * as profileFilter from "./JS/profileFilter.js";
import * as boutonPac from "./JS/boutonPaC.js";

/* //Construction of profile cards
function showProfile(obj) {
  //Get JSON data
  const photog = obj["photographers"];

  for (let i = 0; i < photog.length; i++) {
    //Create elements
    const myArticle = document.createElement("article");
    const myImg = document.createElement("img");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myTags = document.createElement("div");
    const myProfContainer = document.createElement("div");

    //Article attributes
    myArticle.setAttribute("class", "profileCard");
    myArticle.dataset.dataid = photog[i].id;

    //Images attributes
    myImg.setAttribute("class", "profilePic");
    myImg.setAttribute("alt", photog[i].name + " profile picture");
    myImg.src = "./images/Photographers-ID-Photos/" + photog[i].portrait;

    //Name attributes
    myH2.setAttribute("class", "profileName");
    myH2.textContent = photog[i].name;

    //Location attributes
    myPara1.setAttribute("class", "profileLocation");
    myPara1.textContent = photog[i].city + ", " + photog[i].country;

    //Tagline attributes
    myPara2.setAttribute("class", "profileTagline");
    myPara2.textContent = photog[i].tagline;

    //Price attributes
    myPara3.setAttribute("class", "profilePrice");
    myPara3.textContent = photog[i].price + "€/jour";

    //Tags attributes & generation
    myTags.setAttribute("class", "profileTags");
    const catTags = photog[i].tags;
    for (let j = 0; j < catTags.length; j++) {
      const listTagsCont = document.createElement("button");
      listTagsCont.setAttribute("class", "listTagsCont");
      listTagsCont.setAttribute("data-tagslist", catTags[j]);
      listTagsCont.setAttribute("aria-label", catTags[j]);
      listTagsCont.setAttribute(
        "onclick",
        "filterSelection(this.getAttribute('data-tagslist'))"
      );
      const listTags = document.createElement("span");
      listTags.setAttribute("class", "tagsli");
      listTags.textContent = "# " + catTags[j];
      listTagsCont.appendChild(listTags);
      myTags.appendChild(listTagsCont);
      const profileCardClass = "profileCard";
      myArticle.setAttribute(
        "class",
        profileCardClass + " " + catTags.join(" ")
      );
    }

    //Redirect container attributes
    myProfContainer.setAttribute("class", "profileContainer");
    myProfContainer.setAttribute("tabindex", "0");
    myProfContainer.setAttribute("title", photog[i].name + " card");
    let myRedirect =
      "location.href=" +
      "'" +
      "./photographer-page.html" +
      "?id=" +
      photog[i].id +
      "'";
    myProfContainer.setAttribute("onclick", myRedirect);

    //Append elements
    myArticle.appendChild(myProfContainer);
    myProfContainer.appendChild(myImg);
    myProfContainer.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myTags);

    profiles.appendChild(myArticle);
  }
} */

//Fetch JSON & construct page
fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })

  .then((object) => {
    
    showProfileHome(object);

    profileFilter.filterSelection("all");

    profileFilter.filterTagsButtons();

    profileFilter.filterTagsButtonsPP();

    boutonPac.buttonPaC();
    
  });

profileFilter.filterSelection("all");
  
profileFilter.listener();
profileFilter.filterSelection();
profileFilter.profAddClass();
profileFilter.profRemoveClass();
profileFilter.filterTagsButtons();
profileFilter.filterTagsButtonsPP();

boutonPac.buttonPaC();
boutonPac.getScroll();
boutonPac.scrollTop();
boutonPac.topFunction();

/* //Profiles Filter
document.getElementById("all").addEventListener("click", function(){
  filterSelection("all")});
document.getElementById("portrait").addEventListener("click", function () {
  filterSelection("portrait")
});
document.getElementById("art").addEventListener("click", function(){
  filterSelection("art")
});
document.getElementById("fashion").addEventListener("click", function(){
  filterSelection("fashion")
});
document.getElementById("architecture").addEventListener("click", function(){
  filterSelection("architecture")
});
document.getElementById("travel").addEventListener("click", function(){
  filterSelection("travel")
});
document.getElementById("sport").addEventListener("click", function(){
  filterSelection("sport")
});
document.getElementById("animals").addEventListener("click", function(){
  filterSelection("animals")
});
document.getElementById("events").addEventListener("click", function(){
  filterSelection("events")});



function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("profileCard");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

  for (i = 0; i < x.length; i++) {
    profRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) profAddClass(x[i], "show");
  }
}

// Show filtered elements (filterSelection dependency)
function profAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected  (filterSelection dependency)
function profRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
 */


/* //Filter tags buttons
function filterTagsButtons() {
  var btnContainer = document.getElementById("filterButtons");

  var btns = btnContainer.getElementsByClassName("filterButton");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
} */

/* document.getElementsByClassName("listTagsCont").addEventListener("click",
profileFilter.filterSelection(this.getAttribute('data-tagslist')));
) */

/* document.getElementsByClassName("listTagsCont").addEventListener("click",
  profileFilter.filterSelection()); */

/* //Filter tags button in profile cards
function filterTagsButtonsPP() {

  var btns = document.getElementsByClassName("listTagsCont");
  var btnContainer = document.getElementById("filterButtons");

  var btnsUP = btnContainer.getElementsByClassName("filterButton");
  console.log(btnsUP)

  for (var i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener("click", function () {
      var btnsUP = btnContainer.getElementsByClassName("filterButton");
  console.log(btnsUP)
      var current = document.getElementsByClassName("active");
      console.log(current)
      current[0].className = current[0].className.replace(" active", "");
      btnsUP.className += " active";
    });
  }
} */

/* //Passer au contenu button
function buttonPaC() {
  const body = document.body;

  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      body.classList.remove(scrollDown);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

  //Get the button:
  let mybutton = document.getElementById("contentButton");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  mybutton.addEventListener("click", function(){
    topFunction()});
  
  //document.getElementById("contentButton").onclick = topFunction();
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
    profileFilter.filterSelection("all");
  }
}

 */