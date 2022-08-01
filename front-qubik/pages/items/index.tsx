import Head from "next/head";

import { SearchResult } from "@components/screens/SearchResult";
import { BadRequest } from "components/screens/httpScreens/400";
import { NotFound } from "components/screens/httpScreens/404";
import { ServerError } from "components/screens/httpScreens/500";
import { getSearch } from "http/services/httpItems";

interface ItemsProps {
    response: {
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
    search: string;
}

export async function getServerSideProps({
    query,
}: {
    query: { search: string };
}) {
    const { search } = query;

    const httpStatus = [404, 400, 500];

    const { response } = await getSearch(
        process.env.BASE_URL,
        `/items?q=${search}`
    );

    return {
        props: {
            response: httpStatus.includes(
                response.status ? response.status : response
            )
                ? response.data
                : response,
            search,
        }, // will be passed to the page component as props
    };
}

const Items = ({ response, search }: ItemsProps) => {
    const httpComponents = {
        400: <BadRequest />,
        404: <NotFound />,
        500: <ServerError />,
    };

    return response.status == 200 ? (
        <>
            <Head>
                <title>Mercadolibre - {String(search)}</title>
                <meta name="description" content="Resultado busqueda" />
            </Head>
            <SearchResult result={response} />
        </>
    ) : (
        httpComponents[response.status as keyof typeof httpComponents]
    );
};

export default Items;
