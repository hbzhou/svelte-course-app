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

declare type RegisterRequest = {
    name: string;
    email: string;
    password: string;
}

declare type RegisterResponse = {
    successful: boolean,
    result: string
}

declare type GetAllCoursesResponse = {
    successful: boolean,
    result: Array<Course>
}