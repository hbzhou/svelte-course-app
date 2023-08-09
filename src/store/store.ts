import { writable, derived } from "svelte/store";
import { mockedAuthorsList, mockedCoursesList } from "../constant";

export const courseList = writable(mockedCoursesList);
export const authorList = writable(mockedAuthorsList);
export const user = writable<AuthUser>({});
export const authToken = derived(user, ($user) => $user.token ?? "")