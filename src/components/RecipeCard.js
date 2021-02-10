import {Link} from 'react-router-dom';
import {parseSummary} from '../state/actions';
import LabelDisplay from '../containers/LabelDisplay';

function RecipeCard({data}) {

    return (
        <Link to={`/recipe/${data.id}`} className="flex my-4 items-start cursor-pointer box-border lg:w-1/2 lg:pr-4 lg:my-6 hover:text-red-500 focus-within:text-red-500">
                    
            <div className="w-2/5 bg-gray-100 h-5/6 rounded-lg">
                <img className="rounded-lg" src={data.image} alt={data.title} />
            </div>

            <div className="w-3/5 px-4">
                <h3 className="text-lg lg:text-lg">{ data.title }</h3>            

                <p className="hidden lg:block text-gray-500 my-2">{ parseSummary(data.summary, 20) }...</p>
                <LabelDisplay 
                    limit={2} 
                    recipe={data} />
            </div>                    
        </Link>
    )
}

export default RecipeCard;