// Get photographer profile ID
let profURL = window.location.search.substr(4);

// Import contact form
import contactFormModule from "./contactForm.js";

//Custom selectbox init
const mySelects = customSelect("select");

//Construct photographer profile
function showProfile(obj) {
  //Get JSON data
  const photog = obj["photographers"];

  //Map JSON data
  const profilID = photog.map((photog) => photog.id);

  //Contact button construction
  const myContactContainer = document.createElement("div");
  const myContact = document.createElement("button");
  const contactText = document.createTextNode("Contactez-moi");
  myContactContainer.setAttribute("class", "contactFormButton");
  myContactContainer.setAttribute("alt", "Contact me");
  myContact.setAttribute("class", "modal-btn");
  myContact.appendChild(contactText);
  myContactContainer.appendChild(myContact);
  profilesPP.appendChild(myContactContainer);

  for (let i = 0; i < photog.length; i++) {
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

    //Delete profiles of other photographers
    let x = profilID[i];
    let y = profURL;
    let currentName = null;

    if (x == y) {
      myArticle.style.display = "true";
      currentName = photog[i].name;
    } else {
      myArticle.style.display = "none";
      myArticle.classList.add("Delete");
      document.querySelectorAll(".Delete").forEach((e) => e.remove());
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

//Construct photographer gallery
function showGallery(obj) {
  //Get JSON data
  const photogal = obj["media"];

  //Map JSON data
  const photogID = photogal.map((photogal) => photogal.photographerId);
  const photogPrice = photogal.map((photogal) => photogal.price);
  const photogImg = photogal.map((photogal) => photogal.image);
  const photogVid = photogal.map((photogal) => photogal.video);
  const photogTitle = photogal.map((photogal) => photogal.title);
  let photogLikes = photogal.map((photogal) => photogal.likes);
  const photogPhID = photogal.map((photogal) => photogal.id);
  const photogDate = photogal.map((photogal) => photogal.date);
  const photogTags = photogal.map((photogal) => photogal.tags);

  for (let i = 0; i < photogal.length; i++) {
    //Create elements
    const myAHREF = document.createElement("a");
    const myPhotoDate = document.createElement("p");
    const myPhotoTags = document.createElement("p");
    const myPhotoCard = document.createElement("article");
    const myPhotoInfos = document.createElement("div");
    const myPhotoTitle = document.createElement("h2");
    const myPhotoPrice = document.createElement("p");
    const myPhotoLikesCount = document.createElement("div");
    let myPhotoLikes = document.createElement("p");
    const myPhotoHeart = document.createElement("div");
    const myPHInput = document.createElement("input");
    const myPHLabel = document.createElement("label");

    //Card container attributes
    myAHREF.setAttribute("class", "photoAHREF");
    myAHREF.setAttribute("data-Popularite", photogLikes[i]);
    myAHREF.setAttribute("data-Date", photogDate[i]);
    myAHREF.setAttribute("data-Titre", photogTitle[i]);
    myAHREF.setAttribute("title", photogTitle[i]);
    myAHREF.setAttribute("alt", photogTitle[i]);
    myAHREF.setAttribute("aria-label", "image closeup view");
    myAHREF.setAttribute("data-html", "#lg-video-" + photogPhID[i]);
    myAHREF.classList.add("filtr-item");
    myAHREF.classList.add(photogTags[i]);

    //Card description attributes
    myPhotoInfos.setAttribute("class", "photosInfos");

    //Likes zone container attributes
    myPhotoLikesCount.setAttribute("class", "photoLikesCount");

    //Heart container attributes
    myPhotoHeart.className = "like";
    myPhotoHeart.setAttribute("aria-label", "likes");
    //myPhotoHeart.setAttribute("tabindex", "0");

    //Heart checkbox input attributes
    myPHInput.type = "checkbox";
    myPHInput.id = "heart" + photogPhID[i];
    myPHInput.setAttribute("onclick", "event.stopPropagation();");
    myPHInput.classList.add("checkHeart");
    //myPHInput.setAttribute("tabindex", "0");

    //Heart checkbox label attributes
    myPHLabel.htmlFor = "heart" + photogPhID[i];
    myPHLabel.className = "far fa-heart";
    myPHLabel.setAttribute("onclick", "event.stopPropagation();");

    //Card sub container attributes
    myPhotoCard.setAttribute("class", "photoCard");
    myPhotoCard.setAttribute("data-tagsCard", photogTags[i]);

    //Title attributes
    myPhotoTitle.setAttribute("class", "photoTitle");
    myPhotoTitle.textContent = photogTitle[i];

    //Price attributes
    myPhotoPrice.setAttribute("class", "photoPrice");
    myPhotoPrice.textContent = photogPrice[i] + " €";

    //Likes count attributes
    myPhotoLikes.setAttribute("class", "photoLikes");
    myPhotoLikes.textContent = photogLikes[i];

    //Date attributes
    myPhotoDate.setAttribute("class", "photoDate");
    myPhotoDate.textContent = photogDate[i];
    myPhotoDate.style.display = "none";

    //Tags attributes
    myPhotoTags.setAttribute("class", "photoTags");
    myPhotoTags.textContent = photogTags[i];
    myPhotoTags.style.display = "none";

    //Remove unused cards
    let x = photogID[i];
    let y = profURL;

    if (x == y) {
      myPHInput.classList.add("Visible");
    } else {
      myPhotoCard.classList.add("Delete");
      document.querySelectorAll(".Delete").forEach((e) => e.remove());
      myAHREF.classList.add("Delete");
    }

    //Only display used images + attributes & append
    if (photogImg[i] !== undefined) {
      const myPhotoImg = document.createElement("img");
      myPhotoImg.setAttribute("class", "photoImg");
      myPhotoImg.setAttribute("alt", photogTitle[i]);
      myPhotoImg.src = "./images/" + photogID[i] + "/" + photogImg[i];
      myAHREF.setAttribute(
        "href",
        "./images/" + photogID[i] + "/" + photogImg[i]
      );
      myPhotoCard.appendChild(myPhotoImg);
    }

    //Only display used videos + attributes & append (and duplicate version for lightbox)
    
    createVid("none", "-1");
    createVid("block", "0");

    function createVid(displayParam, tabindexParam) {
      if (photogVid[i] !== undefined) {
        const myPhotoVidContainer = document.createElement("div");
        const myPhotoVid = document.createElement("video");
        myPhotoVid.setAttribute("class", "photoVid");
        //myPhotoVid.setAttribute("tabindex", tabindexParam);
        myPhotoVidContainer.setAttribute("display", displayParam);
        myPhotoVidContainer.setAttribute("id", "lg-video-" + photogPhID[i]);
        myPhotoVid.classList.add("lg-video-object");
        myPhotoVid.classList.add("lg-html5");
        myPhotoVid.setAttribute("controls", "controls");
        const myPhotoVidSource = document.createElement("source");
        myPhotoVidSource.setAttribute(
          "src",
          "./images/" + photogID[i] + "/" + photogVid[i]
        );
        myPhotoVidSource.setAttribute("type", "video/mp4");
        myPhotoVid.appendChild(myPhotoVidSource);
        myPhotoVidContainer.appendChild(myPhotoVid);
        myPhotoCard.appendChild(myPhotoVidContainer);
      }
    }
    //////////////////////////////////////////////////////

    //Append elements
    myPhotoHeart.appendChild(myPHInput);
    myPhotoHeart.appendChild(myPHLabel);
    myPhotoLikesCount.appendChild(myPhotoHeart);
    myPhotoCard.appendChild(myPhotoDate);
    myPhotoCard.appendChild(myPhotoTags);
    myPhotoInfos.appendChild(myPhotoTitle);
    myPhotoInfos.appendChild(myPhotoPrice);
    myPhotoLikesCount.appendChild(myPhotoLikes);
    myPhotoCard.appendChild(myPhotoInfos);
    myPhotoLikesCount.appendChild(myPhotoHeart);
    myPhotoInfos.appendChild(myPhotoLikesCount);
    myAHREF.appendChild(myPhotoCard);

    photoGallery.appendChild(myAHREF);

    //Like +  Local Storage
    heartLike();
    function heartLike() {
      var isChecked =
        document.querySelectorAll("input:checked").length === 0 ? false : true;

      var localStorage = [];
      myPHInput.addEventListener("change", function () {
        console.log(this.id, this.checked);

        var c = [];

        var id = this.id;
        var check = true;

        if (this.checked == true) {
          const that = this;

          let h = that.parentNode.previousSibling.innerHTML;

          h = ++h;
          console.log(h);
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

        if (c == true) {
          localStorage.push(id);
        }
        if (c == false) {
          localStorage.pop(id);
        }

        localStorage["map"];

        console.log(check);
        console.log("OK", localStorage);
        var localString = JSON.stringify(localStorage);
        console.log(localString);

        if (document.querySelectorAll(this.id).checked) {
          c.push(this.id);
        }
      });

      //Allows to like from keyboard space
      $(function () {
        $(myPhotoHeart).keydown(function (e) {
          switch (e.which) {
            case 32: // up key
              console.log("up");
              e.preventDefault();
              $("input", this).trigger("click");
              break;
          }
        });
      });
      /* 
      //Local Storage test
      function checkOnLocalStorage() {
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
  }
}

// Fetch JSON and use functions
fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })

  .then((object) => {
    showProfile(object);
    //showProfile2(object, mapJSON, contactModal);
    

    showGallery(object);

    contactFormModule();

    setAriaContactButton();
    function setAriaContactButton() {
      const ariaContact = document.getElementsByClassName("contactFormButton");
      const thisPhotographerName = document.getElementsByClassName(
        "profileName"
      );
      let u = thisPhotographerName[0].innerHTML;
      ariaContact[0].setAttribute("aria-label", "Contact me " + u);
    }

    //Lightbox init & parameters
    lightGallery(document.getElementById("photoGallery"), {
      download: false,
      getCaptionFromTitleOrAlt: true,
      preload: 2,
      fullScreen: true,
      hideBarsDelay: 0,
      counter: false,
    });

    priceGlobalLikes();

    //Global likes and price popup construction
    function priceGlobalLikes() {
      //Get all photos likes count
      const cardLikes = document.querySelectorAll("[data-popularite]");

      //Calculate global likes count
      var cL = [...cardLikes].map((k) => parseInt(k.dataset.popularite));
      let array1 = cL;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let globalLikes = array1.reduce(reducer);

      //Get photographer price
      let phPrice = document.getElementsByClassName("profilePrice")[0]
        .innerHTML;

      //Create elements
      const mainCont = document.getElementById("photographer-main");
      const myPriceGlobLikes = document.createElement("div");
      const myGlobLikes = document.createElement("span");
      const myGlobLikesHeart = document.createElement("span");
      const myGlobPrice = document.createElement("span");

      //Container attributes
      myPriceGlobLikes.setAttribute("class", "priceGlobLikes");

      //Global Likes attributes
      myGlobLikes.setAttribute("class", "globLikes");
      myGlobLikes.textContent = globalLikes;

      //Heart icon attributes
      myGlobLikesHeart.setAttribute("class", "globLikesHeart");
      myGlobLikesHeart.classList.add("far");
      myGlobLikesHeart.classList.add("fa-heart");

      //Price attributes
      myGlobPrice.setAttribute("class", "globPrice");
      myGlobPrice.textContent = phPrice;

      //Append elements
      myPriceGlobLikes.appendChild(myGlobLikes);
      myPriceGlobLikes.appendChild(myGlobLikesHeart);
      myPriceGlobLikes.appendChild(myGlobPrice);

      mainCont.appendChild(myPriceGlobLikes);
    }

    //Isotope Sorting & Filtering for desktop view
    if (window.innerWidth > 800) {
      // init Isotope
      var $grid = $(".photoGall").isotope({
        itemSelector: ".photoAHREF",
        layoutMode: "fitRows",
        sortBy: "Popularite",
        sortAscending: false,
        fitRows: {
          columnWidth: 50,
          gutter: 30,
        },
        getSortData: {
          Popularite: ".photoLikes parseInt",
          Date: ".photoDate",
          Titre: ".photoTitle",
          filterValue: ".photoTags",
        },
      });

      // bind sorter on select change
      $(".filters-select").on("change", function () {
        var sortValue = this.value;
        $grid.isotope({
          sortBy: sortValue,
          sortAscending: {
            Popularite: false,
            Date: true,
            Title: true,
          },
        });
      });

      // bind filter on tags button change
      var filters = [];
      // change is-checked class on buttons
      $(".profileTags").on("click", "button", function (event) {
        var $target = $(event.currentTarget);
        $target.toggleClass("is-checked");
        var isChecked = $target.hasClass("is-checked");
        var filter = $target.attr("data-filter");
        if (isChecked) {
          addFilter(filter);
        } else {
          removeFilter(filter);
        }
        // filter isotope
        // group filters together, inclusive
        $grid.isotope({ filter: filters.join(",") });
      });

      function addFilter(filter) {
        if (filters.indexOf(filter) == -1) {
          filters.push(filter);
        }
      }

      function removeFilter(filter) {
        var index = filters.indexOf(filter);
        if (index != -1) {
          filters.splice(index, 1);
        }
      }

      //Test tags focus keyboard...
      $grid.on("arrangeComplete", function (e, filteredItems) {
        console.log('arrangeComplete')
        
        var tabIndex = 1;
        var tabIndex2 = 1;
        var tabIndex3 = 1;

        $(filteredItems).each(function (index, item) {
          $(item.element).find("a.title").attr("tabindex", tabIndex);
          let t = tabIndex++;
          index = (t * 10);
          item.element.setAttribute("tabindex", index);
          
          $(item.element).find(".like").attr("tabindex", tabIndex2);
          tabIndex2 = index + 12;

          $(item.element).find(".checkHeart").attr("tabindex", tabIndex3);
          tabIndex3 = index + 12;
          
        })
        
      }).isotope();;
    }

    //Scroll up & reinitialize
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

    //Change page title
    changePageTitle();
    function changePageTitle() {
      let photographerNameTitle = document.getElementsByClassName(
        "profileName"
      )[0].innerHTML;
      let newPageTitle =
        "FishEye - " + photographerNameTitle + ", Photographer Page";
      document.title = newPageTitle;
    }
  });

// When the user clicks on the button, scroll to the top of the document
document
  .getElementById("contentButton2")
  .addEventListener("click", topFunction2);

function topFunction2() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.location.reload();
}

//EmailJS stuff
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let varsForm = {
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        photographerName: document.querySelector(".profileName").innerHTML,
      };

      emailjs
        .send(
          "service_fqmxk3h",
          "template_uez9mo6",
          varsForm,
          "user_puf8TmtfpdXTG2bY7o9Sk"
        )
        .then(
          function () {
            console.log("SUCCESS!");
            Popup();
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });

  // Display and Close popup message and contact modal
  const modalbg = document.querySelector(".bground");

  function Popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("showPopup");
    if (popup.classList.contains("showPopup")) {
      // Check if the popup is shown
      setTimeout(() => popup.classList.remove("showPopup"), 4000);
      setTimeout(() => (modalbg.style.display = "none"), 4000);
    }
    return false;
  }
};

/* $myIsotope.on("arrangeComplete", function (e, filteredItems) {
  var tabIndex = 1;
  $(filteredItems).each(function (index, item) {
    $(item.element).find("a.title").attr("tabindex", tabIndex);
    tabIndex++;
  });
}); */





////////////////TEST FONCTION
/* 
//Construct photographer profile
function showProfile2(object, mapJSON, contactModal) {
  fetch("./FishEyeDataFR.json")
    .then((response) => {
      return response.json();
    })

    .then((object) => {
      //Get JSON data
      const photog = object["photographers"];
      mapJSON(photog);
      contactModal(photog);
      console.log(mapJSON, contactModal);
  
      for (let i = 0; i < photog.length; i++) {
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
      
        //Delete profiles of other photographers
        let x = profilID[i];
        let y = profURL;
        let currentName = null;
      
        if (x == y) {
          myArticle.style.display = "true";
          currentName = photog[i].name;
        } else {
          myArticle.style.display = "none";
          myArticle.classList.add("Delete");
          document.querySelectorAll(".Delete").forEach((e) => e.remove());
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
    );
}

  
  //Map JSON data
  mapJSON();
function mapJSON(photog) {
  
      const profilID = photog.map((photog) => photog.id);
      console.log(profilID)
    }
    
  
  
  //Contact button construction
  contactModal();
  function contactModal(photog) {
    //photog = this.photog;
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


      
  
 */