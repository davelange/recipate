import React from 'react';
import {CSSTransition} from 'react-transition-group';
import RecipeSectionHeader from '../components/RecipeSectionHeader';

export default function RecipeInstructions( {data} ) {

    const [expand, setExpand] = React.useState(true);
    
    function parseInstructions() {
        return data.map( type => {
            return type.steps.map( item => item.step );
        }).flat();
    }
 
    return (
        <div className="mb-3">
            
            <RecipeSectionHeader 
                isOpen={expand}
                clickEv={() => setExpand( !expand )}
                name="Instructions" />    

            <CSSTransition 
                in={expand} 
                timeout={100} 
                classNames="expand">
                
                <ul className="overflow-hidden">
                    { parseInstructions().map( (item, i) => 
                    <li key={i} className="mb-3">
                        <span className="font-bold text-blue-600 mr-2">{i+1}</span>
                        { item }</li>
                    )}
                </ul>                
            </CSSTransition>              
        </div>
    )
}