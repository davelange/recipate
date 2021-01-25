import {recipeTimeCalc} from '../state/actions';
import RecipeLabel from '../components/RecipeLabel';
import FeatherIcon from 'feather-icons-react';


export default function({limit, recipe}) {

    const limitedDiets = () => limit ? recipe.diets.slice(0, limit) : recipe.diets;

    return (
        <div className="flex flex-wrap">
            <RecipeLabel color="yellow">
                <FeatherIcon icon="clock" width="12" height="12" />
                { recipeTimeCalc(recipe.readyInMinutes) }                        
            </RecipeLabel>

            { limitedDiets().map( (item, i) => 
                <RecipeLabel color="blue" key={i}>
                    {item}
                </RecipeLabel> )
            } 
        </div>
    );
}