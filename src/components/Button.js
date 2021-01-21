export default function Button(props) {
    return (
        <button onClick={props.clickEv} type={props.type}>
            { props.text && <span>{props.text}</span> }
        </button>
    );
}