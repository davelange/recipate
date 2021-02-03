import LabelDisplay from "./LabelDisplay";

export default function RecipeHeader(props) {
    return (
        <div>
            <h1 className="text-2xl mb-2 lg:my-2 text-gray-800">{ props.data.title }</h1>
            
            <LabelDisplay 
                limit={0}
                recipe={ props.data} />

            <img 
                src={ props.data.image } 
                alt={props.data.title} 
                className="my-3 rounded-2xl lg:mt-4"/>                        
        </div>
    )
}