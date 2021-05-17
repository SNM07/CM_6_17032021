//Contact form modal parameters
function contactFormModule() {
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");

  // Get the <span> element that closes the modal
  const modalClose = document.getElementById("close");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
    $("#first").focus();
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

  // When the user hit escape close the modal
  $(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      modalbg.style.display = "none";    }
  });

  //Set photographer name in contact form
  const myFormTitleName = document.getElementById("formTitleName");
  myFormTitleName.innerHTML =
    document.querySelector(".profileName").innerHTML;
}

//Export function
export { contactFormModule as default };
