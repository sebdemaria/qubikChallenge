import packageJson from "../package.json"

import { getMeliApi, getMeliApiId } from "../api/meliApiFetch"
import { handleHttpStatus } from "../middlewares/httpStatus"

//Create author name variables
const authorFullName = packageJson.author.split(" ")
const firstName: string = authorFullName[0]
const lastName: string = authorFullName[1]

type filters = {
    id: string
    name: string
    type: string
    values: [
        {
            id: string
            name: string
            path_from_root: [{ id: string; name: string }]
        }
    ]
}

type results = {
    price: number
    currency_id: string
    id: string
    title: string
    thumbnail: string
    condition: string
    shipping: {
        free_shipping: boolean
    }
    address: {
        state_name: string
        city_name: string
    }
}

//function for price section of endpoint
const splitPrice = (price: number, currency: string) => {
    const priceArray = price.toString().split(".")

    return {
        currency: currency,
        amount: priceArray[0],
        decimal: !priceArray[1] === undefined ? "00" : priceArray[1],
    }
}

// format response for endpoint
const formatEndPointSearch = (data: any) => {
    //get filter id
    const categoryFiltered = data.filters.find(
        (filter: filters) => filter.id === "category"
    )

    //get root categories group
    const categoriesRootArray = ((categoryFiltered) =>
        categoryFiltered
            ? categoryFiltered.values[0].path_from_root.map(
                  (value: filters) => value.name
              )
            : undefined)(categoryFiltered)

    const resultado = (({ results }) =>
        results?.map((value: results) => {
            const price = value.price

            const currency = value.currency_id

            return {
                id: value.id,
                title: value.title,
                price: splitPrice(price, currency),
                picture: value.thumbnail,
                condition: value.condition,
                free_shipping: value.shipping.free_shipping,
                city: value.address.state_name,
            }
        }))(data!)

    return {
        response: {
            status: 200,
            statusText: "OK",
            author: {
                name: firstName,
                lastname: lastName,
            },
            categories: categoriesRootArray,
            items: resultado,
        },
    }
}

const formatEndPointId = (item: any, description: any, category: any) => {
    // destructure item properties
    const {
        data: {
            id,
            title,
            thumbnail,
            condition,
            shipping,
            sold_quantity,
            price,
            currency_id,
        },
    } = item

    // destructure description text
    const {
        data: { plain_text },
    } = description

    // destructure category
    const { data: categoryResult } = category

    const productSpecs = {
        id: id,
        title: title,
        price: splitPrice(price, currency_id),
        picture: thumbnail,
        condition: condition,
        free_shipping: shipping.free_shipping,
        sold_quantity: sold_quantity,
        description: plain_text,
        category: categoryResult.name,
    }

    return {
        response: {
            status: 200,
            statusText: "OK",
            author: {
                name: firstName,
                lastname: lastName,
            },
            item: productSpecs,
        },
    }
}

// search endpoint
const endpointBusqueda = async (req: any, res: any) => {
    const query = JSON.stringify(req.query.q)

    try {
        //exe req
        const { status, data } = await getMeliApi(query)

        //check req status of req
        if (status == 200) {
            data!.results.length > 0
                ? handleHttpStatus(res, status, formatEndPointSearch(data))
                : handleHttpStatus(res, 404)
        } else {
            handleHttpStatus(res, status)
        }
    } catch (err: any) {
        handleHttpStatus(res, 500)
    }
}

// search by id endpoint
const endpointId = async (req: any, res: any) => {
    const id = req.params.id

    try {
        //response
        const { item, description, category, status } = await getMeliApiId(id)

        //check req status of req
        if (status == 200) {
            item?.data !== null
                ? handleHttpStatus(
                      res,
                      status,
                      formatEndPointId(item, description, category)
                  )
                : handleHttpStatus(res, 404)
        } else {
            handleHttpStatus(res, status)
        }
    } catch (err: any) {
        if (err.status == 404) {
            handleHttpStatus(res, 404)
        } else {
            handleHttpStatus(res, 500)
        }
    }
}

export { endpointBusqueda, endpointId }
