  
function showProfile(obj) {
    
  
    const photog = obj['photographers'];
    // let profID = photog[0].id;
    let i = 0;

    // for (let i = 0;) {
            const myArticle = document.createElement('article');
            const myImg = document.createElement('img');
            const myH2 = document.createElement('h2');
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myTags = document.createElement('ul');
            
            myArticle.setAttribute("class", "profileCardPP");
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
              listTags.textContent = '# ' + catTags[j];
              myTags.appendChild(listTags);
              const profileCardClass = "profileCardPP";
              myArticle.setAttribute("class", profileCardClass+ " " + catTags.join(" ") );
              
            }
            
            
    
            myArticle.appendChild(myImg);
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myTags);
    
            profilesPP.appendChild(myArticle);
        //   }
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
            } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
              // up
              body.classList.remove(scrollDown);
              body.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
          });
        
        
        //Get the button:
  mybutton = document.getElementById("contentButton");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
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