import { writable } from "svelte/store";
import { mockedAuthorsList, mockedCoursesList } from "../constant";

export const courseList = writable(mockedCoursesList)
export const authorList = writable(mockedAuthorsList)