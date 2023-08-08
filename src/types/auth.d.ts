declare type AuthUser = {
    name?: string;
    email?: string;
    role?: string;
    isAuth?: boolean = false;
    token?: string;
}