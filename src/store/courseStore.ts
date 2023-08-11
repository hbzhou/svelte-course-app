import { fail } from "@sveltejs/kit"
import { writable } from "svelte/store"
import { getCourses } from "../api/course.api"
import { authToken } from "./store"

const createCourseStore = () => {
    authToken.subscribe(($authToken) => {
        getCourses($authToken).then(resp => {
            if (resp.successful) {
                set(resp.result)
            }
        }).catch(error => fail(500, error))
    })
    const { subscribe, update, set } = writable<Course[]>([])

    return {
        subscribe,
        update,
        set,
    }
}

export const courseStore = createCourseStore()