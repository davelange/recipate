function RecipeLabel({className, children}) {
        
    return (
        <div className={`text-xs inline-flex items-center rounded-sm px-1 mr-1 mb-1 max-w-5 ${className}`}>
            { children }
        </div>
    )
}

export default RecipeLabel;