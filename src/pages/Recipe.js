import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import RecipeHeader from '../containers/RecipeHeader';
import RecipeIngredients from '../containers/RecipeIngredients';
import RecipeInstructions from '../containers/RecipeInstructions';
import RecipeCredits from '../components/RecipeCredits';
import { RecipeContext } from '../state/appContexts';
import {sample} from '../state/initialStoreData'
import { API_Get_Recipe } from '../api/apiRequests';
import { useLocation } from 'react-router-dom';
import { saveToLocalStorage } from '../state/actions';
import SaveRecipe from '../containers/SaveRecipe';


function Recipe( props ) {

    const { selectedRecipe, setSelectedRecipe } = React.useContext(RecipeContext);

    const [isLoading, setIsLoading] = React.useState(true);

    const [isSaved, setIsSaved] = React.useState();

    const location = useLocation();    

    useEffect( () => {
        getRecipeById();
        setIsSaved( checkIfSaved() );
    }, [props.savedRecipes]);

    async function getRecipeById() {
        const data = await API_Get_Recipe( getId() );
        setSelectedRecipe( data );
        setIsLoading( false );
    } 

    function getId() {
        return selectedRecipe.id ? selectedRecipe.id : location.pathname.split('/').reverse()[0];
    }

    function addToSavedRecipes( add ) {
        
        let newData = [];
        
        if( add ) {
            newData = [...props.savedRecipes, {
                id: selectedRecipe.id,
                title: selectedRecipe.title,
                image: selectedRecipe.image,
                readyInMinutes: selectedRecipe.readyInMinutes,
                diets: selectedRecipe.diets
            }];
        }
        else {
            newData = props.savedRecipes.filter( item => item.id !== selectedRecipe.id );
        }
        
        props.setSavedRecipes( newData );
        saveToLocalStorage( newData );
    } 

    function checkIfSaved() {
        return props.savedRecipes.filter( item => item.id == selectedRecipe.id ).length > 0;        
    }

    return (
        <div className="lg:container mx-auto py-6 px-8">
            { isLoading ? (
                <Loader />
            ) : (
                <>               
                <RecipeHeader 
                    data={selectedRecipe} />
                
                <SaveRecipe 
                    saved={ isSaved } 
                    setSaved={ addToSavedRecipes }/>
    
                <RecipeIngredients 
                    ingredients={selectedRecipe.extendedIngredients}
                    servings={selectedRecipe.servings} /> 

                <RecipeInstructions
                    data={selectedRecipe.analyzedInstructions} /> 

                <RecipeCredits 
                    text={selectedRecipe.creditsText}
                    license={selectedRecipe.license} />
                </>                                                                
            )}
        </div>
    )
}

export default Recipe;