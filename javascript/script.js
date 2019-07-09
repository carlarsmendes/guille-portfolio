// Here to write the random words(so that they're not in CSS anymore)
const $randomWord = document.getElementById("randomWord");
const $mainSection = document.getElementById("main-section");
const $letsTalkSection = document.getElementById("letstalk");
const $aboutSection = document.getElementById("about");
const $worksSection = document.getElementById("works");

console.log("aboutSection Y", $aboutSection.getBoundingClientRect().top);
console.log("letsTalkSection Y", $letsTalkSection.getBoundingClientRect().top);
console.log("worksSection Y", $worksSection.getBoundingClientRect().top);
console.log("aboutSection Y", $aboutSection.getBoundingClientRect().top);

window.onscroll = () => {
  const nav = document.querySelector("#navbar");

  if (this.scrollY < $aboutSection.getBoundingClientRect().top + 400) {
    nav.className = "";
    console.log("Header");
  } else if (
    this.scrollY >=
    $letsTalkSection.getBoundingClientRect().top + 1000
  ) {
    nav.className = "letstalk";
    console.log("Let's Talk");
  } else if (this.scrollY >= $worksSection.getBoundingClientRect().top + 400) {
    nav.className = "works";
    console.log("Works");
  } else if (this.scrollY >= $aboutSection.getBoundingClientRect().top + 200) {
    nav.className = "about";
    console.log("About");
  } else nav.className = "";
};

// ---------FUNCTION FOR RANDOMIZING WORDS IN HEADER------------

setInterval(function randomWords() {
  // Random number generator
  let wordsArr = ["Service Designer", "Sushi Lover", "Design Thinker"];
  let randomIndex = Math.round(Math.random() * (wordsArr.length - 1));
  // jQuery: Change the word in the span for a random one in the array of words
  // console.log("wordsArr[randomIndex]", wordsArr[randomIndex]);
  $randomWord.innerText = wordsArr[randomIndex];
  //console.log("$randomWord", $randomWord);
  //console.log("$randomWord.innerText", $randomWord.innerText);
}, 2000); //2000 for every 2 seconds, change later if necessary

//console element that is overflowing the screen width ---
//very useful https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function(el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
