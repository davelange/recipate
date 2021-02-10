import {recipeTimeCalc, dietList} from '../state/actions';
import RecipeLabel from '../components/RecipeLabel';
import FeatherIcon from 'feather-icons-react';

function LabelDisplay({limit, recipe}) {    

    return (
        <div className="flex flex-wrap">
            <RecipeLabel color="yellow">
                <FeatherIcon icon="clock" width="12" height="12" />
                <span className="ml-1">{ recipeTimeCalc(recipe.readyInMinutes) }</span>
            </RecipeLabel>

            { dietList(limit, recipe).map( (item, i) => 
                <RecipeLabel color="blue" key={i}>
                    {item}
                </RecipeLabel> )
            } 
        </div>
    );
}

export default LabelDisplay;