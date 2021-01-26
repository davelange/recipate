import FeatherIcon from 'feather-icons-react';

export default function RecipeSectionHeader(props) {

    const iconClass = props.isOpen ? 
        'transform rotate-180 transition transition-transform' : 'transition transition-transform';

    return (
        <div className="flex items-center mb-1 text-blue-600">
            <h2 className="text-xl mr-1" onClick={ () => props.clickEv() }>{ props.name }</h2>
            <div className={iconClass}>
                <FeatherIcon icon="chevron-down" width="20" height="20" />
            </div>
        </div>
    )
}