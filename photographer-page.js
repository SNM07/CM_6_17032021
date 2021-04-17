// Get photographer profile ID
let profURL = window.location.search.substr(4);

console.log(profURL);

// Import contact form
import contactFormModule from "./contactForm.js";

//import Filterizr from './node_modules/filterizr/dist/filterizr.min.js';

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

  const myContactContainer = document.createElement("div");
  const myContact = document.createElement("button");
  const contactText = document.createTextNode("Contactez-moi");
  myContactContainer.setAttribute("class", "contactFormButton");
  myContact.setAttribute("class", "modal-btn");
  myContact.appendChild(contactText);
  myContactContainer.appendChild(myContact);
  profilesPP.appendChild(myContactContainer);

  for (let i = 0; i < photog.length; i++) {
    const myArticle = document.createElement("article");
    const myImg = document.createElement("img");
    const myH1 = document.createElement("h1");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myTags = document.createElement("ul");

    myArticle.setAttribute("class", "profileCardPP");
    myImg.setAttribute("class", "profilePic");
    myH1.setAttribute("class", "profileName");
    myPara1.setAttribute("class", "profileLocation");
    myPara2.setAttribute("class", "profileTagline");
    myPara3.setAttribute("class", "profilePrice");
    myTags.setAttribute("class", "profileTags");

    myImg.src = "./images/Photographers-ID-Photos/" + photog[i].portrait;
    myH1.textContent = photog[i].name;
    myPara1.textContent = photog[i].city + ", " + photog[i].country;
    myPara2.textContent = photog[i].tagline;
    myPara3.textContent = photog[i].price + "€/jour";

    const catTags = photog[i].tags;
    for (let j = 0; j < catTags.length; j++) {
      const listTags = document.createElement("li");

      console.log(catTags[j]);
      listTags.title = catTags[j];
      listTags.setAttribute("data-tags", catTags[j]);
      const listFilter = document.createElement("label");
      listFilter.setAttribute("for", catTags[j]);
      const listInput = document.createElement("input");
      listInput.setAttribute("data-tags", catTags[j]);
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
      console.log("NAME", currentName);
    } else {
      myArticle.style.display = "none";
      myArticle.classList.add("Delete");

      document.querySelectorAll(".Delete").forEach((e) => e.remove());
    }

    myArticle.appendChild(myImg);
    myArticle.appendChild(myH1);
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



  ///////////////////////////////////////
  /* sortMedia();
  function sortMedia(mediasTab, by) {
    var select = document.querySelector("select");

    select.addEventListener("change", function (evt) {
      var by = evt.target.value;

      switch (by) {
        case "Popularite":
          compareMediaPopularity();
          break;
        case 'Date':
          compareMediaDate();
          break;
        case 'Titre':
          compareMediaTitle();
          break;
      }
      return mediasTab;
    });
  }
  console.log(compareMediaDate)

  function compareMediaPopularity() {
    photogLikes.sort(function (a, b) {
      return a.localeCompare(b);
    });
    console.log()
  }
  
  function compareMediaDate() {
    photogDate.sort(function (a, b) {
      return a.localeCompare(b);
    });
      
      console.log()
  }
  
  function compareMediaTitle() {
    //var itemsTitles = photogTitle;
    photogTitle.sort(function (a, b) {
      return a.localeCompare(b);
    });
  } */
  //////////////////////////////////////

  for (let i = 0; i < photogal.length; i++) {
    const myAHREF = document.createElement("a");
    myAHREF.setAttribute("class", "photoAHREF");
    myAHREF.classList.add("filtr-item");
    myAHREF.setAttribute("data-Popularite", photogLikes[i]);
    myAHREF.setAttribute("data-Date", photogDate[i]);
    myAHREF.setAttribute("data-Titre", photogTitle[i]);
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

    

    let x = photogID[i];

    let y = profURL;

    if (x == y) {
      console.log(myPHInput.id);
      let changeID2 = myPHInput.id;
      console.log(changeID2);
      console.log(myPHInput[i]);
      myPHInput.classList.add("Visible");
      console.log(myPHInput.className);
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
      myAHREF.setAttribute(
        "href",
        "./images/" + photogID[i] + "/" + photogImg[i]
      );
      myPhotoCard.appendChild(myPhotoImg);
    }
    if (photogVid[i] !== undefined) {
      const myPhotoVidContainer = document.createElement("div");
      const myPhotoVid = document.createElement("video");
      myPhotoVid.setAttribute("class", "photoVid");
      myPhotoVid.classList.add("lg-video-object");
      myPhotoVid.classList.add("lg-html5");
      myAHREF.setAttribute(
        "href",
        "./images/" + photogID[i] + "/" + photogVid[i]
      );
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

      myPhotoVidContainer.appendChild(myPhotoVid);
      myPhotoCard.appendChild(myPhotoVidContainer);    }

    if (photogVid[i] !== undefined) {
      const myPhotoVidContainer = document.createElement("div");
      const myPhotoVid = document.createElement("video");
      myPhotoVid.setAttribute("class", "photoVid");
      myPhotoVidContainer.setAttribute("display", "none");
      myPhotoVid.classList.add("lg-video-object");
      myPhotoVid.classList.add("lg-html5");
      myAHREF.setAttribute(
        "href",
        "./images/" + photogID[i] + "/" + photogVid[i]
      );
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
      myPhotoVidContainer.appendChild(myPhotoVid);
      myPhotoCard.appendChild(myPhotoVidContainer);
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
    var isChecked =
      document.querySelectorAll("input:checked").length === 0 ? false : true;

    console.log(isChecked);

    let checkClass = document.getElementsByClassName("Visible");

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
    lightGallery(document.getElementById("photoGallery"), {
      //speed: "600",
      //width: "90vw",
      //height: "90%",
      download: false,
      getCaptionFromTitleOrAlt: true,
      preload: 2,
      fullScreen: true,
      hideBarsDelay: 0,
      counter: false,
    });
    console.log(lightGallery());

    //Tag Filters
    const filtButton = document.querySelectorAll(".profileTags > li > input");
    //filtButton.forEach(filtButton =>
    for (var i = 0; i < filtButton.length; i++) {
      filtButton[i].addEventListener("change", function () {
        const cardFilt = document.getElementsByClassName("photoAHREF");

        const cardTag = document.querySelectorAll("[data-tagscard]");
        var cT = [...cardTag].map((i) => i.dataset.tagscard);
        console.log(cT);

        for (var i = 0; i < cT.length; i++) {
          cardFilt[i].classList.add('hidePhoto');

          if (this.checked === true && this.dataset.tags == cT[i]) {
            console.log("Checkbox is checked..", this.dataset.tags);

            cardFilt[i].classList.add('showPhoto');
          } 
        }

        for (var j = 0; j < cT.length; j++) {
          if (this.checked === false && this.dataset.tags == cT[j]) {
            
            console.log("Checkbox is unchecked..", this.dataset.tags);
           
            cardFilt[j].classList.remove('showPhoto');
          } 
        }

        var empty = [].filter.call( filtButton, function( el ) {
          return !el.checked
       });
       
        for (var h = 0; h < cT.length; h++) {
          if (filtButton.length == empty.length) {
            cardFilt[h].classList.remove('hidePhoto');
          }
        }
        
      });
    }

    //var ar = $('.filtr-item').data('popularite');
    //const cardLikes = document.getElementsByClassName("photoAHREF");
    priceGlobalLikes();
    function priceGlobalLikes() {
      const cardLikes = document.querySelectorAll("[data-popularite]");
      var cL = [...cardLikes].map((k) => parseInt(k.dataset.popularite));
      console.log(cL)
      /* for (var k = 0; k < cL.length; k++) {
        var Selection = JSON.parse('[' + $(".filtr-item").data("popularite") + ']');
        console.log(Selection)
      } */
      let array1 = cL;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      console.log(array1.reduce(reducer));
      let globalLikes = array1.reduce(reducer);
      console.log(globalLikes)
      let phPrice = document.getElementsByClassName("profilePrice")[0].innerHTML;
      console.log(phPrice)

      const mainCont = document.getElementById("photographer-main");

      const myPriceGlobLikes = document.createElement("div");
      const myGlobLikes = document.createElement("span");
      const myGlobLikesHeart = document.createElement("span");
      const myGlobPrice = document.createElement("span");

      myPriceGlobLikes.setAttribute("class", "priceGlobLikes");
      myGlobLikes.setAttribute("class", "globLikes");
      myGlobLikesHeart.setAttribute("class", "globLikesHeart");
      myGlobLikesHeart.classList.add("far");
      myGlobLikesHeart.classList.add("fa-heart");
      myGlobPrice.setAttribute("class", "globPrice");

      myGlobLikes.textContent = globalLikes;
      myGlobPrice.textContent = phPrice;

      myPriceGlobLikes.appendChild(myGlobLikes);
      myPriceGlobLikes.appendChild(myGlobLikesHeart);
      myPriceGlobLikes.appendChild(myGlobPrice);

      mainCont.appendChild(myPriceGlobLikes);

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
    $(".profileTags").on("change", e => {

      const liParent = $(e.target.parentElement);
      const input = $(liParent.find('input'));
      const isCheck = input.is(':checked');
      if (isCheck) {
          liParent.css('background-color', '#901C1C');
      } else {
          liParent.css('background-color', 'white');
      }
      //
      // If some start checked and some don't, instead do:
  })
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

    if (window.innerWidth > 800) {
      // init Isotope
      var $grid = $('.photoGall').isotope({
        itemSelector: '.photoAHREF',
        layoutMode: 'fitRows',
        fitRows: {
          columnWidth: 50,
          gutter: 35
        },
        getSortData: {
          Popularite: '.photoLikes parseInt',
          Date: '.photoDate',
          Titre: '.photoTitle',
        }
      });

      // bind filter on select change
      $('.filters-select').on('change', function () {
        var sortValue = this.value;
        $grid.isotope({
          sortBy: sortValue, sortAscending: {
            Popularite: false,
          Date: true,
          Title: true,
      } });
      });

      //$grid.isotope('updateSortData').isotope();
      console.log($grid)
      var fitRows = Isotope.LayoutMode.modes.fitRows.prototype;
    fitRows._resetLayout = function () {

      // pre-calculate offsets for centering each row
      this.x = 0;
      this.y = 0;
      this.maxY = 0;
      this._getMeasurement('gutter', 'outerWidth');
      this.centerX = [];
      this.currentRow = 0;
      this.initializing = true;
      for (var i = 0, len = this.items.length; i < len; i++) {
        var item = this.items[i];
        this._getItemLayoutPosition(item);
      }
      this.centerX[this.currentRow].offset = (this.isotope.size.innerWidth + this.gutter - this.x) / 2;
      this.initializing = false;
      this.currentRow = 0;

      // centered offsets were calculated, reset layout
      this.x = 0;
      this.y = 0;
      this.maxY = 0;
      this._getMeasurement('gutter', 'outerWidth');
    };
    fitRows._getItemLayoutPosition = function (item) {
      item.getSize();
      var itemWidth = item.size.outerWidth + this.gutter;
      // if this element cannot fit in the current row
      var containerWidth = this.isotope.size.innerWidth + this.gutter;
      if (this.x !== 0 && itemWidth + this.x > containerWidth) {

        if (this.initializing)
          this.centerX[this.currentRow].offset = (containerWidth - this.x) / 2;
        this.currentRow++;

        this.x = 0;
        this.y = this.maxY;
      }

      if (this.initializing && this.x == 0) {
        this.centerX.push({ offset: 0 });
      }
      //if (this.centerX[this.currentRow].offset < 0)
      //  this.centerX[this.currentRow].offset = 0;

      var position = {
        x: this.x + (this.initializing ? 0 : this.centerX[this.currentRow].offset),
        y: this.y
      };

      this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
      this.x += itemWidth;

      return position;
    };
    }else{}
    ////////////////
/* $('.filters-select').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  $grid.isotope({ sortBy: 'photoPop' });
  $grid.isotope({ sortBy: 'photoDate' });
  $grid.isotope({ sortBy: 'photoTitre' })
}); */
    
/* $('#sorts').on('click', 'button', function() {
  //Get the element name to sort 
  var sortValue = $(this).attr('data-sort-by');
  //Get the sorting direction: asc||desc 
  var sortDirection = $(this).attr('data-sort-direction');
  //convert it to a boolean 
  sortDirection = sortDirection == 'asc';
  // pass it to isotope 
  $grid.isotope({ sortBy: sortValue, sortAscending: sortDirection });
}); */

/* function compareMediaPopularity() {
  photogLikes.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log()
}

function compareMediaDate() {
  photogDate.sort(function (a, b) {
    return a.localeCompare(b);
  });
}

function compareMediaTitle() {
  //var itemsTitles = photogTitle;
  photogTitle.sort(function (a, b) {
    return a.localeCompare(b);
  });
} */
    ///////////////////////////////////////////////////////////////////////
    //new Filterizr();
    /* $(function () {
      $('.filtr-container').filterizr();
  });
    filterizr.sort('Popularite', 'asc');
    filterizr.sort('Date', 'asc');
    filterizr.sort('Titre', 'asc'); */
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

document
  .getElementById("contentButton2")
  .addEventListener("click", topFunction2);

// When the user clicks on the button, scroll to the top of the document
function topFunction2() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
};




// var x, i, j, l, ll, selElmnt, a, b, c;
// /*look for any elements with the class "custom-select":*/
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /*for each element, create a new DIV that will act as the selected item:*/
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /*for each element, create a new DIV that will contain the option list:*/
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /*for each option in the original select element,
//     create a new DIV that will act as an option item:*/
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /*when an item is clicked, update the original select box,
//         and the selected item:*/
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//       /*when the select box is clicked, close any other select boxes,
//       and open/close the current select box:*/
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle("select-hide");
//       this.classList.toggle("select-arrow-active");
//     });
// }
// function closeAllSelect(elmnt) {
//   /*a function that will close all select boxes in the document,
//   except the current select box:*/
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// /*if the user clicks anywhere outside the select box,
// then close all select boxes:*/
// document.addEventListener("click", closeAllSelect);


/* galleryCenter();
function galleryCenter() {
  if (window.innerWidth > 800) { */
    // Put the following code after isotope js include
    // Override and customize Isotope FitRows layout mode: CENTER each rows
  /*   var fitRows = Isotope.LayoutMode.modes.fitRows.prototype;
    fitRows._resetLayout = function () {

      // pre-calculate offsets for centering each row
      this.x = 0;
      this.y = 0;
      this.maxY = 0;
      this._getMeasurement('gutter', 'outerWidth');
      this.centerX = [];
      this.currentRow = 0;
      this.initializing = true;
      for (var i = 0, len = this.items.length; i < len; i++) {
        var item = this.items[i];
        this._getItemLayoutPosition(item);
      }
      this.centerX[this.currentRow].offset = (this.isotope.size.innerWidth + this.gutter - this.x) / 2;
      this.initializing = false;
      this.currentRow = 0;

      // centered offsets were calculated, reset layout
      this.x = 0;
      this.y = 0;
      this.maxY = 0;
      this._getMeasurement('gutter', 'outerWidth');
    };
    fitRows._getItemLayoutPosition = function (item) {
      item.getSize();
      var itemWidth = item.size.outerWidth + this.gutter;
      // if this element cannot fit in the current row
      var containerWidth = this.isotope.size.innerWidth + this.gutter;
      if (this.x !== 0 && itemWidth + this.x > containerWidth) {

        if (this.initializing)
          this.centerX[this.currentRow].offset = (containerWidth - this.x) / 2;
        this.currentRow++;

        this.x = 0;
        this.y = this.maxY;
      }

      if (this.initializing && this.x == 0) {
        this.centerX.push({ offset: 0 });
      }
      //if (this.centerX[this.currentRow].offset < 0)
      //  this.centerX[this.currentRow].offset = 0;

      var position = {
        x: this.x + (this.initializing ? 0 : this.centerX[this.currentRow].offset),
        y: this.y
      };

      this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
      this.x += itemWidth;

      return position;
    }; */
/*   }
} */

