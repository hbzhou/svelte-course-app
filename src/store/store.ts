import { derived, readable, writable } from "svelte/store";
import { mockedAuthorsList, mockedCoursesList } from "../constant";


export const courseList = writable(mockedCoursesList)

export const courses = derived(courseList, ($courseList) => $courseList.map((course) => {
    const authorNames = course.authors?.map((authorId) => {
        const author = mockedAuthorsList.find((author) => author.id == authorId);
        return author?.name;
    }) as string[] | undefined
    return {
        ...course,
        authors: authorNames
    }
}))

export const authors = readable(mockedAuthorsList)