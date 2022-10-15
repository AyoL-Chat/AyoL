import "./Button.css";

const Button = (props) => {
    const {
        title,
        style
    } = props;

    return (
        <button style={style}>{title}</button>
    );
};

export default Button;