import React from 'react';
import RecipeCard from '../components/RecipeCard';

function PopularRecipes(props) {    
        
    return (
        <div>

            <h2 className="text-2xl mb-2">Popular right now</h2>

            <div className="flex flex-wrap">
                { props.data.map( item => 
                    
                        <RecipeCard 
                            data={item} 
                            key={item.id} /> 
                    
                )}
            </div> 
        </div>
    )
}

export default React.memo(PopularRecipes);