import ky from "ky"

const basePath = "http://localhost:4000"

const login = (loginRequest: LoginRequest) => {
    return ky.post(`${basePath}/login`, { json: loginRequest }).json<LoginResponse>()
}

const logout = (token: string): Promise<void> => {
    return ky.delete(`${basePath}/logout`, { headers: { authorization: token } }).json()
}

const register = (registerRequest: RegisterRequest) => {
    return ky.post(`${basePath}/register`, { json: registerRequest }).json<RegisterResponse>();
}

export default {
    login,
    logout,
    register
}