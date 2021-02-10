function RecipeLabel({color, children}) {

    const baseClass = "text-xs inline-flex items-center rounded-sm px-1 mr-1 mb-1 max-w-5";
    
    const colorClass = `${baseClass} bg-${color}-100 text-${color}-500`;

    return (
        <div className={colorClass}>
            { children }
        </div>
    )
}

export default RecipeLabel;