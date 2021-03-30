let profURL = window.location.search.substr(4);

console.log(profURL);

//import { contactFormModule } from "./contactForm.js";
import contactFormModule from "./contactForm.js";
    //contactFormModule();
    
//import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

//import SimpleLightbox from "./node-modules/simple-lightbox/src/simpleLightbox.js";

// !! ça c'est la fonction qui affiche la profileCard (photo de profile, nom du photographe, ville, tags) RAS
function showProfile(obj) {
  const photog = obj["photographers"];
  // let profID = photog[0].id;
  //  let i = 0;
  const profilID = photog.map((photog) => photog.id);

  const myContact = document.createElement("button");
  const contactText= document.createTextNode("Contactez-moi");
  myContact.setAttribute("class", "modal-btn");
  myContact.appendChild(contactText);
  profilesPP.appendChild(myContact);



  for (let i = 0; i < photog.length; i++) {
    const myArticle = document.createElement("article");
    const myImg = document.createElement("img");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myTags = document.createElement("ul");
    
    //const myFormName = document.createElement("h2");

    myArticle.setAttribute("class", "profileCardPP");
    myImg.setAttribute("class", "profilePic");
    myH2.setAttribute("class", "profileName");
    myPara1.setAttribute("class", "profileLocation");
    myPara2.setAttribute("class", "profileTagline");
    myPara3.setAttribute("class", "profilePrice");
    myTags.setAttribute("class", "profileTags");

    //myFormName.setAttribute("class", "formName");

    myImg.src = "./images/Photographers-ID-Photos/" + photog[i].portrait;
    myH2.textContent = photog[i].name;
    myPara1.textContent = photog[i].city + ", " + photog[i].country;
    myPara2.textContent = photog[i].tagline;
    myPara3.textContent = photog[i].price + "€/jour";

    const catTags = photog[i].tags;
    for (let j = 0; j < catTags.length; j++) {
      const listTags = document.createElement("li");
      listTags.textContent = "# " + catTags[j];
      myTags.appendChild(listTags);
      const profileCardClass = "profileCardPP";
      myArticle.setAttribute(
        "class",
        profileCardClass + " " + catTags.join(" ")
      );
    }

    let myProfilID = profilID[i];
    let x = myProfilID;

    let y = profURL;

    let currentName = null;

    if (x == y) {
      myArticle.style.display = "true";
      console.log("OK");
      
      currentName = photog[i].name;
      console.log("NAME", currentName)

    } else {
      myArticle.style.display = "none";
      myArticle.classList.add("Delete");

      document.querySelectorAll(".Delete").forEach((e) => e.remove());
    }

    //let currName = null;
    //let currName = x;

    /* function getCurrentName() {
      if (currentName !== null) {
        console.log("NAME", currentName)
        myFormName.textContent = currentName;
        myFormName.setAttribute("id", currentName);
        profilesPP.appendChild(myFormName);

        //x = currentName;
        //return currName;
        //return currentName;
        //export * from currentName;
      }
    }
    getCurrentName();
    
    let currName = getCurrentName();
    //let currName = getCurrentName();
    console.log("CURRNAME", currName)
    //export currentName; */

    myArticle.appendChild(myImg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myTags);


    profilesPP.appendChild(myArticle);

    
    //export * from getCurrentName();
    //return getCurrentName();
    //contactFormModule();
  }
}
// console.log(getCurrentName())


// !! ça c'est la fonction (en cours de construction) qui me pose problème pour afficher les cards de chaque photos correspondant à l'id du photographe associé
function showGallery(obj) {
  // !! je récupère les éléments du JSON
  const photog = obj["photographers"];
  const photogal = obj["media"];
  // !! je récupère toutes les photographerID du JSON
  const photogID = photogal.map((photogal) => photogal.photographerId);
  const photogPrice = photogal.map((photogal) => photogal.price);
  const photogImg = photogal.map((photogal) => photogal.image);
  const photogVid = photogal.map((photogal) => photogal.video);
  const photogTitle = photogal.map((photogal) => photogal.title);
  let photogLikes = photogal.map((photogal) => photogal.likes);

  const photogPhID = photogal.map((photogal) => photogal.id);


  console.log(photogID);
  console.log(photogVid);

  // !! ça c'est provisoire, c'est pour avoir un photographe en input mais il va falloir que je trouve un moyen pour que cette page sache sur quel photographe (et quelle ID) l'utilisateur a cliqué sur la page d'accueil et j'ai aucune idée de comment procéder pour ça... Et faudra que ça fonctionne aussi sur la fonction showProfile d'ailleurs
  let photogIdentity = photog[0].id;
  let photogBasePrice = photogal[0].price;

  console.log(photogIdentity);
  console.log(photogBasePrice);
  // !! là je filtre pour ne garder que les photos associées à l'ID du photographe choisi
  /* const photogPersonCard = photogID.filter(
    (photogID) => photogID === photogIdentity
  ); */

  // console.log(photogPersonCard);

  for (let i = 0; i < photogal.length; i++) {
    const myAHREF = document.createElement("a");
    myAHREF.setAttribute("href", "./images/" + photogID[i] + "/" + photogImg[i]);
    myAHREF.setAttribute("class", "photoAHREF");


    const myPhotoCard = document.createElement("article");
    const myPhotoImg = document.createElement("img");
    const myPhotoVid = document.createElement("video");
    //const myPhotoVid = createVid();
    //const myPhotoVid = if ("video" in photogal[i]) { document.createElement("video") };
    //function createVid() { if ("video" in photogal[i]) { document.createElement("video") } };

    const myPhotoTitle = document.createElement("h2");
    const myPhotoPrice = document.createElement("p");

    let myPhotoLikes = document.createElement("p");

    const myPhotoHeart = document.createElement("div");
    myPhotoHeart.className = "like";
    //myPhotoHeart.setAttribute("onclick", "event.preventDefault();")

    const myPHInput = document.createElement("input");
    myPHInput.type = "checkbox";
    myPHInput.id = "heart" + photogPhID[i];
    //myPHInput.setAttribute("onclick", "event.preventDefault();");
    //myPHInput.addEventListener("click", e => e.preventDefault());
    myPhotoHeart.appendChild(myPHInput);

    const myPHLabel = document.createElement("label");
    myPHLabel.htmlFor = "heart" + photogPhID[i];
    myPHLabel.className = "far fa-heart";
    myPhotoHeart.appendChild(myPHLabel);

    myPhotoCard.setAttribute("class", "photoCard");
    myPhotoImg.setAttribute("class", "photoImg");
    myPhotoVid.setAttribute("class", "photoVid");
    myPhotoTitle.setAttribute("class", "photoTitle");
    myPhotoPrice.setAttribute("class", "photoPrice");

    myPhotoLikes.setAttribute("class", "photoLikes");
    //myPhotoHeart.setAttribute("class", "like");

    myPhotoImg.src = "./images/" + photogID[i] + "/" + photogImg[i];
    /* myPhotoVid.src =
      "./images/" + photogID[i] + "/" + photogVid[i]; */

    if (photogImg[i] === undefined) {
      myPhotoImg.classList.add("DeleteImg");
      document.querySelectorAll(".DeleteImg").forEach((e) => e.remove());
      myPhotoImg.style.display = "none";
    }

    if (photogVid[i] === undefined) {
      myPhotoVid.classList.add("DeleteVid");
      document.querySelectorAll(".DeleteVid").forEach((e) => e.remove());
      myPhotoVid.style.display = "none";
    }

    if (myPhotoVid.canPlayType("video/mp4")) {
      myPhotoVid.setAttribute(
        "src",
        "./images/" + photogID[i] + "/" + photogVid[i]
      );
    } else {
      //myPhotoVid.setAttribute("src","movie.ogg");
    }

    /* myPhotoVid.setAttribute("width", "320");
    myPhotoVid.setAttribute("height", "240"); */
    myPhotoVid.setAttribute("controls", "controls");
    myPhotoTitle.textContent = photogTitle[i];
    myPhotoPrice.textContent = photogPrice[i] + " €";
    myPhotoLikes.textContent = photogLikes[i];

    let myPhotogID = photogID[i];
    console.log(myPhotogID);
    //console.log(myPhotoPrice);

    //for (let j = 0; j < photogal.length; j++) {
    let x = myPhotogID;

    // let x = z;
    let y = profURL;
    // console.log(x, y, x == y);
    if (x == y) {
      /* myPhotoImg.src =
          "./images/" + photogIdentity + "/" + photogal[j].image; */
      // myPhotoPrice.textContent = photogal[i].price;
      // console.log(myPhotoPrice);
      /* myPhotoCard.classList.remove("hideCard");
        myPhotoCard.classList.add("showCard"); */
      // myPhotoCard.classList.remove("hideCard");
      // !!myPhotoCard.style.display = "true";
      console.log("OK");
    } else {
      // !!myPhotoCard.style.display = "none";
      myPhotoCard.classList.add("Delete");
      // Delete.parentNode.removeChild(Delete);
      document.querySelectorAll(".Delete").forEach((e) => e.remove());
      myAHREF.classList.add("Delete");

      /* myPhotoCard.classList.remove("showCard");
        myPhotoCard.classList.add("hideCard"); */
    }
    // }
    // !! construction de l'HTML
    myPhotoCard.appendChild(myPhotoImg);
    myPhotoCard.appendChild(myPhotoVid);
    myPhotoCard.appendChild(myPhotoTitle);
    myPhotoCard.appendChild(myPhotoPrice);
    myPhotoCard.appendChild(myPhotoLikes);

    myPhotoCard.appendChild(myPhotoHeart);
    myAHREF.appendChild(myPhotoCard);
    // !! là ça m'a bien construit mon HTML mais il est vide parce que je n'arrive pas à récupérer les données des photos pour l'instant
    //photoGallery.appendChild(myPhotoCard);
    photoGallery.appendChild(myAHREF);


    /* if (x == y) {
      myPhotoCard.style.display = "block";
      console.log("OK")
    } else {
    } */
  }
}

// !! ça c'est le fetch avec les fonctions
fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })

  .then((object) => {
    const photographers = object.photographers;
    const medias = object.medias;

    console.log(object, photographers, medias);

    showProfile(object);

    showGallery(object);

    contactFormModule(); 

    //import { contactFormModule } from "./contactForm.js";
    //import * as contactFormModule from "./contactForm.js";
    (function () {
      emailjs.init("user_puf8TmtfpdXTG2bY7o9Sk");
    })();
    
    //import contactFormModule from "./contactForm.js";
    // !!contactFormModule();
    
    //console.log(getCurrentName())
    //new contactFormModule();

    //var SimpleLightbox = require('simple-lightbox');
    
    // !!import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
    new SimpleLightbox({ elements: '.photoGallery a' });
    let gallery = new SimpleLightbox('.photoGallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});



    /* SimpleLightbox.open({
      items: ["./images/" + photogID[i] + "/" + photogImg[i];]
  }); */

    // filtrePhoto(object);

    /* testGal(object);

    testGal2(object);
 */
    // !! j'ai laissé le truc du scroll mais je m'en sers pas encore, donc t'occupes pas de ce qu'il ya en dessous

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
    mybutton = document.getElementById("contentButton");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  });

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//var SimpleLightbox = require('simple-lightbox');
