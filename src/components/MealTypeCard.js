function MealTypeCard({data, isChosen, clickEv}) {
    return (
        <button type="button"  className="w-1/2 lg:w-1/3 my-3 flex items-center cursor-pointer hover:text-red-500 focus:ring-gray-400" onClick={clickEv}>                
            <div className="w-2/5">
                <picture className="picture-shadow h-14 lg:h-auto">
                    <source srcSet={ data.img.webpM } media="(min-width: 760px)" />
                    <source srcSet={ data.img.webpS } media="(max-width: 760px)" />     
                    <img src={ data.pngM } alt={ data.name } />
                </picture>                        
            </div>
            <div className={ isChosen ? 'text-red-500' : '' }>
                <p className="w-3/5 ml-2 pr-3 text-sm ">{ data.name}</p>                        
            </div>
        </button>
    )
}

export default MealTypeCard;