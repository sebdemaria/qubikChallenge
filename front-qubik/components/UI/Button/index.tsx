import styles from "styles/UIStyles/Button.module.scss";

interface ButtonProps {
    id?: string;

    type?: "button" | "submit" | "reset" | undefined;

    classProp?: string;

    moreClass?: string;

    children?: React.ReactNode;

    [x: string]: any;
}

const Button = ({
    id = "",
    type = "button",
    classProp = "find",
    moreClass = "",
    children,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            role="button"
            id={id}
            type={type}
            className={`${styles[classProp]} ${moreClass}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
