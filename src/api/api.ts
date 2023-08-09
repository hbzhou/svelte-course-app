export const basePath = "http://localhost:4000"
export const headers = (authorization: string) => ({
    headers: {
        authorization
    }
})