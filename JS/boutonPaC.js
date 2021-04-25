//Passer au contenu button
export function buttonPaC() {
    
  window.addEventListener("scroll", getScroll);

  //Get the button:
  let mybutton = document.getElementById("contentButton");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = scrollTop;

  mybutton.addEventListener("click", function () {
    topFunction();
  });
}

export function getScroll() {
  const body = document.body;

  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

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
}

export function scrollTop() {
    let mybutton = document.getElementById("contentButton");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//document.getElementById("contentButton").onclick = topFunction();
export function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  profileFilter.filterSelection("all");
}
