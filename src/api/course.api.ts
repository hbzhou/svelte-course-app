import ky from "ky"
import { basePath, headers } from "./api"

const getCourses = (token: string) => {
    return ky.get(`${basePath}/courses/all`, headers(token)).json<GetCoursesResponse>()
}

const createCourse = (course: Partial<Course>, token: string) => {
    return ky.post(`${basePath}/courses/add`, { ...headers(token), json: course }).json<CreateCourseResponse>()
}

export {
    getCourses,
    createCourse
}