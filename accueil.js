/*fetch("./FishEyeDataFR.json")
.then(response => {
   return response.json();
})
    .then(photographers => {
        
        return console.log(photographers);
    


      
      
    });

    function profileTemplate(photographers) {
        return `
          <div class="profile">
          <img class="profile-photo" src="${photographers.portrait}">
          <h2 class="profile-name">${photographers.name}</h2>
          <p class="profile-location"> ${photographers.city}, ${photographers.country}</p>
          <p class="profile-tagline"> ${photographers.tagline}</p>
          <p class="profile-price"> ${photographers.price}</p>
          <p class="profile-tags"> ${photographers.tags}</p>
          </div>
        `;
      }

    document.getElementById("profiles").innerHTML = `
    
        ${photographers.map(profileTemplate).join("")}
      `;
      */
      // const header = document.querySelector('header');
      const section = document.querySelector('profiles');
  
      let requestURL = './FishEyeDataFR.json';
      let request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
  
      request.onload = function() {
        const profileTemplate = request.response;
        // populateHeader(profileTemplate);
        showProfile(profileTemplate);
      }
  
      /* function populateHeader(obj) {
        const myH1 = document.createElement('h1');
        myH1.textContent = obj['squadName'];
        header.appendChild(myH1);
  
        const myPara = document.createElement('p');
        myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
        header.appendChild(myPara);
      } */
  
      function showProfile(obj) {
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
          } 
  
          myArticle.appendChild(myImg);
          myArticle.appendChild(myH2);
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myTags);
  
          profiles.appendChild(myArticle);
        }
      }