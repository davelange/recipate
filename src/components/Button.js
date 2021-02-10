function Button({ clickEv, type, className, text, children}) {
    return (
        <button onClick={clickEv} type={type} className={className}>
            { text && <span>{text}</span> }
            {children}
        </button>
    );
}

export default Button;