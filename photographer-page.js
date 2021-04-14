// Get photographer profile ID
let profURL = window.location.search.substr(4);

console.log(profURL);

// Import contact form
import contactFormModule from "./contactForm.js";
    
 /*   
    import photoFilter from "./photoFilter.js";

function tagFilter() {
  const profList = document.getElementsByClassName("profileTags");
  const profListItems = profList.li;
  const profTitles = profListItems.title;
  const selectedTag = this.profTitles;
  console.log(profTitles, selectedTag)
} */


// Display photographer profile
function showProfile(obj) {
  const photog = obj["photographers"];
  
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
    

    myArticle.setAttribute("class", "profileCardPP");
    myImg.setAttribute("class", "profilePic");
    myH2.setAttribute("class", "profileName");
    myPara1.setAttribute("class", "profileLocation");
    myPara2.setAttribute("class", "profileTagline");
    myPara3.setAttribute("class", "profilePrice");
    myTags.setAttribute("class", "profileTags");


    myImg.src = "./images/Photographers-ID-Photos/" + photog[i].portrait;
    myH2.textContent = photog[i].name;
    myPara1.textContent = photog[i].city + ", " + photog[i].country;
    myPara2.textContent = photog[i].tagline;
    myPara3.textContent = photog[i].price + "€/jour";

    const catTags = photog[i].tags;
    for (let j = 0; j < catTags.length; j++) {
      const listTags = document.createElement("li");
      
      console.log(catTags[j])
      listTags.title = catTags[j];
      listTags.setAttribute("data-tags", catTags[j]);
      const listFilter = document.createElement("label");
      listFilter.setAttribute("for", catTags[j]);
      const listInput = document.createElement("input");
      listInput.setAttribute("id", catTags[j]);
      listInput.setAttribute("type", "checkbox");
      listFilter.textContent = "# " + catTags[j];
      listTags.appendChild(listInput);
      listTags.appendChild(listFilter);
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

    
    
    myArticle.appendChild(myImg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myTags);


    profilesPP.appendChild(myArticle);

    
    
  }
}

// Display photographer gallery
function showGallery(obj) {
  const photog = obj["photographers"];
  const photogal = obj["media"];
  const photogID = photogal.map((photogal) => photogal.photographerId);
  const photogPrice = photogal.map((photogal) => photogal.price);
  const photogImg = photogal.map((photogal) => photogal.image);
  const photogVid = photogal.map((photogal) => photogal.video);
  const photogTitle = photogal.map((photogal) => photogal.title);
  let photogLikes = photogal.map((photogal) => photogal.likes);

  const photogPhID = photogal.map((photogal) => photogal.id);

  const photogDate = photogal.map((photogal) => photogal.date);
  const photogTags = photogal.map((photogal) => photogal.tags);


  console.log(photogID);
  console.log(photogVid);

  let photogIdentity = photog[0].id;
  let photogBasePrice = photogal[0].price;

  console.log(photogIdentity);
  console.log(photogBasePrice);
  

  for (let i = 0; i < photogal.length; i++) {
    const myAHREF = document.createElement("a");
    myAHREF.setAttribute("class", "photoAHREF");
    myAHREF.setAttribute("title", photogTitle[i]);
    myAHREF.setAttribute("alt", photogTitle[i]);


    const myPhotoDate = document.createElement("p");
    const myPhotoTags = document.createElement("p");

    const myPhotoCard = document.createElement("article");
    
    const myPhotoTitle = document.createElement("h2");
    const myPhotoPrice = document.createElement("p");

    let myPhotoLikes = document.createElement("p");

    const myPhotoHeart = document.createElement("div");
    myPhotoHeart.className = "like";
    
    const myPHInput = document.createElement("input");
    myPHInput.type = "checkbox";
    myPHInput.id = "heart" + photogPhID[i];
    myPHInput.setAttribute("onclick", "event.stopPropagation();");
   
    let changeID = myPHInput.id;
    
    myPhotoHeart.appendChild(myPHInput);
    
    const myPHLabel = document.createElement("label");
    myPHLabel.htmlFor = "heart" + photogPhID[i];
    myPHLabel.className = "far fa-heart";
    myPHLabel.setAttribute("onclick", "event.stopPropagation();");
    myPhotoHeart.appendChild(myPHLabel);

    myPhotoCard.setAttribute("class", "photoCard");
    myPhotoCard.setAttribute("data-tagsCard", photogTags[i]);
    
    myPhotoTitle.setAttribute("class", "photoTitle");
    myPhotoPrice.setAttribute("class", "photoPrice");

    myPhotoLikes.setAttribute("class", "photoLikes");
    
    myPhotoTitle.textContent = photogTitle[i];
    myPhotoPrice.textContent = photogPrice[i] + " €";
    myPhotoLikes.textContent = photogLikes[i];

    var counter2 = photogLikes[i];

    let myPhotogID = photogID[i];
    
    let x = myPhotogID;

    let y = profURL;
    
    if (x == y) {
      
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

   
    if (photogImg[i] !== undefined) {
      const myPhotoImg = document.createElement("img");
      myPhotoImg.setAttribute("class", "photoImg");
      myPhotoImg.setAttribute("alt", photogTitle[i]);
      myPhotoImg.src = "./images/" + photogID[i] + "/" + photogImg[i];
      myAHREF.setAttribute("href", "./images/" + photogID[i] + "/" + photogImg[i]);
      myPhotoCard.appendChild(myPhotoImg);
    }
    if (photogVid[i] !== undefined) {
      const myPhotoVid = document.createElement("video");
      myPhotoVid.setAttribute("class", "photoVid");
      myPhotoVid.classList.add("lg-video-object");
      myPhotoVid.classList.add("lg-html5");
      myAHREF.setAttribute("href", "./images/" + photogID[i] + "/" + photogVid[i]);
      if (myPhotoVid.canPlayType("video/mp4")) {
        myPhotoVid.setAttribute(
          "src",
          "./images/" + photogID[i] + "/" + photogVid[i]
        );
      } else {
      }
  
      
      myPhotoVid.setAttribute("controls", "controls");
      const myPhotoVidSource = document.createElement("source");
      myPhotoVidSource.setAttribute(
        "src",
        "./images/" + photogID[i] + "/" + photogVid[i]
      );
      myPhotoVidSource.setAttribute("type", "video/mp4");
      myPhotoVid.appendChild(myPhotoVidSource);
      
      myPhotoCard.appendChild(myPhotoVid);
    }

    myPhotoDate.setAttribute("class", "photoDate");
    myPhotoDate.textContent = photogDate[i];
    myPhotoDate.style.display = "none";
    myPhotoCard.appendChild(myPhotoDate);

    myPhotoTags.setAttribute("class", "photoTags");
    myPhotoTags.textContent = photogTags[i];
    myPhotoTags.style.display = "none";
    myPhotoCard.appendChild(myPhotoTags);

    myPhotoCard.appendChild(myPhotoTitle);
    myPhotoCard.appendChild(myPhotoPrice);
    myPhotoCard.appendChild(myPhotoLikes);

    myPhotoCard.appendChild(myPhotoHeart);
    myAHREF.appendChild(myPhotoCard);
   
    photoGallery.appendChild(myAHREF);
    
    // Photo Like stuff
    var isChecked = document.querySelectorAll("input:checked").length === 0 ? false : true;
    
    console.log(isChecked)

    
    let checkClass = document.getElementsByClassName("Visible");
    
    var localStorage = []
    myPHInput.addEventListener('change', function () {
      
      console.log(this.id, this.checked)
     
      var c = []

      var id = this.id;
      var check = true;

      
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

      c = check;
      c[check];

      if (c == true) { localStorage.push(id); }
      if (c == false) { localStorage.pop(id); }
      
      
      
      localStorage["map"];
      
      console.log(check)
      console.log("OK", localStorage)
      var localString = JSON.stringify(localStorage);
      console.log(localString)
      
      if (document.querySelectorAll(this.id).checked) {
        c.push(this.id);
      }
      
      
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



   
  }
 
  document.getElementById("photoFilterDD").addEventListener("change", photoFilter);
  function photoFilter() {
    
    var e = document.getElementById("photoFilterDD");
var filterDropdown = e.options[e.selectedIndex].value;//change it here

    if (filterDropdown == "Popularite") {
      
    }
    if (filterDropdown == "Date") {

    }
    if (filterDropdown == "Titre") {

    }
  }
  }

// Fetch JSON and use functions
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

    //Lightbox parameters
    lightGallery(document.getElementById('photoGallery'), {
      //speed: "600",
      //width: "90vw",
      //height: "90%",
      download: false,
      getCaptionFromTitleOrAlt: true,
      preload: 2,
      fullScreen: true,
      hideBarsDelay: 0,
      counter: false,
    }
    
    );
    console.log(lightGallery())
    
    //Tag Filters
    const filtButton = document.querySelectorAll(".profileTags > li > input");
    filtButton.forEach(filtButton => 
      filtButton.addEventListener("click", () => filterTag()))
    
    console.log(filtButton)

    function filterTag() {
      var tt3 = document.querySelectorAll('[data-tags]');
      
      var testtag3 = [...tt3].map(i => i.dataset.tags);
      console.log(testtag3)

      const cardTag = document.querySelectorAll('[data-tagscard]');
      var cT = [...cardTag].map(i => i.dataset.tagscard);
      console.log(cT)
      const cardFilt = document.getElementsByClassName("photoAHREF");
      for (var i = 0; i <= 10; i++) {
        if (testtag3 == cardTag) {
          cardFilt.display = none;
        }
      }
    }

    //Tests background tag buttons

    /* document.querySelector(".profileTags").addEventListener("change", e => {
      if(!e.target.matches("input[type=checkbox]") return;
      
      // If they all started out unchecked you can just do
      e.target.parentElement.classList.toggle("checked");
      
      // If some start checked and some don't, instead do:
      if(!e.target.parentElement.classList.contains("selected") && e.target.checked) return e.target.parentElementclassList.add("selected");
      if(e.target.parentElementclassList.parentElement.contains("selected") && !e.target.checked) return e.target.parentElement.classList.remove("selected");
    }) */
//////////////////////////////////////////////////////////////////////
    
/* document.querySelector(".profileTags").addEventListener("change", e => {
      if(!e.target.matches("input[type=checkbox]")) return;
      
      // If they all started out unchecked you can just do
      e.target.parentElement.classList.toggle("checked");
      
      // If some start checked and some don't, instead do:
      const li = e.target.parentElement;
      if(!li.classList.contains("selected") && e.target.checked) return li.classList.add("selected");
      if(li.classList.parentElement.contains("selected") && !e.target.checked) return li.classList.remove("selected");
    }) */


    ////////////////////////////////////////////////////////////////////////
    
    //Scroll up
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

//EmailJS stuff
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
   
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