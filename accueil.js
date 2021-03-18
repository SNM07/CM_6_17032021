fetch("./FishEyeDataFR.json")
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