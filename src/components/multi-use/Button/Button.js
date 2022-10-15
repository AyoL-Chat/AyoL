import "./Button.css";

const Button = (props) => {
    const {
        title,
        style,
        onClick
    } = props;

    return (
        <button style={style} onClick={onClick}>{title}</button>
    );
};

export default Button;