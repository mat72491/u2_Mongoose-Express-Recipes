const db = require('../db')
const { Recipe, Cuisine, Directions } = require('../models')

db.on('error',console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const directions = [
    {
        name: 'Calico Pepper Frittata',
        directions: [{step1: 'In a large bowl, whisk the first five ingredients until blended.'},
                     {step2: 'In a large nonstick skillet, heat oil over medium-high heat. Add peppers and onion; cook and stir until tender. Add garlic; cook 1 minute longer. Pour in egg mixture. Mixture should set immediately at edges. Cook, uncovered, 8-10 minutes or until eggs are completely set, pushing cooked portions toward the center and letting uncooked eggs flow underneath. Cut into wedges.'}
                    ]

    },
    {
        name: 'Blueberry Crostata',
        directions: [{step1: 'Using a large bowl, toss the berries with sugar, flour and lemon juice.'},
                     {step2: 'Carefully unroll the pie crust onto a parchment-lined baking sheet.'},
                     {step3: 'Mound the berries in the center of the dough, leaving about 2-inches around the edge, Fold the dough up and over the fruit. Using a pastry brush, brush the edges with the cream and sprinkle with sparkling sugar.'},
                     {step4: 'Bake in pre-heated 375F oven until crust is golden brown and filling is bubbling, 45-50 minutes.'},
                     {step5: 'Let cool before serving. Dust with Confectioners’ Sugar if you wish.'}
        ]
    },
    {
        name: 'Toad in the Hole',
    directions: [{step1: 'Heat oven to 460F. In a food processor, combine the flour, eggs, milk, mustard and some salt and pepper, blitz until smooth, then leave to rest for 30 mins.'},
                 {step2: 'Pour the oil into a metal roasting tin about 12 x 9in and 3in deep. Brush the oil all over the sides and bottom, then place in the oven. When the roasting tin is very hot and smoking, place the sausages inside, evenly spread out, and cook for 5 mins.'},
                 {step3: 'Give the rested batter a stir and pour into the really hot tin – take care as it may spit. Quickly sprinkle over the sage leaves and rosemary, then place in the middle of the oven. Do not open the door for 25 mins, then check – if needed, cook for a further 5-10 mins. Cook until puffed up and brown and the batter is completely cooked through. Serve straight from the dish.'}
                ]
    },
    {
        name: 'Prosciutto and Bean Soup',
    directions: [{step1: 'In a large pot add the olive oil, garlic, puree, water, oregano, basil, hot pepper flakes, prosciutto and beans.'},
                 {step2: 'Stir to combine then bring to a boil. Lower the heat to a gentle simmer and cook until the beans are tender and the soup has thickened. If needed add more water.'},
                 {step3: 'Taste and adjust salt if needed. Serve with crusty Italian bread.'}
                ]
    },
    {
        name: 'Bangers and Mash',
    directions: [{step1: 'Preheat the oven to 425 degrees F.'},
                 {step2: 'Place a baking rack on a sheet pan and arrange the sausages in one layer on the baking rack. Bake for 18 to 20 minutes, until the sausages are just cooked through.'},
                 {step3: 'Meanwhile, place the potatoes in a large saucepan with 1 tablespoon of salt and enough water to cover the potatoes. Bring to a boil and simmer for 20 to 25 minutes, until the potatoes are very tender. Drain the potatoes in a colander and return them to the saucepan. Add the butter, creme fraiche, milk, Dijon mustard, whole-grain mustard, dry mustard, 1 tablespoon salt, and the pepper and beat the potatoes in the pan with a handheld mixer on low speed until very smooth and creamy.'},
                 {step4: 'To serve, mound a generous portion of potatoes on a dinner plate and top with sausages that have been cut in half diagonally. Sprinkle with fresh chopped parsley and serve'}
                ]
    },
   {
     name: 'Chicken Parmesan',
    directions: [{step1: 'Preheat the oven to 450 degrees F.'},
                 {step2: 'Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch.'},
                 {step3: 'Season chicken thoroughly with salt and pepper. Using a sifter or strainer; sprinkle flour over chicken breasts, evenly coating both sides'},
                 {step4: 'Beat eggs in a shallow bowl and set aside. Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside. Dip a flour-coated chicken breast in beaten eggs. Transfer breast to the bread crumb mixture, pressing crumbs into both sides. Repeat for each breast. Let chicken rest for 10 to 15 minutes.'},
                 {step5: 'Heat 1/2 inch olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken in the hot oil until golden, about 2 minutes per side. The chicken will finish cooking in the oven.'},
                 {step6: 'Transfer chicken to a baking dish. Top each breast with 2 tablespoons tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle remaining Parmesan over top and drizzle each with 1/2 teaspoon olive oil.'},
                 {step7: 'Bake in the preheated oven until cheese is browned and bubbly and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).'}
                ]
    }


]
    await Directions.insertMany(directions)
    console.log('Created directions!')
}
const run = async () => {
    await main()
    db.close() //as soon as main function is done we close the db in case there's an error
}
run()