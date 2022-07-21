import styles from "styles/templateStyles/Layout.module.scss";
import Header from "@components/Header";

export interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default Layout;
