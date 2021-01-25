export default function MealTypeCard(props) {
    return (
        <div className="w-1/2 my-3 flex items-center" onClick={props.clickEv}>            
                
            <div className="w-2/5">
                <picture className="picture-shadow h-14">
                    <source srcSet={ props.data.img.webpM } media="(min-width: 760px)" />
                    <source srcSet={ props.data.img.webpS } media="(max-width: 760px)" />     
                    <img src={ props.data.pngM } alt={ props.data.name } />
                </picture>                        
            </div>
            <div className={ props.isChosen ? 'text-red-500' : '' }>
                <p className="w-3/5 ml-2 pr-3 text-sm ">{ props.data.name}</p>                        
            </div>
        </div>
    )
}
