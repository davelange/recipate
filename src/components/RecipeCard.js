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

    function parseSummary(str, limit) {
        const match = /<\S*>/gi;
        return  str.replace(match, '').split(' ').filter( (item, i) => i < limit ).join(' ');        
    }

    return (
        <a className="flex my-4 items-start cursor-pointer box-border lg:w-1/2 lg:my-6 hover:text-red-500 focus-within:text-red-500" 
             onClick={ () => handleClick() }
             tabindex="0">

            <img className="w-2/5 rounded-lg" src={props.data.image} alt={props.data.title} />

            <div className="px-4">
                <h3 className="text-lg lg:text-lg">{ props.data.title }</h3>            

                <p className="hidden lg:block text-gray-500 my-2">{ parseSummary(props.data.summary, 20) }...</p>
                <LabelDisplay 
                    limit={2} 
                    recipe={props.data} />
            </div>            
        </a>
    )
}