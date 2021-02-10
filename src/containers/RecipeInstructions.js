import {parseInstructions} from '../state/actions';
import RecipeSectionHeader from '../components/RecipeSectionHeader';

function RecipeInstructions({data}) { 
    return (
        <div className="mb-10">
            
            <RecipeSectionHeader name="Instructions" />    

            <ul>
                { parseInstructions(data).map( (item, i) => 
                <li key={i} className="mb-3 text-gray-800">
                    <span className="font-bold text-blue-600 mr-2">{i+1}</span>
                    { item }</li>
                )}
            </ul>                                
        </div>
    )
}

export default RecipeInstructions;