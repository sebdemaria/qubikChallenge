import SearchByIdResultDetail from "components/SearchByIdResultDetail";

interface SearchByIdResultProps {
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

const SearchByIdResult = ({ result }: SearchByIdResultProps): JSX.Element => {
    return <SearchByIdResultDetail result={result} />;
};

export default SearchByIdResult;
