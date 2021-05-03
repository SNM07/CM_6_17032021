//Passer au contenu button
function buttonPaC() {
  window.addEventListener("scroll", getScroll);

  let mybutton = document.getElementById("contentButton");

  window.onscroll = scrollTop;

  mybutton.addEventListener("click", function () {
    topFunction();
  });
}

//Detect scroll and show/hide header on scroll
let lastScroll = document.documentElement.scrollTop;

function getScroll() {
  const body = document.body;

  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";

  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    body.classList.remove(scrollDown);
    lastScroll = currentScroll;
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
}

//Show/hide button on scroll
function scrollTop() {
  let mybutton = document.getElementById("contentButton");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Go to top and reinit
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.location.reload();
}

//Export functions
export { buttonPaC, getScroll, scrollTop, topFunction };

