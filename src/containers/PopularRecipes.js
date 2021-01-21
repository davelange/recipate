import React from 'react';
import RecipeCard from '../components/RecipeCard';

function PopularRecipes(props) {    
        
    return (
        <div>
            <h2>Popular right now</h2>
            { props.data.map( item => 
                <RecipeCard 
                    data={item} 
                    key={item.id} /> 
            )}
        </div>
    )
}

export default React.memo(PopularRecipes);