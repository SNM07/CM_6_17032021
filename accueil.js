




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
  const tagFilter = ['all'];

        const photog = obj['photographers'];
  
        for(let i = 0; i < photog.length; i++) {
          const myArticle = document.createElement('article');
          const myImg = document.createElement('img');
          const myH2 = document.createElement('h2');
          const myPara1 = document.createElement('p');
          const myPara2 = document.createElement('p');
          const myPara3 = document.createElement('p');
          const myTags = document.createElement('ul');
          
          myArticle.setAttribute("class", "profileCard");
          myImg.setAttribute("class", "profilePic");
          myH2.setAttribute("class", "profileName");
          myPara1.setAttribute("class", "profileLocation");
          myPara2.setAttribute("class", "profileTagline");
          myPara3.setAttribute("class", "profilePrice");
          myTags.setAttribute("class", "profileTags");
  
          myImg.src = ("./images/Photographers-ID-Photos/" + photog[i].portrait);
          myH2.textContent = photog[i].name;
          myPara1.textContent = photog[i].city + ', ' + photog[i].country;
          myPara2.textContent = photog[i].tagline;
          myPara3.textContent = photog[i].price + '€/jour';
          
  
          const catTags = photog[i].tags;
          for(let j = 0; j < catTags.length; j++) {
            const listTags = document.createElement('li');
            listTags.textContent = catTags[j];
            myTags.appendChild(listTags);
            const profileCardClass = "profileCard";
            myArticle.setAttribute("class", profileCardClass+ " " + catTags.join(" ") );
            
          }
          
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
.then(response => {
   return response.json();
})

    .then(object => {
        const photographers = object.photographers;
        const medias = object.medias;
        console.log(object, photographers, medias);


        showProfile(object);

        /* for (const photog of photographers) {
          const article = Object.assign(
            document.createElement("article"), {
              textContent: photog.name,
              className: `profileCard ${photog.tags.join(" ")}`
            }
          );
          profiles.append(article);
        } */
    });


    filterSelection("all")
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
}*/