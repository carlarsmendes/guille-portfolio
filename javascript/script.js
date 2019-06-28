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
