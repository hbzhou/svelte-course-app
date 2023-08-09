import ky from "ky"
import { basePath, headers } from "./api"
const getAuthors = (token: string) => {
    return ky.get(`${basePath}/authors/all`, headers(token)).json<GetAuthorsResponse>()
}

export {
    getAuthors
}