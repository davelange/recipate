export default function Ingredient({ name, quantity }) {
    return (
        <li className="flex justify-between even:bg-gray-100 py-2 px-2">
            <p>{ name }</p>
            <span className="text-sm text-gray-500">{ quantity }</span>
        </li>
    );
}