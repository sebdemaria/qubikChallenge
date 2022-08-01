import axios from "axios"

const numberOfLimitResults = 4

type ItemResult = (id: string) => Promise<
    | {
          status: number
          item?: undefined
          description?: undefined
          category?: undefined
      }
    | {
          item: {
              data: {
                  id: string
                  title: string
                  thumbnail: string
                  condition: string
                  shipping: { free_shipping: boolean }
                  sold_quantity: number
                  price: number
                  currency_id: string
              }
          }
          description: {
              data: {
                  plain_text: string
              }
          }
          category: {
              data: {
                  name: string
              }
          }
          status?: undefined | number
      }
>

const getMeliApi = async (req: string) => {
    // clean req search query
    if (req == '""') {
        return {
            status: 400,
        }
    }

    const query: string = req.replace(/[_()-\s]/g, "%20")

    const resp: any = await axios.get<any>(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${numberOfLimitResults}`
    )

    return resp
}

const getMeliApiId: ItemResult = async (id: string) => {
    if (id == '""') {
        return {
            status: 400,
        }
    }

    const item = await axios.get(`https://api.mercadolibre.com/items/${id}`)

    const description = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`
    )

    const category = await axios.get(
        `https://api.mercadolibre.com/categories/${item.data.category_id}`
    )

    return { item, description, category }
}

//Exporto la ruta
export { getMeliApi, getMeliApiId }
