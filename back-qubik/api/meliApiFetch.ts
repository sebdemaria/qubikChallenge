import axios, { AxiosResponse } from "axios"

const numberOfLimitResults = 4

type MeliResponseData = (req: string) => Promise<
    | {
          status: number
          data?: {
              site_id: "MLA"
              country_default_time_zone: Date
              query: string
              paging: []
              results: []
              sort: []
              available_sorts: []
              filters: []
              available_filters: []
          }
      }
    | {
          status: number
          data: {
              site_id: "MLA"
              country_default_time_zone: Date
              query: string
              paging: []
              results:
                  | [
                        {
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
                    ]
              sort: []
              available_sorts: []
              filters: [
                  {
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
              ]
              available_filters: []
          }
      }
>

type ItemResult = (id: string) => Promise<
    | {
          status: number
          item?: undefined
          description?: undefined
          category?: undefined
      }
    | {
          item: AxiosResponse<any>
          description: AxiosResponse<any>
          category: AxiosResponse<any>
          status: number
      }
>

const getMeliApi: MeliResponseData = async (req: string) => {
    // clean req search query
    if (req == '""') {
        return {
            status: 400,
        }
    }

    const query: string = req.replace(/[_()-\s]/g, "%20")

    const { status, data } = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${numberOfLimitResults}`
    )

    return { status, data }
}

const getMeliApiId: ItemResult = async (id: string) => {
    if (id == '""') {
        return {
            status: 400,
        }
    }
    const item = await axios.get(`https://api.mercadolibre.com/items/${id}`)

    const { status } = item

    const description = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`
    )

    const category = await axios.get(
        `https://api.mercadolibre.com/categories/${item.data.category_id}`
    )

    return { item, description, category, status }
}

//Exporto la ruta
export { getMeliApi, getMeliApiId }
