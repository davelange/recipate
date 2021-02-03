import React from 'react';
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

                { expand && (
                    <ul className="overflow-hidden lg:w-8/12">
                        { parseInstructions().map( (item, i) => 
                        <li key={i} className="mb-3 text-gray-800">
                            <span className="font-bold text-blue-600 mr-2">{i+1}</span>
                            { item }</li>
                        )}
                    </ul>                
                )}
                
        </div>
    )
}