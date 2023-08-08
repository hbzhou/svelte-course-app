declare type LoginRequest = {
    email: string;
    password: string;
}

declare type LoginResponse = {
    successful: boolean;
    result: string;
    user: {
        name: string;
        email: string;
    };
}