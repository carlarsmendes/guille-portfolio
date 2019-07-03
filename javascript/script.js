// Here to write the random words(so that they're not in CSS anymore)
const $randomWord = document.getElementsByClassName("randomWord");




setInterval(function randomWords() {
  // Random number generator
  let wordsArr = ["Service Designer", "Sushi Lover", "Design Thinker"];
  let randomIndex = Math.round(Math.random() * (wordsArr.length - 1));
  // jQuery: Change the word in the span for a random one in the array of words
  $randomWord.innerText = wordsArr[randomIndex];
  //   console.log(wordsArr[randomIndex]);
  //   console.log($randomWord);
}, 2000); //2000 for every 2 seconds, change later if necessary

//console element that is overflowing the screen width --- 
//very useful https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);