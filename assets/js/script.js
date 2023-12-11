//need to fix and probably link JQuery, variables from fetch take longer to populate values

function generateMeal() {
  var mealIngredient = document.getElementById("meal-select").value;
  console.log(mealIngredient);
  var foodURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mealIngredient;

  fetch(foodURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var meals = data.meals;

      if (meals.length > 0) {
        var randomMeal = meals[Math.floor(Math.random() * meals.length)];

        console.log("Random Meal:", randomMeal);
      }
    });
}

function generateDrink() {
  // var drinkCategory = document.getElementById("drinkCategory").value;
  // var drinkGlass = document.getElementById("drinkGlass").value;
  // var mainDrinkIngredient = document.getElementById(
  //   "mainDrinkIngredient"
  // ).value;
  // let drinkApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  // if (drinkCategory !== "") {
  //   drinkApiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`;
  // } else if (drinkGlass !== "") {
  //   drinkApiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${drinkGlass}`;
  // } else if (mainDrinkIngredient !== "") {
  //   drinkApiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${mainDrinkIngredient}`;
  // }

  fetch(drinkApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var drinks = data.drinks;

      if (drinks && drinks.length > 0) {
        var randomDrink = drinks[Math.floor(Math.random() * drinks.length)];

        console.log("Random Drink:", randomDrink);
      } else {
        console.log("No drinks found for the specified criteria.");
      }
    });
}

function generateMovie() {}

function generateDate() {
  generateMeal();
  // generateDrink();
  // generateMovie();
}




































