//Construct photographer profile
function showProfilePP(obj) {
  let profURL = window.location.search.substr(4);

  //Get JSON data
  const photog = obj["photographers"];

  //Map JSON data
  const profilID = photog.map((photog) => photog.id);

  //Contact button construction
  contactButton();

  //Profile construction
  for (let i = 0; i < photog.length; i++) {
    createProfilePP(i, photog, profilID, profURL);
  }
}

//Contact button construction
function contactButton() {
  const myContactContainer = document.createElement("div");
  const myContact = document.createElement("button");
  const contactText = document.createTextNode("Contactez-moi");
  myContactContainer.setAttribute("class", "contactFormButton");
  myContactContainer.setAttribute("alt", "Contact me");
  myContact.setAttribute("class", "modal-btn");
  myContact.appendChild(contactText);
  myContactContainer.appendChild(myContact);
  profilesPP.appendChild(myContactContainer);
}

//Profile construction
function createProfilePP(i, photog, profilID, profURL) {
  let x = profilID[i];
  let y = profURL;

  if (x == y) {
    //Create elements
    const myArticle = document.createElement("article");
    const myImg = document.createElement("img");
    const myH1 = document.createElement("h1");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myTags = document.createElement("div");

    //Card attributes
    myArticle.setAttribute("class", "profileCardPP");

    //Image attributes
    myImg.setAttribute("class", "profilePic");
    myImg.setAttribute("alt", photog[i].name + " profile picture");
    myImg.src = "./images/Photographers-ID-Photos/" + photog[i].portrait;

    //Name attributes
    myH1.setAttribute("class", "profileName");
    myH1.textContent = photog[i].name;

    //Location attributes
    myPara1.setAttribute("class", "profileLocation");
    myPara1.textContent = photog[i].city + ", " + photog[i].country;

    //Tagline attributes
    myPara2.setAttribute("class", "profileTagline");
    myPara2.textContent = photog[i].tagline;

    //Price attributes
    myPara3.setAttribute("class", "profilePrice");
    myPara3.textContent = photog[i].price + "€/jour";

    //Tags attributes
    myTags.setAttribute("class", "profileTags");
    const catTags = photog[i].tags;
    for (let j = 0; j < catTags.length; j++) {
      const listTags = document.createElement("button");
      listTags.title = catTags[j];
      listTags.classList.add("filtButtonPP");
      listTags.setAttribute("data-filter", "." + catTags[j]);
      listTags.setAttribute("tabindex", "0");
      listTags.textContent = "# " + catTags[j];
      myTags.appendChild(listTags);
      const profileCardClass = "profileCardPP";
      myArticle.setAttribute(
        "class",
        profileCardClass + " " + catTags.join(" ")
      );
    }

    //Append Elements
    myArticle.appendChild(myImg);
    myArticle.appendChild(myH1);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myTags);

    profilesPP.appendChild(myArticle);
  }
}

//Export function
export { showProfilePP as default };
