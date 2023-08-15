import ky from "ky"
import { headers } from "./api"

const getAuthors = (token: string) => {
    return ky.get(`/api/authors/all`, headers(token)).json<GetAuthorsResponse>()
}

const createAuthor = (author: Partial<Author>, token: string) => {
    return ky.post(`/api/authors/add`, { ...headers(token), json: author }).json<CreateAuthorResponse>()
}

const updateAuthor = (author: Author, token: string) => {
    return ky.put(`/api/authors/${author.id}`, { ...headers(token), json: author }).json<UpdateAuthorResponse>();
}

const deleteAuthor = (id: string, token: string) => {
    return ky.delete(`/api/authors/${id}`, headers(token)).json<void>();
}

export {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}