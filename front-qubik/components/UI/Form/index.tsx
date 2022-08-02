import styles from "styles/UIStyles/Form.module.scss";

interface FormProps {
    handlesubmit: React.FormEventHandler<HTMLFormElement>;

    children: React.ReactNode;
}

const Form = ({ handlesubmit, children }: FormProps): JSX.Element => {
    return (
        <form onSubmit={handlesubmit} className={styles.form}>
            {children}
        </form>
    );
};

export default Form;
