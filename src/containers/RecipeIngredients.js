import React from 'react';
import Ingredient from '../components/Ingredient';
import RecipeSectionHeader from '../components/RecipeSectionHeader';

export default function RecipeSummary({ingredients, servings}) {
    
    const [expand, setExpand] = React.useState(true);

    const quantityStr = (data) => {
        if( data.meta.includes("to taste") ) {
            return 'To taste';
        }
        else {            
            return Number.isInteger(data.amount) ? `${data.amount} ${data.unit}` : `${data.amount.toFixed(2)} ${data.unit}`;
        }        
    }

    const ingredientName = (str) => {
        return str.split(' ').map( item => 
            item.split('').map( (c, i) => i === 0 ? c.toUpperCase() : c ).join('')
        ).join(' ')
    }

    const servingsText = () => {
        return servings ? <p className="my-2 text-gray-500">{`For ${servings} servings`}</p> : '';
    }

    return (
        <div className="mb-3">   
             
            <RecipeSectionHeader 
                isOpen={expand}
                clickEv={() => setExpand( !expand )}
                name="Ingredients" />    

                { expand && (
                    <div className="lg:w-1/3">
                        { servingsText() }
                        <ul>
                            {
                            ingredients.map( (item, i) => 
                                <Ingredient 
                                    key={ i }
                                    name={ ingredientName(item.name) }
                                    quantity={ quantityStr(item) } /> ) 
                            }
                        </ul>
                    </div> 
                )}                
        </div>
    );    
}