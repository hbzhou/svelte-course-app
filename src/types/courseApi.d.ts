
declare type GetCoursesResponse = {
    successful: boolean,
    result: Array<Course>
}

declare type GetAuthorsResponse = {
    successful: boolean,
    result: Array<Author>
}

declare type CreateCourseResponse = {
    successful: boolean;
    result: Course;
}