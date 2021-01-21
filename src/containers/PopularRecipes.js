import React from 'react';
import RecipeCard from '../components/RecipeCard';

function PopularRecipes(props) {    
        
    return (
        <div className="py-6 px-8">

            <h2 className="text-2xl mb-6">Popular right now</h2>

            { props.data.map( item => 
                <RecipeCard 
                    data={item} 
                    key={item.id} /> 
            )}
        </div>
    )
}

export default React.memo(PopularRecipes);