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
                name: 'Vegatarian',
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
        queryStr: 'main-course'
    },
    {
        name: 'Soup',
        queryStr: 'soup'
    },
    {
        name: 'Finger food',
        queryStr: 'fingerfood'
    },
    {
        name: 'Salad',
        queryStr: 'salad'
    },
    {
        name: 'Dessert',
        queryStr: 'dessert'
    },
    {
        name: 'Snack',
        queryStr: 'snack'
    }
];

export {store, mealTypes};