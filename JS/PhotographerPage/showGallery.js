//Construct photographer gallery
function showGallery(obj) {
  //Heading construction
  headingGalleryPP();
  function headingGalleryPP() {
    const myH2 = document.createElement("h2");
    myH2.setAttribute("aria-label", "photographer gallery");
    myH2.innerHTML = "gallery";
    myH2.style.display = "none";
    photoGallery.appendChild(myH2);
  }

  // Get photographer profile ID
  let profURL = window.location.search.substr(4);

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

  //Create gallery cards
  for (let i = 0; i < photogal.length; i++) {
    createGalleryCard(
      i,
      photogID,
      profURL,
      photogPrice,
      photogImg,
      photogVid,
      photogTitle,
      photogLikes,
      photogPhID,
      photogDate,
      photogTags
    );
  }
  //Like +  Local Storage
  heartLike();
}

//////////////////////////////

//Create gallery card
function createGalleryCard(
  i,
  photogID,
  profURL,
  photogPrice,
  photogImg,
  photogVid,
  photogTitle,
  photogLikes,
  photogPhID,
  photogDate,
  photogTags
) {
  //Only display card of selected photographer
  let x = photogID[i];
  let y = parseInt(profURL);

  if (x === y) {
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
    const myPHSpan = document.createElement("span");

    //Card container attributes
    myAHREF.setAttribute("class", "photoAHREF");
    myAHREF.setAttribute("data-Popularite", photogLikes[i]);
    myAHREF.setAttribute("data-Date", photogDate[i]);
    myAHREF.setAttribute("data-Titre", photogTitle[i]);
    myAHREF.setAttribute("title", photogTitle[i]);
    myAHREF.setAttribute("alt", photogTitle[i]);
    myAHREF.setAttribute("aria-label", "image closeup view");
    myAHREF.setAttribute("data-html", "#lg-video-" + photogPhID[i]);
    myAHREF.setAttribute("data-val", "");
    myAHREF.classList.add("filtr-item");
    myAHREF.classList.add(photogTags[i]);

    //Card description attributes
    myPhotoInfos.setAttribute("class", "photosInfos");

    //Likes zone container attributes
    myPhotoLikesCount.setAttribute("class", "photoLikesCount");

    //Heart container attributes
    myPhotoHeart.className = "like";
    myPhotoHeart.setAttribute("aria-label", "likes");
    myPhotoHeart.setAttribute("tabindex", "0");

    //Heart checkbox input attributes
    myPHInput.type = "checkbox";
    myPHInput.id = "heart" + photogPhID[i];
    myPHInput.setAttribute("onclick", "event.stopPropagation();");
    myPHInput.classList.add("checkHeart");
    myPHInput.setAttribute("tabindex", "0");

    //Heart checkbox label attributes
    myPHLabel.htmlFor = "heart" + photogPhID[i];
    myPHLabel.className = "far fa-heart";
    myPHLabel.setAttribute("onclick", "event.stopPropagation();");

    //Label's span attributes
    myPHSpan.className = "labeltext";
    myPHSpan.innerHTML = ".";

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
      myAHREF.setAttribute(
        "data-src",
        "./images/" + photogID[i] + "/" + photogImg[i]
      );
      myPhotoCard.appendChild(myPhotoImg);
    }

    //Only display used videos + attributes & append (and duplicate version for lightbox)
    createVid(
      photogVid[i],
      photogPhID[i],
      photogID[i],
      myPhotoCard,
      "none",
      "-1"
    );
    createVid(
      photogVid[i],
      photogPhID[i],
      photogID[i],
      myPhotoCard,
      "block",
      "0"
    );

    //Append elements
    myPHLabel.appendChild(myPHSpan);
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
  }
}

//Create video container
function createVid(
  photogVid,
  photogPhID,
  photogID,
  myPhotoCard,
  displayParam,
  tabindexParam
) {
  if (photogVid !== undefined) {
    const myPhotoVidContainer = document.createElement("div");
    const myPhotoVid = document.createElement("video");
    myPhotoVid.setAttribute("class", "photoVid");
    myPhotoVid.setAttribute("tabindex", tabindexParam);
    myPhotoVidContainer.setAttribute("display", displayParam);
    myPhotoVidContainer.setAttribute("id", "lg-video-" + photogPhID);
    myPhotoVid.classList.add("lg-video-object");
    myPhotoVid.classList.add("lg-html5");
    myPhotoVid.setAttribute("controls", "controls");
    const myPhotoVidSource = document.createElement("source");
    myPhotoVidSource.setAttribute(
      "src",
      "./images/" + photogID + "/" + photogVid
    );
    myPhotoVidSource.setAttribute("type", "video/mp4");
    myPhotoVid.appendChild(myPhotoVidSource);
    myPhotoVidContainer.appendChild(myPhotoVid);
    myPhotoCard.appendChild(myPhotoVidContainer);
  }
}

///////////////////////////////

//Like +  Local Storage
function heartLike() {
  let myPHInput = document.getElementsByClassName("checkHeart");
  let myPhotoHeart = document.getElementsByClassName("like");

  for (let i = 0; i < myPHInput.length; i++) {
    var localStorage = [];
    myPHInput[i].addEventListener("change", function () {
      var c = [];

      var id = this.id;
      var check = true;

      if (this.checked == true) {
        const that = this;

        let h = that.parentNode.previousSibling.innerHTML;
        h = ++h;
        that.parentNode.previousSibling.innerHTML = h;
        check = this.checked;
      } else {
        check = false;

        const that = this;

        let h = that.parentNode.previousSibling.innerHTML;
        h = --h;
        that.parentNode.previousSibling.innerHTML = h;
        that.parentNode.blur();
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

      if (document.querySelectorAll(this.id).checked) {
        c.push(this.id);
      }
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

  //Allow likes from keypress
  $(function () {
    $(myPhotoHeart).keydown(function (event) {
      switch (event.which) {
        case 32: // space key
          event.preventDefault();
          event.stopPropagation();

          //$(".photoAHREF").on("click", function (e) { e.preventDefault(); });
          $($("input", this)[0]).trigger("click");
          break;
      }
    });
  });
}

//Export functions
export { showGallery, heartLike, createVid };
