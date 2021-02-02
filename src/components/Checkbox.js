export default function Checkbox(props) {
    return (
        <label htmlFor={props.item.queryStr} className="lg:mr-4" >
        <input
            className="mr-1" 
            id={props.item.queryStr} 
            type="checkbox" 
            checked={props.item.value}
            onChange={ props.clickEv } />
            {props.item.name}
        </label>
    );
}