import RecipeCard from "../components/RecipeCard";

export function ResultsDisplay(props) {        

    return (
        <div className="mt-2 lg:mt-4">
            
            <h2 className="text-2xl mb-2 text-gray-800">{ props.title }</h2>
                        
            { !props.results.length ? (
                <p className="text-gray-500">{ props.none }</p>
            ) : 
            <>
            <div className="flex flex-wrap">
                {props.results.map( item => 
                    <RecipeCard 
                        key={item.id}
                        data={item} 
                        clickEv={props.selectRecipe} /> )}
            </div>
            </>
            }      
        </div>
    );
}
