import Image from "next/image";
import Link from "next/link";

import shipping from "public/assets/shipping.png";

import styles from "styles/componentStyles/SearchResultItem.module.scss";

interface SearchResultItemDumbProps {
    item: {
        id: string;
        title: string;
        price: { currency: string; amount: number };
        picture: string;
        condition: string;
        free_shipping: string;
        city: string;
    };
    formatCurrency: ({ price: _price }: Price) => string;
}

interface Price {
    price: { currency: string; amount: number };
}

export const SearchResultItemDumb = ({
    item,
    formatCurrency,
}: SearchResultItemDumbProps) => {
    return (
        <div className={styles.item}>
            <Link style={{ textDecoration: "none" }} href={`/items/${item.id}`}>
                <div className={"row " + styles.producto}>
                    {item.picture && (
                        <span
                            className={
                                "col-5 col-md-3 col-lg-2 " +
                                styles.thumbnailContainer
                            }
                        >
                            <Image
                                alt={item.title}
                                className={styles.thumbnail}
                                height={"180px"}
                                src={item.picture}
                                width={"180px"}
                            />
                        </span>
                    )}
                    <div
                        className={"col-5 col-md-6 col-lg-6 " + styles.detalles}
                    >
                        <div className={styles.precioYShipping}>
                            <span className={styles.precio}>
                                {formatCurrency(item)}
                            </span>
                            {item.free_shipping && (
                                <span className="ms-2 mt-1">
                                    <Image
                                        alt="free shippin available"
                                        height={"18px"}
                                        src={shipping}
                                        width={"18px"}
                                    />
                                </span>
                            )}
                        </div>

                        <div className={styles.articulo}>
                            <span>{item.title}</span>
                        </div>
                    </div>

                    <div className={"col-3 col-lg-2 " + styles.city}>
                        {item.city}
                    </div>
                </div>
            </Link>
        </div>
    );
};
