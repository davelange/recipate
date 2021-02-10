import LabelDisplay from "./LabelDisplay";

function RecipeHeader({data}) {
    return (
        <div>
            <h1 className="text-2xl mb-2 lg:my-2 lg:text-3xl text-gray-800">{ data.title }</h1>
            
            <LabelDisplay 
                limit={0}
                recipe={ data} />
            <img 
                src={ data.image } 
                alt={data.title} 
                className="my-3 rounded-2xl lg:mt-6"/>                    
        </div>
    )
}

export default RecipeHeader;