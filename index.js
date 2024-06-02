

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

//-----------------------------------------------deschidere și închidere meniu---------------------------------------------------------

let closebtn = document.getElementById("close-menu-btn");
let openbtn = document.getElementById("open-menu-btn");
closebtn.addEventListener("click", closemenu);
openbtn.addEventListener("click", openmenu);


//---------------------------------------------- afișare skilluri, experiență și educație---------------------------------------------

let skillTabsActive = document.getElementById("skills-tab");

skillTabsActive.addEventListener("click", ev => opentab(ev, 'skills'));

function opentab(ev, tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  ev.target.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let skillTabsActiveEx = document.getElementById("skills-tab-ex");

skillTabsActiveEx.addEventListener("click", ev => opentab(ev, 'experience'));

function opentab(ev, tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  ev.target.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let skillTabsActiveEd = document.getElementById("skills-tab-ed");

skillTabsActiveEd.addEventListener("click", ev => opentab(ev, 'education'));

function opentab(ev, tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  ev.target.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


//--------------------------------------------------------sidemenu open/close----------------------------------

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


// --------------------------------------------------Active form via Google Sheets-------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbxO0JcXH_jOeWPS9IixKQNAtLl_fm6iDfVR7Yw0_BlDJ6TC8cZh-KKO5j9860G6Sjz3/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")


function showSpinner() {
  document.getElementById("spinner-overlay").style.display = "block";
}

function hideSpinner() {
  document.getElementById("spinner-overlay").style.display = "none";
}

form.addEventListener('submit', e => {
  e.preventDefault()
  showSpinner();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 2000)
      form.reset()
      hideSpinner();
    })
    .catch(error => console.error('Error!', error.message))
})



// ------------------Back to Top Btn-------------------------

let goToTopBtn = document.getElementById("go-to-top-button");
window.onscroll = () => {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}
goToTopBtn.onclick = () => {
  goToTopBtn.style.display = "none";
  window.scroll({
    top: 0,
  })
}




