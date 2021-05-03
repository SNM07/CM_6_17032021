 //Scroll up & reinitialize
let lastScroll =  document.documentElement.scrollTop;
 
//Detect scroll and show/hide header
function scrollUpDown() {
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
 function scrollFunction() {
  const mybutton = document.getElementById("contentButton2"); 
   if (
     document.body.scrollTop > 80 ||
     document.documentElement.scrollTop > 80
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
}
 
//Scroll top and reinit on click
function topFunction2() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.location.reload();
}
  
//Export functions
export { scrollUpDown, scrollFunction, topFunction2 };