import React from 'react';
import {RecipeContext} from '../state/appContexts';
import {useHistory} from 'react-router-dom';

export default function RecipeCard(props) {

    const {selectedRecipe, setSelectedRecipe} = React.useContext(RecipeContext);

    const history = useHistory();

    function handleClick() {
        setSelectedRecipe(props.data.id)
        history.push(`/recipe/${props.data.id}`);
    }

    return (
        <div onClick={ () => handleClick() }>
            <img width="100px"src={props.data.image} alt={props.data.title} />
            <p>{ props.data.title }</p>
        </div>
    )
}