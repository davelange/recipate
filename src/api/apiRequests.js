const API_KEY = '1372edba263a4d10b79a8a8c46f412bf';
const BASE_URL = `https://api.spoonacular.com`;

//cache object
let cache = {
    random: null,
    
    complex: {
        params: {},
        results: []
    },    
    
    recipes: [],

    setRandom(data) {
        this.random = data;
    },

    setComplexSearch(params, results) {
        this.complex.params = params;
        this.complex.results = results;
    },

    getRecipe( id ) {
        return this.recipes.find( item => item.id === id );
    },

    addRecipe( data ) {
        this.recipes.push(data);
        if( this.recipes.length === 10 ) {
            this.recipes.shift();
        }
    }
};

//random search
async function API_Random() {    
    if( cache.random ) {
        return cache.random;
    }
    else {
        let data = await request( `${BASE_URL}/recipes/random?apiKey=${API_KEY}&number=2` );        
        cache.setRandom(data.recipes);        
        return data.recipes;        
    }    
}

//complex search
async function API_ComplexSearch(params) {
    if( cache.complex.params === params ) {
        return cache.complex.results;
    }
    else {                
        let data = await request(buildComplexQueryURL(params));        
        cache.setComplexSearch( params, data );
        return data;        
    }
}

//get recipe by id
async function API_Get_Recipe( id ) {
    
    let findInCache = cache.getRecipe(id);
    
    if( findInCache ) {
        return findInCache;
    }
    else {
        let data = await request(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);        
        cache.addRecipe(data);
        return data;
    }        
}

function buildComplexQueryURL(params) {
    let URL = `${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&instructionsRequired=true`;

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

async function request( url ) {
    let req = await fetch(url);
    if( isError(req) ) {
        return 'error';
    }
    return await req.json();
}

function isError(req) {
    return req.status !== 200;    
}

export {
    API_Random,
    API_ComplexSearch,
    API_Get_Recipe
};