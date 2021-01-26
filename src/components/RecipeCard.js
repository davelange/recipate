import React from 'react';
import {RecipeContext} from '../state/appContexts';
import {useHistory} from 'react-router-dom';
import LabelDisplay from '../containers/LabelDisplay';

export default function RecipeCard(props) {

    const {setSelectedRecipe} = React.useContext(RecipeContext);

    const history = useHistory();
    
    function handleClick() {
        setSelectedRecipe({
            id: props.data.id            
        });
        history.push(`/recipe/${props.data.id}`);
    }

    return (
        <div className="flex my-7 items-start md:w-1/2" 
             onClick={ () => handleClick() }>

            <img className="w-2/5 rounded-lg" src={props.data.image} alt={props.data.title} />

            <div className="px-4">
                <h3 className="text-l">{ props.data.title }</h3>                                
                <LabelDisplay 
                    limit={2} 
                    recipe={props.data} />
            </div>            
        </div>
    )
}