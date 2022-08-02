import styles from "styles/componentStyles/Breadcrumb.module.scss";

interface BreadcrumbProps {
    result: {
        status: number;
        statusText: string;
        author: {
            name: string;
            lastname: string;
        };
        categories?: [string][];
        items: {
            id: string;
            title: string;
            price: { currency: string; amount: number };
            picture: string;
            condition: string;
            free_shipping: string;
            city: string;
        }[];
    };
}

const Breadcrumb = ({ result }: BreadcrumbProps): JSX.Element => {
    const { categories } = result;

    return (
        <div className={"row col-12 " + styles.breadcrumb}>
            <span>
                {categories ? categories[0] + "  >  " + categories[1] : ""}
            </span>
        </div>
    );
};

export default Breadcrumb;
