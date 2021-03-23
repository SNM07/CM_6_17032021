  
// !! ça c'est la fonction qui affiche la profileCard (photo de profile, nom du photographe, ville, tags) RAS
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
 
// !! ça c'est la fonction (en cours de construction) qui me pose problème pour afficher les cards de chaque photos correspondant à l'id du photographe associé
function showGallery(obj) {
    // !! je récupère les éléments du JSON
    const photog = obj['photographers'];
    const photogal = obj['media'];
    // !! je récupère toutes les photographerID du JSON
  const photogID = photogal.map(photogal => photogal.photographerId);
  const photogPrice = photogal.map(photogal => photogal.price);
    
  console.log(photogID);
  console.log(photogPrice);

    // !! ça c'est provisoire, c'est pour avoir un photographe en input mais il va falloir que je trouve un moyen pour que cette page sache sur quel photographe (et quelle ID) l'utilisateur a cliqué sur la page d'accueil et j'ai aucune idée de comment procéder pour ça... Et faudra que ça fonctionne aussi sur la fonction showProfile d'ailleurs
  let photogIdentity = photog[0].id;
  let photogBasePrice = photogal[0].price;

  console.log(photogIdentity);
  console.log(photogBasePrice);
    // !! là je filtre pour ne garder que les photos associées à l'ID du photographe choisi
    const photogPersonCard = photogID.filter((photogID) => photogID === photogIdentity);
    /* let testPrice = photogPersonCard.price;
    console.log(testPrice);
 */
    const photogPersonPrice = photogPrice.filter((photogPrice) => photogPrice === photogBasePrice);
  console.log(photogPersonPrice);
  console.log(photogPersonCard);
  
  
    // !! ici je créer mes éléments HTML 
    for (let i = 0; i < photogPersonCard.length; i++) {
        const myPhotoCard = document.createElement('article');
        const myPhotoImg = document.createElement('img');
        const myPhotoTitle = document.createElement('h2');
        const myPhotoPrice = document.createElement('p');

        let myPhotoLikes = document.createElement('p');
        // !! ci-dessous un des multiples (dizaines de dizaine) test que j'ai fait pour tenter de récupérer les éléments adjacents à photographerID (que sur price pour le moment mais il faudra que ce soit sur tous les objets)
        let testPrice = photogal[i].price;
      console.log(testPrice);
      let testImg = photogal[i].image;
      console.log(testImg);
      
      /* let photogPersonPrice = photogPrice.filter((photogPrice) => photogPrice === photogIdentity);
      console.log(photogPersonPrice); */
        // !! ajout de classes
        myPhotoCard.setAttribute("class", "photoCard");
        myPhotoImg.setAttribute("class", "photoImg");
        myPhotoTitle.setAttribute("class", "photoTitle");
        myPhotoPrice.setAttribute("class", "photoPrice");

        myPhotoLikes.setAttribute("class", "photoLikes");
        // !! c'est en chantier y'a plein de choses que je vais devoir retoucher ici (notamment pour les titres de photos)
        myPhotoImg.src = ("./images/" + photogIdentity + "/" + photogPersonCard[i].image);
        myPhotoTitle.textContent = photogPersonCard.image;
        myPhotoPrice.textContent = photogPersonCard[i].price;
        myPhotoLikes.textContent = photogPersonCard.likes;

        // !! construction de l'HTML
        myPhotoCard.appendChild(myPhotoImg);
        myPhotoCard.appendChild(myPhotoTitle);
        myPhotoCard.appendChild(myPhotoPrice);
        myPhotoCard.appendChild(myPhotoLikes);
        // !! là ça m'a bien construit mon HTML mais il est vide parce que je n'arrive pas à récupérer les données des photos pour l'instant
        photoGallery.appendChild(myPhotoCard);
    }
}
   // !! ça c'est le fetch avec les fonctions     
  fetch("./FishEyeDataFR.json")
  .then(response => {
     return response.json();
  })
  
      .then(object => {
          const photographers = object.photographers;
          const medias = object.medias;
          console.log(object, photographers, medias);
  
          showProfile(object);
          
          showGallery(object);
        
        
    
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