export default function contactFormModule() {

  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");

  // Get the <span> element that closes the modal
  const modalClose = document.getElementById("close");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  modalClose.onclick = function () {
    modalbg.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modalbg) {
      modalbg.style.display = "none";
    }
  };

  // Send form with EmailJS
  function validate() {
    const varsForm = {
      first: document.getElementById("first").value,
      last: document.getElementById("last").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      photographerName: document.getElementById("phtographerName").value,
    
    };

    emailjs.send("service_fqmxk3h", "template_ ", varsForm).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    // Display and Close popup message and modal
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("showPopup");
    if (popup.classList.contains("showPopup")) {
      // Check if the popup is shown
      setTimeout(() => popup.classList.remove("showPopup"), 4000);
      setTimeout(() => (modalbg.style.display = "none"), 4000);
    } // If yes hide it after 4000 milliseconds
    return false;
  }
}
