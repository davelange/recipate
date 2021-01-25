import mainc_wp_sm from '../assets/img/main-course-sm.webp';
import mainc_wp_m from '../assets/img/main-course-m.webp';
import mainc_png_m from '../assets/img/main-course-m.png';

import soup_wp_sm from '../assets/img/soup-sm.webp';
import soup_wp_m from '../assets/img/soup-m.webp';
import soup_png_m from '../assets/img/soup-m.png';

import fingerf_wp_sm from '../assets/img/fingerfood-sm.webp';
import fingerf_wp_m from '../assets/img/fingerfood-m.webp';
import fingerf_png_m from '../assets/img/fingerfood-m.png';

import salad_wp_sm from '../assets/img/salad-sm.webp';
import salad_wp_m from '../assets/img/salad-m.webp';
import salad_png_m from '../assets/img/salad-m.png';

import dessert_wp_sm from '../assets/img/dessert-sm.webp';
import dessert_wp_m from '../assets/img/dessert-m.webp';
import dessert_png_m from '../assets/img/dessert-m.png';

import snack_wp_sm from '../assets/img/snack-sm.webp';
import snack_wp_m from '../assets/img/snack-m.webp';
import snack_png_m from '../assets/img/snack-m.png';


const store = {
    query: {
        term: '',
        options: [
            {
                name: 'Vegan',
                queryStr: 'isVegan',
                value: false
          
            },
            {
                name: 'Vegetarian',
                queryStr: 'isVegetarian',
                value: false
            },
            {
                name: 'Gluten Free',
                queryStr: 'glutenFree',
                value: false
            }
        ],
        mealType: ''
    },
    popularRecipes: [],
    savedRecipes: []    
}

const mealTypes = [
    {
        name: 'Main Course',
        queryStr: 'main-course',
        img: {
            webpS: mainc_wp_sm,
            webpM: mainc_wp_m,            
            pngM: mainc_png_m
        }
    },
    {
        name: 'Soup',
        queryStr: 'soup',
        img: {
            webpS: soup_wp_sm,
            webpM: soup_wp_m,
            pngM: soup_png_m
        }
    },
    {
        name: 'Finger food',
        queryStr: 'fingerfood',
        img: {
            webpS: fingerf_wp_sm,
            webpM: fingerf_wp_m,
            pngM: fingerf_png_m
        }
    },
    {
        name: 'Salad',
        queryStr: 'salad',
        img: {
            webpS: salad_wp_sm,
            webpM: salad_wp_m,
            pngM: salad_png_m
        }
    },
    {
        name: 'Dessert',
        queryStr: 'dessert',
        img: {
            webpS: dessert_wp_sm,
            webpM: dessert_wp_m,
            pngM: dessert_png_m
        }
    },
    {
        name: 'Snack',
        queryStr: 'snack',
        img: {
            webpS: snack_wp_sm,
            webpM: snack_wp_m,
            pngM: snack_png_m
        }
    }
];

const sample = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 11,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 7,
    "spoonacularScore": 61.0,
    "healthScore": 23.0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 534.63,
    "extendedIngredients": [
        {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "solid",
            "name": "butter",
            "original": "5 Tbsp butter",
            "originalString": "5 Tbsp butter",
            "originalName": "butter",
            "amount": 5.0,
            "unit": "Tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 5.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 5.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "solid",
            "name": "flour",
            "original": "5 Tbsp flour",
            "originalString": "5 Tbsp flour",
            "originalName": "flour",
            "amount": 5.0,
            "unit": "Tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 5.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 5.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 11333,
            "aisle": "Produce",
            "image": "green-pepper.jpg",
            "consistency": "solid",
            "name": "green bell peppers",
            "original": "2 green bell peppers, small dice",
            "originalString": "2 green bell peppers, small dice",
            "originalName": "green bell peppers, small dice",
            "amount": 2.0,
            "unit": "small",
            "meta": [
                "green"
            ],
            "metaInformation": [
                "green"
            ],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "small",
                    "unitLong": "smalls"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "small",
                    "unitLong": "smalls"
                }
            }
        },
        {
            "id": 10111143,
            "aisle": "Produce",
            "image": "celery.jpg",
            "consistency": "solid",
            "name": "celery stalks",
            "original": "2 celery stalks, small dice",
            "originalString": "2 celery stalks, small dice",
            "originalName": "celery stalks, small dice",
            "amount": 2.0,
            "unit": "small",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "small",
                    "unitLong": "smalls"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "small",
                    "unitLong": "smalls"
                }
            }
        },
        {
            "id": 10511282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consistency": "solid",
            "name": "yellow onion",
            "original": "1 yellow onion, small dice",
            "originalString": "1 yellow onion, small dice",
            "originalName": "yellow onion, small dice",
            "amount": 1.0,
            "unit": "small",
            "meta": [
                "yellow"
            ],
            "metaInformation": [
                "yellow"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "small",
                    "unitLong": "small"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "small",
                    "unitLong": "small"
                }
            }
        },
        {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.png",
            "consistency": "solid",
            "name": "garlic cloves",
            "original": "4 garlic cloves, minced",
            "originalString": "4 garlic cloves, minced",
            "originalName": "garlic cloves, minced",
            "amount": 4.0,
            "unit": "",
            "meta": [
                "minced"
            ],
            "metaInformation": [
                "minced"
            ],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 2042,
            "aisle": "Spices and Seasonings",
            "image": "thyme.jpg",
            "consistency": "solid",
            "name": "dried thyme",
            "original": "1 Tbsp dried thyme",
            "originalString": "1 Tbsp dried thyme",
            "originalName": "dried thyme",
            "amount": 1.0,
            "unit": "Tbsp",
            "meta": [
                "dried"
            ],
            "metaInformation": [
                "dried"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 11887,
            "aisle": "Pasta and Rice",
            "image": "tomato-paste.jpg",
            "consistency": "solid",
            "name": "tomato paste",
            "original": "2 heaping Tbsp tomato paste",
            "originalString": "2 heaping Tbsp tomato paste",
            "originalName": "heaping Tbsp tomato paste",
            "amount": 2.0,
            "unit": "Tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 6971,
            "aisle": "Condiments",
            "image": "dark-sauce.jpg",
            "consistency": "liquid",
            "name": "worcestershire sauce",
            "original": "1 1/2 Tbsp Worcestershire sauce",
            "originalString": "1 1/2 Tbsp Worcestershire sauce",
            "originalName": "Worcestershire sauce",
            "amount": 1.5,
            "unit": "Tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1.5,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 1.5,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 1002031,
            "aisle": "Spices and Seasonings",
            "image": "chili-powder.jpg",
            "consistency": "solid",
            "name": "creole seasoning",
            "original": "1 Tbsp creole seasoning",
            "originalString": "1 Tbsp creole seasoning",
            "originalName": "creole seasoning",
            "amount": 1.0,
            "unit": "Tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 6194,
            "aisle": "Canned and Jarred",
            "image": "chicken-broth.png",
            "consistency": "liquid",
            "name": "chicken broth",
            "original": "4 cups chicken broth",
            "originalString": "4 cups chicken broth",
            "originalName": "chicken broth",
            "amount": 4.0,
            "unit": "cups",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 946.352,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 15152,
            "aisle": "Seafood",
            "image": "shrimp.png",
            "consistency": "solid",
            "name": "shrimp",
            "original": "1 1/2 lbs peeled and deveined shrimp",
            "originalString": "1 1/2 lbs peeled and deveined shrimp",
            "originalName": "peeled and deveined shrimp",
            "amount": 1.5,
            "unit": "lbs",
            "meta": [
                "deveined",
                "peeled"
            ],
            "metaInformation": [
                "deveined",
                "peeled"
            ],
            "measures": {
                "us": {
                    "amount": 1.5,
                    "unitShort": "lb",
                    "unitLong": "pounds"
                },
                "metric": {
                    "amount": 680.389,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "solid",
            "name": "butter",
            "original": "1 Tbsp butter",
            "originalString": "1 Tbsp butter",
            "originalName": "butter",
            "amount": 1.0,
            "unit": "Tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 11291,
            "aisle": "Produce",
            "image": "spring-onions.jpg",
            "consistency": "solid",
            "name": "scallions",
            "original": "scallions",
            "originalString": "scallions",
            "originalName": "scallions",
            "amount": 4.0,
            "unit": "servings",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        },
        {
            "id": 11529,
            "aisle": "Produce",
            "image": "tomato.png",
            "consistency": "solid",
            "name": "tomato",
            "original": "diced fresh tomato for garnish",
            "originalString": "diced fresh tomato for garnish",
            "originalName": "diced fresh tomato for garnish",
            "amount": 4.0,
            "unit": "servings",
            "meta": [
                "fresh",
                "diced",
                "for garnish"
            ],
            "metaInformation": [
                "fresh",
                "diced",
                "for garnish"
            ],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        },
        {
            "id": 20444,
            "aisle": "Pasta and Rice",
            "image": "uncooked-white-rice.png",
            "consistency": "solid",
            "name": "rice",
            "original": "rice",
            "originalString": "rice",
            "originalName": "rice",
            "amount": 4.0,
            "unit": "servings",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        }
    ],
    "id": 1098393,
    "title": "Mardi Gras Shrimp Étouffée",
    "readyInMinutes": 90,
    "servings": 4,
    "sourceUrl": "https://www.foodista.com/recipe/VWTYGML5/shrimp-touff-e-mardi-gras-eats",
    "image": "https://spoonacular.com/recipeImages/1098393-556x370.jpg",
    "imageType": "jpg",
    "summary": "The recipe Mardi Gras Shrimp Étouffée can be made <b>in roughly 1 hour and 30 minutes</b>. For <b>$5.35 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. This recipe makes 4 servings with <b>443 calories</b>, <b>40g of protein</b>, and <b>21g of fat</b> each. Not a lot of people made this recipe, and 1 would say it hit the spot. It works well as an expensive main course. It is brought to you by Foodista. If you have butter, garlic cloves, tomato, and a few other ingredients on hand, you can make it. Overall, this recipe earns a <b>tremendous spoonacular score of 87%</b>. <a href=\"https://spoonacular.com/recipes/magnolia-bar-and-grill-crawfish-etouffee-it-doesnt-have-to-be-mardi-gras-to-enjoy-a-cajun-599541\">Magnolia Bar and Grill Crawfish Etouffee – it doesn’t have to be Mardi Gras to enjoy a Cajun</a>, <a href=\"https://spoonacular.com/recipes/mardi-gras-cupcakes-650965\">Mardi Gras Cupcakes</a>, and <a href=\"https://spoonacular.com/recipes/mardi-gras-slaw-198387\">Mardi Gras Slaw</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [],
    "occasions": [],
    "instructions": "<p>Heat up a heavy pot over low heat. Add in the butter and cook for about 10-12 minutes until a light golden brown. Be sure to stir around a few times to prevent burning.</p><p>Whisk in the flour until smooth and cook again for about 8 minutes on low. It should look like a slightly loose peanut butter when its ready.</p><p>Add in the bell peppers, celery and onion. Stir and coat the veggies with the roux. Cook for another 10-15 minutes, until the veggies are softened.</p><p>Stir in the garlic and thyme and cook for a minute, until the garlic is fragrant.</p><p>Add in the tomato paste, Worcestershire sauce, creole seasoning and broth. Simmer on low for 30-40 minutes until slightly thickened. Stir occasionally.</p><p>Stir in the shrimp, shut the heat and put the lid on. Allow to cook for about 5-8 minutes or until cooked through. Stir in a Tbsp of butter right at the end.</p><p>Serve over rice and garnish with sliced scallion and fresh diced tomato.</p>",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Heat up a heavy pot over low heat.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "localizedName": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Add in the butter and cook for about 10-12 minutes until a light golden brown. Be sure to stir around a few times to prevent burning.",
                    "ingredients": [
                        {
                            "id": 1001,
                            "name": "butter",
                            "localizedName": "butter",
                            "image": "butter-sliced.jpg"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 12,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 3,
                    "step": "Whisk in the flour until smooth and cook again for about 8 minutes on low. It should look like a slightly loose peanut butter when its ready.",
                    "ingredients": [
                        {
                            "id": 16098,
                            "name": "peanut butter",
                            "localizedName": "peanut butter",
                            "image": "peanut-butter.png"
                        },
                        {
                            "id": 20081,
                            "name": "all purpose flour",
                            "localizedName": "all purpose flour",
                            "image": "flour.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404661,
                            "name": "whisk",
                            "localizedName": "whisk",
                            "image": "whisk.png"
                        }
                    ],
                    "length": {
                        "number": 8,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 4,
                    "step": "Add in the bell peppers, celery and onion. Stir and coat the veggies with the roux. Cook for another 10-15 minutes, until the veggies are softened.Stir in the garlic and thyme and cook for a minute, until the garlic is fragrant.",
                    "ingredients": [
                        {
                            "id": 10211821,
                            "name": "bell pepper",
                            "localizedName": "bell pepper",
                            "image": "bell-pepper-orange.png"
                        },
                        {
                            "id": 11143,
                            "name": "celery",
                            "localizedName": "celery",
                            "image": "celery.jpg"
                        },
                        {
                            "id": 11215,
                            "name": "garlic",
                            "localizedName": "garlic",
                            "image": "garlic.png"
                        },
                        {
                            "id": 11282,
                            "name": "onion",
                            "localizedName": "onion",
                            "image": "brown-onion.png"
                        },
                        {
                            "id": 2049,
                            "name": "thyme",
                            "localizedName": "thyme",
                            "image": "thyme.jpg"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 15,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 5,
                    "step": "Add in the tomato paste, Worcestershire sauce, creole seasoning and broth. Simmer on low for 30-40 minutes until slightly thickened. Stir occasionally.Stir in the shrimp, shut the heat and put the lid on. Allow to cook for about 5-8 minutes or until cooked through. Stir in a Tbsp of butter right at the end.",
                    "ingredients": [
                        {
                            "id": 6971,
                            "name": "worcestershire sauce",
                            "localizedName": "worcestershire sauce",
                            "image": "dark-sauce.jpg"
                        },
                        {
                            "id": 1002031,
                            "name": "creole seasoning",
                            "localizedName": "creole seasoning",
                            "image": "chili-powder.jpg"
                        },
                        {
                            "id": 11887,
                            "name": "tomato paste",
                            "localizedName": "tomato paste",
                            "image": "tomato-paste.jpg"
                        },
                        {
                            "id": 1001,
                            "name": "butter",
                            "localizedName": "butter",
                            "image": "butter-sliced.jpg"
                        },
                        {
                            "id": 15152,
                            "name": "shrimp",
                            "localizedName": "shrimp",
                            "image": "shrimp.png"
                        },
                        {
                            "id": 1006615,
                            "name": "broth",
                            "localizedName": "broth",
                            "image": "chicken-broth.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 48,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 6,
                    "step": "Serve over rice and garnish with sliced scallion and fresh diced tomato.",
                    "ingredients": [
                        {
                            "id": 11291,
                            "name": "green onions",
                            "localizedName": "green onions",
                            "image": "spring-onions.jpg"
                        },
                        {
                            "id": 11529,
                            "name": "tomato",
                            "localizedName": "tomato",
                            "image": "tomato.png"
                        },
                        {
                            "id": 20444,
                            "name": "rice",
                            "localizedName": "rice",
                            "image": "uncooked-white-rice.png"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/mardi-gras-shrimp-touffe-1098393"
};

export {store, mealTypes, sample};