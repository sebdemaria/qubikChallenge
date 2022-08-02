import Button from "components/UI/Button";
import Image from "next/image";
import Link from "next/link";

import { formatCurrency } from "components/SearchResultItem";

import styles from "styles/screenStyles/SearchByIdResult.module.scss";

interface SearchByIdResultDetailDumbProps {
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
    soldItemsSwitch: (_sold_quantity: number) => string | undefined;
}

const SearchByIdResultDetailDumb = ({
    result,
    soldItemsSwitch,
}: SearchByIdResultDetailDumbProps): JSX.Element => {
    const { item } = result;

    return (
        <>
            <div className={"row " + styles.product}>
                <div className={styles.productDetails}>
                    <div
                        className={
                            "col-12 col-sm-12 col-md-6 col-lg-7 " + styles.foto
                        }
                    >
                        <Image
                            alt={item.title}
                            className={styles.item}
                            height={"680px"}
                            src={item.picture}
                            width={"680px"}
                        />
                    </div>

                    <div
                        className={
                            "col-12 col-sm-12 col-md-5 col-lg-4 ms-md-4 " +
                            styles.details
                        }
                    >
                        <div className="col-10">
                            <p className={styles.condition}>
                                {(item.condition === "new"
                                    ? "Nuevo"
                                    : "Usado") +
                                    soldItemsSwitch(item.sold_quantity)}
                            </p>

                            <p className={styles.title}>
                                <strong>{item.title}</strong>
                            </p>

                            {/** price parce to currency */}
                            <p className={styles.price}>
                                {formatCurrency(item)}
                            </p>
                        </div>

                        <Link href="/">
                            <Button
                                // onClick={() => setModalIsOpen(true)}
                                type="button"
                                className={
                                    "btn btn-primary col-12 col-lg-3" +
                                    styles.buy
                                }
                            >
                                Comprar
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className={"row " + styles.description}>
                    <h2 className={"col-12 " + styles.descriptionTitle}>
                        Descripción del producto
                    </h2>
                    <p
                        className={
                            "col-12 col-md-7 col-lg-7 " + styles.descriptionText
                        }
                    >
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SearchByIdResultDetailDumb;
