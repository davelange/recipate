import RecipeCard from "../components/RecipeCard";

export function ResultsDisplay(props) {        

    const resultsHeader = props.results.length ? 
        "Here's what we found" : "We couldn't find any recipes";

    return (
        <div>
            
            <h2 className="text-2xl mb-2">{ resultsHeader }</h2>
                        
            { !props.results.length ? (
                <h2>Try something else!</h2>
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