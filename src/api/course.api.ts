import ky from "ky"
import { headers } from "./api"

const getCourses = (token: string) => {
    return ky.get(`/api/courses/all`, headers(token)).json<GetCoursesResponse>()
}

const createCourse = (course: Partial<Course>, token: string) => {
    return ky.post(`/api/courses/add`, { ...headers(token), json: course }).json<CreateCourseResponse>()
}

const updateCourse = (course: Course, token: string) => {
    return ky.put(`/api/courses/${course.id}`, { ...headers(token), json: course }).json<UpdateCourseResponse>()
}

export {
    getCourses,
    createCourse,
    updateCourse
}