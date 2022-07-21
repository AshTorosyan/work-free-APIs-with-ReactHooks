

const Image = (props) => {
    return (
        <img 
        width={props.width}
        height={props.height}
        src={props.src}
        className={props.className}
        />
    );
}

export default Image;