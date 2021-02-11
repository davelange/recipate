import React, { useEffect } from 'react';
import { API_Get_Recipe } from '../api/apiRequests';
import { useParams } from 'react-router-dom';
import { saveToLocalStorage, processSavedRecipes } from '../state/actions';
import SaveRecipe from '../containers/SaveRecipe';
import RecipeHeader from '../containers/RecipeHeader';
import RecipeIngredients from '../containers/RecipeIngredients';
import RecipeInstructions from '../containers/RecipeInstructions';
import Loader from '../components/Loader';
import AboutRecipe from '../components/AboutRecipe';

function Recipe({savedRecipes, setSavedRecipes}) {
         
    const { id } = useParams();    

    const [recipe, setRecipe] = React.useState();
    
    useEffect( () => {                                       
        getRecipeById();           
        // eslint-disable-next-line 
    }, []);

    async function getRecipeById() {
        const data = await API_Get_Recipe( id );        
        setRecipe( data );
    }      
 
    function isSaved() {
        // eslint-disable-next-line
        return savedRecipes.filter( item => item.id == id ).length;        
    }

    function updateSavedRecipes( action ) {        
        let newData = processSavedRecipes( savedRecipes, recipe, action );
        setSavedRecipes( newData );
        saveToLocalStorage( newData ); 
    } 
    
    return (
        <div className="lg:container mx-auto py-6 px-8">
            { !recipe ? (
                <Loader />
            ) : (
                <>               
                <div className="lg:w-3/5 mx-auto">

                    <RecipeHeader 
                        data={recipe} />
                    
                    <SaveRecipe 
                        saved={ isSaved() } 
                        setSaved={ updateSavedRecipes }/>            
        
                    <RecipeIngredients 
                        ingredients={recipe.extendedIngredients}
                        servings={recipe.servings} /> 

                    <RecipeInstructions
                        data={recipe.analyzedInstructions} />                                 

                    <AboutRecipe
                        summary={recipe.summary}
                        text={recipe.creditsText}
                        sourceUrl={recipe.sourceUrl} />                    
                </div>
                </>                                                                
            )}
        </div>
    )
}

export default Recipe;