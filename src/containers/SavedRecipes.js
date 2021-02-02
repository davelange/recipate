import RecipeCard from "../components/RecipeCard";

export default function SavedRecipes({savedRecipes}) {

    return (
        <div>
            <h2 className="text-2xl mb-2">Saved recipes</h2>
            
            { savedRecipes.length ? (
                savedRecipes.map( item => 
                    <RecipeCard 
                        data={item} 
                        key={item.id} /> 
                )
            ) : (
                <p className="text-gray-500">You haven't saved any recipes yet.</p>
            )}

        </div>
    )
}