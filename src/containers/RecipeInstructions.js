import React from 'react';
import {CSSTransition} from 'react-transition-group';
import RecipeSectionHeader from '../components/RecipeSectionHeader';

export default function RecipeInstructions( {data} ) {

    const [expand, setExpand] = React.useState(true);

    function parseData() {
        const matchPattern = /<\S*>/gi;
        return data.split( matchPattern );
    }

    return (
        <div className="my-3">
            
            <RecipeSectionHeader 
                isOpen={expand}
                clickEv={() => setExpand( !expand )}
                name="Instructions" />    

            <CSSTransition 
                in={expand} 
                timeout={100} 
                classNames="expand">
                
                <ul className="overflow-hidden">
                    { parseData().map( (item, i) => <li key={i} className="mb-3">{ item }</li>) }
                </ul>                
            </CSSTransition>              
        </div>
    )
}