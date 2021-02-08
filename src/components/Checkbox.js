export default function Checkbox(props) {
    return (
        <label htmlFor={props.item.queryStr} className="lg:mr-4" >
        <input
            className="mr-1" 
            id={props.item} 
            type="checkbox"             
            onChange={ props.clickEv } />
            {props.item}
        </label>
    );
}