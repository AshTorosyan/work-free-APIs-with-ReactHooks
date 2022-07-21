const Input = (props) => {
    return (
        <input 
        type={props.type}
        ref={props.propsRef}
        placeholder={props.placeholder}
        onChange={props.onChange}
        />
    );
}

export default Input;