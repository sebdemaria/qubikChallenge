import Head from "next/head";

import SearchByIdResult from "components/screens/SearchByIdResult";

import { BadRequest } from "components/screens/httpScreens/400";
import { NotFound } from "components/screens/httpScreens/404";
import { ServerError } from "components/screens/httpScreens/500";
import { getSearch } from "http/services/httpItems";
import { GetServerSideProps } from "next";

interface ItemDetailProps {
    response: {
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query;

    const httpStatus = [404, 400, 500];

    const { response } = await getSearch(process.env.BASE_URL!, `/items/${id}`);

    return {
        props: {
            response: httpStatus.includes(
                response.status ? response.status : response
            )
                ? response.data
                : response,
        }, // will be passed to the page component as props
    };
};

const ItemDetail = ({ response }: ItemDetailProps): JSX.Element => {
    const httpComponents = {
        400: <BadRequest />,
        404: <NotFound />,
        500: <ServerError />,
    };

    return response.status == 200 ? (
        <>
            <Head>
                <title>Mercadolibre - {response.item.title}</title>
                <meta name="description" content="result busqueda" />
            </Head>
            <SearchByIdResult result={response} />
        </>
    ) : (
        httpComponents[response.status as keyof typeof httpComponents]
    );
};

export default ItemDetail;
