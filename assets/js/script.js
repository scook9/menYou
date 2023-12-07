


































































































//start code here, Bandsintown API

var foodURL =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

function mealAPI(requestURL) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randIndex = Math.floor(Math.random() * data.meals.length)

      console.log(data);
      console.log(data.meals);
      console.log(data.meals[randIndex]);
      console.log(data.meals[randIndex].idMeal); //returns id to concatinate with the mealDB URL
      console.log("Recipe: " + data.meals[randIndex].strMeal);
      console.log("Recipe URL: https://themealdb.com/meal/" + data.meals[randIndex].idMeal);
      console.log("Image URL: " + data.meals[randIndex].strMealThumb);
      console.log([data.meals[randIndex].strMeal, "https://themealdb.com/meal/" + data.meals[randIndex].idMeal, data.meals[randIndex].strMealThumb])
      return [data.meals[randIndex].strMeal, "https://themealdb.com/meal/" + data.meals[randIndex].idMeal, data.meals[randIndex].strMealThumb];
    });
}

mealAPI(foodURL);
