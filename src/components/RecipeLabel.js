export default function RecipeLabel( props ) {

    const baseClass = "text-xs inline-flex items-center rounded-sm px-1 mr-1 mb-1 max-w-5";
    
    const colorClass = `${baseClass} bg-${props.color}-100 text-${props.color}-500`;

    return (
        <div className={colorClass}>
            { props.children }
        </div>
    )
}