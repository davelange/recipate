import React from 'react';
import {RecipeContext} from '../state/appContexts';
import {useHistory} from 'react-router-dom';

export default function RecipeCard(props) {

    const {selectedRecipe, setSelectedRecipe} = React.useContext(RecipeContext);

    const history = useHistory();

    function handleClick() {
        setSelectedRecipe(props.data)
        history.push(`/recipe/${props.data.id}`);
    }

    return (
        <div
            className="flex my-6 bg-gray-50 rounded-lg" 
            onClick={ () => handleClick() }>

            <img className="w-2/5 rounded-lg" src={props.data.image} alt={props.data.title} />

            <div className="px-4 py-2">
                <h3 className="text-l">{ props.data.title }</h3>
            </div>            
        </div>
    )
}