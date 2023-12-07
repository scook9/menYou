var foodURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

var drinkURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

function mealAPI(requestURL) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randIndex = Math.floor(Math.random() * data.meals.length);

      // console.log("Recipe: " + data.meals[randIndex].strMeal);
      // console.log("Recipe URL: https://themealdb.com/meal/" + data.meals[randIndex].idMeal);
      // console.log("Image URL: " + data.meals[randIndex].strMealThumb);
      console.log([
        data.meals[randIndex].strMeal,
        "https://themealdb.com/meal/" + data.meals[randIndex].idMeal,
        data.meals[randIndex].strMealThumb,
      ]);

      //array with [meal name, recipe link, meal image link]
      return [
        data.meals[randIndex].strMeal,
        "https://themealdb.com/meal/" + data.meals[randIndex].idMeal,
        data.meals[randIndex].strMealThumb,
      ];
    });
}

function drinkAPI(requestURL) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randIndex = Math.floor(Math.random() * data.drinks.length);

      // console.log("Recipe: " + data.drinks[randIndex].strDrink);
      // console.log("Recipe URL: https://thecocktaildb.com/drink/" + data.drinks[randIndex].idDrink);
      // console.log("Image URL: " + data.drinks[randIndex].strDrinkThumb);
      console.log([
        data.drinks[randIndex].strDrink,
        "https://thecocktaildb.com/drink/" + data.drinks[randIndex].idDrink,
        data.drinks[randIndex].strDrinkThumb,
      ]);

      return [
        data.drinks[randIndex].strDrink,
        "https://thecocktaildb.com/drink/" + data.drinks[randIndex].idDrink,
        data.drinks[randIndex].strDrinkThumb,
      ];
    });
}

mealAPI(foodURL);
drinkAPI(drinkURL);
