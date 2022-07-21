import styles from "styles/UIStyles/Input.module.scss";

interface InputProps {
    ariaLabel?: string;
    classProp?: string;
    moreClass?: string;
    value?: string;
    id?: string;
    type?: string;
    placeholder?: string;
    onchange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
    ariaLabel = "input text",
    classProp = "",
    moreClass = "",
    value = "",
    id = "",
    type = "text",
    placeholder = "",
    onchange = () => {
        return;
    },
}: InputProps): React.ReactElement => {
    return (
        <input
            /*
            to properly use classProp the class 
            styles need to be added to the css module file of the input
            */
            aria-label={ariaLabel}
            className={`${styles.search} ${styles[classProp]} ${moreClass}`}
            id={id}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onchange}
        />
    );
};

export default Input;
