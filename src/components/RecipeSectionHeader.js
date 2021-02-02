import FeatherIcon from 'feather-icons-react';

export default function RecipeSectionHeader(props) {

    const iconClass = props.isOpen ? 
        'transform rotate-180 transition transition-transform' : 'transition transition-transform';

    return (
        <div className="flex items-center mb-1 text-blue-600 lg:mt-6 lg:mb-4">
            <button onClick={ () => props.clickEv() }>
                <h2 className="text-xl mr-1 cursor-pointer">{ props.name }</h2>
            </button>
            <div className={iconClass}>
                <FeatherIcon icon="chevron-down" width="20" height="20" />
            </div>
        </div>
    )
}