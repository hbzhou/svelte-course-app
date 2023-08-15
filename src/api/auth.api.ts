import ky from "ky"


const login = (loginRequest: LoginRequest) => {
    return ky.post(`/api/login`, { json: loginRequest }).json<LoginResponse>()
}

const logout = (token: string): Promise<void> => {
    return ky.delete(`/api/logout`, { headers: { authorization: token } }).json()
}

const register = (registerRequest: RegisterRequest) => {
    return ky.post(`/api/register`, { json: registerRequest }).json<RegisterResponse>();
}

export default {
    login,
    logout,
    register
}