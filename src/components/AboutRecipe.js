import {parseSummary} from '../state/actions';
import RecipeSectionHeader from './RecipeSectionHeader';

export default function AboutRecipe( data ) {
    return (
        <div>
            <RecipeSectionHeader
                name="About this recipe" />
            
            <p className="text-gray-800">{ parseSummary(data.summary, 1000) }</p>                

            <div className="my-5">
                <p className="text-gray-500 text-sm">Recipe and image from <a className="text-blue-500 underline" href={data.sourceUrl} rel="noreferrer" target="_blank">{data.text}</a></p>
            </div>
        </div>
    )
}