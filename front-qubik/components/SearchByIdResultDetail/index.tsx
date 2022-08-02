import styles from "styles/componentStyles/Breadcrumb.module.scss";
import SearchByIdResultDetailDumb from "./SearchByIdResultDetailDumb";

interface SearchByIdResultDetailProps {
    result: {
        status: number;
        statusText: string;
        author: {
            name: string;
            lastname: string;
        };
        item: {
            id: string;
            title: string;
            price: { currency: string; amount: number };
            picture: string;
            condition: string;
            free_shipping: boolean;
            sold_quantity: number;
            description: string;
            category: string;
        };
    };
}

const soldItemsSwitch = (soldItems: number): string | undefined => {
    switch (soldItems) {
        case 0:
            return;
        case 1:
            return " - " + soldItems + " vendido";
        default:
            return " - " + soldItems + " vendidos";
    }
};

const SearchByIdResultDetail = ({
    result,
}: SearchByIdResultDetailProps): JSX.Element => {
    return (
        <section className="container">
            <div className={styles.breadcrumb}>{result.item.category}</div>
            <SearchByIdResultDetailDumb
                result={result}
                soldItemsSwitch={soldItemsSwitch}
            />
        </section>
    );
};

export default SearchByIdResultDetail;
