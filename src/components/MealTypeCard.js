export default function MealTypeCard(props) {
    return (
        <div onClick={props.clickEv}>
            <p>{ props.name}</p>
        </div>
    )
}