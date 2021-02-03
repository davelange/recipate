import React from 'react';
import {parseInstructions} from '../state/actions';
import RecipeSectionHeader from '../components/RecipeSectionHeader';

export default function RecipeInstructions( {data} ) {

    const [expand, setExpand] = React.useState(true);    
 
    return (
        <div className="mb-10">
            
            <RecipeSectionHeader 
                isOpen={expand}
                clickEv={() => setExpand( !expand )}
                name="Instructions" />    

                { expand && (
                    <ul className="lg:w-8/12">
                        { parseInstructions(data).map( (item, i) => 
                        <li key={i} className="mb-3 text-gray-800">
                            <span className="font-bold text-blue-600 mr-2">{i+1}</span>
                            { item }</li>
                        )}
                    </ul>                
                )}
                
        </div>
    )
}