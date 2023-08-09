import ky from "ky"
import { basePath, headers } from "./api"
const getAuthors = (token: string) => {
    return ky.get(`${basePath}/authors/all`, headers(token)).json<GetAuthorsResponse>()
}

const createAuthor = (author: Partial<Author>, token: string) => {
    return ky.post(`${basePath}/authors/add`, { ...headers(token), json: author }).json<CreateAuthorResponse>()
}

const deleteAuthor = (id: string, token: string) => {
    return ky.delete(`${basePath}/authors/${id}`, headers(token)).json<void>();
}

export {
    getAuthors,
    createAuthor,
    deleteAuthor
}