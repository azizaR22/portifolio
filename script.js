var tablinkEL = document.getElementsByClassName("tab-links");
var tabcontentEl = document.getElementsByClassName("tabcontents");
const msg= document.getElementById("msg");

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



const scriptURL = 'https://script.google.com/macros/s/AKfycbwuOBMlmW5Eln9WP0iZe2sGCab2_kXoVOfV18jCpoF_GI758pwGzBDkpbuplZfJVOXPoQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        // messge will be removed after 5 seconds haddii kale waa uu iska yaalaaa
        setTimeout(function(){
          msg.innerHTML=""
        }, 5000)

        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })
