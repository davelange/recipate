import React, { useEffect } from 'react';
import { RecipeContext } from '../state/appContexts';
import { API_Get_Recipe } from '../api/apiRequests';
import { useLocation } from 'react-router-dom';
import { saveToLocalStorage, processSavedRecipes } from '../state/actions';
import SaveRecipe from '../containers/SaveRecipe';
import RecipeHeader from '../containers/RecipeHeader';
import RecipeIngredients from '../containers/RecipeIngredients';
import RecipeInstructions from '../containers/RecipeInstructions';
import Loader from '../components/Loader';
import RecipeCredits from '../components/RecipeCredits';

function Recipe( {savedRecipes, setSavedRecipes} ) {

    const { selectedRecipe, setSelectedRecipe } = React.useContext(RecipeContext);

    const location = useLocation();            

    useEffect( () => {                               
        getRecipeById();            
    }, []);

    async function getRecipeById() {
        const data = await API_Get_Recipe( getId() );        
        setSelectedRecipe( data );        
    }      

    function getId() {
        return selectedRecipe.id ? selectedRecipe.id : location.pathname.split('/').reverse()[0];
    }    

    function isLoaded() {
        return ('title' in selectedRecipe);
    }

    function isSaved() {
        return savedRecipes.filter( item => item.id === getId() ).length > 0;        
    }

    function addToSavedRecipes( add ) {        
        let newData = processSavedRecipes( savedRecipes, selectedRecipe, 'add' );
        setSavedRecipes( newData );
        saveToLocalStorage( newData );
    } 
    
    return (
        <div className="lg:container mx-auto py-6 px-8">
            { !isLoaded() ? (
                <Loader />
            ) : (
                <>               
                <RecipeHeader 
                    data={selectedRecipe} />
                
                <SaveRecipe 
                    saved={ isSaved() } 
                    setSaved={ addToSavedRecipes }/>
    
                <RecipeIngredients 
                    ingredients={selectedRecipe.extendedIngredients}
                    servings={selectedRecipe.servings} /> 

                <RecipeInstructions
                    data={selectedRecipe.analyzedInstructions} /> 

                <RecipeCredits 
                    text={selectedRecipe.creditsText}
                    sourceUrl={selectedRecipe.sourceUrl} />
                </>                                                                
            )}
        </div>
    )
}

export default Recipe;