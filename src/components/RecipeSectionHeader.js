function RecipeSectionHeader({name}) {    
    return (
        <div className="flex items-center mb-1 text-blue-600 lg:my-4">            
            <h2 className="text-xl mr-1 cursor-pointer">{ name }</h2>            
        </div>
    )
}

export default RecipeSectionHeader;