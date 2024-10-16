const db = require('../db')
const { Recipe, Cuisine, Directions } = require('../models')

db.on('error',console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {

const italy = await Cuisine.findOne({origin: 'Italy'})
const england = await Cuisine.findOne({origin: 'England'})

const frittata = await Directions.find({name: 'Calico Pepper Frittata'})
const crostata = await Directions.find({name: 'Blueberry Crostata'})
const toadInTheHole = await Directions.find({name: 'Toad in the Hole'})
const prosciuttoSoup = await Directions.find({name: "Prosciutto and Bean Soup"})
const bangersAndMash = await Directions.find({name: 'Bangers and Mash'})
const chickenParmesan = await Directions.find({name: 'Chicken Parmesan'})

    const recipes = [  
        {
        name: 'Calico Pepper Frittata',
        origin: italy._id,
        meal: 'breakfast',
        yield: '8 servings',
        servingSize: '1 wedge',
        calories: 201,
        prepTime: '30 min',
        ingredients: ['5 large eggs', '1-1/4 cups egg substitute', '1 tablespoon grated Romano cheese', '1/2 teaspoon salt', '1/8 teaspoon peper', '1 tablespoon olive oil', '1 medium sweet red pepper, chopped', '1 medium green pepper, chopped', '1 jalapeno pepper, seeded and chopped', '1 medium onion, chopped', '1 garlic clove, minced'],
        directions: frittata[0]._id
    },
    {
        name: 'Blueberry Crostata',
        origin: italy._id,
        meal: 'breakfast',
        yield: '4 servings',
        servingSize: '1 wedge',
        calories: 250,
        prepTime: '1 hr 5 min',
        ingredients: ['2 cups fresh blueberries', '1/4 cup granulated sugar', '2 tablespoons flour', '1-1/2 teaspoons fresh lemon juice', '1 Pillsbury refrigerated pie crust', '1 tablespoon half & half or cream', 'sparkling sugar'],
        directions: crostata[0]._id
    },
    {
        name: 'Toad in the Hole',
        origin: england._id,
        meal: 'lunch',
        yield: '6 servings',
        servingSize: '1 wedge',
        calories: 552,
        prepTime: '50 min',
        ingredients: ['140g plain flour', '3 eggs', '330ml milk', '2 teaspoons Dijon mustard', '2 tablespoons vegetable oil', '8 Cumberland sausages', '8 sage leaves', '4 rosemary sprigs'],
        directions: toadInTheHole[0]._id
    },
    {
        name: 'Prosciutto and Bean Soup',
        origin: italy._id,
        meal: 'lunch',
        yield: '4 servings',
        servingSize: '1 cup',
        calories: 400,
        prepTime: '40 min',
        ingredients: ['2 cups chopped prosciutto, 2 cups dried cannellini beans, olive oil, 2 cloves garlic, tomato passata, water or broth, dried oregano and basil, fresh thyme or rosemary, red pepper flakes'],
        directions: prosciuttoSoup[0]._id
    },
    {
        name: 'Bangers and Mash',
        origin: england._id,
        meal: 'dinner',
        yield: '4 servings',
        servingSize: '2 sausages, 1 cup mash',
        calories: 407,
        prepTime: '50 min',
        ingredients: ['2 lbs fres veal or chicken sausages (8 large sausages), 2 pounds Yukon Gold potatoes, peeled and diced, Kosher salt, 4 tablespoons (1/2 stick) unslted butter (diced), 4 ounces creme fraiche, 1/2 cup whole milk, 2 teaspoons Dijon mustard, 2 teaspoons whole-grain or coarse mustard, 1 teaspoon dry mustard, 1 teaspoon freshly ground black pepper, fresh parsley'],
        directions: bangersAndMash[0]._id
    },
    {
        name: 'Chicken Parmesan',
        origin: italy._id,
        meal: 'dinner',
        yield: '4 servings',
        servingSize: '1 chicken breast',
        calories: 1135,
        prepTime: '45 min',
        ingredients: ['4 skinless boneless chicken breast halves, salt, pepper, 2 large eggs, 1 cup panko bread crumbs, 3/4 up grated Parmesan, 2 tablespoons all-purpose flour, 1/2 cup olive oil for frying, 1/2 cup tomato sauce, 1/4 cup fresh mozzarella cut into small cubes, 1/4 cup chopped fresh basil, 1/2 cup grate provolone, 2 teaspoons olive oil'],
        directions: chickenParmesan[0]._id
    },
    
    


]
await Recipe.insertMany(recipes)
console.log('Created recipes!')
}

const run = async () => {
    await main()
    db.close()
}
run()