import RecipeCard from "../components/RecipeCard";

export function ResultsDisplay(props) {        

    return (
        <div>
            { !props.results.length ? (
                <h2>Nothing, an absolute void.</h2>
            ) : 
                props.results.map( item => 
                    <RecipeCard 
                        data={item} 
                        clickEv={props.selectRecipe} />             
            )}      
        </div>
    );
}