<script lang="ts">
	import { goto } from '$app/navigation';
	import { fail } from '@sveltejs/kit';
	import { createCourse } from '../../../api/course.api';
	import { authToken, courseList } from '../../../store/store';
	import CourseComponent from '$lib/components/course/Course.svelte';

	let course: Partial<Course> = { authors: [] };

	const title = 'Create Course';
	const handleSubmit = async () => {
		createCourse({ ...course, creationDate: new Date().toISOString() }, $authToken)
			.then((resp) => {
				if (resp.successful) {
					courseList.update((courses) => [...courses, resp.result]);
					goto('/courses');
				}
			})
			.catch((e) => fail(500, e));
	};
</script>

<div class="border-solid border-2 border-indigo-500 m-4">
	<CourseComponent {title} {handleSubmit} {course} />
</div>
