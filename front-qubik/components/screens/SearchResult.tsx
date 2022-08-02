import SearchResultItem from "components/SearchResultItem";
import Breadcrumb from "../Breadcrum/Breadcrumb";

import styles from "styles/screenStyles/SearchResult.module.scss";

interface SearchResultProps {
    result: {
        status: number;
        statusText: string;
        author: {
            name: string;
            lastname: string;
        };
        categories: [];
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

export const SearchResult = ({ result }: SearchResultProps): JSX.Element => {
    return (
        <>
            <div className="container mb-5 px-0">
                <Breadcrumb result={result} />
                <div className={"px-3 " + styles.results}>
                    {result?.items.map((item, index) => (
                        //redirect to item
                        <SearchResultItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};
