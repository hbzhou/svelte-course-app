import ky from "ky"

const basePath = "http://localhost:4000"

export const login = (loginRequest: LoginRequest) => {
    return ky.post(`${basePath}/login`, { json: loginRequest }).json<LoginResponse>()
}

export const logout = (token: string) => {
    ky.delete(`${basePath}/logout`, { headers: { authorization: token } }).json()
}