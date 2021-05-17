//Construction of profile cards
function showProfile(obj) {
  //Get JSON data
  const photog = obj["photographers"];
  //Create Profiles
  for (let i = 0; i < photog.length; i++) {
    createProfiles(i, photog);
  }
}

//Create Profile
function createProfiles(i, photog) {
  //Create elements
  const myArticle = document.createElement("article");
  const myImg = document.createElement("img");
  const myH2 = document.createElement("h2");
  const myPara1 = document.createElement("p");
  const myPara2 = document.createElement("p");
  const myPara3 = document.createElement("p");
  const myTags = document.createElement("div");
  //const myTagsList = document.createElement("div");
  const myProfContainer = document.createElement("div");

  //Article attributes
  myArticle.setAttribute("class", "profileCard");
  myArticle.classList.add("class", "all");
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
    listTagsCont.classList.add("class", "filterProfiles");
    listTagsCont.classList.add("class", catTags[j]);
    listTagsCont.setAttribute("data-filter", "." + catTags[j]);
    listTagsCont.setAttribute("aria-label", catTags[j]);
    const listTags = document.createElement("span");
    listTags.setAttribute("class", "tagsli");
    listTags.textContent = "# " + catTags[j];
    listTagsCont.appendChild(listTags);
    myTags.appendChild(listTagsCont);
    const profileCardClass = "profileCard";
    myArticle.setAttribute(
      "class",
      profileCardClass + " all " + catTags.join(" ")
    );
  }

  //Redirect container attributes
  myProfContainer.setAttribute("class", "profileContainer");
  myProfContainer.setAttribute("tabindex", "0");
  myProfContainer.setAttribute("title", photog[i].name + " card");
  let myRedirect =
    "window.location.href=" +
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

//Export function
export { showProfile as default };
