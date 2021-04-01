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
  
  //import * as currentName from currentName;
  //const myFormTitle = document.createElement("h2");
  //const myFormBody = document.getElementsByClassName("modal-body");
  //myFormTitle.text = currName;
  //myFormBody.appendChild(myFormTitle); 

  const myFormBody = document.getElementsByClassName("modal-body");
  //const myFormName = document.getElementsByClassName("formName");
  //const myFormTitle = document.createElement("h2");
  const myFormTitle = document.getElementById("formTitle");
  //myFormName.id = myFormTitle.textcontent;
  //myFormTitle.textcontent = document.querySelector('.formName').id;
  myFormTitle.innerHTML = "Contactez-moi" + "</br>" + document.querySelector('.profileName').innerHTML;
  //myFormTitle.h2 = myFormName.h2;
  //console.log(x)
  console.log("FORMTITLE", myFormTitle.innerHTML)
  //myFormBody.appendChild(myFormTitle);

  //document.querySelectorAll('contact-form').addEventListener(validate());
  /* window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      
      //this.contact_number.value = Math.random() * 100000 | 0;
      
      // Send form with EmailJS
      //function validate() {
      let varsForm = {
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        photographerName: document.querySelector('.profileName').innerHTML,
    
      };

      emailjs.send("service_fqmxk3h", "template_uez9mo6", varsForm, "user_puf8TmtfpdXTG2bY7o9Sk").then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      ); });

      // Display and Close popup message and modal
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("showPopup");
      if (popup.classList.contains("showPopup")) {
        // Check if the popup is shown
        setTimeout(() => popup.classList.remove("showPopup"), 4000);
        setTimeout(() => (modalbg.style.display = "none"), 4000);
      } // If yes hide it after 4000 milliseconds
      return false;
    } */
}
    