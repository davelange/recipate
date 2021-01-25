export default function Button(props) {
    return (
        <button onClick={props.clickEv} type={props.type} className={props.className}>
            { props.text && <span>{props.text}</span> }
            {props.children}
        </button>
    );
}