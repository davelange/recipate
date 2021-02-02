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

function recipeTimeCalc( n ) {
    if( n > 60 ) {
        return `${Math.floor(n / 60)} - ${Math.ceil(n / 60)} hrs`;
    }
    else {
        return `${n} mins`;
    }
}

function saveToLocalStorage( data ) {
    let JSONData = JSON.stringify(data);
    localStorage.setItem('rcptSavedRecipes', JSONData);
}

function readLocalStorage() {
    let data = localStorage.getItem('rcptSavedRecipes');
    return data ? JSON.parse(data) : [];
}



export { 
    toggleQueryOption,
    setMealOption,
    setQueryTerm,
    recipeTimeCalc,
    saveToLocalStorage,
    readLocalStorage
};