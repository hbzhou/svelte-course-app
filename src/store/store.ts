import { writable, derived } from "svelte/store";

export const user = writable<AuthUser>({});
export const authToken = derived(user, ($user) => $user.token ?? "")
export const courseList = writable<Array<Course>>([]);
export const authorList = writable<Array<Author>>([]);