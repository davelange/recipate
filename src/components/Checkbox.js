function Checkbox({item, clickEv}) {
    return (
        <label htmlFor={item} className="lg:mr-4" >
        <input
            className="mr-1" 
            id={item} 
            type="checkbox"             
            onChange={ clickEv } />
            {item}
        </label>
    );
}

export default Checkbox;