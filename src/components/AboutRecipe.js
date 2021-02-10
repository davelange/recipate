import {parseSummary} from '../state/actions';
import RecipeSectionHeader from './RecipeSectionHeader';

function AboutRecipe({summary, sourceUrl, text}) {
    return (
        <div>
            <RecipeSectionHeader
                name="About this recipe" />
            
            <p className="text-gray-800">{ parseSummary(summary, 1000) }</p>                

            <div className="my-5">
                <p className="text-gray-500 text-sm">Recipe and image from <a className="text-blue-500 underline" href={sourceUrl} rel="noreferrer" target="_blank">{text}</a></p>
            </div>
        </div>
    )
}

export default AboutRecipe;