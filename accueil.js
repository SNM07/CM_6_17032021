/* const section = document.querySelector('profiles');
  
      let requestURL = './FishEyeDataFR.json';
      let request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
  
      request.onload = function() {
        const profileTemplate = request.response;
        // populateHeader(profileTemplate);
        showProfile(profileTemplate);
} */

function showProfile(obj) {
  const tagFilter = ["all"];

  const photog = obj["photographers"];

  for (let i = 0; i < photog.length; i++) {
    const myArticle = document.createElement("article");
    const myImg = document.createElement("img");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myTags = document.createElement("ul");

    myArticle.setAttribute("class", "profileCard");
    myArticle.dataset.dataid = photog[i].id;
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
      listTags.textContent = "# " + catTags[j];
      myTags.appendChild(listTags);
      const profileCardClass = "profileCard";
      myArticle.setAttribute(
        "class",
        profileCardClass + " " + catTags.join(" ")
      );
    }
    /* redirect();
          function redirect() { */
    let myRedirect =
      "location.href=" +
      "'" +
      "./photographer-page.html" +
      "?id=" +
      photog[i].id +
      "'";
    // myArticle.onclick = location.href = myRedirect;
    myArticle.setAttribute("onclick", myRedirect);

    console.log(myRedirect);
    /* for (const myTags of photog) {
            const myArticle = Object.assign(
              document.createElement("li"), {
                textContent: photog.name,
                className: `profileCard ${photog.tags.join(" ")}`
              }
            );
            profiles.append(article);
          } */

    myArticle.appendChild(myImg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myTags);

    profiles.appendChild(myArticle);
  }
}

fetch("./FishEyeDataFR.json")
  .then((response) => {
    return response.json();
  })

  .then((object) => {
    const photographers = object.photographers;
    const medias = object.medias;
    console.log(object, photographers, medias);

    showProfile(object);

    filterSelection("all");

    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("profileCard");
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

      for (i = 0; i < x.length; i++) {
        profRemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) profAddClass(x[i], "show");
      }
      console.log(c);
    }

    // Show filtered elements
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

    // Hide elements that are not selected
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

    // document.body.onload = profAddClass("profileCard", "show");

    // document.getElementsByClassName("profileCard").addEventListener("load", filterSelection);

    // window.onload = filterSelection("all");

    // Add active class to the current control button (highlight it)
    var btnContainer = document.getElementById("filterButtons");

    var btns = btnContainer.getElementsByClassName("filterButton");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

    /* for (const photog of photographers) {
          const article = Object.assign(
            document.createElement("article"), {
              textContent: photog.name,
              className: `profileCard ${photog.tags.join(" ")}`
            }
          );
          profiles.append(article);
        } */
    const body = document.body;
    // const menu = document.querySelector(".page-header");
    /* const nav = document.querySelector(".page-header nav");
        const menu = document.querySelector(".page-header .menu"); */
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    /* menu.addEventListener("click", () => {
          body.classList.toggle("menu-open");
        }); */

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

filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("profileCard");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

  for (i = 0; i < x.length; i++) {
    profRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) profAddClass(x[i], "show");
  }
  console.log(c);
}

// Show filtered elements
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

// Hide elements that are not selected
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

// document.body.onload = profAddClass("profileCard", "show");

// document.getElementsByClassName("profileCard").addEventListener("load", filterSelection);

// window.onload = filterSelection("all");

/*
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filterButtons");

var btns = btnContainer.getElementsByClassName("filterButton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    
  });
  
} */

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  /* if (document.body.classList.contains("scrollDown")){
    document.body.classList.remove("scrollDown");
    document.body.classList.add("scrollUp");
  } */
}
