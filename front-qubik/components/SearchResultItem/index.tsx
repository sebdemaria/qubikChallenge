import { SearchResultItemDumb } from "components/SearchResultItem/SearchResultItemDumb";

interface SearchResultItemProps {
    item: {
        id: string;
        title: string;
        price: { currency: string; amount: number };
        picture: string;
        condition: string;
        free_shipping: string;
        city: string;
    };
}

interface Price {
    price: { currency: string; amount: number };
}

export const formatCurrency = ({ price }: Price): string => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: price.currency,
    }).format(price.amount);
};

const SearchResultItem = ({ item }: SearchResultItemProps): JSX.Element => {
    return <SearchResultItemDumb item={item} formatCurrency={formatCurrency} />;
};

export default SearchResultItem;
