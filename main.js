//QUERY SELECTORS:
var letsCookButton = document.querySelector(".lets-cook-button");
var cookPotIcon = document.querySelector(".cook-pot-icon");
var resultBox = document.querySelector(".result-box");
var select = document.querySelectorAll(".select");

var currentDish;

//EVENT LISTENERS:
letsCookButton.addEventListener("click", displayDish);


//FUNCTIONS:

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
}

function chooseSide(){
  currentDish = sides[getRandomIndex(sides)];
}

function chooseMains(){
  currentDish = mains[getRandomIndex(mains)];
}

function chooseDessert(){
  currentDish = desserts[getRandomIndex(desserts)];
}

function randomizeDish() {
  var randomSideDish = chooseSide();
  var randomMainDish = chooseMains();
  var randomDessert = chooseDessert();
  if (select[0].checked) {
    displayDish(randomSideDish);
  } else if (select[1].checked) {
    displayDish(randomMainDish);
  } else if (select[2].checked) {
    displayDish(randomDessert);
  } else if (select[3].checked) {
    displayMeal(randomSideDish, randomMainDish, randomDessert);
  }
}

function displayDish(){
  cookPotIcon.classList.add("hidden");
  resultBox.insertAdjacentHTML("afterbegin", `
    <a>You should make:</a>
    <a class = "statement">${currentDish}!</a>
  `);
}
