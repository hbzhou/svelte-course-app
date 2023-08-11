import { writable, derived } from "svelte/store";

export const user = writable<AuthUser>({});
export const authToken = derived(user, ($user) => $user.token ?? "")