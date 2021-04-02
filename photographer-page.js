let profURL = window.location.search.substr(4);

console.log(profURL);

//let mybutton = document.getElementById("contentButton2");


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
    //////////
    /* if (photogImg[i] !== undefined) {
      const myPhotoImg = document.createElement("img");
      return myPhotoImg;
    }

    if (photogVid[i] !== undefined) {
      const myPhotoVid = document.createElement("video");
      return myPhotoVid;
    } */
    ////////////

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
    //myPHInput.addEventListener('change', () => { console.log(id) });
    myPHInput.type = "checkbox";
    myPHInput.id = "heart" + photogPhID[i];
    //myPHInput.setAttribute("onclick", "event.preventDefault();");
    //myPHInput.addEventListener("click", e => e.preventDefault());
    let changeID = myPHInput.id;
    //console.log(changeID)
    //myPHInput.setAttribute("onchange", checkboxChanged(this));
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
    ///////////
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
    ////////
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

    var counter2 = photogLikes[i];

    let myPhotogID = photogID[i];
    //console.log(myPhotogID);
    
    //console.log(myPhotoPrice);

    //for (let j = 0; j < photogal.length; j++) {
    let x = myPhotogID;

    // let x = z;
    let y = profURL;
    // console.log(x, y, x == y);
    
    // if (x == y) {
    //   /* myPhotoImg.src =
    //       "./images/" + photogIdentity + "/" + photogal[j].image; */
    //   // myPhotoPrice.textContent = photogal[i].price;
    //   // console.log(myPhotoPrice);
    //   /* myPhotoCard.classList.remove("hideCard");
    //     myPhotoCard.classList.add("showCard"); */
    //   // myPhotoCard.classList.remove("hideCard");
    //   // !!myPhotoCard.style.display = "true";
    //   console.log(myPHInput.id)
    //   let changeID2 = myPHInput.id;
    //   console.log(changeID2)
    //   //console.log("OK");
    //   console.log(myPHInput[i])
    //   myPHInput.classList.add("Visible");
    //   console.log(myPHInput.className)
    // } else {
    //   // !!myPhotoCard.style.display = "none";
    //   myPhotoCard.classList.add("Delete");
    //   // Delete.parentNode.removeChild(Delete);
    //   document.querySelectorAll(".Delete").forEach((e) => e.remove());
    //   myAHREF.classList.add("Delete");

    //   /* myPhotoCard.classList.remove("showCard");
    //     myPhotoCard.classList.add("hideCard"); */
    // }
    
    if (x == y) {
      
      //construct();
      console.log(myPHInput.id)
      let changeID2 = myPHInput.id;
      console.log(changeID2)
      console.log(myPHInput[i])
      myPHInput.classList.add("Visible");
      console.log(myPHInput.className)
    } else {
      myPhotoCard.classList.add("Delete");
      document.querySelectorAll(".Delete").forEach((e) => e.remove());
      myAHREF.classList.add("Delete");

    }

    // }
    //function construct() {
    // !! construction de l'HTML
   if (photogImg[i] !== undefined) {
      myPhotoCard.appendChild(myPhotoImg);
    }
    if (photogVid[i] !== undefined) {
      myPhotoCard.appendChild(myPhotoVid);
    }
    myPhotoCard.appendChild(myPhotoTitle);
    myPhotoCard.appendChild(myPhotoPrice);
    myPhotoCard.appendChild(myPhotoLikes);

    myPhotoCard.appendChild(myPhotoHeart);
    myAHREF.appendChild(myPhotoCard);
    // !! là ça m'a bien construit mon HTML mais il est vide parce que je n'arrive pas à récupérer les données des photos pour l'instant
    //photoGallery.appendChild(myPhotoCard);
    photoGallery.appendChild(myAHREF);
    //}

    /* if (x == y) {
      myPhotoCard.style.display = "block";
      console.log("OK")
    } else {
    } */
    ///////////////////////////////////////////////
    //var counter = photogLikes[i];
    
    var isChecked = document.querySelectorAll("input:checked").length === 0 ? false : true;
    //var isChecked = document.getElementsByClassName("Visible").length === 0 ? false : true;

    /* function checkedBoxes() {
      return document.querySelectorAll("input:checked").length === 0 ? false : true;
    } */
    //console.log(changeID)

    //console.log(counter)
    console.log(isChecked)

    /* document.querySelectorAll('input').click = function () {
      console.log("AH")
    } */

    //!!var checkbox = document.querySelector("input[type=checkbox]");
    let checkClass = document.getElementsByClassName("Visible");
    //var checkID = checkClass.id;

    //var checkbox = document.getElementsByClassName(".Visible input[type=checkbox]");
    //console.log(checkClass)
    //console.log(checkbox)
    //var counter = photogLikes;

    myPHInput.addEventListener('change', function () {
      
      console.log(this.id, this.checked)
      //localStorage["mapCoeur"][this.id] = this.checked;
      const that = this;
      const o = this.id;
      //const m = o.previousSibling.innerHTML;
      const u = that.parentNode;
      console.log(u)

      const h = that.parentNode.previousSibling.innerHTML;
      console.log(h)

      const g = that.parentNode.previousSibling.innerHTML;
      console.log(g)

      /* const j = document.createElement("p");
      j.innerHTML = g;
      j.className = "defaultLikes";
      j.style.display = 'none';
      u.appendChild(j);

      console.log(j.innerHTML) */

      //k = j.innerHTML;

      //that.parentNode.previousSibling.innerHTML = j;
      
      //console.log(o.previousSibling.innerHTML)
     
      var c = []
      var localStorage = []

      var check = true;
      //this.checked = Boolean;
      if (this.checked == true) {
        const that = this;
        
        let h = that.parentNode.previousSibling.innerHTML;
        h = ++h;
        console.log(h)
        that.parentNode.previousSibling.innerHTML = h;
        check = this.checked;
      } else {
        check = false;
        
        const that = this;
        
        let h = that.parentNode.previousSibling.innerHTML;
        h = --h;
        that.parentNode.previousSibling.innerHTML = h;
      }

      localStorage[this.id];
      console.log(check)
      console.log(localStorage)
      //[this.id] = this.checked;
      /* var ident = c.id;
      console.log(ident) */
      //localStorage["mapCoeur"][this.id] = this.checked;
      if (document.querySelectorAll(this.id).checked) {
        c.push(this.id);
      }
      
      localStorage['mapCoeur'] = c.toString();
      //localStorage['mapCoeur'] = this.id.toString();
    });

    /* function checkOnLocalStorage() {
      if (!localStorage['mapCoeur']) return;
      var checked = localStorage['mapCoeur'].split(',');
      checked.map((id) => {
        document.getElementById(id).checked = true;
      })
    }
    
    (function () {
      checkOnLocalStorage();
    })(); */



    /* let priceTag = document.querySelectorAll(".Visible .photoLikes");
    priceTag = Array.from(priceTag);
    console.log("TAG", priceTag)

    checkClass = Array.from(checkClass);
    console.log(checkClass)
    const photogHeart = checkClass.map((checkClass) => checkClass.id);
    const photogHeartCheck = checkClass.map((checkClass) => checkClass.checked);
    const photogPriceTag = priceTag.map((priceTag) => priceTag.value);
    console.log("TAG2", photogPriceTag)

    for (var i = 0; i <= 10; i++) {
      
      console.log("OHOH", photogHeart[i])
      let inH = photogHeartCheck[i];
      console.log('IN', inH)

      var c = []

      if (inH === true) {
        
        console.log(inH, "+1")
        console.log("Checkbox is checked..");
        c.push(photogHeart);
        console.log("LC", c)
      } else {
        console.log("Checkbox is not checked..");
      }
      
      localStorage['test'] = c.toString();
    }

    function checkOnLocalStorage() {
      if(!localStorage['test']) return;
      var checked = localStorage['test'].split(',');
      checked.map((id) => {
        document.getElementById(id).checked=true;
      })
    }
    
    (function(){
    checkOnLocalStorage();
    })(); */
      
    //}
    //}
  }
}
//);

/* function checkOnLocalStorage() {
  if(!localStorage['test']) return;
  var checked = localStorage['test'].split(',');
  checked.map((id) => {
    document.getElementById(id).checked=true;
  })
}

(function(){
checkOnLocalStorage();
})(); */
    //console.log(document.querySelectorAll('input'))

    /* document.getElementsByClassName('far').onclick = function(e){
      var isChecked = document.querySelectorAll("input:checked").length === 0 ? false : true;
      console.log(isChecked)
      if (isChecked == true) {
        counter = counter + 1;
        console.log(isChecked, "+1")
      } else {
        counter = counter;
      }
      console.log(isChecked);
  }; */

    /* if (isChecked == true) {
      counter = counter + 1;
      console.log(isChecked, "+1")
    } else {
      counter = counter;
    } */
    ///////////////////////////////////////////////
     /* console.log(changeID)
    function checkboxChanged(e) {
      //Get the id of all checked checkboxes and store them as array
        var c = []
        if(document.querySelectorAll(changeID).checked) {
          c.push(changeID);
        }
        
        /* if(document.getElementById('checkbox2').checked) {
          c.push('checkbox2');
        } */ /*
        
        localStorage['test'] = c.toString();
      } 
      
      function checkOnLocalStorage() {
        if(!localStorage['test']) return;
        var checked = localStorage['test'].split(',');
        checked.map((id) => {
          document.getElementById(id).checked=true;
        })
      }
      
      (function(){
      checkOnLocalStorage();
    })(); */
    ///////////////////////////////
  //}
//}

// !! ça c'est le fetch avec les fonctions
fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })

  .then((object) => {
    const photographers = object.photographers;
    const medias = object.medias;

    console.log(object, photographers, medias);

    /* (function () {
      emailjs.init("user_puf8TmtfpdXTG2bY7o9Sk");
    }); */

    showProfile(object);

    showGallery(object);

    contactFormModule();
    
    /* function checkboxChanged(e) {
      //Get the id of all checked checkboxes and store them as array
        var c = []
        if(document.getElementById("heart" + photogPhID[i]).checked) {
          c.push("heart" + photogPhID[i]);
        }
        
        if(document.getElementById('checkbox2').checked) {
          c.push('checkbox2');
        }
        
        localStorage['test'] = c.toString();
      }
      
      function checkOnLocalStorage() {
        if(!localStorage['test']) return;
        var checked = localStorage['test'].split(',');
        checked.map((id) => {
          document.getElementById(id).checked=true;
        })
      }
      
      (function(){
      checkOnLocalStorage();
    })(); */


    //document.querySelector('contact-form').addEventListener(validate);

    //import { contactFormModule } from "./contactForm.js";
    //import * as contactFormModule from "./contactForm.js";
    
    /* (function () {
      emailjs.init("user_puf8TmtfpdXTG2bY7o9Sk");
    })(); */
    
    //import contactFormModule from "./contactForm.js";
    // !!contactFormModule();
    
    //console.log(getCurrentName())
    //new contactFormModule();

    //var SimpleLightbox = require('simple-lightbox');
    
    // !!import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
    
    
    /* new SimpleLightbox({ elements: '.photoGallery a' });
    let gallery = new SimpleLightbox('.photoGallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
}); */



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
    const mybutton = document.getElementById("contentButton2");

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

  document.getElementById("contentButton2").addEventListener("click", topFunction2);

// When the user clicks on the button, scroll to the top of the document
function topFunction2() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//var SimpleLightbox = require('simple-lightbox');
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    
    //this.contact_number.value = Math.random() * 100000 | 0;
    
    // Send form with EmailJS
    //function validate() {
    let varsForm = {
      first: document.getElementById("first").value,
      last: document.getElementById("last").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      photographerName: document.querySelector('.profileName').innerHTML,
  
    };

    emailjs.send("service_fqmxk3h", "template_uez9mo6", varsForm, "user_puf8TmtfpdXTG2bY7o9Sk").then(
      function () {
        console.log("SUCCESS!");
        Popup();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  
  
  });

    // Display and Close popup message and modal
    const modalbg = document.querySelector(".bground");

  function Popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("showPopup");
    if (popup.classList.contains("showPopup")) {
      // Check if the popup is shown
      setTimeout(() => popup.classList.remove("showPopup"), 4000);
      setTimeout(() => (modalbg.style.display = "none"), 4000);
    } // If yes hide it after 4000 milliseconds
    return false;
  }
}