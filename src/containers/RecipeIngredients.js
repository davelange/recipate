import React from 'react';
import Ingredient from '../components/Ingredient';
import {CSSTransition} from 'react-transition-group';
import RecipeSectionHeader from '../components/RecipeSectionHeader';

export default function RecipeSummary({ingredients, servings}) {
    
    const [expand, setExpand] = React.useState(true);

    const quantityStr = (data) => {
        return data.meta.includes("to taste") ? "To taste" : `${data.amount} ${data.unit}`;            
    }

    const ingredientName = (str) => {
        return str.split(' ').map( item => 
            item.split('').map( (c, i) => i == 0 ? c.toUpperCase() : c ).join('')
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

            <div >
                <CSSTransition 
                    in={expand} 
                    timeout={100} 
                    classNames="expand">
                    
                    <div className="expand-collapse overflow-hidden lg:w-1/3">
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
                </CSSTransition>                
            </div>
        </div>
    );    
}