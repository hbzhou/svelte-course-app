import { fail } from "@sveltejs/kit"
import { writable } from "svelte/store"
import { getAuthors } from "../api/author.api"
import { authToken } from "./store"

const createAuthorStore = () => {
    authToken.subscribe(($authToken) => {
        if ($authToken) {
            getAuthors($authToken).then(resp => {
                if (resp.successful) {
                    set(resp.result)
                }
            }).catch(error => fail(500, error))

        }
    })
    const { subscribe, update, set } = writable<Author[]>([])

    return {
        subscribe,
        update,
        set,
    }
}

export const authorStore = createAuthorStore()