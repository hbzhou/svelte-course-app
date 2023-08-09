import ky from "ky"
import { basePath } from "./api"

const getCourses = (token: string) => {
    return ky.get(`${basePath}/courses/all`, { headers: { authorization: token } }).json<GetAllCoursesResponse>()
}

const createCourse = (token: string) => {
    return ky.post(`${basePath}/courses`, { headers: { authorization: token } }).json()
}

export {
    getCourses,
    createCourse
}