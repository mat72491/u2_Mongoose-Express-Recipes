const express = require('express');
const db = require('./db');
const recipeController = require('./controllers/recipeControllers')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/recipes', recipeController.getAllRecipes)
app.get("/recipes/:id", recipeController.getRecipeById)
app.get("/recipes/name/:name", recipeController.getByName)

app.post("/recipes", recipeController.createRecipe)
app.put("/recipes/:id", recipeController.updateRecipe)
app.delete("/recieps/:id", recipeController.deleteRecipe)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))