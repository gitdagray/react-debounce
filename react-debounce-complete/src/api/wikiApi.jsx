import axios from "axios"

const wikiApi = axios.create({
    baseURL: "https://en.wikipedia.org/w/api.php"
})

export const getWikiSearchResults = async (searchTerm) => {
    const response = await wikiApi.request({
        params: {
            action: 'query',
            generator: 'search',
            gsrsearch: searchTerm,
            gsrlimit: 20,
            prop: 'pageimages|extracts',
            exchars: 100,
            exintro: true,
            explaintext: true,
            exlimit: 'max',
            format: 'json',
            origin: '*',
        }
    })

    return response.data
}