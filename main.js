// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").className = "hidden"

const hearts = document.getElementsByClassName("like-glyph")
//console.log(hearts[0])

//const test = hearts[0]

//console.log(test.textContent)
/*
for (const heart of hearts){
  heart.addEventListener("click", mimicServerCall()
    .then((response => document.getElementsByClassName("like-glyph").textContent = FULL_HEART))
    .catch((error) => {
      document.getElementById("modal").removeAttribute("hidden")
      document.body.append(error.message)}),
  setTimeout(() => {document.getElementById("modal").className = "hidden"}, 3000)
    )
}


for (const heart of hearts){
  heart.addEventListener("click", mimicServerCall()
    .then((resolve) => document.getElementsByClassName("like-glyph").textContent = FULL_HEART)
    .catch((error) => document.getElementById("modal").classList.remove("hidden")))
    setTimeout(() => document.getElementById("modal").className = "hidden", 3000)
  }
*/

for (const heart of hearts){
  heart.addEventListener("click", handleClick)
}


function handleClick() {
  mimicServerCall()
  .then((resolve) => heart.textContent = FULL_HEART)
  .catch((error) => document.getElementById("modal").classList.remove("hidden"))
  setTimeout(() => document.getElementById("modal").className = "hidden", 3000)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
