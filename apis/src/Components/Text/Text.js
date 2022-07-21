const Text = (props) => {
    return (
        <span className={props.className}>
            {props.children} <br></br>
        </span>
    );
}

export default Text;