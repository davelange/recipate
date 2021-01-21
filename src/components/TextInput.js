export default function TextInput(props) {
    return (
        <input 
            type="text" 
            placeholder={props.placeholder} 
            onChange={ e => props.changeEv(e) } />
    )
}