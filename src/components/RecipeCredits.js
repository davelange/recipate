export default function  RecipeCredits({text, licence}) {
    return (
        <div className="my-5">
            <p className="text-gray-500 text-sm">{text} {licence}</p>
        </div>
    )
}