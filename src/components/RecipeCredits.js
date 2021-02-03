export default function  RecipeCredits({text, sourceUrl}) {
    return (
        <div className="my-5">
            <p className="text-gray-500 text-sm">Recipe and image from <a className="text-blue-500 underline" href={sourceUrl} rel="noreferrer" target="_blank">{text}</a></p>
        </div>
    )
}