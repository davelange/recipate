import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import RecipeHeader from '../containers/RecipeHeader';
import RecipeIngredients from '../containers/RecipeIngredients';
import RecipeInstructions from '../containers/RecipeInstructions';
import RecipeCredits from '../components/RecipeCredits';
import { RecipeContext } from '../state/appContexts';
import {sample} from '../state/initialStoreData'
import { API_Get_Recipe } from '../api/apiRequests';
import { useLocation, Route } from 'react-router-dom';

function Recipe( props ) {

    const { selectedRecipe, setSelectedRecipe } = React.useContext(RecipeContext);

    const [isLoading, setIsLoading] = React.useState(true);

    const location = useLocation();    

    useEffect( () => {
        if( !( 'title' in selectedRecipe) ) {
            getRecipeById();            
        }                
        else {
            setIsLoading( selectedRecipe ? false : true );
        }
    }, []);

    async function getRecipeById() {
        const data = await API_Get_Recipe( getId() );
        setSelectedRecipe( data );
        setIsLoading( false );
    } 

    function getId() {
        return location.pathname.split('/').reverse()[0];
    }

    /* function addToSavedRecipes() {
        props.setSavedRecipes( selectedRecipe.id )
    } */

    return (
        <div className="lg:container mx-auto py-6 px-8">
            { isLoading ? (
                <Loader />
            ) : (
                <>               
                <RecipeHeader 
                    data={selectedRecipe} />

                {/* <button onClick={() => addToSavedRecipes() }>Save</button> */}

                <RecipeIngredients 
                    ingredients={selectedRecipe.extendedIngredients}
                    servings={selectedRecipe.servings} /> 

                <RecipeInstructions
                    data={selectedRecipe.instructions} /> 

                <RecipeCredits 
                    text={selectedRecipe.creditsText}
                    license={selectedRecipe.license} />
                </>                                                                
            )}
        </div>
    )
}

export default Recipe;