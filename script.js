var tablinkEL = document.getElementsByClassName("tab-links");
var tabcontentEl = document.getElementsByClassName("tabcontents");

function opentab(tabname) {
  for (tablink of tablinkEL) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontentEl) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


// variable for side menu

var sidemenuEl = document.getElementById("sidemenu");
console.log("clicked",sidemenuEl);

function openme(){

  sidemenuEl.style.right= "0";

}
function closeme(){

  sidemenuEl.style.right= "-200px";

}