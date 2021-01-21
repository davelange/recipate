import React, { useEffect } from 'react';
import { RecipeContext } from '../state/appContexts';

function Recipe() {

    const { selectedRecipe } = React.useContext(RecipeContext);

    const [isLoading, setIsLoading] = React.useState(true);

    useEffect( () => {
        setIsLoading( selectedRecipe ? false : true );
    }, []);

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