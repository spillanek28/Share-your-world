

// Variables
var score = 0;
var currentQ = 0;

// Constants
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");

// Check answer function
function checkAnswer(question, result) {
    let answer = document.querySelector(`input[name="${question}"]:checked`);
    let qResult = document.querySelector(result);
    qResult.style.display = "block";

    if (answer) {
        document.querySelector("#" + question).disabled = true;
        if (answer.value === "correct") {
          qResult.innerText = "Correct";
          score+=1;
          scoreText.innerText = `Score: ${score}`;
          nextQ();
        } else {
          qResult.innerText = "Incorrect";
          nextQ();
        }
      } else {
        qResult.innerText = "Please select an answer";
      }
}

// Display first question
questions[0].style.display = "block";
questions[0].style.opacity = 1;

// Next question function
function nextQ() {
    questions[currentQ].classList.add("fade-out");
    setTimeout(() => {
    if (currentQ < questions.length - 1) {
    questions[currentQ].style.display = "none";
    currentQ++;
    questions[currentQ].classList.add("slide-left");
    questions[currentQ].style.display = "block";
    } 
}, "2000");
}
/* Lazy Loading Images*/
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
        imageObserver.unobserve(entry.target);
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

// Create constants for superhero form
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

const characterName = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterCountry = document.querySelector("#country-choice");
const characterOrigin = document.querySelector("#origin-text");

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 4;
  } else if (currentHeroIndex > 4) {
   } else if (currentHeroIndex > heroSlides.length - 1) {
    currentHeroIndex = 0;
  }

heroSlides[currentHeroIndex].classList.add("active");

}

// Update Copyright Year function 
const currentDate = new Date();
document.querySelector("#copyrightYear").innerText = currentDate.getFullYear();