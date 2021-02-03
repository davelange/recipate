//toggle options in query object
function toggleQueryOption( query, toggled ) {
    let newOptions = query.options.map( (item, i) => { 
        if( i === toggled ) item.value = !item.value;
        return item;
    })  
    return {...query, options: newOptions};
}

//set option in query object
function setMealOption( query, selected ) {
    return {...query, mealType: selected};
}

//set search term in query object
function setQueryTerm( query, str ) {    
    return {...query, term: str};
}

//create time estimate str
function recipeTimeCalc( n ) {
    if( n > 60 ) {
        return (n%60) ? `${Math.floor(n / 60)} - ${Math.ceil(n / 60)} hrs` : `${n/60} hrs`;
    }
    else {
        return `${n} mins`;
    }
}

//parse ingredient name
function parseIngredientName(str) {
    return str.split(' ').map( item => 
        item.split('').map( (c, i) => i === 0 ? c.toUpperCase() : c ).join('')
    ).join(' ');
}

//parse instructions
function parseInstructions(data) {
    return data.map( type => {
        return type.steps.map( item => item.step );
    }).flat();
}

//parse ingredient quantity text
function parseIngredientQuantity(data) {
    if( data.meta.includes("to taste") ) {
        return 'To taste';
    }
    else {            
        return Number.isInteger(data.amount) ? `${data.amount} ${data.unit}` : `${data.amount.toFixed(2)} ${data.unit}`;
    }   
}

//add or remove saved recipes
function processSavedRecipes( current, recipe, action ) {
    switch( action ) {
        case 'add' :
            return [...current, {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                readyInMinutes: recipe.readyInMinutes,
                diets: recipe.diets,
                summary: recipe.summary,
            }];

        case 'remove':
            return current.filter( item => item.id !== recipe.id );

        default:
            return current;
    }
}

//add to local storage
function saveToLocalStorage( data ) {
    let JSONData = JSON.stringify(data);
    localStorage.setItem('rcptSavedRecipes', JSONData);
}

//get local storage
function readLocalStorage() {
    let data = localStorage.getItem('rcptSavedRecipes');
    return data ? JSON.parse(data) : [];
}

export { 
    toggleQueryOption,
    setMealOption,
    setQueryTerm,
    recipeTimeCalc,
    processSavedRecipes,
    saveToLocalStorage,
    readLocalStorage,
    parseIngredientName,
    parseIngredientQuantity,
    parseInstructions
};