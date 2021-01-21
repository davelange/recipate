import {API_Random, API_ComplexSearch} from '../api/apiRequests';

async function getPopularRecipes( set ) {
    //const data = await API_Random();
    const data = [{"name":"Corn Chowder with Potatoes, Poblanos, and Smoked Gouda","image":"https://spoonacular.com/recipeImages/640077-556x370.jpg","id":640077},{"name":"Philly Cheesesteak Grilled Wraps","image":"https://spoonacular.com/recipeImages/655890-556x370.jpg","id":655890}];
    set(data);
}

async function searchRecipes( params, set ) {        
    const data = await API_ComplexSearch(params);
    console.log(data)
    set(data);
}

function toggleQueryOption( query, toggled ) {
    let newOptions = query.options.map( (item, i) => { 
        if( i == toggled ) item.value = !item.value;
        return item;
    })  
    return {...query, options: newOptions};
}

function setMealOption( query, selected ) {
    return {...query, mealType: selected};
}

function setQueryTerm( query, str ) {    
    return {...query, term: str};
}

export { 
    getPopularRecipes,
    searchRecipes,
    toggleQueryOption,
    setMealOption,
    setQueryTerm
};