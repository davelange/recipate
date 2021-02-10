import RecipeCard from "../components/RecipeCard";

function RecipeList({ title, results, none}) {        

    return (
        <div className="mt-2 lg:mt-4">
            
            <h2 className="text-2xl mb-2 text-gray-800">{ title }</h2>
                        
            { !results.length ? (
                <p className="text-gray-500">{ none }</p>
            ) : 
            <>
            <div className="flex flex-wrap">
                {results.map( item => 
                    <RecipeCard 
                        key={item.id}
                        data={item} /> )}
            </div>
            </>
            }      
        </div>
    );
}

export default RecipeList;