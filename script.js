
document.addEventListener("DOMContentLoaded", function () {
   // About Me Button Show/Hide
   let showBtn = document.getElementById("showButton");
   if (showBtn) {
       showBtn.addEventListener("click", function () {
           let hidText = document.getElementById("hiddenText");
           if (hidText) {
               hidText.style.display = hidText.style.display === "block" ? "none" : "block";
               console.log("Text toggled:", hidText.style.display);
           } else {
               console.error("Element with ID 'hiddenText' not found.");
           }
       });
   } 

   // Bar Icon Toggle
   let baricon = document.getElementById("bar-icon");
   if (baricon) {
       baricon.addEventListener("click", function () {
           let navbarLinks = document.getElementById("navbar-link");
           if (navbarLinks) {
               let currentDisplay = window.getComputedStyle(navbarLinks).display;
               navbarLinks.style.display = currentDisplay === "none" ? "flex" : "none";
               navbarLinks.style.backgroundColor = "#120c4c";
               console.log("Navbar toggled:", navbarLinks.style.display);
           } else {
               console.error("Element with ID 'navbar-link' not found.");
           }
       });
   } else {
       console.error("Element with ID 'bar-icon' not found.");
   }
});

