import ky from "ky"
import { basePath, headers } from "./api"

const getCourses = (token: string) => {
    return ky.get(`${basePath}/courses/all`, headers(token)).json<GetCoursesResponse>()
}

const createCourse = (token: string) => {
    return ky.post(`${basePath}/courses`, { ...headers(token) }).json()
}

export {
    getCourses,
    createCourse
}