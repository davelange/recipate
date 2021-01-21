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
    toggleQueryOption,
    setMealOption,
    setQueryTerm
};