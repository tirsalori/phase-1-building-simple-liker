// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").className = "hidden"

const hearts = document.getElementsByClassName("like-glyph")

for (const heart of hearts) {
  heart.addEventListener("click", (e) => {
    if (e.target.innerHTML = EMPTY_HEART) {
      mimicServerCall()
      .then((resolve) => e.target.innerHTML = FULL_HEART)
      .then((resolve) => e.target.className = "activated-heart")
      .catch((error) => document.getElementById("modal").classList.remove("hidden"))
      setTimeout(() => document.getElementById("modal").className = "hidden", 3000)
      console.log(hearts)
    } else if (e.target.innerHTML = FULL_HEART) {
      console.log(e)
    }
  })
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
