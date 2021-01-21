import React, { useEffect } from 'react';
import { API_Get_Recipe } from '../api/apiRequests';
import { RecipeContext } from '../state/appContexts';

function Recipe() {

    const { selectedRecipe, setSelectedRecipe } = React.useContext(RecipeContext);

    const [recipeData, setRecipeData] = React.useState({});

    const [isLoading, setIsLoading] = React.useState(true);

    useEffect( () => {
        getRecipe();
    }, []);

    async function getRecipe() {
        const data = await API_Get_Recipe( selectedRecipe );
        setRecipeData( data );
        setIsLoading(false);
    }

    return (
        <div>
            <h1>Some recipe</h1>
            { isLoading ? (
                <p>Looking for it</p>
            ) : (
                <p>We found it</p>
            )}
        </div>
    )
}

export default Recipe;