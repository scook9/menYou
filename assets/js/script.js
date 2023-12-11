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
      var mealName = $("#createMealName");
      var mealLink = $("#createMealLink");

      mealName.text(randomMeal["strMeal"]);
      mealLink.text(randomMeal["strMealThumb"]); 
    });
}

function generateDrink() {
  var drinkGlass = document.getElementById("drink-select").value;
  console.log(drinkGlass);
  var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + drinkGlass;

    
  fetch(drinkURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var drinks = data.drinks;

      if (drinks.length > 0) {
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
  generateDrink();
  // generateMovie();
}














































