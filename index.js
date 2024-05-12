

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}


// ------------------Active form via Google Sheets-------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbxO0JcXH_jOeWPS9IixKQNAtLl_fm6iDfVR7Yw0_BlDJ6TC8cZh-KKO5j9860G6Sjz3/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 2000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



// ------------------Back to Top Btn-------------------------

var goToTopBtn = document.getElementById("go-to-top-button");
console.log(goToTopBtn);
window.onscroll = () => {
  scrollFunction();
};
console.log(window);
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




