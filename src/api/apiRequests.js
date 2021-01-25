const API_KEY = '1372edba263a4d10b79a8a8c46f412bf';
const BASE_URL = `https://api.spoonacular.com`;

let cacheRandom = null;

//random search
async function API_Random() {    
    if( cacheRandom ) {
        //return cached data
        return cacheRandom;
    }
    else {
        //fetch data and store to cache
        let req = await fetch( `${BASE_URL}/recipes/random?apiKey=${API_KEY}&number=2` );
        checkIfError(req);
        const data = await req.json();
        cacheRandom = data.recipes;     
        return cacheRandom;        
    }    
}

//complex search
async function API_ComplexSearch(params) {

    let URL = buildComplexQueryURL(params);
    
    let req = await fetch( URL );
    
    checkIfError(req);

    const data = await req.json();

    return data;        
}

//get recipe by id
async function API_Get_Recipe( id ) {

    let URL = `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`;

    let req = await fetch(URL);

    checkIfError(req);

    const data = await req.json();

    return data;
}

function buildComplexQueryURL(params) {
    let URL = `${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`;

    if( params.term ) {
        URL += `&query=${encodeURIComponent(params.term)}`;
    }

    if( params.mealType ) {
        URL += `&type=${encodeURIComponent(params.mealType)}`
    }

    let diet = params.options
        .filter( opt => opt.value )
        .map( opt => encodeURIComponent(opt.name) )
        .join(',');

    if( diet ) {
        URL += `&diet=${diet}`;
    }

    return URL;
}

//check if response is ok
function checkIfError(req) {
    if( req.status !== 200 ) {
        return 'error';                
    }
}

export {
    API_Random,
    API_ComplexSearch,
    API_Get_Recipe
};