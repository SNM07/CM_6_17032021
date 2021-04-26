export default function emailJSParam() {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        let varsForm = {
          first: document.getElementById("first").value,
          last: document.getElementById("last").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
          photographerName: document.querySelector(".profileName").innerHTML,
        };
  
        emailjs
          .send(
            "service_fqmxk3h",
            "template_uez9mo6",
            varsForm,
            "user_puf8TmtfpdXTG2bY7o9Sk"
          )
          .then(
            function () {
              console.log("SUCCESS!");
              Popup();
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      });
  
    // Display and Close popup message and contact modal
    const modalbg = document.querySelector(".bground");
  
    function Popup() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("showPopup");
      if (popup.classList.contains("showPopup")) {
        // Check if the popup is shown
        setTimeout(() => popup.classList.remove("showPopup"), 4000);
        setTimeout(() => (modalbg.style.display = "none"), 4000);
      }
      return false;
    }
  };