// Here to write the random words(so that they're not in CSS anymore)
const $randomWord = document.getElementById("randomWord");

const $mainSection = document.getElementById("main-section");

const $letsTalkSection = document.getElementById("letstalk");
const $aboutSection = document.getElementById("about");
const $worksSection = document.getElementById("works");

// const $letsTalkY =
//   $letsTalkSection.getBoundingClientRect().top + window.scrollY - 300;
const $letsTalkY = $letsTalkSection.offsetTop - 350;

// const $aboutY =
//   $aboutSection.getBoundingClientRect().top + window.scrollY - 300;

const $aboutY = $aboutSection.offsetTop - 350;

// const $worksY =
//   $worksSection.getBoundingClientRect().top + window.scrollY + 200;
const $worksY = $worksSection.offsetTop - 350;

const $navLinkAbout = document.getElementById("nav-link-about");
const $navLinkWorks = document.getElementById("nav-link-works");
const $navLinkLetstalk = document.getElementById("nav-link-letstalk");

const $navLinksArray = [$navLinkAbout, $navLinkWorks, $navLinkLetstalk];

window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  // console.log("this.scrollY", this.scrollY);

  if (this.scrollY >= $letsTalkY) {
    // console.log("$letsTalkY", $letsTalkY, "scroll.y", this.scrollY);
    // console.log("Let's Talk", $letsTalkY);
    nav.className = "letstalk";

    $navLinkLetstalk.className = "color-dot-nav-active";
    $navLinkAbout.className = "color-dot-nav-inactive";
    $navLinkWorks.className = "color-dot-nav-inactive";
  } else if (this.scrollY >= $worksY && this.scrollY < $letsTalkY) {
    // console.log("Works");
    nav.className = "works";
    $navLinkWorks.className = "color-dot-nav-active";
    $navLinkAbout.className = "color-dot-nav-inactive";
    $navLinkLetstalk.className = "color-dot-nav-inactive";
  } else if (this.scrollY >= $aboutY && this.scrollY < $worksY) {
    // console.log("$aboutY", $aboutY, "scroll.y", this.scrollY);
    $navLinkAbout.className = "color-dot-nav-active";
    $navLinkLetstalk.className = "color-dot-nav-inactive";
    $navLinkWorks.className = "color-dot-nav-inactive";
    // console.log("About", $aboutY);
  } else {
    // console.log("Header");
    nav.className = "";
    $navLinkAbout.className = "color-dot-nav-inactive";
    $navLinkLetstalk.className = "color-dot-nav-inactive";
    $navLinkWorks.className = "color-dot-nav-inactive";
  }
};

// ---------FUNCTION FOR RANDOMIZING WORDS IN HEADER------------

var index = 0;
let wordsArr = ["Service Designer", "Sushi Lover", "Design Thinker"];

setInterval(function() {
  $randomWord.innerText = wordsArr[index++ % wordsArr.length];
}, 2000); //3000 for every 3 seconds, change later if necessary

//console element that is overflowing the screen width ---
//very useful https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function(el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
