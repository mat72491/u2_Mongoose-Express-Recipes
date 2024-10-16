const { Recipe } = require('../models')

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (e) {
        return res.status(500).send(e.message)
    }console.log(recipes)
}

module.exports = {
    getAllRecipes
}

const getRecipeById = async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findById(id);
      if (recipe) {
        return res.json(recipe);
      }
      return res.status(404).send(`that recipe with ID not found`);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

  const createRecipe = async (req, res) => {
    try {
      const recipe = await new Recipe(req.body);
      await recipe.save();
      return res.status(201).json({ recipe });
    } catch (e) {
      return res.status(500).json({ error: error.message });
    }
  };

  const updateRecipe = async (req, res) => {
    try {
      let { id } = req.params;
      let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
      if (recipe) {
        return res.status(200).json(recipe);
      }
      throw new Error("recipe not found");
    } catch (e) {
      return res.status(500).send(error.message);
    }
  };

  const deleteRecipe = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Product.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Recipe deleted");
      }
      throw new Error("Recipe not found");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

  const getByName = async (req, res) => {
    try {
      const { name } = req.params;
      const recipe = await Recipe.findOne({ "name": name });
      if (recipe) {
        return res.json(recipe);
      }
      return res.status(404).send(`Recipe with name '${name}' not found. Check your capitalization.`);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }

  module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getByName
  };