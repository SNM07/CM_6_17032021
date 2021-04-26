//Global likes and price popup construction
export default function priceGlobalLikes() {
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