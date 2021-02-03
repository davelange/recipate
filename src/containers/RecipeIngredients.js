import React from 'react';
import {parseIngredientName, parseIngredientQuantity} from '../state/actions';
import Ingredient from '../components/Ingredient';
import RecipeSectionHeader from '../components/RecipeSectionHeader';

export default function RecipeSummary({ingredients, servings}) {
    
    const [expand, setExpand] = React.useState(true);

    return (
        <div className="mb-10">   
             
            <RecipeSectionHeader 
                isOpen={expand}
                clickEv={() => setExpand( !expand )}
                name="Ingredients" />    

                { expand && (
                    <div className="lg:w-1/3">
                        { servings && 
                            <p className="my-2 text-gray-500">{`For ${servings} servings`}</p> 
                        }
                        <ul>
                            {
                            ingredients.map( (item, i) => 
                                <Ingredient 
                                    key={ i }
                                    name={ parseIngredientName(item.name) }
                                    quantity={ parseIngredientQuantity(item) } /> ) 
                            }
                        </ul>
                    </div> 
                )}                
        </div>
    );    
}